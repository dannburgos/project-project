'use client';

import { useState } from 'react';

type SlotsState<T> = {
  signature: string;
  slots: (T | null)[];
};

// Reparte las etapas abiertas en lugares fijos. Una etapa que sigue abierta
// conserva su lugar; las nuevas ocupan los lugares libres. Así una tarjeta no
// salta de un lado a otro cuando cambian sus vecinas.
export function useStableSlots<T extends { id: string }>(
  items: readonly T[],
  count: number
) {
  const signature = items.map(item => item.id).join('|');
  const [state, setState] = useState<SlotsState<T>>(() => ({
    signature,
    slots: Array.from({ length: count }, (_, index) => items[index] ?? null)
  }));

  if (state.signature !== signature) {
    const slots = state.slots.map(
      slot => items.find(item => item.id === slot?.id) ?? null
    );
    items
      .filter(item => !slots.some(slot => slot?.id === item.id))
      .forEach(item => {
        const free = slots.indexOf(null);
        if (free !== -1) slots[free] = item;
      });
    setState({ signature, slots });
  }

  return state.slots;
}
