'use client';

import { useEffect, useRef, useState } from 'react';

import { useActiveSection } from '@/hooks/use-active-section';
import { scrollPageTo } from '@/lib/page-scroll';

// Índice flotante del caso Qubo: dice en qué capítulo va la persona, cuánto
// lleva recorrido del caso y salta a cualquier capítulo. Solo se ve mientras
// el caso está en pantalla.
export function useQuboIndex(sectionIds: readonly string[]) {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const activeIndex = Math.max(0, sectionIds.indexOf(activeId));

  useEffect(() => {
    const story = ref.current?.closest<HTMLElement>('.qb-story');
    const element = ref.current;
    if (!story || !element) return;

    const update = () => {
      const rect = story.getBoundingClientRect();
      const range = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / range));
      element.style.setProperty('--qb-progress', String(progress));
      // Aparece al pasar la portada y se va cuando el caso termina
      setIsVisible(
        rect.top < -window.innerHeight * 0.5 && rect.bottom > window.innerHeight
      );
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const handleToggle = () => setIsOpen(current => !current);

  const handleJump = (index: number) => {
    setIsOpen(false);
    const target = document.getElementById(sectionIds[index]);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY;
    const isReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    // Con «reducir movimiento» el salto es directo; si no, usa el mismo
    // desplazador suave que el resto del sitio
    if (isReduced) window.scrollTo({ top });
    else scrollPageTo(top);
  };

  return { ref, isOpen, isVisible, activeIndex, handleToggle, handleJump };
}
