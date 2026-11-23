'use client';

import { useEffect, useRef } from 'react';

// Mide cuánto sobra a lo ancho una fila más larga que su marco y lo publica
// como --track-shift (en px) en la misma fila. Así el CSS puede llevarla de
// su inicio a su final con el avance del módulo, sin volver a pintar React.
// Se vuelve a medir cuando cambia el tamaño de la fila o del marco.
export function useHorizontalShift<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const rail = ref.current;
    const frame = rail?.parentElement;
    if (!rail || !frame) return;

    const measure = () => {
      const shift = Math.max(0, rail.scrollWidth - frame.clientWidth);
      rail.style.setProperty('--track-shift', `${shift}px`);
    };

    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    observer.observe(frame);
    measure();

    return () => observer.disconnect();
  }, []);

  return ref;
}
