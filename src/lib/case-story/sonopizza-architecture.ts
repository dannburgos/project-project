import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';

// Movimiento propio del sitemap de Sonopizza (escena con
// data-motion="architecture"). Todo se revela a la vez, igual que el resto
// del caso: la app, las pantallas y las líneas con sus flechas suben y
// aparecen juntas, como un solo bloque.

const EASE_IN = 'power3.out';
const DURATION = 1.1;

export function addArchitectureMotion(
  timeline: gsap.core.Timeline,
  view: HTMLElement
) {
  const pieces = queryAll(view, '[data-sitemap-node], [data-sitemap-lines]');

  gsap.set(pieces, { autoAlpha: 0, y: 40 });
  timeline.to(
    pieces,
    { autoAlpha: 1, y: 0, duration: DURATION, ease: EASE_IN },
    '>-0.2'
  );
}
