'use client';

import { useState } from 'react';

// Página de prueba de la entrada: corre una vez al abrirla y luego se quita.
// Para verla de nuevo, se recarga la página.
export function useIntroPreview() {
  const [isPlaying, setIsPlaying] = useState(true);

  const handleDone = () => setIsPlaying(false);

  return { isPlaying, handleDone };
}
