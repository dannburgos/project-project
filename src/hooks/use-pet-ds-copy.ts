'use client';

import { useEffect, useState } from 'react';

const COPIED_RESET_MS = 1600;

// Copia el código de un color y marca cuál se copió durante un momento
export function usePetDsCopy() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (!copiedId) return;
    const timeoutId = window.setTimeout(
      () => setCopiedId(null),
      COPIED_RESET_MS
    );
    return () => window.clearTimeout(timeoutId);
  }, [copiedId]);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } finally {
      setCopiedId(id);
    }
  };

  return { copiedId, handleCopy };
}
