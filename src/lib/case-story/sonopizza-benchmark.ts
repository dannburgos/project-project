import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';
import type { SonoSlidesMotion } from '@/lib/case-story/slides-motion.types';

// Las curvas del escenario del caso
const EASE_IN = 'power3.out';
const EASE_OUT = 'power3.in';
const PIECES =
  '[data-bench-intro], [data-bench-card], [data-bench-sticker], [data-bench-finding]';

// Cambio entre las slides del benchmark, igual que el resto del caso: lo que
// sale se desvanece y lo que entra sube y aparece pieza por pieza (título,
// tarjetas y hallazgo); al final cae el sello "Lo tomamos"
export const BENCHMARK_SLIDES_MOTION: SonoSlidesMotion = {
  slide: '[data-bench-slide]',
  transition: (outgoing, incoming) =>
    gsap
      .timeline()
      .to(queryAll(outgoing, PIECES), {
        y: -20,
        autoAlpha: 0,
        duration: 0.4,
        ease: EASE_OUT
      })
      .set(outgoing, { autoAlpha: 0 })
      .set(incoming, { autoAlpha: 1 })
      .fromTo(
        queryAll(
          incoming,
          '[data-bench-intro], [data-bench-card], [data-bench-finding]'
        ),
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1.1, ease: EASE_IN, stagger: 0.16 }
      )
      .fromTo(
        queryAll(incoming, '[data-bench-sticker]'),
        // Como los sellos del caso; termina con la inclinación del CSS
        { scale: 0, rotation: -24 },
        { scale: 1, rotation: 6, duration: 0.8, ease: 'back.out(1.6)' },
        '-=0.7'
      ),
  settle: incoming =>
    gsap.set(queryAll(incoming, PIECES), { clearProps: 'all' })
};
