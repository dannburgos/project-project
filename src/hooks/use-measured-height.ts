'use client';

import { useEffect, useRef, useState } from 'react';

// Mide la altura del contenido para que su contenedor pueda cambiar de tamaño
// con una transición en lugar de saltar.
export function useMeasuredHeight<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [height, setHeight] = useState<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.borderBoxSize?.[0]?.blockSize ?? element.offsetHeight);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, height };
}
