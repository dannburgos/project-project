'use client';

import { gsap } from 'gsap';
import {
  type KeyboardEvent as ReactKeyboardEvent,
  useLayoutEffect,
  useRef,
  useState
} from 'react';

import { queryAll } from '@/lib/case-story/motion';
import type { SonoSlidesMotion } from '@/lib/case-story/slides-motion.types';

// Igual que el escenario del caso: en computador y sin "reducir movimiento"
// las slides van una encima de otra; si no, en columna y todas visibles
const DESKTOP_QUERY =
  '(min-width: 900px) and (prefers-reduced-motion: no-preference)';

function isHidden(element: HTMLElement | null) {
  return !element || element.style.visibility === 'hidden';
}

// Slides de una escena de Sonopizza (benchmark, flujos principales). Se
// pasan con clic (flechas y pestañas) o con ← y → mientras la escena está a
// la vista, nunca con el scroll: el scroll sigue moviendo el escenario. Cada
// escena define su cambio animado en `motion`. Si la escena se esconde,
// vuelve a la primera slide.
export function useSonoSlides<T extends HTMLElement>(
  count: number,
  motion: SonoSlidesMotion
) {
  const ref = useRef<T>(null);
  const [current, setCurrent] = useState(0);
  // Slide que se ve en pantalla (la animación puede ir detrás del estado)
  const shownRef = useRef(0);
  // Contexto de GSAP en computador; null en columna
  const contextRef = useRef<gsap.Context | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const goTo = (index: number) =>
    setCurrent(Math.min(Math.max(index, 0), count - 1));
  const handleNext = () => goTo(current + 1);
  const handlePrevious = () => goTo(current - 1);

  // Espacio y Enter sobre los botones no deben llegar al escenario, que los
  // usa para avanzar de escena
  const handleNavKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') event.stopPropagation();
  };

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const view = root.closest<HTMLElement>('[data-sono-view]');
    const media = gsap.matchMedia();

    media.add(
      DESKTOP_QUERY,
      context => {
        contextRef.current = context;
        gsap.set(queryAll(root, motion.slide), {
          autoAlpha: (index: number) => (index === shownRef.current ? 1 : 0)
        });

        const handleKeyDown = (event: KeyboardEvent) => {
          if (isHidden(view)) return;
          const step =
            event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
          if (!step) return;
          event.preventDefault();
          setCurrent(index => Math.min(Math.max(index + step, 0), count - 1));
        };
        // La escena se esconde cuando el escenario pasa a otra: vuelve a la
        // primera para que se vea completa la próxima vez
        const observer = new MutationObserver(() => {
          if (isHidden(view)) setCurrent(0);
        });

        window.addEventListener('keydown', handleKeyDown);
        if (view) {
          observer.observe(view, {
            attributes: true,
            attributeFilter: ['style']
          });
        }
        return () => {
          contextRef.current = null;
          timelineRef.current = null;
          window.removeEventListener('keydown', handleKeyDown);
          observer.disconnect();
        };
      },
      root
    );

    return () => media.revert();
  }, [count, motion]);

  useLayoutEffect(() => {
    const root = ref.current;
    const context = contextRef.current;
    const from = shownRef.current;
    shownRef.current = current;
    if (!root || !context || from === current) return;

    const slides = queryAll(root, motion.slide);
    const outgoing = slides[from];
    const incoming = slides[current];
    if (!outgoing || !incoming) return;
    // Un clic durante la animación anterior la termina de una vez
    timelineRef.current?.progress(1);

    context.add(() => {
      // Escena escondida: cambio sin animación y la slide en reposo
      if (isHidden(root.closest<HTMLElement>('[data-sono-view]'))) {
        gsap.set(outgoing, { autoAlpha: 0 });
        gsap.set(incoming, { autoAlpha: 1 });
        motion.settle(incoming);
        return;
      }
      timelineRef.current = motion.transition(
        outgoing,
        incoming,
        current > from ? 1 : -1
      );
    });
  }, [current, motion]);

  return {
    ref,
    current,
    goTo,
    handleNext,
    handlePrevious,
    handleNavKeyDown
  };
}
