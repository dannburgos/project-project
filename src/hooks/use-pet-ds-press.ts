'use client';

import { useEffect, useState } from 'react';

const LOADING_MS = 1600;

// Botón de prueba: al tocarlo queda cargando un momento y vuelve a la normalidad
export function usePetDsPress() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  useEffect(() => {
    if (!loadingId) return;
    const timeoutId = window.setTimeout(() => setLoadingId(null), LOADING_MS);
    return () => window.clearTimeout(timeoutId);
  }, [loadingId]);

  const handlePress = (id: string) => {
    if (loadingId) return;
    setLoadingId(id);
  };

  return { loadingId, handlePress };
}
