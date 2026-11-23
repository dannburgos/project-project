import type { CSSProperties } from 'react';

import type { FanValues } from '@/lib/case-story/sonopizza-fan.types';

// El abanico de teléfonos de "El producto en acción". Los valores de cada
// teléfono salen de qué tan lejos está de la pantalla activa (su distancia,
// que puede ser decimal mientras se desliza con el scroll): se interpolan
// entre estas paradas, una por cada lugar de distancia. A tres lugares ya no
// se ve
const FAN_STOPS: readonly Omit<FanValues, 'z'>[] = [
  { x: 0, y: 0, r: 0, s: 1, o: 1 },
  { x: 0.46, y: 0.04, r: 6, s: 0.88, o: 1 },
  { x: 0.74, y: 0.1, r: 10, s: 0.76, o: 0.85 },
  { x: 1, y: 0.14, r: 13, s: 0.68, o: 0 }
];
const LAST_STOP = FAN_STOPS.length - 1;
// Avisos entre el escenario y el abanico, sobre la escena del producto: el
// escenario dice en qué posición va (decimal, de 0 a pantallas − 1) y el
// abanico pide ir a una pantalla (con una flecha, un punto o un clic)
export const FAN_POSITION_EVENT = 'sono:fan-position';
export const FAN_GOTO_EVENT = 'sono:fan-goto';

// Con menos opacidad que esto el teléfono no se ve y no toma clics
const HIDDEN_BELOW = 0.04;

const mix = (from: number, to: number, amount: number) =>
  from + (to - from) * amount;
const round = (value: number) => Math.round(value * 10000) / 10000;

export function getFanValues(distance: number): FanValues {
  const side = Math.sign(distance);
  const steps = Math.min(Math.abs(distance), LAST_STOP);
  const index = Math.min(Math.floor(steps), LAST_STOP - 1);
  const amount = steps - index;
  const from = FAN_STOPS[index]!;
  const to = FAN_STOPS[index + 1]!;

  return {
    x: round(side * mix(from.x, to.x, amount)),
    y: round(mix(from.y, to.y, amount)),
    r: round(side * mix(from.r, to.r, amount)),
    s: round(mix(from.s, to.s, amount)),
    o: round(mix(from.o, to.o, amount)),
    // Más cerca de la activa, más arriba
    z: Math.round(100 - steps * 10)
  };
}

export const isFanPhoneHidden = (values: FanValues) => values.o < HIDDEN_BELOW;

// Para pintar el abanico desde React cuando la pantalla activa cambia de un
// lugar a otro (sin scroll)
export function getFanStyle(distance: number): CSSProperties {
  const values = getFanValues(distance);

  return {
    '--x': values.x,
    '--y': values.y,
    '--r': values.r,
    '--s': values.s,
    '--o': values.o,
    '--z': values.z
  } as CSSProperties;
}

// Para pintar el abanico cuadro a cuadro mientras se desliza con el scroll:
// escribe los valores directo en los teléfonos, sin pasar por React. La
// posición es la pantalla "activa" en decimales (2,5 = a medio camino entre la
// tercera y la cuarta)
export function applyFan(
  phones: readonly (HTMLElement | null)[],
  position: number
) {
  phones.forEach((phone, index) => {
    if (!phone) return;
    const values = getFanValues(index - position);
    phone.style.setProperty('--x', String(values.x));
    phone.style.setProperty('--y', String(values.y));
    phone.style.setProperty('--r', String(values.r));
    phone.style.setProperty('--s', String(values.s));
    phone.style.setProperty('--o', String(values.o));
    phone.style.setProperty('--z', String(values.z));
    phone.toggleAttribute('data-hidden', isFanPhoneHidden(values));
  });
}
