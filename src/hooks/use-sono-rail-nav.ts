'use client';

import { gsap } from 'gsap';
import { useLayoutEffect, useRef, useState } from 'react';

import { useCaseStoryCounter } from '@/hooks/use-case-story-counter';

type PendingJump = {
  // Sección tocada y sección en la que estaba el escenario al tocarla
  section: number;
  from: number;
};

type PillBox = { top: number; left: number; width: number; height: number };

// Caja de un ícono medida dentro de la barra (sin contar el rebote, que es una
// transformación)
function measureInRail(rail: HTMLElement, item: HTMLElement): PillBox {
  let top = 0;
  let left = 0;
  let node: HTMLElement | null = item;
  while (node && node !== rail) {
    top += node.offsetTop;
    left += node.offsetLeft;
    node = node.offsetParent as HTMLElement | null;
  }
  return { top, left, width: item.offsetWidth, height: item.offsetHeight };
}

// Submenú de Sonopizza. La sección marcada cambia apenas se toca un ícono (sin
// esperar a que termine el salto), una sola píldora blanca viaja por la barra
// hasta ella estirándose en el camino, y el ícono tocado se hunde, rebota y
// suelta una onda.
export function useSonoRailNav() {
  const { ref, section, handleJump } = useCaseStoryCounter();
  const pillRef = useRef<HTMLSpanElement>(null);
  const isPlacedRef = useRef(false);
  const [pending, setPending] = useState<PendingJump | null>(null);
  // Si el escenario ya cambió de sección, manda lo que diga el escenario
  const current =
    pending && pending.from === section ? pending.section : section;

  useLayoutEffect(() => {
    const rail = ref.current;
    const pill = pillRef.current;
    const item =
      rail?.querySelectorAll<HTMLElement>('[data-rail-item]')[current];
    if (!rail || !pill || !item) return;

    if (!isPlacedRef.current) {
      gsap.set(pill, measureInRail(rail, item));
      isPlacedRef.current = true;
    } else {
      gsap.to(pill, {
        ...measureInRail(rail, item),
        duration: 0.6,
        ease: 'back.out(1.5)',
        overwrite: true
      });
      gsap.fromTo(
        pill,
        { scaleX: 0.7 },
        { scaleX: 1, duration: 0.7, ease: 'elastic.out(1, 0.5)' }
      );
      const name = item.querySelector('[data-rail-name]');
      if (name)
        gsap.fromTo(
          name,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.4, delay: 0.25 }
        );
    }

    // Si la barra cambia de tamaño (carga de fuentes, se vuelve visible al
    // pasar de celular a computador), la píldora se reacomoda sin animar
    const observer = new ResizeObserver(() => {
      if (!gsap.isTweening(pill)) gsap.set(pill, measureInRail(rail, item));
    });
    observer.observe(item);
    observer.observe(rail);
    return () => observer.disconnect();
  }, [ref, current]);

  const handleSelect = (index: number) => {
    const rail = ref.current;
    const item = rail?.querySelectorAll<HTMLElement>('[data-rail-item]')[index];
    const ripple =
      rail?.querySelectorAll<HTMLElement>('[data-rail-ripple]')[index];
    if (item)
      gsap
        .timeline()
        .to(item, { scale: 0.84, duration: 0.09, ease: 'power2.out' })
        .to(item, { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    if (ripple)
      gsap.fromTo(
        ripple,
        { scale: 0.4, autoAlpha: 1 },
        { scale: 2.6, autoAlpha: 0, duration: 0.6, ease: 'expo.out' }
      );

    // Mientras corre un salto, el escenario no acepta otro
    if (index === current || rail?.closest('[data-jumping]')) return;
    setPending({ section: index, from: section });
    handleJump(index);
  };

  return { ref, pillRef, current, handleSelect };
}
