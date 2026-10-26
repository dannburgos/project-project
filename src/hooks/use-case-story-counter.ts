'use client';

import { useEffect, useRef, useState } from 'react';

import { STORY_JUMP_EVENT, STORY_SECTION_EVENT } from '@/lib/case-story/motion';

// Contador discreto del recorrido: escucha en qué sección va el escenario y,
// al elegir una de la lista, le pide que salte a ella.
export function useCaseStoryCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const story = ref.current?.closest('[data-case-story]');
    if (!story) return;
    const handleSection = (event: Event) => {
      setSection((event as CustomEvent<number>).detail);
    };
    story.addEventListener(STORY_SECTION_EVENT, handleSection);
    return () => story.removeEventListener(STORY_SECTION_EVENT, handleSection);
  }, []);

  const handleToggle = () => setIsOpen(current => !current);

  const handleJump = (index: number) => {
    setIsOpen(false);
    ref.current
      ?.closest('[data-case-story]')
      ?.dispatchEvent(new CustomEvent(STORY_JUMP_EVENT, { detail: index }));
  };

  return { ref, section, isOpen, handleToggle, handleJump };
}
