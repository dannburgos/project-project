'use client';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  type KeyboardEvent,
  type PointerEvent,
  useEffect,
  useRef,
  useState
} from 'react';

import {
  SCROLL_LOCK_END_EVENT,
  SCROLL_LOCK_START_EVENT
} from '@/hooks/use-smooth-scroll';

type UseProgressCarOptions = {
  section: number;
  total: number;
  onJump: (index: number) => void;
};

function clampProgress(value: number) {
  return Math.min(1, Math.max(0, value));
}

// Inicio y recorrido del avance del caso, en px de la página: el mismo tramo
// que mide la línea (de arriba del caso a su final)
function storyRange(story: HTMLElement) {
  const top = story.getBoundingClientRect().top + window.scrollY;
  const range = Math.max(1, story.scrollHeight - window.innerHeight);
  return { top, range };
}

// El auto del avance como control:
// - hitos: dónde empieza cada capítulo sobre la línea (0 a 1), medidos en la
//   página y vueltos a medir cuando cambia el tamaño
// - arrastre: tomar el auto y moverlo por la línea recorre el caso
// - teclado: con las flechas, el auto salta de capítulo en capítulo
export function useProgressCar({
  section,
  total,
  onJump
}: UseProgressCarOptions) {
  const roadRef = useRef<HTMLDivElement>(null);
  const grabRef = useRef(0);
  const isDraggingRef = useRef(false);
  const [marks, setMarks] = useState<number[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const story = roadRef.current?.closest<HTMLElement>('[data-case-story]');
    if (!story) return;
    const measure = () => {
      const { top, range } = storyRange(story);
      const chapters = Array.from(
        story.querySelectorAll<HTMLElement>('[data-ty-chapter]')
      ).sort(
        (a, b) => Number(a.dataset.tyChapter) - Number(b.dataset.tyChapter)
      );
      // Un capítulo empieza cuando su borde de arriba cruza la mitad de la
      // pantalla, igual que el índice
      setMarks(
        chapters.map(chapter => {
          const start =
            chapter.getBoundingClientRect().top +
            window.scrollY -
            window.innerHeight / 2;
          return clampProgress((start - top) / range);
        })
      );
    };
    measure();
    ScrollTrigger.addEventListener('refresh', measure);
    return () => ScrollTrigger.removeEventListener('refresh', measure);
  }, []);

  const scrollToProgress = (progress: number) => {
    const story = roadRef.current?.closest<HTMLElement>('[data-case-story]');
    if (!story) return;
    const { top, range } = storyRange(story);
    window.scrollTo({ top: top + progress * range, behavior: 'instant' });
    ScrollTrigger.update();
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const car = event.currentTarget;
    car.setPointerCapture(event.pointerId);
    grabRef.current = event.clientX - car.getBoundingClientRect().left;
    isDraggingRef.current = true;
    setIsDragging(true);
    // El scroll suave se pausa mientras el auto manda
    window.dispatchEvent(new Event(SCROLL_LOCK_START_EVENT));
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const road = roadRef.current;
    if (!isDraggingRef.current || !road) return;
    const rect = road.getBoundingClientRect();
    const free = Math.max(1, rect.width - event.currentTarget.offsetWidth);
    scrollToProgress(
      clampProgress((event.clientX - rect.left - grabRef.current) / free)
    );
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    isDraggingRef.current = false;
    setIsDragging(false);
    window.dispatchEvent(new Event(SCROLL_LOCK_END_EVENT));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = total - 1;
    const targets: Record<string, number> = {
      ArrowRight: Math.min(section + 1, last),
      ArrowUp: Math.min(section + 1, last),
      ArrowLeft: Math.max(section - 1, 0),
      ArrowDown: Math.max(section - 1, 0),
      Home: 0,
      End: last
    };
    if (!(event.key in targets)) return;
    event.preventDefault();
    onJump(targets[event.key]);
    // El salto lleva el foco al título del capítulo; aquí vuelve al auto
    // para seguir manejándolo con las flechas (su valor dice el capítulo)
    event.currentTarget.focus({ preventScroll: true });
  };

  return {
    roadRef,
    marks,
    isDragging,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handleKeyDown
  };
}
