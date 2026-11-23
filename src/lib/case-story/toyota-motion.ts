import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import {
  SCROLL_LOCK_END_EVENT,
  SCROLL_LOCK_START_EVENT
} from '@/hooks/use-smooth-scroll';
import {
  STORY_JUMP_EVENT,
  announceSection,
  queryAll,
  watchCounterVisibility
} from '@/lib/case-story/motion';
import { driveProgressCar } from '@/lib/case-story/toyota-progress-car';

// Movimiento del caso Toyota (scroll libre). Todo se arma desde el HTML con
// data-ty-*, siguiendo los principios de movimiento del manual de Toyota:
// hacia adelante (de izquierda a derecha, de abajo hacia arriba, de atrás
// hacia adelante), con aceleración suave, escalonado y con máscara.
// - mask: el titular sube detrás de una pared invisible
// - rise: el bloque sube y aparece al llegar
// - group / item: las piezas de un grupo llegan una tras otra
// - line: la línea de un recorrido se dibuja con el scroll (--draw)
// - fill: el párrafo se enciende palabra por palabra con el scroll
// - count: la cifra cuenta desde cero al llegar
// - grow: la captura de la portada crece hasta llenar la pantalla
// - bar: los tramos de una barra crecen de izquierda a derecha
// - cells / cell: los puntos de la matriz llegan fila por fila
// - speed: parallax suave (el fondo se mueve más lento)
// Sin animación (reducir movimiento) todo queda visible tal cual.

const EASE_OUT = 'power3.out';
const EASE_IN_OUT = 'power3.inOut';
const ENTER = 'top 85%';
const CLIP_BELOW = 'inset(0% 0% 100% 0%)';
const CLIP_OPEN = 'inset(-12% -4% -12% -4%)';

function pageTop(element: Element) {
  return element.getBoundingClientRect().top + window.scrollY;
}

function chapterOf(root: HTMLElement, index: number) {
  return root.querySelector<HTMLElement>(`[data-ty-chapter="${index}"]`);
}

// Llega a un capítulo sin recorrer el scroll: pausa el scroll suave, salta y
// mueve el foco al título para que el lector de pantalla siga el cambio
function jumpTo(root: HTMLElement, index: number) {
  const chapter = chapterOf(root, index);
  if (!chapter) return;
  window.dispatchEvent(new Event(SCROLL_LOCK_START_EVENT));
  window.scrollTo({ top: pageTop(chapter), behavior: 'instant' });
  ScrollTrigger.update();
  window.dispatchEvent(new Event(SCROLL_LOCK_END_EVENT));
  chapter
    .querySelector<HTMLElement>('[data-ty-focus]')
    ?.focus({ preventScroll: true });
  announceSection(root, index);
}

function listenJumps(root: HTMLElement) {
  const handleJump = (event: Event) =>
    jumpTo(root, (event as CustomEvent<number>).detail);
  root.addEventListener(STORY_JUMP_EVENT, handleJump);
  return () => root.removeEventListener(STORY_JUMP_EVENT, handleJump);
}

// Cada capítulo avisa al índice cuándo está en pantalla y le dice al caso en
// qué mundo va (claro u oscuro), para que el índice cambie de color. La
// portada cuenta como el inicio del primer capítulo. La línea del índice
// mide el avance de todo el caso.
function trackChapters(root: HTMLElement) {
  const setWorld = (world: string | undefined) => {
    if (world) root.dataset.world = world;
  };
  const cover = root.querySelector<HTMLElement>('[data-ty-cover]');
  const coverTrigger = cover
    ? [
        ScrollTrigger.create({
          trigger: cover,
          start: 'top center',
          end: 'bottom center',
          onToggle: self => {
            if (!self.isActive) return;
            announceSection(root, 0);
            setWorld('dark');
          }
        })
      ]
    : [];
  const chapters = queryAll(root, '[data-ty-chapter]').map(chapter =>
    ScrollTrigger.create({
      trigger: chapter,
      start: 'top center',
      end: 'bottom center',
      onToggle: self => {
        if (!self.isActive) return;
        announceSection(root, Number(chapter.dataset.tyChapter));
        setWorld(chapter.dataset.tyWorld);
      }
    })
  );
  // Dentro de un capítulo, un bloque de otro mundo (el cierre oscuro) también
  // cambia el color del índice mientras está a la vista
  const surfaces = queryAll(root, '.ty-closing').map(block =>
    ScrollTrigger.create({
      trigger: block,
      start: 'top center',
      end: 'bottom center',
      onToggle: self =>
        setWorld(
          self.isActive
            ? 'dark'
            : block.closest<HTMLElement>('[data-ty-world]')?.dataset.tyWorld
        )
    })
  );
  const overall = ScrollTrigger.create({
    trigger: root,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
      root.style.setProperty('--ty-progress', self.progress.toFixed(3));
      // Las llantas del auto del índice dan una vuelta cada 600 px de scroll
      root.style.setProperty('--ty-turn', (self.scroll() * 0.6).toFixed(1));
    }
  });
  return [...coverTrigger, ...chapters, ...surfaces, overall];
}

