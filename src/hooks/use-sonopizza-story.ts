'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

import { setupSonopizzaColumn } from '@/lib/case-story/sonopizza-column';
import { setupSonopizzaStage } from '@/lib/case-story/sonopizza-stage';

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_QUERY =
  '(min-width: 900px) and (prefers-reduced-motion: no-preference)';
const COLUMN_QUERY = '(max-width: 899px), (prefers-reduced-motion: reduce)';

// Recorrido del caso de Sonopizza. En computador, un escenario fijo que avanza
// un paso por gesto; en celular o con "reducir movimiento", las escenas van en
// columna, todo queda visible y el contador sigue la lectura.
export function useSonopizzaStory<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add(DESKTOP_QUERY, () => setupSonopizzaStage(root), root);
    media.add(COLUMN_QUERY, () => setupSonopizzaColumn(root), root);

    return () => media.revert();
  }, []);

  return ref;
}
