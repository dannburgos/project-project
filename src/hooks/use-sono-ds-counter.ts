'use client';

import { useState } from 'react';

const MIN = 1;
const MAX = 9;

// Contador de cantidad del sistema de diseño de Sonopizza: de 1 a 9
export function useSonoDsCounter(initial = MIN) {
  const [count, setCount] = useState(initial);
  const handleDecrease = () => setCount(value => Math.max(MIN, value - 1));
  const handleIncrease = () => setCount(value => Math.min(MAX, value + 1));

  return {
    count,
    canDecrease: count > MIN,
    canIncrease: count < MAX,
    handleDecrease,
    handleIncrease
  };
}
