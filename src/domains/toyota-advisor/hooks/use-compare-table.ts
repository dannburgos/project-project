'use client';

import { useState } from 'react';

// Interruptor «Solo diferencias» de la comparación (encendido de entrada)
export function useCompareTable() {
  const [isOnlyDiff, setIsOnlyDiff] = useState(true);
  return { isOnlyDiff, handleToggle: () => setIsOnlyDiff(current => !current) };
}
