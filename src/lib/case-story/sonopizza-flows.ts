import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';

// Movimiento propio de los flujos principales de Sonopizza (escena con
// data-motion="flows"): un paso por flujo. El diagrama del flujo crece en el
// orden de sus pantallas: las de un mismo orden saltan juntas (las ramas) y
// luego se dibujan los caminos que salen de ellas. Al pasar al siguiente
// flujo, el anterior sube y se desvanece.

const CANVAS_WIDTH = 1400;
const CANVAS_HEIGHT = 520;

function mapParts(view: HTMLElement, index: number) {
  const map = view.querySelector<HTMLElement>(`[data-flow-map="${index}"]`);
  const nodes = map ? queryAll(map, '[data-flow-node]') : [];
  const groups = map ? queryAll<SVGGElement>(map, 'g[data-flow-order]') : [];
  const orders = [...nodes, ...groups].map(item =>
    Number(item.getAttribute('data-flow-order') ?? 0)
  );
  return {
    map,
    nodes,
    groups,
    maxOrder: Math.max(0, ...orders),
    tab: view.querySelector(`[data-flow-tab="${index}"]`)
  };
}

// Ubica cada pantalla en el lienzo y deja todo listo para crecer
export function prepareFlowsMotion(view: HTMLElement) {
  queryAll(view, '[data-flow-spot]').forEach(spot => {
    gsap.set(spot, {
      left: `${(Number(spot.dataset.x) / CANVAS_WIDTH) * 100}%`,
      top: `${(Number(spot.dataset.y) / CANVAS_HEIGHT) * 100}%`
    });
  });
  const count = queryAll(view, '[data-flow-map]').length;
  for (let index = 0; index < count; index += 1) {
    const parts = mapParts(view, index);
    gsap.set(parts.nodes, { autoAlpha: 0, scale: 0.6 });
    gsap.set(queryAll(view, `[data-flow-map="${index}"] [data-flow-edge]`), {
      strokeDashoffset: 1,
      // Escondido: así su punta de flecha no se ve antes de dibujarse
      autoAlpha: 0
    });
    gsap.set(
      queryAll(view, `[data-flow-map="${index}"] [data-flow-edge-label]`),
      { autoAlpha: 0 }
    );
    if (index > 0) gsap.set(parts.map, { autoAlpha: 0 });
  }
}

export function addFlowsMotion(
  timeline: gsap.core.Timeline,
  view: HTMLElement,
  step: number
) {
  const incoming = mapParts(view, step);
  let at = step > 0 ? timeline.duration() : timeline.duration() - 0.2;

  if (step > 0) {
    const outgoing = mapParts(view, step - 1);
    timeline
      .to(
        outgoing.map,
        { autoAlpha: 0, y: -40, duration: 0.45, ease: 'power2.in' },
        at
      )
      .to(outgoing.tab, { '--on': 0, duration: 0.3 }, at)
      .fromTo(
        incoming.map,
        { autoAlpha: 0, y: 40 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: 'expo.out' },
        at + 0.35
      );
    at += 0.45;
  }
  timeline.fromTo(
    incoming.tab,
    { '--on': 0 },
    { '--on': 1, duration: 0.3 },
    at
  );

  // El diagrama crece por órdenes: pantallas y luego sus caminos
  for (let order = 0; order <= incoming.maxOrder; order += 1) {
    const nodes = incoming.nodes.filter(
      node => Number(node.dataset.flowOrder) === order
    );
    const groups = incoming.groups.filter(
      group => Number(group.getAttribute('data-flow-order')) === order
    );
    if (nodes.length)
      timeline.to(
        nodes,
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.45,
          stagger: 0.08,
          ease: 'back.out(2.2)'
        },
        at
      );
    at += nodes.length ? 0.3 : 0;
    if (groups.length) {
      const edges = groups.map(group =>
        group.querySelector('[data-flow-edge]')
      );
      timeline
        .set(edges, { autoAlpha: 1 }, at)
        .to(
          edges,
          { strokeDashoffset: 0, duration: 0.45, ease: 'power2.inOut' },
          at
        )
        .to(
          groups
            .map(group => group.querySelector('[data-flow-edge-label]'))
            .filter(Boolean),
          { autoAlpha: 1, duration: 0.3 },
          at + 0.25
        );
      at += 0.4;
    }
  }
}
