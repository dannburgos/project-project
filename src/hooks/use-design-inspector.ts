'use client';

import { useEffect, useState } from 'react';

import type { ToyotaDesignItem } from '@/content/toyota-story.types';

const COPIED_RESET_MS = 1400;

// Estado del inspector del sistema de diseño: qué elemento está elegido y qué
// valor se acaba de copiar.
export function useDesignInspector(items: readonly ToyotaDesignItem[]) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const active = items.find(item => item.id === activeId) ?? items[0];

  useEffect(() => {
    if (!copiedValue) return;
    const timer = window.setTimeout(
      () => setCopiedValue(null),
      COPIED_RESET_MS
    );
    return () => window.clearTimeout(timer);
  }, [copiedValue]);

  const handleSelect = (id: string) => setActiveId(id);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
    } catch {
      setCopiedValue(null);
    }
  };

  return { active, copiedValue, handleSelect, handleCopy };
}
