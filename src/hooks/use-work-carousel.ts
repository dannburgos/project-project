'use client';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const MOTION_QUERY = '(prefers-reduced-motion: no-preference)';
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';
const MOBILE_WIDTH = 900;
// Scroll que hace falta para pasar de un paso al siguiente
const STEP_VIEWPORTS = 0.5;
const EASE = 'expo.inOut';
const DURATION = 1;

type Rect = { left: number; top: number; width: number; height: number };

// Tamaño y lugar de la fila de tarjetas (referencia: motionin.design/nova)
function rowGeometry(stage: HTMLElement) {
  const width = stage.clientWidth;
  const height = stage.clientHeight;
  const isMobile = width < MOBILE_WIDTH;
  const cardWidth = isMobile ? 112 : Math.min(200, width * 0.14);
  const cardHeight = cardWidth * 1.7;
  return {
    width,
    height,
    cardWidth,
    cardHeight,
    gap: isMobile ? 12 : 16,
    left: isMobile ? width * 0.42 : width * 0.52,
    top: isMobile ? height - cardHeight - 112 : height / 2 - cardHeight / 2 + 48
  };
}

// Work al estilo Nova: la sección se fija y cada paso del scroll (o de las
// flechas) hace que la primera tarjeta de la fila crezca hasta volverse el
// fondo; las demás se corren a la izquierda. El paso 0 es la pantalla gris
// inicial, que no es ningún proyecto. Al volver, el fondo se encoge a su
// tarjeta. Tras el último proyecto, la página sigue hacia el cierre.
export function useWorkCarousel(count: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const stepRef = useRef(0);
  const goToRef = useRef<(target: number) => void>(() => {});

  useLayoutEffect(() => {
    const root = ref.current;
    const stage = root?.querySelector<HTMLElement>('[data-gallery-stage]');
    if (!root || !stage) return;
    const cards = Array.from(
      root.querySelectorAll<HTMLElement>('[data-gallery-card]')
    );

    // Ubica cada tarjeta para un paso: las ya vistas llenan el fondo (la
    // última encima) y las que faltan van en fila
    const layout = (target: number, isInstant = false) => {
      const row = rowGeometry(stage);
      cards.forEach((card, index) => {
        const isBackground = index < target;
        const slot = index - target;
        const rect: Rect = isBackground
          ? { left: 0, top: 0, width: row.width, height: row.height }
          : {
              left: row.left + slot * (row.cardWidth + row.gap),
              top: row.top,
              width: row.cardWidth,
              height: row.cardHeight
            };
        card.toggleAttribute('data-background', isBackground);
        card.toggleAttribute('inert', isBackground || rect.left > row.width);
        gsap.to(card, {
          ...rect,
          borderRadius: isBackground ? 0 : 16,
          zIndex: isBackground ? index + 1 : 20 + slot,
          duration: isInstant ? 0 : DURATION,
          ease: EASE,
          overwrite: true
        });
      });
    };

    const apply = (target: number) => {
      if (target === stepRef.current) return;
      stepRef.current = target;
      setStep(target);
      layout(target);
    };

    layout(0, true);
    const handleResize = () => layout(stepRef.current, true);
    window.addEventListener('resize', handleResize);

    const media = gsap.matchMedia();
    media.add(
      MOTION_QUERY,
      () => {
        const stepLength = window.innerHeight * STEP_VIEWPORTS;
        const trigger = ScrollTrigger.create({
          trigger: stage,
          start: 'top top',
          end: `+=${stepLength * count}`,
          pin: true,
          snap: {
            snapTo: 1 / count,
            duration: { min: 0.3, max: 0.8 },
            delay: 0.05,
            ease: 'power3.out'
          },
          onUpdate: self => apply(Math.round(self.progress * count))
        });
        goToRef.current = target =>
          gsap.to(window, {
            scrollTo: trigger.start + stepLength * target,
            duration: 0.9,
            ease: 'power3.inOut'
          });
        return () => {
          goToRef.current = () => {};
        };
      },
      root
    );
    // Sin movimiento: la sección no se fija y las flechas cambian el paso
    // sin animación
    media.add(
      REDUCED_QUERY,
      () => {
        goToRef.current = target => {
          stepRef.current = target;
          setStep(target);
          layout(target, true);
        };
      },
      root
    );

    return () => {
      window.removeEventListener('resize', handleResize);
      media.revert();
      gsap.killTweensOf(cards);
    };
  }, [count]);

  const handleGoTo = (target: number) =>
    goToRef.current(Math.max(0, Math.min(count, target)));
  const handlePrevious = () => handleGoTo(stepRef.current - 1);
  const handleNext = () => handleGoTo(stepRef.current + 1);
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') handleNext();
    if (event.key === 'ArrowLeft') handlePrevious();
  };

  return { ref, step, handleGoTo, handlePrevious, handleNext, handleKeyDown };
}
