import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';
import type { SonoSlidesMotion } from '@/lib/case-story/slides-motion.types';

// Movimiento propio de los flujos principales de Sonopizza (escena con
// data-motion="flows"). La escena es un solo paso del escenario: al entrar
// se revela el diagrama del primer flujo y los demás se ven con las flechas
// (FLOW_SLIDES_MOTION), sin frenar el scroll. Cada diagrama se revela
// completo a la vez, igual que el resto del caso: el título, las pantallas y
// los caminos con sus flechas y etiquetas suben y aparecen juntos, como un
// solo bloque.

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 520;
const EASE_IN = 'power3.out';
const DURATION = 1.1;

// El título del flujo, sus pantallas y el dibujo de los caminos
function piecesOf(map: HTMLElement) {
  return queryAll(
    map,
    '[data-flow-intro], [data-flow-node], [data-flow-lines]'
  );
}

// Todo el diagrama a la vez
function revealFlowMap(
  timeline: gsap.core.Timeline,
  map: HTMLElement,
  at: number
) {
  timeline.fromTo(
    piecesOf(map),
    { autoAlpha: 0, y: 40 },
    { autoAlpha: 1, y: 0, duration: DURATION, ease: EASE_IN },
    at
  );
}

// Ubica y dimensiona cada pantalla en el lienzo y deja todo listo para
// revelarse; solo el primer flujo queda a la vista
export function prepareFlowsMotion(view: HTMLElement) {
  queryAll(view, '[data-flow-spot]').forEach(spot => {
    gsap.set(spot, {
      left: `${(Number(spot.dataset.x) / CANVAS_WIDTH) * 100}%`,
      top: `${(Number(spot.dataset.y) / CANVAS_HEIGHT) * 100}%`,
      width: `${(Number(spot.dataset.w) / CANVAS_WIDTH) * 100}%`
    });
  });
  queryAll(view, '[data-flow-map]').forEach((map, index) => {
    gsap.set(piecesOf(map), { autoAlpha: 0, y: 40 });
    if (index > 0) gsap.set(map, { autoAlpha: 0 });
  });
}

// Al entrar a la escena se revela el diagrama del primer flujo
export function addFlowsMotion(
  timeline: gsap.core.Timeline,
  view: HTMLElement
) {
  const map = view.querySelector<HTMLElement>('[data-flow-map="0"]');
  if (map) revealFlowMap(timeline, map, timeline.duration() - 0.2);
}

// Cambio entre flujos con las flechas: el que sale se desvanece y el que
// entra se revela completo a la vez
export const FLOW_SLIDES_MOTION: SonoSlidesMotion = {
  slide: '[data-flow-map]',
  transition: (outgoing, incoming) => {
    const timeline = gsap
      .timeline()
      .to(outgoing, {
        autoAlpha: 0,
        y: -20,
        duration: 0.4,
        ease: 'power3.in'
      })
      .set(incoming, { autoAlpha: 1, y: 0 });
    revealFlowMap(timeline, incoming, timeline.duration());
    return timeline;
  },
  settle: incoming => gsap.set(incoming, { y: 0 })
};
