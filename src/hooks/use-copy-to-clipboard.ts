'use client';

import { useEffect, useState } from 'react';

const COPIED_RESET_MS = 2000;

// Copia un texto al portapapeles y marca "copiado" durante unos segundos.
export function useCopyToClipboard() {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (!hasCopied) return;
    const timeoutId = window.setTimeout(
      () => setHasCopied(false),
      COPIED_RESET_MS
    );
    return () => window.clearTimeout(timeoutId);
  }, [hasCopied]);

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
    } catch {
      setHasCopied(false);
    }
  };

  return { hasCopied, handleCopy };
}
