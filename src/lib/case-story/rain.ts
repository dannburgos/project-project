import { gsap } from 'gsap';

import { queryAll } from '@/lib/case-story/motion';

// Lluvia al revés: las pantallas del prototipo suben desde abajo, cada una
// con su tamaño, su lugar y su velocidad, y salen por arriba.
// [izquierda %, ancho, alto, giro, inicio, duración, cercanía]
// Las 3 primeras son las principales: grandes, al frente y nítidas. Las demás
// van atrás: pequeñas, más lentas y tenues, como capas.
const RAIN_LAYOUT = [
  [12, 250, 500, -3, 0, 0.62, 1],
  [41, 270, 540, 2, 0.1, 0.62, 1],
  [71, 250, 500, -2, 0.2, 0.62, 1],
  [4, 120, 220, 4, 0.02, 0.85, 0.45],
  [30, 140, 260, -5, 0.08, 0.8, 0.5],
  [58, 110, 200, 6, 0.14, 0.9, 0.4],
  [86, 130, 240, -4, 0.22, 0.8, 0.5],
  [22, 120, 220, 3, 0.32, 0.75, 0.45],
  [64, 150, 280, -3, 0.38, 0.7, 0.55],
  [92, 110, 200, 5, 0.44, 0.65, 0.4]
] as const;

type RainOptions = {
  width: number;
  height: number;
  scale: number;
};

export function buildRain(
  root: ParentNode,
  { width, height, scale }: RainOptions
) {
  const rain = gsap.timeline({ paused: true });
  queryAll(root, '[data-rain-card]').forEach((card, index) => {
    const layout = RAIN_LAYOUT[index % RAIN_LAYOUT.length];
    const [left, baseWidth, baseHeight, rotation, start, duration, nearness] =
      layout;
    const cardWidth = baseWidth * scale;
    const cardHeight = baseHeight * scale;
    const x = Math.min((left / 100) * width, width - cardWidth - 16);
    gsap.set(card, {
      x,
      width: cardWidth,
      height: cardHeight,
      rotation,
      opacity: nearness === 1 ? 1 : 0.35 + 0.4 * nearness,
      zIndex: Math.round(nearness * 10)
    });
    rain.fromTo(
      card,
      { y: height + 24 },
      { y: -cardHeight - 48, rotation: -rotation, duration, ease: 'none' },
      start
    );
  });
  return rain;
}
