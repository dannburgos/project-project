'use client';

import { useState } from 'react';

// Etapa abierta con un toque (móvil). En escritorio el detalle lo abre el
// scroll, no el mouse.
export function useStageSelection() {
  const [pinnedId, setPinnedId] = useState<string | null>(null);

  const handleTogglePin = (id: string) =>
    setPinnedId(current => (current === id ? null : id));
  const handleClearPin = () => setPinnedId(null);

  return { pinnedId, handleTogglePin, handleClearPin };
}
