'use client';

import { useLayoutEffect, useRef } from 'react';

// Pantalla del celular (375 x 750) más su marco (12 px por lado)
const DEVICE_WIDTH = 375 + 24;
const DEVICE_HEIGHT = 750 + 24;
// Aire alrededor del celular, para que no se corte su sombra
const STAGE_MARGIN = 24;

// Escala el celular para que quepa entero en el área donde se muestra, sin
// deformarlo. Pone la escala en --planti-scale y avisa cuando ya la midió
// (data-ready) para no mostrarlo a medio acomodar.
export function usePlantiStageScale<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const stage = ref.current;
    if (!stage) return;

    const fit = () => {
      const scale = Math.min(
        (stage.clientWidth - STAGE_MARGIN * 2) / DEVICE_WIDTH,
        (stage.clientHeight - STAGE_MARGIN * 2) / DEVICE_HEIGHT
      );
      stage.style.setProperty('--planti-scale', String(Math.max(scale, 0.1)));
      stage.dataset.ready = 'true';
    };

    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return ref;
}
