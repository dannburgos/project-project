'use client';

import { useEffect, useState } from 'react';

// Duración total de la secuencia de entrada.
const INTRO_MS = 3200;

// Reloj de la secuencia de entrada al abrir o recargar la página: devuelve los
// milisegundos transcurridos. Con "reducir movimiento" la entrada se salta.
export function useJourneyIntro() {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const frameId = requestAnimationFrame(() => setElapsed(INTRO_MS));
      return () => cancelAnimationFrame(frameId);
    }

    const start = performance.now();
    let frameId = requestAnimationFrame(function tick(time) {
      const next = Math.min(INTRO_MS, time - start);
      setElapsed(next);
      if (next < INTRO_MS) frameId = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return elapsed;
}
