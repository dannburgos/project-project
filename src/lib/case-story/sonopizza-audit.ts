import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';

// Movimiento propio de la auditoría de Sonopizza (escena con
// data-motion="audit"):
// - Paso 0: la captura principal sube desde abajo y, al llegar, se abren las
//   otras cuatro (dos a cada lado) hasta ocupar la fila completa.
// - Paso 1: los seis hallazgos entran desde la derecha y empujan las
//   pantallas; solo queda la del centro, a la izquierda del panel.

const EASE_CUT = 'expo.inOut';
const EASE_IN = 'expo.out';
const PANEL_GAP = 48;

export function addAuditMotion(
  timeline: gsap.core.Timeline,
  view: HTMLElement,
  step: number
) {
  const board = view.querySelector<HTMLElement>('[data-audit-board]');
  const panel = view.querySelector<HTMLElement>('[data-audit-panel]');
  const phones = queryAll(view, '[data-audit-slot]');
  const main = phones.find(phone => phone.dataset.auditSlot === '0');
  const sides = phones.filter(phone => phone !== main);
  if (!board || !panel || !main) return;

  const slotOf = (phone: HTMLElement) => Number(phone.dataset.auditSlot);
  // Distancia entre capturas para que la fila llene todo el ancho
  const spacing = () => (board.offsetWidth - main.offsetWidth) / 4;
  // Centro del espacio que el panel deja libre a la izquierda
  const restX = () =>
    (board.offsetWidth - panel.offsetWidth - PANEL_GAP) / 2 -
    board.offsetWidth / 2;

  if (step === 0) {
    gsap.set(main, { y: () => window.innerHeight });
    gsap.set(sides, { x: 0, autoAlpha: 0 });
    gsap.set(panel, { xPercent: 150 });
    timeline.to(main, { y: 0, duration: 1.1, ease: EASE_IN }, '-=0.3').to(
      sides,
      {
        x: (_index: number, phone: HTMLElement) => slotOf(phone) * spacing(),
        autoAlpha: 1,
        duration: 1,
        ease: EASE_IN,
        // Primero las vecinas, luego las de los extremos
        stagger: { each: 0.08, from: 'start' }
      },
      '-=0.35'
    );
    return;
  }

  if (step === 1) {
    timeline
      .to(panel, { xPercent: 0, duration: 1.2, ease: EASE_CUT }, '>')
      .to(main, { x: restX, duration: 1.2, ease: EASE_CUT }, '<')
      .to(
        sides,
        {
          x: restX,
          autoAlpha: 0,
          duration: 1.1,
          ease: EASE_CUT,
          // Las de la derecha las alcanza primero el panel
          stagger: (index: number, phone: HTMLElement) =>
            slotOf(phone) > 0 ? 0 : 0.12 + index * 0.02
        },
        '<'
      );
  }
}
