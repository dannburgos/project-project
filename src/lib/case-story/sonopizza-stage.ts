import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';
import { addArchitectureMotion } from '@/lib/case-story/sonopizza-architecture';
import { addAuditMotion } from '@/lib/case-story/sonopizza-audit';
import {
  addFlowsMotion,
  prepareFlowsMotion
} from '@/lib/case-story/sonopizza-flows';
import { FAN_GOTO_EVENT } from '@/lib/case-story/sonopizza-fan';
import { addFanMotion } from '@/lib/case-story/sonopizza-fan-motion';
import {
  addFreeChapters,
  setupFreeScroll
} from '@/lib/case-story/sonopizza-free';
import {
  addJourneyMotion,
  syncJourneyCardHeights
} from '@/lib/case-story/sonopizza-journey';
import { setupSonopizzaJump } from '@/lib/case-story/sonopizza-jump';
import {
  HOLD_SECONDS,
  SCROLL_PER_SECOND,
  createScrubNavigator
} from '@/lib/case-story/sonopizza-scrub';
import type { TimeRange } from '@/lib/case-story/sonopizza-scrub.types';

// Escenario del caso de Sonopizza en computador (referencia de interacción:
// monument.tv). Toda la línea de tiempo sigue al scroll de la página (ver
// sonopizza-scrub). Cada escena es una capa a pantalla completa
// ([data-sono-view]) y se arma desde el HTML:
// - data-enter: cómo entra la escena (diagonal, band, wipe o rise)
// - data-steps: cuántos pasos tiene (por defecto, 1)
// - data-section: a qué sección pertenece (para los cuadrados)
// Dentro, cada pieza con data-sono-in="n" aparece en el paso n de su escena,
// con el efecto de data-sono-fx (slide, up, pop o draw). Una escena con
// data-motion lleva además su movimiento propio (la auditoría y el journey).

// Curvas suaves (power3) para que los cortes entre escenas fluyan; con expo
// se sentían bruscos y rápidos
const EASE_CUT = 'power3.inOut';
const EASE_IN = 'power3.out';
// El recorrido de las pantallas del abanico mide 2,2 alturas de ventana de
// scroll: un gesto largo abre varias, sin pasar nueve veces el scroll
const FAN_SCROLL_HEIGHTS = 2.2;
// Un tramo de acomodo: la escena entera queda quieta o una pantalla del abanico
const FAN_REST = 0.02;
// Margen para quedar justo después de que una escena termina de armarse (el
// redondeo del scroll no debe dejar el escenario un instante antes)
const REST_MARGIN = 0.03;

// Corte en diagonal: el borde entra inclinado desde la derecha y cubre todo
const DIAGONAL_HIDDEN = 'polygon(160% 0%, 200% 0%, 200% 100%, 130% 100%)';
const DIAGONAL_SHOWN = 'polygon(-30% 0%, 200% 0%, 200% 100%, -60% 100%)';
// Barrido entre los capítulos del sistema de diseño: un borde inclinado que
// arranca justo fuera de la pantalla. Con la curva de las escenas y 1,8 s, se
// ve cruzar ~0,8 s: a medio camino entre el diagonal de las escenas (~0,5 s,
// brusco) y la versión más lenta (~1,2 s)
const CHAPTER_HIDDEN = 'polygon(115% 0%, 200% 0%, 200% 100%, 130% 100%)';
const CHAPTER_SHOWN = 'polygon(-25% 0%, 200% 0%, 200% 100%, -10% 100%)';

function addEnter(
  timeline: gsap.core.Timeline,
  view: HTMLElement,
  band: HTMLElement | null
) {
  const type = view.dataset.enter ?? 'diagonal';

  if (type === 'band' && band) {
    // Una franja naranja barre la pantalla y, al retirarse, deja la escena.
    // La escena sigue escondida hasta que la franja tapa todo (sin un
    // "mostrar" previo: en el segundo cero de la línea de tiempo, volver a la
    // portada lo dejaba aplicado y la escena quedaba encima)
    timeline
      .set(view, { autoAlpha: 0 })
      .fromTo(
        band,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.85, ease: EASE_CUT }
      )
      .set(view, { autoAlpha: 1 })
      .set(band, { transformOrigin: 'right center' })
      .to(band, { scaleX: 0, duration: 0.85, ease: EASE_CUT });
    return;
  }
  timeline.set(view, { autoAlpha: 1 });
  if (type === 'wipe') {
    timeline.fromTo(
      view,
      { clipPath: 'inset(0% 0% 0% 100%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: EASE_CUT }
    );
    return;
  }
  if (type === 'rise') {
    timeline.fromTo(
      view,
      { yPercent: 100 },
      { yPercent: 0, duration: 1.5, ease: EASE_CUT }
    );
    return;
  }
  timeline.fromTo(
    view,
    { clipPath: DIAGONAL_HIDDEN },
    { clipPath: DIAGONAL_SHOWN, duration: 1.6, ease: EASE_CUT }
  );
}

