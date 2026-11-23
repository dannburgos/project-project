'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { useEffect } from 'react';

import { setPageScroller } from '@/lib/page-scroll';

gsap.registerPlugin(ScrollTrigger);

// Cuánto alcanza el scroll suavizado al real en cada cuadro (0 a 1). Más bajo
// = más retraso. 0.1 es el valor de Lenis, la librería que usa la referencia
// (karolinahess.com).
const SCROLL_LERP = 0.1;

// Señales para que un módulo con scroll propio tome el control: mientras lo
// tiene, el scroll suave de la página se pausa y la página no se mueve.
export const SCROLL_LOCK_START_EVENT = 'portfolio:scroll-lock-start';
export const SCROLL_LOCK_END_EVENT = 'portfolio:scroll-lock-end';

// Suaviza el scroll de la página mientras está activo: la página sigue a la
// rueda del mouse con un leve retraso y frena suave, sin saltos. En pantallas
// táctiles queda el scroll del sistema, y se apaga si la persona tiene
// activada la opción de reducir movimiento.
// Lenis y GSAP van con un solo reloj (el de GSAP): el scroll suave, los
// ScrollTrigger y las animaciones ligadas al scroll se calculan en el mismo
// cuadro, sin desfases entre ellos.
export function useSmoothScroll(isEnabled = true) {
  useEffect(() => {
    if (!isEnabled) return;
    const lenis = new Lenis({
      lerp: SCROLL_LERP,
      autoRaf: false,
      // "Volver arriba" y otros enlaces internos también se desplazan suave.
      anchors: true
    });
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    // Sin recortes de tiempo tras un cuadro lento: el scroll no debe saltar
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll', ScrollTrigger.update);
    setPageScroller(lenis);

    const handleLockStart = () => lenis.stop();
    const handleLockEnd = () => lenis.start();
    window.addEventListener(SCROLL_LOCK_START_EVENT, handleLockStart);
    window.addEventListener(SCROLL_LOCK_END_EVENT, handleLockEnd);
    return () => {
      window.removeEventListener(SCROLL_LOCK_START_EVENT, handleLockStart);
      window.removeEventListener(SCROLL_LOCK_END_EVENT, handleLockEnd);
      setPageScroller(null);
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    };
  }, [isEnabled]);
}