function revealMasks(root: HTMLElement) {
  queryAll(root, '[data-ty-mask]').forEach(element => {
    gsap.fromTo(
      element,
      { yPercent: 32, clipPath: CLIP_BELOW },
      {
        yPercent: 0,
        clipPath: CLIP_OPEN,
        duration: 1.1,
        ease: EASE_IN_OUT,
        clearProps: 'clipPath',
        scrollTrigger: { trigger: element, start: ENTER, once: true }
      }
    );
  });
}

function revealRises(root: HTMLElement) {
  const rises = queryAll(root, '[data-ty-rise]');
  gsap.set(rises, { autoAlpha: 0, y: 40 });
  ScrollTrigger.batch(rises, {
    start: ENTER,
    once: true,
    onEnter: batch =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: EASE_OUT,
        stagger: 0.08
      })
  });
}

// Las piezas de un grupo llegan una tras otra, como carros que llegan a su
// destino (principio de escalonado del manual)
function revealGroups(root: HTMLElement) {
  queryAll(root, '[data-ty-group]').forEach(group => {
    const items = queryAll(group, '[data-ty-item]');
    if (items.length === 0) return;
    gsap.from(items, {
      y: 32,
      autoAlpha: 0,
      duration: 0.9,
      ease: EASE_OUT,
      stagger: 0.08,
      scrollTrigger: { trigger: group, start: ENTER, once: true }
    });
  });
}

// La línea se dibuja mientras el recorrido cruza la pantalla. El CSS decide
// si crece a lo ancho (computador) o a lo alto (celular) con --draw
function drawLines(root: HTMLElement) {
  queryAll(root, '[data-ty-line]').forEach(line => {
    gsap.fromTo(
      line,
      { '--draw': 0 },
      {
        '--draw': 1,
        ease: 'none',
        scrollTrigger: {
          trigger: line.closest('[data-ty-group]') ?? line,
          start: 'top 85%',
          end: 'center 50%',
          scrub: true
        }
      }
    );
  });
}

function fillWords(root: HTMLElement) {
  queryAll(root, '[data-ty-fill]').forEach(text => {
    gsap.from(queryAll(text, '.ty-fill__word'), {
      opacity: 0.16,
      stagger: 0.1,
      ease: 'none',
      scrollTrigger: {
        trigger: text,
        // Termina cuando el párrafo entero ya está en la parte de abajo de la
        // pantalla: al bajar a leerlo, todo está encendido
        start: 'top 90%',
        end: 'bottom 70%',
        scrub: true
      }
    });
  });
}

function countNumbers(root: HTMLElement) {
  queryAll(root, '[data-ty-count]').forEach(element => {
    const target = Number(element.dataset.tyCount ?? 0);
    const counter = { value: 0 };
    element.textContent = '0';
    gsap.to(counter, {
      value: target,
      duration: 1.4,
      ease: EASE_OUT,
      onUpdate: () => {
        element.textContent = String(Math.round(counter.value));
      },
      scrollTrigger: { trigger: element, start: ENTER, once: true }
    });
  });
}

// La captura de la portada crece hacia adelante, de tarjeta a pantalla
// completa, mientras se recorre la pista de la portada
function growCover(root: HTMLElement) {
  const runway = root.querySelector<HTMLElement>('[data-ty-runway]');
  const frame = runway?.querySelector<HTMLElement>('[data-ty-grow]');
  if (!runway || !frame) return;
  // El velocímetro acompaña el crecimiento: la aguja sube de 0 al máximo
  // durante la pista de la portada y, en el último tramo, el medidor se apaga
  const hint = runway.querySelector<HTMLElement>('[data-ty-hint]');
  if (hint) {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: runway,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      })
      .fromTo(
        hint,
        { '--gauge': 0 },
        { '--gauge': 1, ease: 'none', duration: 1 }
      )
      .to(hint, { autoAlpha: 0, ease: 'none', duration: 0.25 }, 0.75);
  }
  // Solo mueve --cover-grow: el CSS arma el recorte con los cuatro bordes a
  // la vez (y con la medida de la tarjeta de celular o de computador)
  gsap.fromTo(
    frame,
    { '--cover-grow': 0 },
    {
      '--cover-grow': 1,
      ease: 'none',
      scrollTrigger: {
        trigger: runway,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    }
  );
}