// Con isTogether (data-reveal="together" en la escena) todas las piezas
// entran a la vez; si no, una tras otra
function addReveal(
  timeline: gsap.core.Timeline,
  pieces: HTMLElement[],
  position: gsap.Position,
  isTogether = false
) {
  pieces.forEach((piece, index) => {
    const at = index === 0 ? position : isTogether ? '<' : '<0.16';
    const fx = piece.dataset.sonoFx ?? 'up';
    if (fx === 'slide') {
      timeline.fromTo(
        piece,
        { xPercent: 140 },
        { xPercent: 0, duration: 1.3, ease: EASE_IN },
        at
      );
    } else if (fx === 'pop') {
      timeline.fromTo(
        piece,
        { scale: 0, rotate: -24, autoAlpha: 0 },
        {
          scale: 1,
          rotate: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'back.out(1.6)'
        },
        at
      );
    } else if (fx === 'develop') {
      // Revelado de una instantánea: el velo se aclara lento
      timeline.fromTo(
        piece,
        { autoAlpha: 1 },
        { autoAlpha: 0, duration: 2, ease: 'power1.inOut' },
        '<0.35'
      );
    } else if (fx === 'draw') {
      timeline.fromTo(
        piece,
        { strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' },
        at
      );
    } else {
      timeline.fromTo(
        piece,
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1.1, ease: EASE_IN },
        at
      );
    }
  });
}

