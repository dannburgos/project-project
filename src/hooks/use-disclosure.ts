'use client';

import { useState } from 'react';

// Muestra u oculta un contenido extra al tocar un botón
export function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(current => !current);

  return { isOpen, handleToggle };
}
