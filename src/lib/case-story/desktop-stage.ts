import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  SCROLL_LOCK_END_EVENT,
  SCROLL_LOCK_START_EVENT
} from '@/hooks/use-smooth-scroll';
import { SURFACE_CHANGE_EVENT } from '@/hooks/use-surface-under';
import {
  CLIP_HIDDEN_LEFT,
  CLIP_HIDDEN_RIGHT,
  CLIP_SHOWN,
  LINE_BLOCK,
  STORY_CURVE,
  STORY_JUMP_EVENT,
  addBlockReveal,
  announceSection,
  axisTargets,
  queryAll,
  watchCounterVisibility
} from '@/lib/case-story/motion';
import { buildRain } from '@/lib/case-story/rain';

// Escenario del recorrido en computador: una sola pantalla fija con un
// esqueleto de líneas (arriba, márgenes y el eje que se desliza). Las capas de
// contenido entran y salen encima. Un gesto de scroll = un paso: el módulo
// siguiente entra solo, con impulso y frenado, y mientras corre (o mientras
// sigue la inercia del trackpad) no cuenta otro paso.

// Paso → sección a la que pertenece (para el contador)
const STEP_SECTION = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6];
// Primer paso de cada sección (para saltar desde el contador)
const SECTION_STEP = [0, 2, 5, 7, 9, 11, 12];
const GREEN_STEP = 9;
const FLOWS_STEP = 11;
const RAIN_STEP = 12;

const PARK = 48;
const GESTURE_GAP_MS = 220;
// La lluvia avanza por gestos: el primero la deja a la mitad (las pantallas
// a medio subir) y el segundo la termina y lleva al prototipo
const RAIN_HALF = 0.5;
const RAIN_GESTURE_S = 1.3;
// En el segundo gesto, el prototipo empieza a entrar cuando las últimas
// pantallas todavía están saliendo
const PROTOTYPE_OVERLAP_S = 0;
// El último tramo de la lluvia va más pausado, para que las pantallas sigan a
// la vista mientras entra el prototipo
const RAIN_EXIT_S = 1.8;
const LINE_ON_GREEN = 'rgba(162, 201, 108, 0.3)';
const AXIS_ON_GREEN = '#a2c96c';

const NEXT_KEYS = new Set(['ArrowDown', 'PageDown', ' ']);
const PREVIOUS_KEYS = new Set(['ArrowUp', 'PageUp']);

