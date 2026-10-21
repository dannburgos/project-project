'use client';

import { useState } from 'react';

// La entrada corre una vez por carga del sitio: si la persona se mueve entre
// páginas y vuelve al Home, no se repite. Al recargar el Home, sí.
let hasPlayedThisLoad = false;

// true si el sitio se abrió (o se recargó) directo en el Home. Si se abrió en
// otra página y se llegó al Home navegando, la entrada no corre. En el
// servidor no se sabe: se pinta la capa de la entrada, para que el Home no se
// asome antes de que empiece.
function isHomeTheOpeningPage() {
  if (typeof window === 'undefined') return true;
  const [navigation] = performance.getEntriesByType('navigation');
  if (!navigation) return true;
  return new URL(navigation.name).pathname === '/';
}

// Entrada del sitio en el Home: completa cada vez que se entra o se recarga
// (decisión de Dann)
export function useSiteIntro() {
  const [isPlaying, setIsPlaying] = useState(
    () => !hasPlayedThisLoad && isHomeTheOpeningPage()
  );

  const handleDone = () => {
    hasPlayedThisLoad = true;
    setIsPlaying(false);
  };

  return { isPlaying, handleDone };
}
