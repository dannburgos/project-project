import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  SCROLL_LOCK_END_EVENT,
  SCROLL_LOCK_START_EVENT
} from '@/hooks/use-smooth-scroll';
import { STORY_JUMP_EVENT, announceSection } from '@/lib/case-story/motion';
import { jumpPageTo, scrollPageTo } from '@/lib/page-scroll';
import type {
  StepJump,
  TimeRange
} from '@/lib/case-story/sonopizza-scrub.types';

// El escenario de Sonopizza sigue al scroll de la página: toda la línea de
// tiempo (cortes entre escenas, entradas de cada pieza, el abanico del
// producto, el área del sistema de diseño) se recorre con el scroll, hacia
// adelante y hacia atrás, sin pasos ni bloqueos. La página queda fija (pin)
// mientras dura el recorrido.
// La línea de tiempo no va pegada al scroll: lo sigue con inercia y con una
// velocidad máxima, como un objeto con peso. Un gesto fuerte no salta
// animaciones: las reproduce completas, más rápido, y frena suave al llegar.
// Con la rueda (o el trackpad), el primer giro de cada gesto ya lleva el
// escenario a la escena siguiente o a la anterior, sin esperar a que se suelte:
// la respuesta es inmediata y el resto de ese gesto no la empuja más allá. Un
// gesto nuevo en el mismo sentido encadena la escena que sigue; uno en sentido
// contrario la devuelve. El área del sistema de diseño se recorre como una
// página. Con otras entradas (barra de scroll, teclado, toque), al soltar, la
// página termina lo que el gesto empezó.

// Cuánto scroll vale un segundo de la línea de tiempo, en alturas de ventana
export const SCROLL_PER_SECOND = 0.17;
// Cuánto se queda quieta cada escena una vez armada, en segundos
export const HOLD_SECONDS = 0.4;

// Cómo sigue la línea de tiempo al scroll. En los cortes entre escenas: con
// ~0,15 s de retraso y cerca de su velocidad de diseño (cada corte dura lo
// que se diseñó, 1,5 a 3,4 s; a 2,8× se veía apurado; el tope de 1,6× solo
// deja acortar las escenas más largas y deshacer un poco más ligero). En el abanico,
// más ágil, como un carrusel. En los tramos que se leen como una página (el
// sistema de diseño): pegada al scroll y sin un tope que la frene
const FOLLOW = { lag: 0.15, maxSpeed: 1.6 };
const FOLLOW_FAST = { lag: 0.15, maxSpeed: 2.8 };
const FOLLOW_FREE = { lag: 0.2, maxSpeed: 24 };
const ARRIVED = 0.0005;

// Cuánto se espera sin scroll antes de terminar un corte a medias. Cuenta
// desde el último movimiento de verdad: la cola del scroll suave (que se
// arrastra de a 1 px durante más de un segundo) no lo aplaza
const IDLE_MS = 220;
const CREEP_PX = 2;
// Holgura (en segundos) para saber en qué escena empezó el gesto
const NEAR = 0.1;
// Desde cuánto scroll un gesto cuenta como "ir a la escena siguiente" (o a la
// anterior): una muesca de la rueda ya alcanza; un roce del trackpad no
const COMMIT_PX = 40;
// Rueda: sin giros durante este rato, el siguiente empieza un gesto nuevo
const GESTURE_GAP_MS = 180;
// Lo que tiene que girar un gesto para contar (un roce del trackpad no)
const INTENT_PX = 12;
// Arranca rápido y frena suave: la respuesta se ve desde el primer cuadro
const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3;
// Pareja: la línea de tiempo avanza a su velocidad de diseño y los cortes
// conservan sus propias curvas (desde el primer cuadro también hay movimiento)
const linear = (progress: number) => progress;
const easeInOutCubic = (progress: number) =>
  progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;

