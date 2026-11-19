import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';

// Movimiento propio del sitemap de Sonopizza (escena con
// data-motion="architecture"): primero aparece la app y se dibuja el árbol
// de la navegación principal; las pantallas saltan en orden. Luego la línea
// naranja del flujo de compra se dibuja tramo por tramo con un punto en la
// punta, y cada pantalla se enciende cuando el punto llega a ella.

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 600;
const HOP_DURATION = 0.55;

export function addArchitectureMotion(
  timeline: gsap.core.Timeline,
  view: HTMLElement
) {
  const tree = view.querySelector<SVGPathElement>('[data-sitemap-tree]');
  const hops = queryAll<SVGPathElement>(view, '[data-sitemap-hop]');
  const nodes = queryAll(view, '[data-sitemap-node]');
  const screens = queryAll(view, '[data-sitemap-screen]');
  const marker = view.querySelector<HTMLElement>('[data-sitemap-marker]');
  if (!tree || !marker) return;

  gsap.set(nodes, { autoAlpha: 0, scale: 0.85 });
  gsap.set([tree, ...hops], { strokeDashoffset: 1 });
  gsap.set(marker, { autoAlpha: 0, scale: 0 });
  gsap.set(screens, { '--lit': 0 });

  const placeMarker = (path: SVGPathElement, progress: number) => {
    const point = path.getPointAtLength(progress * path.getTotalLength());
    gsap.set(marker, {
      left: `${(point.x / CANVAS_WIDTH) * 100}%`,
      top: `${(point.y / CANVAS_HEIGHT) * 100}%`
    });
  };

  const light = (screen: HTMLElement | undefined, at: gsap.Position) => {
    if (!screen) return;
    timeline
      .to(screen, { '--lit': 1, duration: 0.3, ease: 'power2.out' }, at)
      .fromTo(
        screen,
        { scale: 1 },
        {
          scale: 1.05,
          duration: 0.18,
          yoyo: true,
          repeat: 1,
          ease: 'power2.out'
        },
        at
      );
  };

  // 1 · La app, el árbol y las pantallas
  timeline
    .to(
      nodes[0],
      { autoAlpha: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' },
      '>-0.2'
    )
    .to(
      tree,
      { strokeDashoffset: 0, duration: 0.6, ease: 'power2.inOut' },
      '>-0.1'
    )
    .to(
      nodes.slice(1),
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'back.out(1.8)'
      },
      '<0.2'
    );

  // 2 · El flujo de compra, tramo por tramo
  timeline.to(marker, { autoAlpha: 1, scale: 1, duration: 0.25 }, '>');
  light(screens[0], '<');
  hops.forEach((hop, index) => {
    const draw = { progress: 0 };
    const start = timeline.duration();
    timeline.to(
      draw,
      {
        progress: 1,
        duration: HOP_DURATION,
        ease: 'power1.inOut',
        onUpdate: () => {
          hop.style.strokeDashoffset = String(1 - draw.progress);
          placeMarker(hop, draw.progress);
        }
      },
      start
    );
    light(screens[index + 1], start + HOP_DURATION - 0.05);
  });
  timeline.to(marker, { scale: 0, autoAlpha: 0, duration: 0.3 }, '>');

  // El punto arranca en el inicio del primer tramo
  if (hops[0]) placeMarker(hops[0], 0);
}
