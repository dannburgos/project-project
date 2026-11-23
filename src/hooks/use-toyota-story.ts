'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

import {
  setupToyotaMotion,
  setupToyotaStatic
} from '@/lib/case-story/toyota-motion';

gsap.registerPlugin(ScrollTrigger);

const MOTION_QUERY = '(prefers-reduced-motion: no-preference)';
const STATIC_QUERY = '(prefers-reduced-motion: reduce)';

// Caso de Toyota con scroll libre. Con movimiento, cada módulo se revela al
// llegar; con «reducir movimiento», todo queda visible y quieto, y los saltos
// del índice son directos.
export function useToyotaStory<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add(MOTION_QUERY, () => setupToyotaMotion(root), root);
    media.add(STATIC_QUERY, () => setupToyotaStatic(root), root);

    return () => media.revert();
  }, []);

  return ref;
}
