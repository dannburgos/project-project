'use client';

import { useEffect, useRef } from 'react';

// Solo en equipos con mouse: en pantallas táctiles no hay cursor que mostrar
const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)';
// Tiempo en que el círculo alcanza al puntero: el retraso que se nota. Es el
// mismo suavizado de Trayectoria, para que todo el sitio se sienta igual.
const RING_SMOOTHING_MS = 140;
// Por debajo de esta distancia el círculo ya llegó y se deja de animar
const SETTLE_PX = 0.1;

type Point = { x: number; y: number };

// Cursor propio: el punto va pegado al puntero y el círculo lo sigue con un
// leve retraso, frenando suave. Se mueve fuera de React (con variables CSS en
// cada cuadro) para que sea fluido. Si la persona tiene activada la opción de
// reducir movimiento, el círculo va pegado al punto, sin retraso.
export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!cursor || !dot || !ring) return;
    if (!window.matchMedia(FINE_POINTER_QUERY).matches) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const root = document.documentElement;
    // Oculta la flecha del sistema solo cuando el cursor propio ya funciona
    root.classList.add('has-custom-cursor');

    const target: Point = { x: 0, y: 0 };
    const ringPosition: Point = { x: 0, y: 0 };
    let frameId: number | null = null;
    let lastFrameTime = 0;
    let hasMoved = false;

    const place = (element: HTMLElement, point: Point) => {
      element.style.setProperty('--cursor-x', `${point.x}px`);
      element.style.setProperty('--cursor-y', `${point.y}px`);
    };

    const snapRing = () => {
      ringPosition.x = target.x;
      ringPosition.y = target.y;
      place(ring, ringPosition);
    };

    const step = (time: number) => {
      const elapsed = Math.min(64, time - lastFrameTime);
      lastFrameTime = time;
      const distanceX = target.x - ringPosition.x;
      const distanceY = target.y - ringPosition.y;
      if (Math.abs(distanceX) < SETTLE_PX && Math.abs(distanceY) < SETTLE_PX) {
        snapRing();
        frameId = null;
        return;
      }
      const progress = 1 - Math.exp(-elapsed / RING_SMOOTHING_MS);
      ringPosition.x += distanceX * progress;
      ringPosition.y += distanceY * progress;
      place(ring, ringPosition);
      frameId = requestAnimationFrame(step);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      target.x = event.clientX;
      target.y = event.clientY;
      place(dot, target);

      // La primera vez aparece donde está el puntero, sin viajar desde una
      // esquina
      if (!hasMoved || reducedMotion.matches) {
        snapRing();
        if (!hasMoved) {
          hasMoved = true;
          cursor.dataset.visible = 'true';
        }
        return;
      }
      if (frameId === null) {
        lastFrameTime = performance.now();
        frameId = requestAnimationFrame(step);
      }
    };

    // Se esconde al salir de la ventana y vuelve al entrar
    const handleLeave = () => {
      cursor.dataset.visible = 'false';
    };
    const handleEnter = () => {
      if (hasMoved) cursor.dataset.visible = 'true';
    };

    window.addEventListener('pointermove', handlePointerMove, {
      passive: true
    });
    root.addEventListener('mouseleave', handleLeave);
    root.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      root.removeEventListener('mouseleave', handleLeave);
      root.removeEventListener('mouseenter', handleEnter);
      root.classList.remove('has-custom-cursor');
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return { cursorRef, dotRef, ringRef };
}
