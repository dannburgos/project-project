import { gsap } from 'gsap';

import { FAN_POSITION_EVENT } from '@/lib/case-story/sonopizza-fan';

// Movimiento propio del producto en acción (escena con data-motion="product"):
// las nueve pantallas del abanico se recorren con el scroll del escenario. Un
// valor de 0 a (pantallas − 1) viaja por la línea de tiempo y la escena se lo
// avisa al abanico (FAN_POSITION_EVENT), que lo pinta. Devuelve cuándo empieza
// y cuánto dura el recorrido (en segundos) para ubicar cada pantalla.
export function addFanMotion(
  timeline: gsap.core.Timeline,
  view: HTMLElement,
  count: number,
  seconds: number
) {
  const start = timeline.duration();
  const travel = { position: 0 };
  const announce = () => {
    view.dispatchEvent(
      new CustomEvent(FAN_POSITION_EVENT, { detail: travel.position })
    );
  };

  timeline.to(travel, {
    position: Math.max(count - 1, 1),
    duration: seconds,
    ease: 'none',
    onUpdate: announce,
    onReverseComplete: announce
  });

  return { start, seconds };
}
