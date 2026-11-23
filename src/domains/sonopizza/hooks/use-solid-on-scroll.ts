'use client';

import { useEffect, useRef, useState } from 'react';

// Distancia que se "devuelve" para volver a transparente: evita que la barra
// parpadee cuando el scroll queda justo en el límite
const HYSTERESIS = 12;

// Dice si un contenedor que se desplaza ya bajó lo suficiente como para que su
// barra de arriba pase a ser sólida. El cambio es un estado de dos valores (no
// sigue al dedo), así la barra hace una transición corta y nunca queda a
// medias mientras se desplaza
export function useSolidOnScroll(threshold: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      const { scrollTop } = element;
      setIsSolid(previous =>
        previous ? scrollTop > threshold - HYSTERESIS : scrollTop > threshold
      );
    };

    update();
    element.addEventListener('scroll', update, { passive: true });
    return () => element.removeEventListener('scroll', update);
  }, [threshold]);

  return { ref, isSolid };
}
