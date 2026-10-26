'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

import { setupDesktopStage } from '@/lib/case-story/desktop-stage';
import { setupMobileFlow } from '@/lib/case-story/mobile-flow';
import { restoreSplitText, splitTextIntoLines } from '@/utils/split-lines.util';

gsap.registerPlugin(ScrollTrigger);

const DESKTOP_QUERY =
  '(min-width: 900px) and (prefers-reduced-motion: no-preference)';
const MOBILE_QUERY =
  '(max-width: 899px) and (prefers-reduced-motion: no-preference)';
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';
const RESIZE_DELAY_MS = 300;

// Recorrido de un caso. En computador, un escenario fijo que avanza un paso
// por gesto; en celular, una columna con entradas calmadas. Con "reducir
// movimiento", todo queda visible y quieto. Si cambia el ancho, se rearma
// (las líneas de los títulos dependen del ancho).
// Se usa useLayoutEffect: el escenario se fija con un envoltorio propio y hay
// que deshacerlo antes de que React quite la página.
export function useCaseStory<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const splitTitles = Array.from(
      root.querySelectorAll<HTMLElement>('[data-reveal], [data-ax-lines]')
    );
    let media: gsap.MatchMedia | null = null;

    const build = () => {
      media = gsap.matchMedia();
      media.add(
        DESKTOP_QUERY,
        () => {
          splitTitles.forEach(splitTextIntoLines);
          const teardown = setupDesktopStage(root);
          return () => {
            teardown();
            splitTitles.forEach(restoreSplitText);
          };
        },
        root
      );
      media.add(
        MOBILE_QUERY,
        () => {
          splitTitles.forEach(splitTextIntoLines);
          const teardown = setupMobileFlow(root, { isAnimated: true });
          return () => {
            teardown();
            splitTitles.forEach(restoreSplitText);
          };
        },
        root
      );
      media.add(
        REDUCED_QUERY,
        () => setupMobileFlow(root, { isAnimated: false }),
        root
      );
    };

    build();
    let lastWidth = window.innerWidth;
    let timeoutId: number | undefined;
    const handleResize = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        if (window.innerWidth === lastWidth) return;
        lastWidth = window.innerWidth;
        media?.revert();
        build();
      }, RESIZE_DELAY_MS);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      media?.revert();
    };
  }, []);

  return ref;
}
