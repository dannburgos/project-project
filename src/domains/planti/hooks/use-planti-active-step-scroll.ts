'use client';

import { useEffect, useRef } from 'react';

// Mantiene a la vista el paso que se está reproduciendo dentro de la lista
export function usePlantiActiveStepScroll<T extends HTMLElement>(
  activeKey: string | null
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const active = ref.current?.querySelector<HTMLElement>(
      '[data-active="true"]'
    );
    active?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [activeKey]);

  return ref;
}
