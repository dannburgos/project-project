'use client';

import { useEffect, useState, type RefObject } from 'react';

// Dice si bajo un elemento fijo (el logo) hay una superficie oscura. Las
// superficies oscuras se marcan con data-surface="dark". Se revisa al hacer
// scroll y al cambiar de página, cuadro a cuadro.
export function useSurfaceUnder(
  ref: RefObject<HTMLElement | null>,
  dependency: string
) {
  const [isDark, setIsDark] = useState(false);

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
        .find(item => !element.contains(item))
        ?.closest('[data-surface]');
      setIsDark(surface?.getAttribute('data-surface') === 'dark');
    };
    const schedule = () => {
      if (frameId === null) frameId = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    // El contenido de la página nueva tarda un instante en pintarse
    const timeoutId = window.setTimeout(schedule, 300);
    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [ref, dependency]);

  return isDark;
}
