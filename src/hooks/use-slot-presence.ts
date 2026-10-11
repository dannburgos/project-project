'use client';

import { useEffect, useState } from 'react';

// Tiempo que una tarjeta tarda en recogerse hacia la línea antes de quitarse.
const EXIT_MS = 500;

export type SlotPhase = 'idle' | 'entering' | 'leaving';

type SlotState<T> = {
  currentId: string | null;
  shown: T | null;
  phase: SlotPhase;
};

// Controla la aparición y desaparición de una tarjeta en su lugar:
// - aparece (se despliega desde la línea) cuando llega una etapa a un lugar vacío;
// - si ya había una, se queda y solo cambia su contenido;
// - desaparece (se recoge hacia la línea) cuando el lugar queda vacío.
export function useSlotPresence<T extends { id: string }>(item: T | null) {
  const [state, setState] = useState<SlotState<T>>(() => ({
    currentId: item?.id ?? null,
    shown: item,
    phase: item ? 'entering' : 'idle'
  }));

  const itemId = item?.id ?? null;
  if (state.currentId !== itemId) {
    if (item) {
      const isReplacing = state.shown !== null && state.phase !== 'leaving';
      setState({
        currentId: itemId,
        shown: item,
        phase: isReplacing && state.phase !== 'entering' ? 'idle' : 'entering'
      });
    } else {
      setState({ currentId: null, shown: state.shown, phase: 'leaving' });
    }
  }

  useEffect(() => {
    if (state.phase !== 'leaving') return;
    const timer = setTimeout(() => {
      setState(current =>
        current.phase === 'leaving'
          ? { ...current, shown: null, phase: 'idle' }
          : current
      );
    }, EXIT_MS);
    return () => clearTimeout(timer);
  }, [state.phase]);

  return { shown: state.shown, phase: state.phase };
}
