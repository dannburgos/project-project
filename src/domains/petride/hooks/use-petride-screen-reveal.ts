'use client';

import { useEffect, useRef, useState } from 'react';

import type { PetrideMotionPhase } from '../types/petride.types';

// Cuánto de la pantalla debe verse para que arranque, y una pausa corta para
// que el celular termine de aparecer en el caso antes de moverse
const REVEAL_THRESHOLD = 0.6;
const START_DELAY_MS = 260;

// Arranca las microinteracciones de una pantalla cuando se revela en el caso
// (la pantalla vive en un iframe, así que se mide contra la ventana de arriba)
// y las deja listas para repetirse cuando sale de vista
export function usePetrideScreenReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<PetrideMotionPhase>('idle');
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let timer = 0;
    let hasPlayed = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Arranca cuando se ve lo suficiente; mientras quede algo a la
        // vista no se toca, para que no parpadee al pasar por el borde
        if (entry.intersectionRatio >= REVEAL_THRESHOLD) {
          if (hasPlayed || timer) return;
          timer = window.setTimeout(() => {
            timer = 0;
            hasPlayed = true;
            setPhase('play');
          }, START_DELAY_MS);
          return;
        }
        if (entry.isIntersecting) return;
        // Solo cuando sale del todo se reinicia, lista para repetirse
        window.clearTimeout(timer);
        timer = 0;
        if (hasPlayed) {
          hasPlayed = false;
          setCycle(count => count + 1);
          setPhase('idle');
        }
      },
      { threshold: [0, REVEAL_THRESHOLD] }
    );

    observer.observe(node);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return { ref, phase, cycle };
}
