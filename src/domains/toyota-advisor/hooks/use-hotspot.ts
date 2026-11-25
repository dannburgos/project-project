'use client';

import { useState } from 'react';

// Punto activo del recorrido por el vehículo: al pasar el cursor por un
// punto o por su texto, los dos se marcan juntos
export function useHotspot(initial = 0) {
  const [active, setActive] = useState(initial);
  return { active, handleFocus: (index: number) => setActive(index) };
}
