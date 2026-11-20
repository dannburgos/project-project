import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';

// Movimiento propio de la auditoría de Sonopizza (escena con
// data-motion="audit"). Las capturas forman una fila: cada una lleva su lugar
// centrado en 0 (data-audit-slot) y la que queda al final lleva
// data-audit-main (la última de la fila).
// - Paso 0: la principal sube desde abajo al centro y, al llegar, la fila se
//   abre hasta ocupar todo el ancho (primero las del centro, luego las de
//   los extremos).
// - Paso 1: los hallazgos entran desde la derecha y la principal viaja a la
//   izquierda, levantada; al pasar por encima de cada captura la arrastra
//   debajo de ella. Solo queda la principal, a la izquierda del panel.

const EASE_CUT = 'expo.inOut';
const EASE_IN = 'expo.out';
// Curva más suave para recoger las capturas: sin arranques ni frenazos bruscos
const EASE_GATHER = 'power3.inOut';
const GATHER = 1.3;
// Sombra de la principal: ninguna en la fila, más marcada mientras viaja
// encima de las demás y suave al quedar sola
const SHADOW_NONE = '0px 0px 0px -16px rgba(0, 20, 70, 0)';
const SHADOW_LIFTED = '0px 32px 48px -16px rgba(0, 20, 70, 0.45)';
const SHADOW_REST = '0px 16px 32px -16px rgba(0, 20, 70, 0.3)';
const PANEL_GAP = 48;
// Espacio máximo entre una captura y la siguiente en la fila abierta
const PHONE_GAP = 24;

export function addAuditMotion(
  timeline: gsap.core.Timeline,
  view: HTMLElement,
  step: number
) {
  const board = view.querySelector<HTMLElement>('[data-audit-board]');
  const panel = view.querySelector<HTMLElement>('[data-audit-panel]');
  const phones = queryAll(view, '[data-audit-slot]');
  const main = phones.find(phone => phone.hasAttribute('data-audit-main'));
  const sides = phones.filter(phone => phone !== main);
  if (!board || !panel || !main) return;

  const slotOf = (phone: HTMLElement) => Number(phone.dataset.auditSlot);
  // Distancia entre capturas: llenan el ancho, pero sin separarse más que
  // PHONE_GAP (con pocas capturas la fila queda junta y centrada)
  const spacing = () =>
    Math.min(
      (board.offsetWidth - main.offsetWidth) / Math.max(phones.length - 1, 1),
      main.offsetWidth + PHONE_GAP
    );
  // Centro del espacio que el panel deja libre a la izquierda
  const restX = () =>
    (board.offsetWidth - panel.offsetWidth - PANEL_GAP) / 2 -
    board.offsetWidth / 2;

  if (step === 0) {
    gsap.set(main, {
      x: 0,
      y: () => window.innerHeight,
      scale: 1,
      boxShadow: SHADOW_NONE
    });
    gsap.set(sides, { x: 0, scale: 1, rotation: 0, autoAlpha: 0 });
    gsap.set(panel, { xPercent: 150 });
    timeline.to(main, { y: 0, duration: 1.1, ease: EASE_IN }, '-=0.3').to(
      phones,
      {
        x: (_index: number, phone: HTMLElement) => slotOf(phone) * spacing(),
        autoAlpha: 1,
        duration: 1,
        ease: EASE_IN,
        // Primero las del centro, luego las de los extremos
        stagger: (_index: number, phone: HTMLElement) =>
          Math.abs(slotOf(phone)) * 0.08
      },
      '-=0.35'
    );
    return;
  }

  if (step === 1) {
    // Las demás se recogen debajo de la principal en el orden en que ella
    // les pasa por encima (de derecha a izquierda); la que queda a la
    // izquierda de su destino sale a su encuentro al final
    const order = [...sides].sort((a, b) => slotOf(b) - slotOf(a));
    const rest = restX();

    timeline
      .to(panel, { xPercent: 0, duration: GATHER, ease: EASE_CUT }, '>')
      .addLabel('gather', '<')
      .to(main, { x: restX, duration: GATHER, ease: EASE_GATHER }, 'gather')
      // La principal se levanta un poco mientras viaja (más grande y con
      // sombra, para que se note que va encima) y se asienta al llegar
      .to(
        main,
        {
          scale: 1.04,
          boxShadow: SHADOW_LIFTED,
          duration: GATHER / 2,
          ease: 'sine.out'
        },
        'gather'
      )
      .to(
        main,
        {
          scale: 1,
          boxShadow: SHADOW_REST,
          duration: GATHER / 2,
          ease: 'sine.inOut'
        },
        `gather+=${GATHER / 2}`
      );

    order.forEach((phone, rank) => {
      const start = 0.12 + rank * 0.16;
      // Todas terminan un poco después de la principal, ya debajo de ella
      const duration = GATHER + 0.12 - start;
      // Se inclinan un poco hacia donde las arrastran y se enderezan al llegar
      const tilt = slotOf(phone) * spacing() > rest ? -3 : 3;
      timeline
        .to(
          phone,
          { x: restX, scale: 0.9, duration, ease: EASE_GATHER },
          `gather+=${start}`
        )
        .to(
          phone,
          {
            rotation: tilt,
            duration: duration / 2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: 1
          },
          `gather+=${start}`
        );
    });

    // Ya tapadas por la principal, se esconden sin que se note
    timeline.set(sides, { autoAlpha: 0 });
  }
}
