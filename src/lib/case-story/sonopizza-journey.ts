import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';

// Movimiento propio del customer journey de Sonopizza (escena con
// data-motion="journey"): la curva se dibuja de izquierda a derecha con un
// punto en la punta, y cada etapa salta en el instante en que la curva pasa
// por ella (su número rebota y el nombre sube). Todo va en una sola línea de
// tiempo, así que al volver atrás se deshace igual de fluido.

const DRAW_DURATION = 2.6;
const DRAW_EASE = 'sine.inOut';
const VIEWBOX_WIDTH = 1000;
const VIEWBOX_HEIGHT = 200;
const SAMPLES = 400;

// Parte de la curva (de 0 a 1) en la que está cada etapa: el primer punto
// cuyo x alcanza el centro de su columna
function stageFractions(path: SVGPathElement, count: number) {
  const total = path.getTotalLength();
  return Array.from({ length: count }, (_, index) => {
    const target = ((index + 0.5) / count) * VIEWBOX_WIDTH;
    for (let sample = 0; sample <= SAMPLES; sample += 1) {
      const fraction = sample / SAMPLES;
      if (path.getPointAtLength(fraction * total).x >= target) return fraction;
    }
    return 1;
  });
}

// Momento del dibujo (de 0 a 1) en que la curva llega a cierta parte, con la
// misma aceleración del dibujo
function timeAt(fraction: number) {
  const ease = gsap.parseEase(DRAW_EASE);
  for (let sample = 0; sample <= SAMPLES; sample += 1) {
    const time = sample / SAMPLES;
    if (ease(time) >= fraction) return time;
  }
  return 1;
}

export function addJourneyMotion(
  timeline: gsap.core.Timeline,
  view: HTMLElement
) {
  const path = view.querySelector<SVGPathElement>('[data-journey-line]');
  const marker = view.querySelector<HTMLElement>('[data-journey-marker]');
  const stages = queryAll(view, '[data-journey-stage]');
  if (!path || !marker) return;

  const total = path.getTotalLength();
  const fractions = stageFractions(path, stages.length);
  const draw = { progress: 0 };
  const render = () => {
    const point = path.getPointAtLength(draw.progress * total);
    path.style.strokeDashoffset = String(1 - draw.progress);
    gsap.set(marker, {
      left: `${(point.x / VIEWBOX_WIDTH) * 100}%`,
      top: `${(point.y / VIEWBOX_HEIGHT) * 100}%`
    });
  };

  gsap.set(path, { strokeDashoffset: 1 });
  gsap.set(marker, { autoAlpha: 0, scale: 0 });
  stages.forEach(stage => {
    gsap.set(stage.querySelector('[data-journey-dot]'), {
      scale: 0,
      autoAlpha: 0
    });
    gsap.set(stage.querySelector('[data-journey-label]'), {
      y: 24,
      autoAlpha: 0
    });
  });

  const start = timeline.duration() - 0.3;
  timeline
    .to(
      marker,
      { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'back.out(3)' },
      start
    )
    .to(
      draw,
      {
        progress: 1,
        duration: DRAW_DURATION,
        ease: DRAW_EASE,
        onUpdate: render
      },
      start
    );

  stages.forEach((stage, index) => {
    const at = start + timeAt(fractions[index]) * DRAW_DURATION - 0.08;
    timeline
      .to(
        stage.querySelector('[data-journey-dot]'),
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'back.out(3.2)'
        },
        at
      )
      .to(
        stage.querySelector('[data-journey-label]'),
        { y: 0, autoAlpha: 1, duration: 0.7, ease: 'expo.out' },
        at + 0.08
      );
  });

  // Al terminar, el punto se funde con la curva
  timeline.to(
    marker,
    { scale: 0, autoAlpha: 0, duration: 0.4, ease: 'power2.in' },
    start + DRAW_DURATION - 0.1
  );
}
