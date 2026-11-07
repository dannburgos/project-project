'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

import { setupDesignSystemMosaic } from '@/lib/case-story/design-system-motion';

gsap.registerPlugin(ScrollTrigger);

// El mosaico se arma con el scroll solo en computador y con movimiento; en
// celular o con "reducir movimiento" queda armado y quieto
const MOSAIC_QUERY =
  '(min-width: 900px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)';

export function useDesignSystemStory<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const media = gsap.matchMedia();
    media.add(MOSAIC_QUERY, () => setupDesignSystemMosaic(root), root);
    return () => media.revert();
  }, []);

  return ref;
}
