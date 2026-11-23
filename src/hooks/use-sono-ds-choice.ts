'use client';

import { useState } from 'react';

// Una opción elegida entre varias (pestañas, barra de navegación y tamaños de
// muestra del sistema de diseño de Sonopizza)
export function useSonoDsChoice(initial = 0) {
  const [selected, setSelected] = useState(initial);
  return { selected, handleSelect: setSelected };
}