export function setupDesktopStage(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('[data-stage]');
  if (!stage) return () => {};

  const one = (selector: string) => root.querySelector<HTMLElement>(selector);
  const all = (selector: string) => queryAll(root, selector);
  const view = (name: string) => `[data-view="${name}"]`;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const parkRight = width - PARK;
  let axisX = PARK;

  const tl = gsap.timeline({
    paused: true,
    defaults: { ease: STORY_CURVE, duration: 1.5 }
  });
  const labels: string[] = [];
  const mark = () => {
    const label = `step-${labels.length}`;
    labels.push(label);
    tl.addLabel(label);
  };
  const show = (target: gsap.TweenTarget, position?: gsap.Position) =>
    tl.set(target, { autoAlpha: 1 }, position);
  const hide = (target: gsap.TweenTarget, position?: gsap.Position) =>
    tl.set(target, { autoAlpha: 0 }, position);
  // Lo anterior se va completo antes de que entre lo nuevo
  const leave = (target: gsap.TweenTarget) =>
    tl.to(target, { autoAlpha: 0, y: -80, duration: 0.8, ease: 'power3.in' });

  // El eje se desliza con su cuadrito sobre la línea de arriba
  const moveAxis = (x: number, position: gsap.Position, duration = 1.4) => {
    tl.to('[data-axis]', { x, duration }, position);
    axisX = x;
  };

  // Vista con eje central: la imagen crece desde el eje hacia su lado y el
  // texto se destapa desde el eje hacia el otro
  const axisIn = (
    name: string,
    {
      out,
      side = 'left',
      slow = 1
    }: { out?: string; side?: 'left' | 'right'; slow?: number } = {}
  ) => {
    if (out) leave(view(out));
    show(view(name), out ? '>0.05' : 0);
    moveAxis(width / 2, '<', 1.3 * slow);
    tl.fromTo(
      `${view(name)} [data-axis-image]`,
      { clipPath: side === 'left' ? CLIP_HIDDEN_LEFT : CLIP_HIDDEN_RIGHT },
      { clipPath: CLIP_SHOWN, duration: 1.8 * slow },
      '-=0.6'
    );
    const text = one(`${view(name)} [data-axis-text]`);
    if (text) {
      tl.fromTo(
        axisTargets(text),
        { clipPath: side === 'left' ? CLIP_HIDDEN_RIGHT : CLIP_HIDDEN_LEFT },
        { clipPath: CLIP_SHOWN, duration: 1.6 * slow, stagger: 0.14 * slow },
        '<0.2'
      );
    }
  };
  // Barrido: la línea cruza la pantalla y descubre la capa nueva
  const sweep = (name: string, previous: string) => {
    const isFromRight = axisX > width / 2;
    tl.set(
      view(name),
      {
        autoAlpha: 1,
        clipPath: isFromRight ? CLIP_HIDDEN_LEFT : CLIP_HIDDEN_RIGHT
      },
      '+=0.01'
    );
    tl.to(view(name), { clipPath: CLIP_SHOWN, duration: 1.7 });
    moveAxis(isFromRight ? PARK : parkRight, '<', 1.7);
    hide(view(previous));
  };
  // Rodado horizontal: el módulo rueda a la izquierda y el siguiente llega
  // rodando desde la derecha, con sus piezas en capas. Si el eje está entre
  // los márgenes (dividiendo el módulo), se va pegado a él a la misma
  // velocidad: así nunca cruza por encima del texto. Ya fuera de pantalla,
  // reaparece con un fundido en su nuevo lugar.
  const roll = (out: string, next: string, parts: string, axisTo?: number) => {
    const isAxisInside = axisX > PARK + 1 && axisX < parkRight - 1;
    tl.addLabel(`${out}-roll`);
    tl.to(view(out), { x: -width, duration: 1.8 });
    show(view(next), '<');
    tl.fromTo(view(next), { x: width }, { x: 0, duration: 1.8 }, '<');
    // Cada parte se busca solo dentro del módulo que llega
    const pieces = parts
      ? all(
          parts
            .split(',')
            .map(part => `${view(next)} ${part.trim()}`)
            .join(', ')
        )
      : [];
    if (pieces.length) {
      tl.fromTo(
        pieces,
        { x: 160 },
        { x: 0, duration: 1.9, stagger: 0.08 },
        '<0.05'
      );
    }
    if (isAxisInside) {
      const target = axisTo ?? PARK;
      tl.to('[data-axis]', { x: axisX - width, duration: 1.8 }, `${out}-roll`);
      tl.set('[data-axis]', { autoAlpha: 0, x: target }, `${out}-roll+=1.8`);
      tl.to('[data-axis]', { autoAlpha: 1, duration: 0.5 }, '>');
      axisX = target;
    } else if (axisTo !== undefined) {
      moveAxis(axisTo, `${out}-roll`, 1.8);
    }
    hide(view(out));
  };

  // Estados iniciales
  gsap.set('[data-view], [data-green-run]', { autoAlpha: 0 });
  gsap.set('[data-axis]', { x: PARK });
  gsap.set(`${view('user')} [data-part="findings"] > *`, { autoAlpha: 0 });

  // 0 · Introducción, la más pausada
  axisIn('intro', { slow: 1.3 });
  mark();
  // 1 · Respiro: la introducción rueda a la izquierda y el respiro llega
  // rodando desde la derecha (la imagen no se agranda)
  roll('intro', 'respite', '[data-respite-image]', PARK);
  mark();
  // 2 · Problema: la línea aparece en el borde derecho y cruza la pantalla
  // descubriendo la frase, que llega cubierta y se destapa; luego la brecha
  tl.set('[data-axis]', { autoAlpha: 0, x: parkRight }, '+=0.01').to(
    '[data-axis]',
    { autoAlpha: 1, duration: 0.3 }
  );
  axisX = parkRight;
  sweep('problem', 'respite');
  addBlockReveal(tl, one(`${view('problem')} [data-reveal]`), '-=0.2');
  tl.fromTo(
    `${view('problem')} [data-part="gap-side"]`,
    { y: 120, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.18, duration: 1.6 },
    '-=0.6'
  ).fromTo(
    `${view('problem')} [data-part="gap-line"]`,
    { scaleX: 0 },
    { scaleX: 1, duration: 1 },
    '-=1.1'
  );
  mark();
  // 3 · Rueda hacia las tres fricciones
  // El módulo llega rodando; luego una línea recorre las tres fricciones como
  // un camino y sigue hasta el borde. Al pasar por cada parada, su cuadrito
  // aparece con un impulso y su contenido sube, una fricción tras otra.
  roll('problem', 'frictions', '');
  tl.addLabel('frictions-path', '-=0.5');
  tl.fromTo(
    `${view('frictions')} [data-part="path"]`,
    { scaleX: 0 },
    { scaleX: 1, duration: 2.6, ease: 'power2.inOut' },
    'frictions-path'
  );
  all(`${view('frictions')} [data-part="column"]`).forEach((column, index) => {
    const at = `frictions-path+=${0.25 + index * 0.6}`;
    tl.fromTo(
      column.querySelector('[data-part="node"]'),
      { scale: 0 },
      { scale: 1, duration: 0.7, ease: 'back.out(3)' },
      at
    ).fromTo(
      queryAll(column, '[data-part="step-part"]'),
      { y: 60, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.2, stagger: 0.08 },
      at
    );
  });
  // Laura escribe: en cada parada aparece "escribiendo…" y luego su mensaje
  all(`${view('frictions')} [data-part="chat-item"]`).forEach((item, index) => {
    const at = `frictions-path+=${0.45 + index * 0.6}`;
    const typing = item.querySelector('[data-part="typing"]');
    const bubble = item.querySelector('[data-part="bubble"]');
    tl.fromTo(typing, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, at)
      .to(typing, { autoAlpha: 0, duration: 0.15 }, `${at}+=0.7`)
      .fromTo(
        bubble,
        { autoAlpha: 0, y: 12, scale: 0.96, transformOrigin: 'left top' },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' },
        `${at}+=0.8`
      );
  });

  mark();
  // 4 · El reto con los referentes
  leave(view('frictions'));
  show(view('challenge'), '>0.05');
  addBlockReveal(tl, one(`${view('challenge')} [data-reveal]`), '>0.2');
  tl.fromTo(
    `${view('challenge')} [data-part="reference"]`,
    { y: 200, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.12, duration: 1.6 },
    '-=1'
  );
  mark();
  // 5 · Usuario: información a la izquierda, imagen a la derecha
  axisIn('user', { out: 'challenge', side: 'right', slow: 1.15 });
  mark();
  // 6 · Los hallazgos reemplazan a los rasgos
  tl.to(`${view('user')} [data-part="traits"] > *`, {
    y: -40,
    autoAlpha: 0,
    stagger: 0.06,
    duration: 0.7,
    ease: 'power3.in'
  }).fromTo(
    `${view('user')} [data-part="findings"] > *`,
    { y: 100, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.12, duration: 1.6 },
    '>0.05'
  );
  mark();
  // 7 · Rueda directo hacia el benchmark
  roll('user', 'benchmark', '[data-part="column"]', PARK);
  addBlockReveal(tl, one(`${view('benchmark')} [data-reveal]`), '-=0.6');
  mark();
  // 8 · Hallazgos del benchmark
  leave(view('benchmark'));
  show(view('benchmark-findings'), '>0.05');
  tl.fromTo(
    `${view('benchmark-findings')} [data-part="label"]`,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.8 },
    '<'
  ).fromTo(
    `${view('benchmark-findings')} [data-part="finding"]`,
    { y: 160, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, stagger: 0.16, duration: 1.6 },
    '<0.1'
  );
  addBlockReveal(
    tl,
    one(`${view('benchmark-findings')} [data-reveal]`),
    '-=0.8'
  );
  mark();
  // 9 · El verde sube rodando desde abajo y empuja todo hacia arriba
  tl.set('[data-green-run]', { autoAlpha: 1, yPercent: 100 }, '+=0.01');
  tl.to('[data-green-run]', { yPercent: 0, duration: 2 })
    .to(view('benchmark-findings'), { y: -height, duration: 2 }, '<')
    .to(
      '[data-skeleton-line]',
      { backgroundColor: LINE_ON_GREEN, duration: 1.2 },
      '<0.7'
    )
    .to('[data-axis]', { backgroundColor: AXIS_ON_GREEN, duration: 1.2 }, '<');
  hide(view('benchmark-findings'));
  show(view('concept'), '-=0.3');
  tl.fromTo(
    `${view('concept')} [data-part="idea"]`,
    { x: width * 0.5, yPercent: -50 },
    { x: 0, yPercent: -50, duration: 2 },
    '<'
  ).fromTo(
    `${view('concept')} [data-part="plate"]`,
    { clipPath: CLIP_HIDDEN_RIGHT },
    { clipPath: CLIP_SHOWN, duration: 1.6 },
    '<0.1'
  );
  const idea = one(`${view('concept')} [data-part="idea"]`);
  if (idea) {
    tl.fromTo(
      axisTargets(idea),
      { clipPath: CLIP_HIDDEN_RIGHT },
      { clipPath: CLIP_SHOWN, duration: 1.7, stagger: 0.14 },
      '<0.2'
    );
  }
  tl.fromTo(
    `${view('concept')} [data-part="logo"]`,
    { y: 120, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1.6 },
    '-=1.2'
  );
  mark();
  // 10 · Rueda hacia ¿Qué hace Planti? y la navegación
  roll(
    'concept',
    'capabilities',
    '[data-part="head"], [data-part="column"], [data-part="navigation"]'
  );
  mark();
  // 11 · Flujos
  axisIn('flows', { out: 'capabilities' });
  mark();
  // 12 · Lluvia: la mueve el scroll, desde el primer gesto
  show(view('rain'), '+=0.01');
  mark();
  // 13 · Prototipo interactivo
  show(view('prototype'), '+=0.05');
  tl.fromTo(
    `${view('prototype')} [data-part="phone"]`,
    { scale: 1.12, autoAlpha: 0 },
    { scale: 1, autoAlpha: 1, duration: 1.8 },
    '<'
  ).fromTo(
    `${view('prototype')} [data-part="copy"] > *`,
    { autoAlpha: 0, y: 20 },
    { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.15 },
    '<0.4'
  );
  mark();

  // Lluvia: los flujos salen empujados hacia arriba en capas (sin
  // desvanecerse) mientras suben las pantallas
  const rain = buildRain(root, { width, height, scale: 1 });
  const pushed = { ease: 'none', immediateRender: false };
  rain
    .fromTo(
      `${view('flows')} [data-axis-image]`,
      { y: 0 },
      { y: -height * 1.05, duration: 0.42, ...pushed },
      0
    )
    .fromTo(
      `${view('flows')} [data-ax-lines]`,
      { y: 0 },
      { y: -height * 1.4, duration: 0.3, ...pushed },
      0
    )
    .fromTo(
      `${view('flows')} [data-part="row"]`,
      { y: 0 },
      { y: -height * 1.2, duration: 0.34, stagger: 0.03, ...pushed },
      0
    )
    .fromTo(
      '[data-axis]',
      { x: width / 2 },
      { x: PARK, duration: 0.3, ...pushed },
      0
    );
  let rainProgress = 0;
  const setRain = (progress: number, isSmooth = true) => {
    rainProgress = gsap.utils.clamp(0, 1, progress);
    if (isSmooth) {
      gsap.to(rain, {
        progress: rainProgress,
        duration: 1,
        ease: 'power3.out',
        overwrite: true
      });
    } else {
      gsap.killTweensOf(rain);
      rain.progress(rainProgress);
    }
  };
  // Un gesto en la lluvia: la lleva con impulso hasta la mitad o hasta un
  // extremo; mientras se mueve, el resto del gesto no cuenta
  const glideRain = (progress: number, onComplete?: () => void) => {
    rainProgress = progress;
    isBusy = true;
    gsap.to(rain, {
      progress,
      duration: RAIN_GESTURE_S,
      ease: 'power3.out',
      overwrite: true,
      onComplete: () => {
        isBusy = false;
        onComplete?.();
      }
    });
  };

  // ---- Un gesto = un paso ----
  const stepCount = labels.length;
  const stepLength = window.innerHeight * 0.6;
  let current = -1;
  let isBusy = false;
  let isLocked = false;
  let lastEventTime = 0;
  let playing: gsap.core.Tween | null = null;
  let prototypeEntry: gsap.core.Tween | null = null;

  const lock = () => {
    if (isLocked) return;
    isLocked = true;
    window.dispatchEvent(new Event(SCROLL_LOCK_START_EVENT));
  };
  const unlock = () => {
    if (!isLocked) return;
    isLocked = false;
    window.dispatchEvent(new Event(SCROLL_LOCK_END_EVENT));
  };
  const setWorld = (step: number) => {
    root.dataset.world = step >= GREEN_STEP ? 'green' : 'cream';
  };

  const trigger = ScrollTrigger.create({
    trigger: stage,
    start: 'top top',
    end: `+=${stepLength * (stepCount - 1)}`,
    pin: true,
    onEnterBack: () => {
      // Si el salto lo hizo el contador, el escenario ya tiene el control
      if (isLocked) return;
      // Volviendo desde abajo: el escenario retoma en su último paso
      lock();
      setRain(1, false);
      current = stepCount - 1;
      tl.seek(labels[current]);
      announceSection(root, STEP_SECTION[current]);
      setWorld(current);
    }
  });
  watchCounterVisibility(root);
  // La página acompaña al escenario, para que al terminar siga hacia el cierre
  const syncScroll = (step: number) => {
    window.scrollTo(0, trigger.start + stepLength * step);
  };

  const titleBlocks = all(LINE_BLOCK);
  const notifySurface = () =>
    window.dispatchEvent(new Event(SURFACE_CHANGE_EVENT));

  const goTo = (step: number) => {
    const from = current;
    current = step;
    playing?.kill();
    announceSection(root, STEP_SECTION[step]);
    setWorld(step);
    syncScroll(step);
    // Entre los flujos y la lluvia no hay transición: el scroll sigue
    if (
      Math.min(from, step) === FLOWS_STEP &&
      Math.max(from, step) === RAIN_STEP
    ) {
      tl.seek(labels[step]);
      isBusy = false;
      return;
    }
    // Si la lluvia todavía está terminando de subir, se deja que termine
    if (step > RAIN_STEP && !gsap.isTweening(rain)) setRain(1, false);
    if (step < RAIN_STEP) setRain(0, false);
    isBusy = true;
    const distance =
      from < 0
        ? tl.labels[labels[step]]
        : Math.abs(tl.labels[labels[step]] - tl.time());
    // Al volver se rebobina el movimiento (lo que entró por la derecha sale
    // por la derecha), más rápido y sin bloques: los títulos nunca se
    // vuelven a tapar; el bloque solo aparece al avanzar
    const isGoingBack = from > step;
    const keepTitlesUncovered = () => {
      if (isGoingBack) gsap.set(titleBlocks, { scaleX: 0 });
    };
    let frame = 0;
    playing = tl.tweenTo(labels[step], {
      duration: isGoingBack
        ? gsap.utils.clamp(0.9, 1.4, distance * 0.5)
        : gsap.utils.clamp(1.4, 3.2, distance * 0.9),
      ease: 'none',
      // El logo y el menú del sitio revisan el fondo mientras cambian las
      // capas (la página no se mueve)
      onUpdate: () => {
        keepTitlesUncovered();
        frame += 1;
        if (frame % 8 === 0) notifySurface();
      },
      onComplete: () => {
        keepTitlesUncovered();
        isBusy = false;
        notifySurface();
      }
    });
  };

  // direction: 1 baja, -1 sube. Devuelve true si el escenario usa el gesto.
  const consume = (direction: 1 | -1) => {
    if (!isLocked) return false;
    const now = performance.now();
    const isNewGesture = now - lastEventTime > GESTURE_GAP_MS;
    lastEventTime = now;
    if (isBusy) return true;
    if (!isNewGesture) return true;
    // Desde los flujos, el primer gesto sube las pantallas hasta la mitad
    if (current === FLOWS_STEP && direction > 0) {
      goTo(RAIN_STEP);
      glideRain(RAIN_HALF);
      return true;
    }
    // Desde el prototipo, al subir se vuelve directo a la mitad de la lluvia
    if (current === RAIN_STEP + 1 && direction < 0) {
      goTo(RAIN_STEP);
      glideRain(RAIN_HALF);
      return true;
    }
    // En la lluvia, cada gesto es medio tramo: de la mitad sigue al
    // prototipo (o vuelve a los flujos al subir)
    if (current === RAIN_STEP) {
      const isPastHalf = rainProgress > RAIN_HALF + 0.01;
      const isBeforeHalf = rainProgress < RAIN_HALF - 0.01;
      if (direction > 0 && isBeforeHalf) glideRain(RAIN_HALF);
      else if (direction > 0) {
        // Las pantallas terminan de subir y, casi enseguida, entran el
        // celular y el texto del prototipo, sin un tramo vacío en medio
        rainProgress = 1;
        isBusy = true;
        gsap.to(rain, {
          progress: 1,
          duration: RAIN_EXIT_S,
          ease: 'power1.inOut',
          overwrite: true
        });
        prototypeEntry?.kill();
        prototypeEntry = gsap.delayedCall(PROTOTYPE_OVERLAP_S, () =>
          goTo(RAIN_STEP + 1)
        );
      } else if (isPastHalf) glideRain(RAIN_HALF);
      else glideRain(0, () => goTo(FLOWS_STEP));
      return true;
    }
    const next = current + direction;
    if (next < 0) return true;
    if (next > stepCount - 1) {
      // Fin del escenario: la página sigue hacia lo que viene después
      unlock();
      return false;
    }
    goTo(next);
    return true;
  };

  const handleWheel = (event: WheelEvent) => {
    const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
    if (!delta) return;
    if (consume(delta > 0 ? 1 : -1)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };
  let lastTouchY: number | null = null;
  const handleTouchStart = (event: TouchEvent) => {
    lastTouchY = event.touches[0]?.clientY ?? null;
  };
  const handleTouchMove = (event: TouchEvent) => {
    const y = event.touches[0]?.clientY;
    if (y === undefined || lastTouchY === null) return;
    const delta = lastTouchY - y;
    lastTouchY = y;
    if (delta && consume(delta > 0 ? 1 : -1)) {
      event.preventDefault();
    }
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    const target = event.target;
    if (
      target instanceof Element &&
      target.closest('input, textarea, select, [contenteditable]')
    )
      return;
    const direction = NEXT_KEYS.has(event.key)
      ? 1
      : PREVIOUS_KEYS.has(event.key)
        ? -1
        : 0;
    if (!direction) return;
    lastEventTime = 0;
    if (consume(direction)) event.preventDefault();
  };
  // Salto desde el contador: va directo a la sección elegida, sin recorrer las
  // de en medio. El escenario se apaga un instante, se pone en ese paso y
  // vuelve a aparecer
  const jumpTo = (step: number) => {
    if (step === current && !isBusy) return;
    playing?.kill();
    prototypeEntry?.kill();
    gsap.killTweensOf(rain);
    isBusy = true;
    gsap.to(stage, {
      autoAlpha: 0,
      duration: 0.18,
      ease: 'power1.out',
      overwrite: true,
      onComplete: () => {
        current = step;
        announceSection(root, STEP_SECTION[step]);
        setWorld(step);
        syncScroll(step);
        setRain(step > RAIN_STEP ? 1 : 0, false);
        tl.seek(labels[step]);
        gsap.set(titleBlocks, { scaleX: 0 });
        notifySurface();
        gsap.to(stage, {
          autoAlpha: 1,
          duration: 0.32,
          ease: 'power1.out',
          onComplete: () => {
            isBusy = false;
          }
        });
      }
    });
  };
  const handleJump = (event: Event) => {
    const section = (event as CustomEvent<number>).detail;
    const step = SECTION_STEP[section] ?? 0;
    lock();
    // "Prototipo" arranca en la lluvia, que aún deja ver los flujos: el salto
    // va directo al prototipo interactivo
    jumpTo(step === RAIN_STEP ? RAIN_STEP + 1 : step);
  };

  window.addEventListener('wheel', handleWheel, {
    passive: false,
    capture: true
  });
  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  window.addEventListener('keydown', handleKeyDown);
  root.addEventListener(STORY_JUMP_EVENT, handleJump);

  // Primera revisión del fondo para el logo y el menú del sitio, cuando la
  // primera capa ya está en pantalla
  const surfaceTimeout = window.setTimeout(notifySurface, 600);

  // El escenario toma el control solo si la página arranca en él
  if (window.scrollY <= trigger.end) {
    lock();
    goTo(0);
  }

  return () => {
    playing?.kill();
    prototypeEntry?.kill();
    gsap.killTweensOf(rain);
    gsap.killTweensOf(stage);
    gsap.set(stage, { clearProps: 'opacity,visibility' });
    window.clearTimeout(surfaceTimeout);
    window.removeEventListener('wheel', handleWheel, { capture: true });
    window.removeEventListener('touchstart', handleTouchStart);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('keydown', handleKeyDown);
    root.removeEventListener(STORY_JUMP_EVENT, handleJump);
    unlock();
    delete root.dataset.world;
    root.removeAttribute('data-counter-hidden');
  };
}
