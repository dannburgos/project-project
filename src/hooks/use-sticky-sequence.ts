'use client';

import { useEffect, useRef } from 'react';

// Desde tableta y con movimiento: la pista se queda fija arriba mientras la
// página sigue bajando por una pasarela alta. En celular o con «reducir
// movimiento» no se fija: la pista se desliza con el dedo.
const SEQUENCE_QUERY =
  '(min-width: 768px) and (prefers-reduced-motion: no-preference)';
// Qué tan rápido alcanza el avance mostrado al avance real del scroll: es la
// constante de tiempo (ms). Menos es más pegado al scroll; más, más suave
const FOLLOW_TIME_MS = 120;
// Último tramo del recorrido en el que el movimiento frena hasta detenerse
// (fracción del recorrido en la que empieza a frenar)
const BRAKE_START = 0.72;

type SequenceState = 'idle' | 'active' | 'done';

// Frena el final: va a la misma velocidad del scroll hasta BRAKE_START y de
// ahí desacelera hasta cero justo al llegar a 1, como un impulso que se
// agota. La velocidad es continua en el cambio (sin tirón)
function brake(progress: number) {
  const norm = 1 - (1 - BRAKE_START) / 2;
  if (progress <= BRAKE_START) return progress / norm;
  const past = progress - BRAKE_START;
  return (BRAKE_START + past - (past * past) / (2 * (1 - BRAKE_START))) / norm;
}

type StickySequenceOptions = {
  // Scroll de la pasarela, al final, en el que la pista ya llegó y se queda
  // quieta: da a entender que el impulso terminó antes de soltar la página
  holdDistance?: number;
};

// Módulo con recorrido propio que se queda fijo (sticky) en pantalla mientras
// la página baja por su pasarela. A diferencia de tomar la rueda y congelar la
// página, el scroll nunca se interrumpe: es el mismo scroll de la página, así
// que entra y sale sin trabarse, también con la inercia del trackpad. El
// avance (0 a 1) se publica como --sequence-progress en la pasarela y el
// estado como data-state, sin volver a pintar React.
// El avance mostrado sigue al del scroll con un leve retraso (se suaviza en
// cada cuadro), frena al final y se queda quieto durante holdDistance antes
// de soltar la página.
// La pasarela es el elemento del ref; dentro va el escenario fijo, marcado
// con data-sequence-stage.
export function useStickySequence<T extends HTMLElement>({
  holdDistance = 0
}: StickySequenceOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const runway = ref.current;
    const stage = runway?.querySelector<HTMLElement>('[data-sequence-stage]');
    if (!runway || !stage) return;
    const query = window.matchMedia(SEQUENCE_QUERY);

    let target = 0;
    let current = 0;
    let frame = 0;
    let lastTime = 0;

    const publish = (progress: number) => {
      const state: SequenceState =
        progress >= 0.999 ? 'done' : progress > 0 ? 'active' : 'idle';
      runway.style.setProperty('--sequence-progress', String(progress));
      runway.dataset.state = state;
    };

    const step = (time: number) => {
      const elapsed = lastTime ? Math.min(64, time - lastTime) : 16;
      lastTime = time;
      current += (target - current) * (1 - Math.exp(-elapsed / FOLLOW_TIME_MS));
      if (Math.abs(target - current) < 0.0005) current = target;
      publish(current);
      if (current === target) {
        frame = 0;
        lastTime = 0;
        return;
      }
      frame = requestAnimationFrame(step);
    };

    const measure = () => {
      if (!query.matches) {
        target = 0;
        current = 0;
        publish(0);
        return;
      }
      // El escenario queda fijo a esta altura; el avance va del momento en
      // que la pasarela llega ahí hasta que su borde de abajo lo alcanza,
      // menos el tramo final en el que la pista ya no se mueve
      const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
      const moving = runway.offsetHeight - stage.offsetHeight - holdDistance;
      if (moving <= 0) {
        target = 0;
        publish(0);
        return;
      }
      const raw = (stickyTop - runway.getBoundingClientRect().top) / moving;
      target = brake(Math.min(1, Math.max(0, raw)));
      if (!frame) frame = requestAnimationFrame(step);
    };

    measure();
    // Al cargar, el avance parte ya en su sitio (sin animar desde cero)
    current = target;
    publish(current);
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    query.addEventListener('change', measure);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
      query.removeEventListener('change', measure);
    };
  }, [holdDistance]);

  return ref;
}
