'use client';

import { useEffect, useRef, useState } from 'react';

export type PlantiTimelineStatus = 'idle' | 'playing' | 'paused' | 'done';

// Cada cuánto se avisa del avance (20 veces por segundo, para que las letras
// del nombre salgan parejas)
const STEP_MS = 50;
// Tras adelantar o retroceder en pausa, las animaciones de la pantalla nueva
// corren un momento para que se vea completa
const SETTLE_MS = 900;

// El reloj del recorrido: avanza mientras se reproduce, se detiene al pausar,
// termina al llegar a la duración y se puede llevar a cualquier momento. Todo
// lo que se ve sale de este tiempo.
export function usePlantiTimeline(durationMs: number) {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [status, setStatus] = useState<PlantiTimelineStatus>('idle');
  const [isSettling, setIsSettling] = useState(false);
  const exactMsRef = useRef(0);
  const settleTimeoutRef = useRef(0);

  useEffect(() => {
    if (status !== 'playing') return;

    let frameId = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      exactMsRef.current = Math.min(
        durationMs,
        exactMsRef.current + (now - lastTime)
      );
      lastTime = now;
      const stepped = Math.floor(exactMsRef.current / STEP_MS) * STEP_MS;
      setElapsedMs(stepped);

      if (exactMsRef.current >= durationMs) {
        setElapsedMs(durationMs);
        setStatus('done');
        return;
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [status, durationMs]);

  useEffect(() => () => window.clearTimeout(settleTimeoutRef.current), []);

  const settle = () => {
    setIsSettling(true);
    window.clearTimeout(settleTimeoutRef.current);
    settleTimeoutRef.current = window.setTimeout(
      () => setIsSettling(false),
      SETTLE_MS
    );
  };

  const goTo = (ms: number) => {
    const next = Math.min(Math.max(ms, 0), durationMs);
    exactMsRef.current = next;
    setElapsedMs(next);
    settle();
  };

  const handleStart = () => {
    exactMsRef.current = 0;
    setElapsedMs(0);
    setStatus('playing');
  };

  const handlePause = () => setStatus('paused');
  const handleResume = () => setStatus('playing');

  const handleReset = () => {
    exactMsRef.current = 0;
    setElapsedMs(0);
    setStatus('idle');
  };

  // Arrastrar la barra pausa y deja ver ese momento
  const handleScrub = (ms: number) => {
    goTo(ms);
    setStatus('paused');
  };

  // Saltar a otro paso respeta si estaba reproduciendo; desde el inicio o el
  // final queda en pausa en ese paso
  const handleJump = (ms: number) => {
    goTo(ms);
    setStatus(previous => (previous === 'playing' ? 'playing' : 'paused'));
  };

  return {
    elapsedMs,
    status,
    isSettling,
    progress: elapsedMs / durationMs,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
    handleScrub,
    handleJump
  };
}
