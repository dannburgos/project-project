'use client';

import Lenis from 'lenis';
import { useEffect } from 'react';

// Cuánto alcanza el scroll suavizado al real en cada cuadro (0 a 1). Más bajo
// = más retraso. 0.1 es el valor de Lenis, la librería que usa la referencia
// (karolinahess.com).
const SCROLL_LERP = 0.1;

// Suaviza el scroll de la página mientras está activo: la página sigue a la
// rueda del mouse con un leve retraso y frena suave, sin saltos. En pantallas
// táctiles queda el scroll del sistema, y se apaga si la persona tiene
// activada la opción de reducir movimiento.
export function useSmoothScroll(isEnabled = true) {
  useEffect(() => {
    if (!isEnabled) return;
    const lenis = new Lenis({
      lerp: SCROLL_LERP,
      autoRaf: true,
      // "Volver arriba" y otros enlaces internos también se desplazan suave.
      anchors: true
    });
    return () => lenis.destroy();
  }, [isEnabled]);
}
