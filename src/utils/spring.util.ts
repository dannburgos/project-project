export type SpringOptions = {
  // Rigidez: más alta, llega más rápido
  stiffness: number;
  // Amortiguación: más baja, rebota más
  damping: number;
  mass?: number;
};

export type SpringEasing = {
  // Curva CSS linear() que reproduce el resorte (puede pasarse de 1 al rebotar)
  easing: string;
  // Lo que tarda el resorte en quedar quieto, en ms
  duration: number;
};

const STEP_S = 1 / 120;
// El resorte se da por quieto cuando está a menos de 0,1 % de su destino y casi
// sin velocidad: lo que queda después ya no se ve
const REST_POSITION = 0.001;
const REST_VELOCITY = 0.01;
const MAX_DURATION_S = 3;
const SAMPLE_COUNT = 64;

const round = (value: number) => Math.round(value * 10000) / 10000;

// Simula un resorte que va de 0 a 1 y lo convierte en una curva de animación
// CSS linear(). Así el movimiento tiene la inercia y el rebote de algo físico,
// en lugar de seguir una curva fija.
export function createSpringEasing({
  stiffness,
  damping,
  mass = 1
}: SpringOptions): SpringEasing {
  let position = 0;
  let velocity = 0;
  let time = 0;
  const positions: number[] = [0];

  while (time < MAX_DURATION_S) {
    const acceleration =
      (-stiffness * (position - 1) - damping * velocity) / mass;
    velocity += acceleration * STEP_S;
    position += velocity * STEP_S;
    time += STEP_S;
    positions.push(position);
    if (
      Math.abs(position - 1) < REST_POSITION &&
      Math.abs(velocity) < REST_VELOCITY
    ) {
      break;
    }
  }

  const lastIndex = positions.length - 1;
  const stride = Math.max(1, Math.floor(lastIndex / SAMPLE_COUNT));
  const stops: string[] = [];
  for (let index = 0; index < lastIndex; index += stride) {
    stops.push(
      `${round(positions[index] ?? 0)} ${round((index / lastIndex) * 100)}%`
    );
  }
  stops.push('1 100%');

  return {
    easing: `linear(${stops.join(', ')})`,
    duration: Math.round(time * 1000)
  };
}
