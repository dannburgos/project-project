'use client';

import { useEffect, useState } from 'react';

// Cuenta de 0 hasta un valor cuando "isActive" pasa a verdadero. Con "reducir
// movimiento" muestra el valor final de inmediato.
export function useCountUp(target: number, isActive: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frameId = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frameId);
    }

    let frameId = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const raw = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - raw, 3);
      setValue(Math.round(target * eased));
      if (raw < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, isActive, duration]);

  return value;
}
