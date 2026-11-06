'use client';

import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

// Un segundo después de entrar el banner se mueve por primera vez, y luego
// pasa al siguiente destacado cada 4 segundos
const INITIAL_DELAY_MS = 1000;
const INTERVAL_MS = 4000;
const SLIDE_DURATION_S = 0.9;
const SLIDE_EASE = 'power3.inOut';

// El banner avanza solo, porque en el prototipo nadie lo toca: así se ven los
// tres destacados. Con "reducir movimiento" se queda quieto en el primero.
export function usePlantiBannerAutoplay<T extends HTMLElement>(
  slideCount: number,
  // Apagado, el banner se queda en el primer destacado (para poder pulsarlo)
  isEnabled = true
) {
  const ref = useRef<T>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = ref.current;
    if (!track || !isEnabled) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const slides = Array.from(track.children) as HTMLElement[];
    const startPadding = parseFloat(getComputedStyle(track).paddingLeft);
    let index = 0;
    let timeoutId = 0;

    const goToNext = () => {
      index = (index + 1) % slideCount;
      setActiveIndex(index);
      gsap.to(track, {
        scrollLeft: slides[index].offsetLeft - startPadding,
        duration: SLIDE_DURATION_S,
        ease: SLIDE_EASE
      });
      timeoutId = window.setTimeout(goToNext, INTERVAL_MS);
    };

    timeoutId = window.setTimeout(goToNext, INITIAL_DELAY_MS);

    return () => {
      window.clearTimeout(timeoutId);
      gsap.killTweensOf(track);
    };
  }, [slideCount, isEnabled]);

  return { ref, activeIndex };
}
