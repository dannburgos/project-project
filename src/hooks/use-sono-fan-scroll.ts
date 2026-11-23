'use client';

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore
} from 'react';

import {
  FAN_GOTO_EVENT,
  FAN_POSITION_EVENT,
  applyFan
} from '@/lib/case-story/sonopizza-fan';

// El abanico se mueve con el scroll solo cuando el caso va en el escenario de
// computador (igual que el escenario). Si no, las pantallas se pasan de a una
const STAGE_QUERY =
  '(min-width: 900px) and (prefers-reduced-motion: no-preference)';
// Qué tan rápido alcanza el abanico a la posición que marca el escenario:
// cuanto más alto, más suave (un pequeño deslizamiento sobre el del scroll)
const GLIDE_MS = 80;
const ARRIVED = 0.001;
// El texto de la pantalla cambia cuando el abanico deja de moverse: al pasar
// de largo por varias pantallas no se reinicia su entrada a cada paso
const TEXT_SETTLE_MS = 160;

const subscribeToQuery = (notify: () => void) => {
  const query = window.matchMedia(STAGE_QUERY);
  query.addEventListener('change', notify);
  return () => query.removeEventListener('change', notify);
};
const readQuery = () => window.matchMedia(STAGE_QUERY).matches;
const readServerQuery = () => false;

// El abanico de "El producto en acción". En computador el escenario le dice,
// con el scroll, en qué posición va (FAN_POSITION_EVENT, decimal de 0 a
// pantallas − 1) y los teléfonos se pintan cuadro a cuadro (applyFan), con un
// pequeño deslizamiento, sin pasar por React. React solo sabe cuál es la
// pantalla más cercana (active) para el texto y los puntos. Para ir a una
// pantalla (flechas, puntos, clic) se le pide al escenario que lleve el scroll
// hasta ella (FAN_GOTO_EVENT).
export function useSonoFanScroll(total: number) {
  const rootRef = useRef<HTMLDivElement>(null);
  const phonesRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [settled, setSettled] = useState(0);
  const isScroll = useSyncExternalStore(
    subscribeToQuery,
    readQuery,
    readServerQuery
  );

  useLayoutEffect(() => {
    const view = rootRef.current?.closest<HTMLElement>('[data-sono-view]');
    if (!isScroll || !view) return;

    let target = 0;
    let position = 0;
    let shown = 0;
    let frame = 0;
    let lastTime = 0;
    let settleTimer = 0;

    applyFan(phonesRef.current, position);
    setActive(shown);

    const tick = (time: number) => {
      const elapsed = lastTime ? Math.min(time - lastTime, 64) : 16;
      lastTime = time;
      position += (target - position) * (1 - Math.exp(-elapsed / GLIDE_MS));
      if (Math.abs(target - position) < ARRIVED) position = target;
      applyFan(phonesRef.current, position);

      const nearest = Math.round(position);
      if (nearest !== shown) {
        shown = nearest;
        setActive(nearest);
      }

      if (position === target) {
        frame = 0;
        lastTime = 0;
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const handlePosition = (event: Event) => {
      target = (event as CustomEvent<number>).detail;
      if (!frame) frame = requestAnimationFrame(tick);
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(
        () => setSettled(Math.round(target)),
        TEXT_SETTLE_MS
      );
    };

    view.addEventListener(FAN_POSITION_EVENT, handlePosition);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      view.removeEventListener(FAN_POSITION_EVENT, handlePosition);
    };
  }, [isScroll, total]);

  // Pasar a una pantalla: con el escenario, el scroll se desliza hasta ella y
  // el abanico la alcanza solo; sin él, cambia al instante
  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.min(Math.max(index, 0), total - 1);
      const view = rootRef.current?.closest<HTMLElement>('[data-sono-view]');
      if (!isScroll || !view) {
        setActive(clamped);
        return;
      }
      view.dispatchEvent(new CustomEvent(FAN_GOTO_EVENT, { detail: clamped }));
    },
    [isScroll, total]
  );

  // Pantalla cuyo texto (titular, párrafo, etiquetas y color de fondo) se
  // muestra: con scroll, la última en la que el abanico se quedó
  const textIndex = isScroll ? settled : active;

  return { rootRef, phonesRef, active, textIndex, isScroll, goTo };
}
