'use client';

import { useEffect, useRef } from 'react';

// Mide cuánto ha entrado un elemento en pantalla al hacer scroll (0 cuando
// asoma por abajo y 1 cuando ya ocupa su lugar bajo la barra) y lo publica
// como variable de CSS en el propio elemento, sin volver a pintar React. Así
// el movimiento sigue al scroll suavizado cuadro a cuadro. Con "reducir
// movimiento" queda siempre en 1.
export function useEntryProgress<T extends HTMLElement>(
  cssVariable = '--entry-progress'
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.style.setProperty(cssVariable, '1');
      return;
    }

    let frameId: number | null = null;
    const update = () => {
      frameId = null;
      const headerHeight =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--site-header-height'
          )
        ) || 0;
      const viewportHeight = window.innerHeight;
      // Llega a 1 un poco antes de quedar alineado, para que el módulo se
      // vea completo un instante.
      const distance = Math.max(1, (viewportHeight - headerHeight) * 0.85);
      const raw = Math.min(
        1,
        Math.max(
          0,
          (viewportHeight - element.getBoundingClientRect().top) / distance
        )
      );
      // Suavizado en los extremos: arranca y frena con suavidad.
      element.style.setProperty(cssVariable, String(raw * raw * (3 - 2 * raw)));
    };
    const schedule = () => {
      if (frameId === null) frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [cssVariable]);

  return ref;
}
