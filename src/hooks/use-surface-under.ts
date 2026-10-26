'use client';

import { useEffect, useState, type RefObject } from 'react';

export type SurfaceTone = 'dark' | 'light' | null;

// Aviso para revisar de nuevo cuando el fondo cambia sin que la página se
// mueva (por ejemplo, una capa que entra en un escenario fijo)
export const SURFACE_CHANGE_EVENT = 'portfolio:surface-change';

// Dice qué superficie hay bajo un elemento fijo (el logo, el menú). Las
// superficies se marcan con data-surface="dark" o data-surface="light"; sin
// marca, es el fondo normal del sitio. Se revisa al hacer scroll y al cambiar
// de página, cuadro a cuadro.
export function useSurfaceUnder(
  ref: RefObject<HTMLElement | null>,
  dependency: string
) {
  const [tone, setTone] = useState<SurfaceTone>(null);

  useEffect(() => {
    let frameId: number | null = null;

    const update = () => {
      frameId = null;
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const stack = document.elementsFromPoint(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
      );
      const surface = stack
        // Lo primero que no sea el propio elemento ni lo que lo envuelve
        .find(item => !element.contains(item) && !item.contains(element))
        ?.closest('[data-surface]');
      const value = surface?.getAttribute('data-surface');
      setTone(value === 'dark' || value === 'light' ? value : null);
    };
    const schedule = () => {
      if (frameId === null) frameId = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener(SURFACE_CHANGE_EVENT, schedule);
    // El contenido de la página nueva tarda un instante en pintarse
    const timeoutId = window.setTimeout(schedule, 300);
    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener(SURFACE_CHANGE_EVENT, schedule);
    };
  }, [ref, dependency]);

  return tone;
}
