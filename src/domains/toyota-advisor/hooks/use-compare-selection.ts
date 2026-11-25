'use client';

import { useState } from 'react';

import type { ToyotaModelId } from '../types/toyota-advisor.types';

const MAX_COMPARE = 3;
const MIN_COMPARE = 2;

// Modelos marcados para comparar desde el resultado: hasta 3, al menos 2
export function useCompareSelection(initial: readonly ToyotaModelId[]) {
  const [selected, setSelected] = useState<readonly ToyotaModelId[]>(initial);

  const handleToggle = (id: ToyotaModelId) =>
    setSelected(current =>
      current.includes(id)
        ? current.filter(item => item !== id)
        : current.length < MAX_COMPARE
          ? [...current, id]
          : current
    );

  return {
    selected,
    handleToggle,
    isReady: selected.length >= MIN_COMPARE,
    isFull: selected.length >= MAX_COMPARE,
    max: MAX_COMPARE
  };
}
