import type { gsap } from 'gsap';

// Cómo cambian las slides de una escena de Sonopizza que se pasa con clic
// (benchmark, flujos principales)
export type SonoSlidesMotion = {
  // Selector de cada slide dentro del componente
  slide: string;
  // Cambio animado de una slide a otra, con la escena a la vista.
  // direction: 1 hacia adelante, -1 hacia atrás
  transition: (
    outgoing: HTMLElement,
    incoming: HTMLElement,
    direction: number
  ) => gsap.core.Timeline;
  // Deja en reposo la slide que entra cuando el cambio ocurre con la escena
  // escondida (sin animación)
  settle: (incoming: HTMLElement) => void;
};
