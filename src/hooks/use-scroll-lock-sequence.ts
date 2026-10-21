'use client';

import { useEffect, useRef } from 'react';

import {
  SCROLL_LOCK_END_EVENT,
  SCROLL_LOCK_START_EVENT
} from '@/hooks/use-smooth-scroll';

// Desde tableta: en celular el recorrido se ve completo, sin tomar el scroll
const LOCK_QUERY = '(min-width: 768px)';
// Recorrido que hay que hacer con la rueda o el dedo para completar el módulo
const FULL_DISTANCE_PX = 900;
// Paso de cada tecla (flechas, espacio, avanzar página)
const KEY_STEP = 0.2;
// Pausa que separa un gesto del siguiente: mientras sigan llegando eventos
// más seguidos que esto (la inercia del trackpad), el módulo no suelta la
// página, para que lo que viene no se salte de golpe
const GESTURE_GAP_MS = 180;
// Margen para considerar que el módulo está completo en pantalla
const VIEW_TOLERANCE_PX = 2;

const NEXT_KEYS = new Set(['ArrowDown', 'PageDown', ' ']);
const PREVIOUS_KEYS = new Set(['ArrowUp', 'PageUp']);

type SequenceState = 'idle' | 'active' | 'done';

// Módulo con scroll propio. Cuando está completo en pantalla, toma el scroll:
// la página se congela (no sube ni baja) y la rueda, el trackpad, el dedo o
// el teclado avanzan su recorrido. Si se sube, el recorrido retrocede y al
// llegar al inicio suelta la página hacia arriba; al completarse, la suelta
// hacia abajo. El avance se publica como --sequence-progress (0 a 1) y el
// estado como data-state, sin volver a pintar React. Con "reducir
// movimiento" no toma el scroll: todo se ve completo.
export function useScrollLockSequence<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const lockQuery = window.matchMedia(LOCK_QUERY);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.style.setProperty('--sequence-progress', '1');
      element.dataset.state = 'done';
      return;
    }

    let progress = 0;
    let isLocked = false;
    // Al llegar a un extremo, se espera el fin del gesto antes de soltar
    let isReleasing = false;
    let lastEventTime = 0;
    let lastTouchY: number | null = null;
    let lastScrollY = window.scrollY;

    const render = () => {
      element.style.setProperty('--sequence-progress', String(progress));
      const state: SequenceState =
        progress >= 1 ? 'done' : isLocked ? 'active' : 'idle';
      element.dataset.state = state;
    };

    const isFullyInView = () => {
      const rect = element.getBoundingClientRect();
      const clearance =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--site-header-clearance'
          )
        ) * parseFloat(getComputedStyle(document.documentElement).fontSize) ||
        0;
      return (
        rect.top >= clearance - VIEW_TOLERANCE_PX &&
        rect.bottom <= window.innerHeight + VIEW_TOLERANCE_PX
      );
    };

    const lock = () => {
      if (isLocked) return;
      isLocked = true;
      window.dispatchEvent(new Event(SCROLL_LOCK_START_EVENT));
      render();
    };

    const unlock = () => {
      if (!isLocked) return;
      isLocked = false;
      isReleasing = false;
      window.dispatchEvent(new Event(SCROLL_LOCK_END_EVENT));
      render();
    };

    // Decide si un movimiento hacia abajo (direction 1) o arriba (-1) lo usa
    // el módulo. Devuelve true si el módulo se queda con el movimiento.
    const consume = (direction: 1 | -1, amount: number) => {
      if (!lockQuery.matches) return false;
      const now = performance.now();
      const isNewGesture = now - lastEventTime > GESTURE_GAP_MS;
      lastEventTime = now;

      if (isLocked && isReleasing) {
        // Sigue la inercia del mismo gesto: se queda quieto
        if (!isNewGesture) return true;
        unlock();
        return false;
      }

      const canMove = direction === 1 ? progress < 1 : progress > 0;
      if (!isLocked) {
        if (!canMove || !isFullyInView()) return false;
        lock();
      }

      progress = Math.min(1, Math.max(0, progress + direction * amount));
      if (progress === 1 || progress === 0) isReleasing = true;
      render();
      return true;
    };

    const handleWheel = (event: WheelEvent) => {
      const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
      if (delta === 0) return;
      const direction = delta > 0 ? 1 : -1;
      if (consume(direction, Math.abs(delta) / FULL_DISTANCE_PX)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      lastTouchY = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY;
      if (y === undefined || lastTouchY === null) return;
      const delta = lastTouchY - y;
      lastTouchY = y;
      if (delta === 0) return;
      if (consume(delta > 0 ? 1 : -1, Math.abs(delta) / FULL_DISTANCE_PX)) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof Element &&
        target.closest('input, textarea, select, [contenteditable]')
      ) {
        return;
      }
      const direction = NEXT_KEYS.has(event.key)
        ? 1
        : PREVIOUS_KEYS.has(event.key)
          ? -1
          : null;
      if (direction === null) return;
      // Cada tecla es un gesto propio
      lastEventTime = 0;
      if (consume(direction, KEY_STEP)) event.preventDefault();
    };

    // Si la página pasa el módulo sin tomarlo (por ejemplo, arrastrando la
    // barra de scroll), queda completo por arriba y en su inicio por abajo
    const handleScroll = () => {
      const isGoingDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY;
      // Si algo más movió la página (un enlace, la barra), el módulo suelta
      if (isLocked && !isFullyInView()) unlock();
      if (isLocked) return;
      const rect = element.getBoundingClientRect();
      if (isGoingDown && rect.bottom < 0) progress = 1;
      if (!isGoingDown && rect.top > window.innerHeight) progress = 0;
      render();
    };

    // Un enlace interno (por ejemplo, un capítulo del menú lateral) siempre
    // puede mover la página: el módulo suelta antes de que se desplace
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (
        isLocked &&
        target instanceof Element &&
        target.closest('a[href^="#"]')
      ) {
        unlock();
      }
    };

    render();
    document.addEventListener('click', handleClick, { capture: true });
    window.addEventListener('wheel', handleWheel, {
      passive: false,
      capture: true
    });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel, { capture: true });
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick, { capture: true });
      if (isLocked) window.dispatchEvent(new Event(SCROLL_LOCK_END_EVENT));
    };
  }, []);

  return ref;
}
