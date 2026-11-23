import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';
import type { StepJump } from '@/lib/case-story/sonopizza-scrub.types';

// Salto entre secciones de Sonopizza desde el submenú: la franja naranja de la
// marca barre la pantalla con el número y el nombre de la sección a la que se
// va (letra por letra, sin máscaras que las recorten), el escenario cambia
// debajo y la franja se retira.
// Hacia adelante barre de izquierda a derecha; hacia atrás, al revés.
// Mientras corre, la raíz lleva data-jumping (esconde los stickers del
// submenú).

const EASE_CUT = 'power3.inOut';
const COVERED = 'inset(0% 0% 0% 0%)';
const FROM_LEFT = 'inset(0% 100% 0% 0%)';
const FROM_RIGHT = 'inset(0% 0% 0% 100%)';

export function setupSonopizzaJump(root: HTMLElement) {
  const overlay = root.querySelector<HTMLElement>('[data-sono-jump]');
  const titles = queryAll(root, '[data-jump-title]');

  const transition = ({ section, isForward, swap }: StepJump) => {
    const timeline = gsap.timeline({
      onComplete: () => {
        root.removeAttribute('data-jumping');
        gsap.set(overlay, { autoAlpha: 0 });
      }
    });
    const title = titles[section];
    if (!overlay || !title) return timeline.add(swap);

    const letters = queryAll(title, '[data-jump-letter]');
    root.setAttribute('data-jumping', '');
    timeline
      .set(titles, { autoAlpha: 0 })
      .set(title, { autoAlpha: 1 })
      // ~2,2 s en total, sin importar lo largo del nombre
      .fromTo(
        overlay,
        { autoAlpha: 1, clipPath: isForward ? FROM_LEFT : FROM_RIGHT },
        { clipPath: COVERED, duration: 0.65, ease: EASE_CUT }
      )
      .add(swap)
      // Las letras aparecen subiendo y se van subiendo, con su opacidad: no
      // hay máscara, así que nada las corta en el camino
      .fromTo(
        letters,
        { yPercent: 45, autoAlpha: 0, scale: 0.85 },
        {
          yPercent: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.5,
          stagger: { amount: 0.25 },
          ease: 'back.out(1.6)'
        },
        '-=0.25'
      )
      .to(
        letters,
        {
          yPercent: -35,
          autoAlpha: 0,
          duration: 0.3,
          stagger: { amount: 0.1 },
          ease: 'power2.in'
        },
        '+=0.25'
      )
      .to(
        overlay,
        {
          clipPath: isForward ? FROM_RIGHT : FROM_LEFT,
          duration: 0.65,
          ease: EASE_CUT
        },
        '-=0.2'
      );
    return timeline;
  };

  const teardown = () => {
    root.removeAttribute('data-jumping');
    const pieces = [...titles, ...queryAll(root, '[data-jump-letter]')];
    if (overlay) pieces.push(overlay);
    gsap.set(pieces, { clearProps: 'all' });
  };

  return { transition, teardown };
}
