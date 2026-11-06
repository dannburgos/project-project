'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

import {
  setupPetrideMotion,
  setupPetrideStatic
} from '@/lib/case-story/petride-motion';

gsap.registerPlugin(ScrollTrigger);

const MOTION_QUERY = '(prefers-reduced-motion: no-preference)';
const STATIC_QUERY = '(prefers-reduced-motion: reduce)';

// Caso de PetRide con scroll libre. Con movimiento, cada módulo anima al
// llegar; con "reducir movimiento", todo queda visible y quieto.
export function usePetrideStory<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add(MOTION_QUERY, () => setupPetrideMotion(root), root);
    media.add(STATIC_QUERY, () => setupPetrideStatic(root), root);

    return () => media.revert();
  }, []);

  return ref;
}