function growBars(root: HTMLElement) {
  queryAll(root, '.ty-moscow__bar').forEach(bar => {
    gsap.from(queryAll(bar, '[data-ty-bar]'), {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.2,
      ease: EASE_IN_OUT,
      stagger: 0.18,
      scrollTrigger: { trigger: bar, start: ENTER, once: true }
    });
  });
}

function revealCells(root: HTMLElement) {
  queryAll(root, '[data-ty-cells]').forEach(matrix => {
    gsap.from(queryAll(matrix, '[data-ty-cell]'), {
      scale: 0,
      autoAlpha: 0,
      duration: 0.5,
      ease: EASE_OUT,
      stagger: 0.03,
      scrollTrigger: { trigger: matrix, start: 'top 75%', once: true }
    });
  });
}

// En la pila, el texto de cada tarjeta se va cuando la siguiente la cubre,
// para que nunca se lean dos textos a la vez. Solo aplica donde la pila se
// apila (pantallas grandes); en columna, todo queda visible.
function fadeStackCaptions(root: HTMLElement) {
  const media = gsap.matchMedia();
  media.add('(min-width: 1024px)', () => {
    queryAll(root, '.ty-stack__list').forEach(list => {
      const cards = queryAll(list, '.ty-stack__card');
      cards.slice(0, -1).forEach((card, index) => {
        const caption = card.querySelector('.ty-stack__caption');
        const next = cards[index + 1];
        if (!caption || !next) return;
        gsap.to(caption, {
          autoAlpha: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: next,
            start: 'top 70%',
            end: 'top 40%',
            scrub: true
          }
        });
      });
    });
  });
  return media;
}

// La imagen larga de los pilares baja por dentro de su marco más lento que
// el scroll. En computador recorre la imagen mientras el marco está fijo; en
// columna, mientras el marco cruza la pantalla.
function driftStackImage(root: HTMLElement) {
  const media = gsap.matchMedia();
  const drift = (
    trigger: Element,
    frame: Element,
    start: string,
    end: string
  ) =>
    gsap.fromTo(
      frame,
      { '--progress': 0 },
      {
        '--progress': 1,
        ease: 'none',
        scrollTrigger: { trigger, start, end, scrub: true }
      }
    );
  queryAll(root, '.ty-stack').forEach(stack => {
    const frame = stack.querySelector('.ty-stack__frame');
    const list = stack.querySelector('.ty-stack__list');
    if (!frame || !list) return;
    media.add('(min-width: 1024px)', () => {
      drift(list, frame, 'top 24%', 'bottom 96%');
    });
    media.add('(max-width: 1023px)', () => {
      drift(frame, frame, 'top bottom', 'bottom top');
    });
  });
  return media;
}

function parallax(root: HTMLElement) {
  queryAll(root, '[data-ty-speed]').forEach(element => {
    const speed = Number(element.dataset.tySpeed ?? 0);
    gsap.fromTo(
      element,
      { yPercent: -speed * 50 },
      {
        yPercent: speed * 50,
        ease: 'none',
        scrollTrigger: {
          trigger: element.parentElement ?? element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });
}

// Sin animación: solo el seguimiento de capítulos y saltos directos
export function setupToyotaStatic(root: HTMLElement) {
  const triggers = trackChapters(root);
  const counter = watchCounterVisibility(root);
  const stopJumps = listenJumps(root);
  const stopCar = driveProgressCar(root, { hasPhysics: false });
  return () => {
    stopCar();
    stopJumps();
    triggers.forEach(trigger => trigger.kill());
    counter.kill();
    root.removeAttribute('data-counter-hidden');
  };
}

export function setupToyotaMotion(root: HTMLElement) {
  revealMasks(root);
  revealRises(root);
  revealGroups(root);
  drawLines(root);
  fillWords(root);
  countNumbers(root);
  growCover(root);
  growBars(root);
  revealCells(root);
  parallax(root);
  const stack = fadeStackCaptions(root);
  const stackImage = driftStackImage(root);
  const triggers = trackChapters(root);
  const counter = watchCounterVisibility(root);
  const stopJumps = listenJumps(root);
  const stopCar = driveProgressCar(root, { hasPhysics: true });
  ScrollTrigger.refresh();

  return () => {
    stopCar();
    stack.revert();
    stackImage.revert();
    stopJumps();
    triggers.forEach(trigger => trigger.kill());
    counter.kill();
    root.removeAttribute('data-counter-hidden');
    // Las cifras vuelven a su valor real si se apaga el movimiento
    queryAll(root, '[data-ty-count]').forEach(element => {
      element.textContent = element.dataset.tyCount ?? '';
    });
  };
}
