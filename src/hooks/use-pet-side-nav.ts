'use client';

import type { KeyboardEvent } from 'react';

import { useCaseStoryCounter } from '@/hooks/use-case-story-counter';

// Submenú lateral de PetRide: sigue el capítulo actual, salta al elegido y se
// recorre con las flechas. Escape lo cierra y devuelve el foco al capítulo.
export function usePetSideNav() {
  const { ref, section, isOpen, handleToggle, handleJump } =
    useCaseStoryCounter();

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const items = Array.from(
      ref.current?.querySelectorAll<HTMLButtonElement>('[data-pet-nav-item]') ??
        []
    );
    const current = items.indexOf(document.activeElement as HTMLButtonElement);

    if (event.key === 'Escape') {
      if (isOpen) handleToggle();
      (document.activeElement as HTMLElement | null)?.blur();
      return;
    }
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const step = event.key === 'ArrowDown' ? 1 : -1;
    // Desde la flor, abajo va al primer capítulo y arriba al último
    const next =
      current === -1
        ? step === 1
          ? 0
          : items.length - 1
        : (current + step + items.length) % items.length;
    items[next]?.focus();
  };

  return { ref, section, isOpen, handleToggle, handleJump, handleKeyDown };
}
