'use client';

import { useEffect, useState } from 'react';

import type { PetDsOverlayId } from '@/content/pet-design-system.types';

const TOAST_MS = 2400;

// Aviso abierto dentro del mini celular. El toast se cierra solo
export function usePetDsOverlay() {
  const [activeOverlay, setActiveOverlay] = useState<PetDsOverlayId | null>(
    null
  );

  useEffect(() => {
    if (activeOverlay !== 'toast') return;
    const timeoutId = window.setTimeout(() => setActiveOverlay(null), TOAST_MS);
    return () => window.clearTimeout(timeoutId);
  }, [activeOverlay]);

  return {
    activeOverlay,
    handleOpen: (id: PetDsOverlayId) =>
      setActiveOverlay(current => (current === id ? null : id)),
    handleClose: () => setActiveOverlay(null)
  };
}