export function setupSonopizzaStage(root: HTMLElement) {
  const stage = root.querySelector<HTMLElement>('[data-stage]');
  if (!stage) return () => {};
  const band = root.querySelector<HTMLElement>('[data-sono-band]');
  const views = queryAll(root, '[data-sono-view]');
  const sectionNames = queryAll(root, '[data-sono-section-name]').map(
    element => element.textContent ?? ''
  );

  const timeline = gsap.timeline({ paused: true });
  const labels: string[] = [];
  const stepStart: number[] = [];
  const stepRest: number[] = [];
  const stepSection: number[] = [];
  const stepSurface: string[] = [];
  // Dónde puede quedarse quieto el escenario (lo usa el acomodo al soltar)
  const rests: TimeRange[] = [];
  // Tramos que se leen como una página (el área del sistema de diseño)
  const freeRanges: TimeRange[] = [];
  // Tramos que se pasan más ágiles (las pantallas del abanico)
  const fastRanges: TimeRange[] = [];
  // Cuánto tarda la línea de tiempo en recorrer un píxel de scroll
  const secondsPerPixel = 1 / (window.innerHeight * SCROLL_PER_SECOND);
  let fan: { start: number; seconds: number; count: number } | null = null;

  views.forEach((view, viewIndex) => {
    const steps = Number(view.dataset.steps ?? 1);
    const section = Number(view.dataset.section ?? 0);
    const previous = views[viewIndex - 1];

    if (viewIndex > 0) gsap.set(view, { autoAlpha: 0 });
    if (view.dataset.motion === 'flows') prepareFlowsMotion(view);

    for (let step = 0; step < steps; step += 1) {
      stepStart.push(timeline.duration());
      const pieces = queryAll(view, `[data-sono-in="${step}"]`);
      const isCoverStart = viewIndex === 0 && step === 0;

      if (!isCoverStart) {
        // Lo que aparece en este paso empieza escondido
        pieces.forEach(piece => {
          const fx = piece.dataset.sonoFx ?? 'up';
          if (fx === 'slide') gsap.set(piece, { xPercent: 140 });
          else if (fx === 'draw') gsap.set(piece, { strokeDashoffset: 1 });
          else if (fx === 'develop') gsap.set(piece, { autoAlpha: 1 });
          else gsap.set(piece, { autoAlpha: 0 });
        });
        if (step === 0) {
          addEnter(timeline, view, band);
          if (previous) timeline.set(previous, { autoAlpha: 0 });
          addReveal(
            timeline,
            pieces,
            '-=0.45',
            view.dataset.reveal === 'together'
          );
        } else {
          addReveal(timeline, pieces, '>', view.dataset.reveal === 'together');
        }
        if (view.dataset.motion === 'audit')
          addAuditMotion(timeline, view, step);
        if (view.dataset.motion === 'journey' && step === 0)
          addJourneyMotion(timeline, view);
        if (view.dataset.motion === 'architecture' && step === 0)
          addArchitectureMotion(timeline, view);
        if (view.dataset.motion === 'flows' && step === 0)
          addFlowsMotion(timeline, view);
      }

      const label = `step-${labels.length}`;
      timeline.addLabel(label);
      labels.push(label);
      const rest = timeline.duration() + REST_MARGIN;
      stepRest.push(rest);
      stepSection.push(section);
      stepSurface.push(view.dataset.surface ?? 'light');

      // Una vez armada, la escena se queda quieta un rato. Las escenas con
      // recorrido propio lo añaden detrás de ese rato
      timeline.to({}, { duration: HOLD_SECONDS });
      const restEnd = timeline.duration();
      const isLastStep = step === steps - 1;

      if (isLastStep && view.hasAttribute('data-free-view')) {
        // Capítulos que entran de lado y se leen hacia abajo como una página:
        // en su tramo de lectura se puede parar en cualquier punto
        const chapters = addFreeChapters(timeline, view, secondsPerPixel, {
          hidden: CHAPTER_HIDDEN,
          shown: CHAPTER_SHOWN,
          duration: 1.8,
          ease: EASE_CUT,
          hold: HOLD_SECONDS
        });
        chapters.forEach((chapter, index) => {
          rests.push({
            start: index === 0 ? rest : chapter.rest.start,
            end: chapter.rest.end
          });
          if (chapter.free) freeRanges.push(chapter.free);
        });
        continue;
      }

      if (isLastStep && view.dataset.motion === 'product') {
        const count = queryAll(view, '.sono-fan__phone').length;
        if (count > 1) {
          const seconds = FAN_SCROLL_HEIGHTS / SCROLL_PER_SECOND;
          const motion = addFanMotion(timeline, view, count, seconds);
          fan = { ...motion, count };
          fastRanges.push({
            start: motion.start,
            end: motion.start + seconds
          });
          // Cada pantalla del abanico es un lugar de acomodo; la primera y la
          // última, con su rato quieto
          const last = count - 1;
          rests.push({ start: rest, end: rest + HOLD_SECONDS });
          for (let index = 1; index < last; index += 1) {
            const at = motion.start + (index / last) * seconds;
            rests.push({ start: at - FAN_REST, end: at + FAN_REST });
          }
          const finish = timeline.duration();
          timeline.to({}, { duration: HOLD_SECONDS });
          rests.push({ start: finish, end: finish + HOLD_SECONDS });
          continue;
        }
      }
      rests.push({ start: rest, end: restEnd });
    }
  });

  const sectionStep = sectionNames.map((_, section) =>
    stepSection.indexOf(section)
  );

  const free = setupFreeScroll(root);
  const jump = setupSonopizzaJump(root);
  const unsyncJourney = syncJourneyCardHeights(root);

  const navigator = createScrubNavigator({
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
    jumpTransition: jump.transition,
    onStep: step => {
      // El contador de celular toma el color claro sobre las escenas oscuras
      root.dataset.world = stepSurface[step] === 'dark' ? 'green' : 'cream';
    }
  });

  // El abanico pide una pantalla (flecha, punto o clic): se desliza el scroll
  // hasta el momento en que esa pantalla queda al frente
  const productView = views.find(view => view.dataset.motion === 'product');
  const handleFanGoTo = (event: Event) => {
    if (!fan) return;
    const index = (event as CustomEvent<number>).detail;
    const last = Math.max(fan.count - 1, 1);
    const clamped = Math.min(Math.max(index, 0), last);
    navigator.scrollToTime(fan.start + (clamped / last) * fan.seconds, 0.9);
  };
  productView?.addEventListener(FAN_GOTO_EVENT, handleFanGoTo);

  return () => {
    productView?.removeEventListener(FAN_GOTO_EVENT, handleFanGoTo);
    navigator.teardown();
    free.teardown();
    jump.teardown();
    unsyncJourney();
    timeline.kill();
    const pieces = queryAll(
      root,
      '[data-sono-in], [data-free-scroll-area], [data-free-scroll-area] > *, [data-free-heading] > *, [data-free-cut], [data-audit-slot], [data-audit-panel], [data-journey-line], [data-journey-marker], [data-journey-dot], [data-journey-label], [data-journey-card], [data-sitemap-node], [data-sitemap-lines], [data-flow-map], [data-flow-node], [data-flow-spot], [data-flow-intro], [data-flow-lines], [data-free-in]'
    );
    gsap.set([...views, band, ...pieces], {
      clearProps: 'all'
    });
    delete root.dataset.world;
  };
}
