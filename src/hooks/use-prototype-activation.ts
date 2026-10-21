'use client';

import { useState } from 'react';

// Prototipo dentro de un caso: queda quieto hasta que la persona hace clic en
// él (así el scroll de la página no se queda atrapado adentro) y se suelta al
// sacar el mouse.
export function usePrototypeActivation() {
  const [isActive, setIsActive] = useState(false);

  const handleActivate = () => setIsActive(true);
  const handleDeactivate = () => setIsActive(false);

  return { isActive, handleActivate, handleDeactivate };
}
