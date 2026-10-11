'use client';

import { useEffect, useState, type ReactNode } from 'react';

// Tiempo que el contenido anterior sigue en pantalla mientras se va.
const EXIT_MS = 250;

export type RollingItem = {
  key: number;
  content: ReactNode;
  isLeaving: boolean;
  isInitial: boolean;
};

type RollingState = {
  id: string;
  items: RollingItem[];
  nextKey: number;
};

// Guarda el contenido anterior junto al nuevo durante un instante para que el
// cambio entre los dos sea suave. `id` identifica el contenido: si no cambia,
// no hay animación.
export function useRollingValue(id: string, content: ReactNode) {
  const [state, setState] = useState<RollingState>(() => ({
    id,
    items: [{ key: 0, content, isLeaving: false, isInitial: true }],
    nextKey: 1
  }));

  if (state.id !== id) {
    setState({
      id,
      nextKey: state.nextKey + 1,
      items: [
        ...state.items.map(item =>
          item.isLeaving ? item : { ...item, isLeaving: true }
        ),
        { key: state.nextKey, content, isLeaving: false, isInitial: false }
      ]
    });
  }

  const leavingKeys = state.items
    .filter(item => item.isLeaving)
    .map(item => item.key)
    .join(',');

  useEffect(() => {
    if (!leavingKeys) return;
    const timer = setTimeout(() => {
      setState(current => ({
        ...current,
        items: current.items.filter(item => !item.isLeaving)
      }));
    }, EXIT_MS);
    return () => clearTimeout(timer);
  }, [leavingKeys]);

  return state.items;
}
