'use client';

import { useEffect } from 'react';

// Selector de las superficies de vidrio que reaccionan al cursor
export const GLASS_SELECTOR = '[data-glass]';

// En todo el sitio, las superficies de vidrio reciben la posición del cursor
// (--glass-x, --glass-y) para que su brillo naranja lo siga
export function useGlassGlow() {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const glass = target?.closest<HTMLElement>(GLASS_SELECTOR);
      if (!glass) return;
      const rect = glass.getBoundingClientRect();
      glass.style.setProperty('--glass-x', `${event.clientX - rect.left}px`);
      glass.style.setProperty('--glass-y', `${event.clientY - rect.top}px`);
    };
    document.addEventListener('pointermove', handlePointerMove, {
      passive: true
    });
    return () => document.removeEventListener('pointermove', handlePointerMove);
  }, []);
}
