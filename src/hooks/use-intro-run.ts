'use client';

import { useEffect, useRef } from 'react';

export type IntroRun = {
  // Guarda una animación: así se puede acelerar si la persona salta la entrada
  // y cancelar si el componente se desmonta
  track: (animation: Animation) => Animation;
  // true si el componente se desmontó
  isStopped: () => boolean;
};

// Cualquiera de estos gestos salta la entrada
const SKIP_EVENTS = ['pointerdown', 'keydown', 'wheel', 'touchmove'] as const;
// Saltar no corta en seco: acelera lo que queda para terminar rápido y sin
// saltos bruscos
const SKIP_PLAYBACK_RATE = 4;

// Corre una entrada del sitio: ejecuta la secuencia de animaciones y avisa al
// terminar. Se salta con clic, tecla o scroll (acelera hasta el final), y no
// corre si la persona tiene activada la opción de reducir movimiento (termina
// al instante).
export function useIntroRun(
  play: (run: IntroRun) => Promise<void>,
  onDone: () => void
) {
  const playRef = useRef(play);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    playRef.current = play;
    onDoneRef.current = onDone;
  });

  useEffect(() => {
    let isStopped = false;
    let hasFinished = false;
    let playbackRate = 1;
    const running: Animation[] = [];

    const finish = () => {
      if (hasFinished) return;
      hasFinished = true;
      onDoneRef.current();
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish();
      return;
    }

    const removeSkipListeners = () =>
      SKIP_EVENTS.forEach(type => window.removeEventListener(type, handleSkip));

    function handleSkip() {
      playbackRate = SKIP_PLAYBACK_RATE;
      running.forEach(animation => animation.updatePlaybackRate(playbackRate));
      removeSkipListeners();
    }

    SKIP_EVENTS.forEach(type =>
      window.addEventListener(type, handleSkip, { passive: true })
    );

    playRef
      .current({
        track: animation => {
          if (playbackRate !== 1) animation.updatePlaybackRate(playbackRate);
          running.push(animation);
          return animation;
        },
        isStopped: () => isStopped
      })
      .then(() => {
        if (!isStopped) finish();
      })
      // Al cancelar, las animaciones rechazan su promesa: no es un error
      .catch(() => {});

    return () => {
      isStopped = true;
      removeSkipListeners();
      running.forEach(animation => animation.cancel());
    };
  }, []);
}
