import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';

// Movimiento propio de "El producto en acción" de Sonopizza (escena con
// data-motion="product"; referencia: motionin.design/gallery/marathon). Cada
// paso es el inicio de un flujo: el fondo se funde con el del flujo, el
// título entra letra por letra (desenfocado, subiendo y un poco grande), el
// teléfono sube y sale por arriba mientras el del siguiente flujo entra
// desde abajo, y las etiquetas de vidrio entran una a una (luego flotan
// solas, con CSS).

const LETTER_HIDDEN = {
  autoAlpha: 0,
  y: 28,
  scale: 1.08,
  filter: 'blur(10px)'
};
const LETTER_SHOWN = { autoAlpha: 1, y: 0, scale: 1, filter: 'blur(0px)' };

function sceneParts(view: HTMLElement, index: number) {
  const scene = view.querySelector<HTMLElement>(
    `[data-product-scene="${index}"]`
  );
  return {
    scene,
    letters: scene ? queryAll(scene, '[data-product-letter]') : [],
    fades: scene ? queryAll(scene, '[data-product-fade]') : [],
    chips: scene ? queryAll(scene, '[data-product-chip]') : [],
    phone: view.querySelector(`[data-product-phone="${index}"]`),
    background: view.querySelector(`[data-product-bg="${index}"]`)
  };
}

// Distancia para sacar un teléfono de la pantalla, hacia arriba o abajo
const offscreen = () => window.innerHeight;

// Deja todo listo antes de armar la línea de tiempo: solo el fondo y el
// teléfono del primer flujo; los demás teléfonos esperan abajo y las piezas
// de cada escena, escondidas
export function prepareProductMotion(view: HTMLElement) {
  const count = queryAll(view, '[data-product-scene]').length;
  for (let index = 0; index < count; index += 1) {
    const parts = sceneParts(view, index);
    gsap.set(parts.letters, LETTER_HIDDEN);
    gsap.set([...parts.fades, ...parts.chips], { autoAlpha: 0, y: 14 });
    if (index > 0) {
      gsap.set(parts.background, { autoAlpha: 0 });
      gsap.set(parts.phone, { y: offscreen });
    }
  }
}

export function addProductMotion(
  timeline: gsap.core.Timeline,
  view: HTMLElement,
  step: number
) {
  const incoming = sceneParts(view, step);
  const at = timeline.duration();

  if (step > 0) {
    const outgoing = sceneParts(view, step - 1);
    timeline
      .to(
        outgoing.letters,
        {
          autoAlpha: 0,
          y: -20,
          filter: 'blur(8px)',
          duration: 0.35,
          stagger: 0.012,
          ease: 'power2.in'
        },
        at
      )
      .to(
        [...outgoing.fades, ...outgoing.chips],
        { autoAlpha: 0, y: -10, duration: 0.3, ease: 'power2.in' },
        at
      )
      .to(
        outgoing.phone,
        { y: () => -offscreen(), duration: 1, ease: 'expo.inOut' },
        at
      )
      .to(
        incoming.background,
        { autoAlpha: 1, duration: 0.9, ease: 'power1.inOut' },
        at
      )
      .fromTo(
        incoming.phone,
        { y: offscreen },
        { y: 0, duration: 1, ease: 'expo.inOut' },
        at
      );
  }

  const start = step > 0 ? at + 0.3 : '>-0.2';
  timeline
    .to(
      incoming.letters,
      {
        ...LETTER_SHOWN,
        duration: 0.55,
        stagger: 0.025,
        ease: 'expo.out'
      },
      start
    )
    .to(
      incoming.fades,
      { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'expo.out' },
      '<0.25'
    )
    .to(
      incoming.chips,
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.6)'
      },
      '<0.1'
    );
}