type ScrubNavigatorOptions = {
  root: HTMLElement;
  stage: HTMLElement;
  timeline: gsap.core.Timeline;
  // Por paso: cuándo empieza en la línea de tiempo, cuándo queda armado y a
  // qué sección pertenece; y primer paso de cada sección
  stepStart: readonly number[];
  stepRest: readonly number[];
  stepSection: readonly number[];
  sectionStep: readonly number[];
  // Dónde puede quedarse quieto el escenario
  rests: readonly TimeRange[];
  // Tramos que se recorren como una página (el área del sistema de diseño)
  freeRanges: readonly TimeRange[];
  // Tramos que se pasan más ágiles (las pantallas del abanico)
  fastRanges: readonly TimeRange[];
  // Cada vez que cambia el paso (para el color del mundo, la barra, etc.)
  onStep?: (step: number) => void;
  // Cómo se ve el salto desde el submenú o el contador. Devuelve la línea de
  // tiempo del efecto; sin ella, la página se desliza hasta la sección
  jumpTransition?: (jump: StepJump) => gsap.core.Timeline;
};

export function createScrubNavigator({
  root,
  stage,
  timeline,
  stepStart,
  stepRest,
  stepSection,
  sectionStep,
  rests,
  freeRanges,
  fastRanges,
  onStep,
  jumpTransition
}: ScrubNavigatorOptions) {
  const pxPerSecond = () => window.innerHeight * SCROLL_PER_SECOND;
  let current = -1;
  // Momento que pide el scroll y momento que se ve
  let target = 0;
  let shown = 0;
  let velocity = 0;
  let isFollowing = false;
  let isSnapping = false;
  let isJumping = false;
  let lastY = window.scrollY;
  // Dónde empezó el gesto actual (null: no hay gesto en curso)
  let gestureStartY: number | null = null;
  // A dónde va (y en qué sentido) el desplazamiento automático en curso
  let snapGoal = 0;
  let snapDirection = 0;
  // Rueda: cuándo llegó el último giro, cuánto lleva el gesto y si ya movió
  // el escenario
  let lastWheelTime = 0;
  let gestureDelta = 0;
  let hasIntent = false;
  let idleTimer = 0;
  let snapTimer = 0;
  let jumping: gsap.core.Timeline | null = null;

  const isFree = (time: number) =>
    freeRanges.some(({ start, end }) => time >= start && time <= end);
  const isFast = (time: number) =>
    fastRanges.some(
      ({ start, end }) => time >= start - NEAR && time <= end + NEAR
    );
  // Cuánto tarda la página en llevar el escenario de un momento a otro: un
  // corte, a su velocidad de diseño y parejo; el abanico, más ágil
  const travelTo = (from: number, to: number) => {
    const distance = Math.abs(to - from);
    if (isFast(to) && isFast(from))
      return {
        duration: gsap.utils.clamp(0.5, 1.2, distance * 0.45),
        easing: easeOutCubic
      };
    // Hacia adelante, a su velocidad (sin pasar de 3,4 s); hacia atrás, un
    // poco más ligero, como deshacer
    return {
      duration:
        to < from
          ? gsap.utils.clamp(0.8, 2.2, distance * 0.65)
          : gsap.utils.clamp(1.2, 3.4, distance),
      easing: linear
    };
  };
  // El tramo libre (el área del sistema de diseño) de la escena en la que está
  // ese momento, si lo tiene
  const freeRangeAround = (time: number) => {
    const rest = rests.find(
      ({ start, end }) => time >= start - NEAR && time <= end
    );
    if (!rest) return null;
    // Con holgura: los bordes de la lectura y del capítulo coinciden salvo
    // por redondeos de la línea de tiempo
    return (
      freeRanges.find(
        ({ start, end }) =>
          start >= rest.start - 0.001 && end <= rest.end + 0.001
      ) ?? null
    );
  };

  // El paso en que va el escenario: el último que ya empezó. Cambia en cuanto
  // empieza su entrada (igual al avanzar que al devolverse)
  const syncStep = (time: number) => {
    let step = 0;
    stepStart.forEach((start, index) => {
      if (start <= time + 0.001) step = index;
    });
    if (step === current) return;
    const previousSection = stepSection[current];
    current = step;
    if (previousSection !== stepSection[step])
      announceSection(root, stepSection[step]);
    onStep?.(step);
  };

  const render = () => {
    timeline.time(shown);
    syncStep(shown);
  };

  // Cada cuadro, la línea de tiempo se acerca a lo que pide el scroll como un
  // resorte sin rebote (amortiguado crítico): arranca y frena suave, sin
  // pasarse, y nunca más rápido que su velocidad máxima
  const follow = (_time: number, deltaMs: number) => {
    const seconds = Math.min(deltaMs, 64) / 1000;
    const { lag, maxSpeed } = isFree(shown)
      ? FOLLOW_FREE
      : isFast(shown) && isFast(target)
        ? FOLLOW_FAST
        : FOLLOW;
    const gap = target - shown;
    const wanted = gsap.utils.clamp(-maxSpeed, maxSpeed, gap / lag);
    velocity += (wanted - velocity) * (1 - Math.exp(-seconds / (lag / 4)));
    let next = shown + velocity * seconds;
    if ((target - next) * gap <= 0 || Math.abs(target - next) < ARRIVED) {
      next = target;
      velocity = 0;
    }
    shown = next;
    render();
    if (shown === target) stopFollowing();
  };
  const startFollowing = () => {
    if (isFollowing) return;
    isFollowing = true;
    gsap.ticker.add(follow);
  };
  function stopFollowing() {
    if (!isFollowing) return;
    isFollowing = false;
    gsap.ticker.remove(follow);
  }
  // Sin seguir: el escenario queda de una vez en el momento pedido
  const placeAt = (time: number) => {
    stopFollowing();
    target = time;
    shown = time;
    velocity = 0;
    render();
  };

  const trigger = ScrollTrigger.create({
    trigger: stage,
    start: 'top top',
    end: () => `+=${timeline.duration() * pxPerSecond()}`,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: self => {
      target = self.progress * timeline.duration();
      startFollowing();
    },
    onRefresh: self => {
      target = self.progress * timeline.duration();
      startFollowing();
    }
  });
  // Los cuadrados se ven mientras el caso ocupa la pantalla (también en su
  // último paso) y se esconden en lo que viene después
  const counterTrigger = ScrollTrigger.create({
    trigger: root,
    start: 'top top',
    end: 'bottom 50%',
    onToggle: self =>
      root.toggleAttribute('data-counter-hidden', !self.isActive)
  });

  const scrollOfTime = (time: number) => trigger.start + time * pxPerSecond();
  const timeOfScroll = (y: number) =>
    gsap.utils.clamp(
      0,
      timeline.duration(),
      (y - trigger.start) / pxPerSecond()
    );

  // Desliza la página hasta un momento de la línea de tiempo; la línea de
  // tiempo lo sigue con su inercia
  const scrollToTime = (
    time: number,
    duration = 1,
    easing: (progress: number) => number = easeOutCubic
  ) => {
    window.clearTimeout(idleTimer);
    idleTimer = 0;
    window.clearTimeout(snapTimer);
    snapDirection = Math.sign(time - timeOfScroll(window.scrollY));
    snapGoal = time;
    isSnapping = true;
    const finish = () => {
      isSnapping = false;
      gestureStartY = null;
      lastY = window.scrollY;
      window.clearTimeout(snapTimer);
    };
    scrollPageTo(scrollOfTime(time), { duration, easing, onComplete: finish });
    // Por si el desplazamiento se interrumpe antes de terminar
    snapTimer = window.setTimeout(finish, duration * 1000 + 300);
  };

  // Al soltar el scroll, el escenario termina lo que el gesto empezó: si fue
  // hacia adelante, llega a la escena siguiente (o a la siguiente pantalla
  // del abanico); si fue hacia atrás, a la anterior. Un gesto que ya dejó una
  // escena nueva armada, o el área del sistema de diseño, se respeta tal cual
  const settle = () => {
    const startY = gestureStartY;
    gestureStartY = null;
    if (isSnapping || isJumping || startY === null) return;
    const y = window.scrollY;
    if (y <= trigger.start + 1 || y >= trigger.end - 1) return;
    const time = timeOfScroll(y);
    if (isFree(time)) return;
    const isInside = ({ start, end }: TimeRange) =>
      time >= start && time <= end;
    const moved = y - startY;
    let goal: number | null = null;

    if (moved >= COMMIT_PX) {
      const startTime = timeOfScroll(startY);
      const ahead = rests.filter(({ start }) => start > startTime + NEAR);
      if (ahead.some(isInside)) return;
      goal =
        ahead.find(({ start }) => start >= time)?.start ??
        ahead.at(-1)?.end ??
        null;
    } else if (moved <= -COMMIT_PX) {
      const startTime = timeOfScroll(startY);
      const behind = rests.filter(({ end }) => end < startTime - NEAR);
      if (behind.some(isInside)) return;
      goal =
        [...behind].reverse().find(({ end }) => end <= time)?.end ??
        behind[0]?.start ??
        null;
    } else {
      // Un roce: si quedó a medias, vuelve al borde de escena más cercano
      if (rests.some(isInside)) return;
      let closest = Infinity;
      rests.forEach(range => {
        const nearest = Math.min(Math.max(time, range.start), range.end);
        if (Math.abs(time - nearest) < closest) {
          closest = Math.abs(time - nearest);
          goal = nearest;
        }
      });
    }

    if (goal === null) return;
    if (Math.abs(goal - time) < 0.01) return;
    const travel = travelTo(time, goal);
    scrollToTime(goal, travel.duration, travel.easing);
  };

  const handleScroll = () => {
    const y = window.scrollY;
    const moved = Math.abs(y - lastY);
    if (!isSnapping && !isJumping && gestureStartY === null && moved > 0)
      gestureStartY = lastY;
    lastY = y;
    if (isSnapping || isJumping) return;
    if (moved < CREEP_PX && idleTimer) return;
    window.clearTimeout(idleTimer);
    idleTimer = window.setTimeout(() => {
      idleTimer = 0;
      settle();
    }, IDLE_MS);
  };
  // La escena siguiente (sentido 1) o la anterior (sentido −1) desde un
  // momento: el comienzo del próximo lugar de reposo, o el final del anterior
  const neighborRest = (from: number, direction: number) => {
    if (direction > 0)
      return rests.find(({ start }) => start > from + NEAR)?.start ?? null;
    const previous = [...rests].reverse().find(({ end }) => end < from - NEAR);
    // Un pelo antes del final: justo en el borde ya empieza la escena siguiente
    return previous ? Math.max(previous.start, previous.end - 0.02) : null;
  };

  // Rueda o trackpad: el primer giro de un gesto (en cuanto suma INTENT_PX)
  // lleva el escenario a la escena vecina; el resto del gesto no lo empuja más.
  // Fuera del escenario, o recorriendo el área del sistema de diseño, la rueda
  // mueve la página como siempre
  const handleWheel = (event: WheelEvent) => {
    const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
    const now = performance.now();
    if (now - lastWheelTime > GESTURE_GAP_MS) {
      gestureDelta = 0;
      hasIntent = false;
    }
    lastWheelTime = now;
    if (!delta || isJumping) return;
    const direction = delta > 0 ? 1 : -1;
    // Cambiar de sentido a mitad de gesto cuenta como gesto nuevo
    if (gestureDelta !== 0 && Math.sign(gestureDelta) !== direction) {
      gestureDelta = 0;
      hasIntent = false;
    }

    const y = window.scrollY;
    if (y < trigger.start - 2 || y > trigger.end + 2) return;
    const time = timeOfScroll(y);
    const free = freeRangeAround(time);
    const isReadingArea =
      free !== null &&
      (direction > 0 ? time < free.end - 0.01 : time > free.start + 0.01);
    if (isReadingArea && !hasIntent) return;

    const swallow = () => {
      event.preventDefault();
      event.stopImmediatePropagation();
    };
    if (hasIntent) {
      swallow();
      return;
    }
    gestureDelta += delta;
    if (Math.abs(gestureDelta) < INTENT_PX) return;

    // Si ya va hacia una escena en este sentido, encadena la que sigue. Si
    // esa escena es un capítulo que se lee hacia abajo, el giro entra a leerlo
    // (como página) en vez de saltárselo
    const from = isSnapping && snapDirection === direction ? snapGoal : time;
    const fromFree = freeRangeAround(from);
    if (
      fromFree !== null &&
      (direction > 0
        ? from < fromFree.end - 0.01
        : from > fromFree.start + 0.01)
    ) {
      isSnapping = false;
      return;
    }
    const goal = neighborRest(from, direction);
    // Sin escena vecina (al final del recorrido), la página sigue sola
    if (goal === null) return;
    hasIntent = true;
    swallow();
    gestureStartY = null;
    // Si la escena está en su rato quieto, ese tramo se salta de una vez (en
    // él no se mueve nada): el corte hacia la vecina empieza en este cuadro
    let departure = time;
    if (!isSnapping) {
      // Con holgura: el scroll se redondea a píxeles y puede quedar un pelo
      // antes del comienzo del reposo
      const rest = rests.find(
        ({ start, end }) => time >= start - 0.05 && time <= end + 0.05
      );
      if (rest) departure = direction > 0 ? rest.end : rest.start;
      if (Math.abs(departure - time) > 0.001) {
        jumpPageTo(scrollOfTime(departure));
        placeAt(departure);
      }
    }
    const travel = travelTo(departure, goal);
    scrollToTime(goal, travel.duration, travel.easing);
  };

  // Cualquier otra entrada nueva cancela el acomodo: manda la persona
  const handleInput = () => {
    if (!isSnapping) return;
    isSnapping = false;
    gestureStartY = null;
    lastY = window.scrollY;
    window.clearTimeout(snapTimer);
  };

  // Salto desde el contador: directo a la sección, con la transición propia
  // del caso o, si no tiene, deslizando la página
  const jumpTo = (step: number) => {
    if (isJumping) return;
    const time = stepRest[step] ?? 0;
    const end = () => {
      isJumping = false;
      jumping = null;
      gestureStartY = null;
      lastY = window.scrollY;
      window.dispatchEvent(new Event(SCROLL_LOCK_END_EVENT));
    };
    isJumping = true;
    isSnapping = false;
    window.clearTimeout(idleTimer);
    idleTimer = 0;
    window.dispatchEvent(new Event(SCROLL_LOCK_START_EVENT));

    if (!jumpTransition) {
      isSnapping = false;
      scrollPageTo(scrollOfTime(time), {
        duration: 1.4,
        easing: easeInOutCubic,
        onComplete: end
      });
      return;
    }
    jumping = jumpTransition({
      section: stepSection[step] ?? 0,
      isForward: step > current,
      // Con la pantalla tapada, la página y el escenario quedan de una vez
      // en la sección nueva
      swap: () => {
        jumpPageTo(scrollOfTime(time));
        ScrollTrigger.update();
        placeAt(time);
      }
    });
    // Al final de su línea de tiempo (sin pisar el onComplete del caso)
    jumping.call(end);
  };

  const handleJump = (event: Event) => {
    const section = (event as CustomEvent<number>).detail;
    jumpTo(sectionStep[section] ?? 0);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  // En captura: decide antes que el scroll suave (Lenis), que escucha después
  window.addEventListener('wheel', handleWheel, {
    capture: true,
    passive: false
  });
  window.addEventListener('touchstart', handleInput, { passive: true });
  window.addEventListener('keydown', handleInput);
  window.addEventListener('pointerdown', handleInput);
  root.addEventListener(STORY_JUMP_EVENT, handleJump);
  // Al cargar, el escenario arranca donde está la página, sin recorrer nada
  placeAt(trigger.progress * timeline.duration());

  return {
    // Para que el abanico del producto pueda pedir una pantalla
    scrollToTime,
    teardown: () => {
      jumping?.kill();
      stopFollowing();
      window.clearTimeout(idleTimer);
      window.clearTimeout(snapTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel, { capture: true });
      window.removeEventListener('touchstart', handleInput);
      window.removeEventListener('keydown', handleInput);
      window.removeEventListener('pointerdown', handleInput);
      root.removeEventListener(STORY_JUMP_EVENT, handleJump);
      if (isJumping) window.dispatchEvent(new Event(SCROLL_LOCK_END_EVENT));
      trigger.kill();
      counterTrigger.kill();
      root.removeAttribute('data-counter-hidden');
    }
  };
}
