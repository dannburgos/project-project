import type { PlantiPrototypeScreen } from '../prototype-screens';

// Cómo va el inicio de sesión sobre la portada: el panel sube, se escriben
// usuario y contraseña y el botón se pulsa y queda cargando
export type PlantiLoginPhase = 'idle' | 'pressed' | 'sheet' | 'signing-in';

// Lo que se ve en un momento del recorrido: qué pantalla y en qué punto de su
// animación está. Lo que no se indica se ve en su estado final.
export type PlantiScene = {
  screen: PlantiPrototypeScreen;
  loginPhase?: PlantiLoginPhase;
  // Inicio de sesión: cuántas letras del usuario y de la contraseña ya se
  // escribieron (por defecto, todas)
  userChars?: number;
  passwordChars?: number;
  isRemembered?: boolean;
  // El botón principal de la pantalla se está pulsando
  isPressed?: boolean;
  // Intro: cuánto de la circunferencia del botón ya está dibujado (de 0 a 1)
  ringProgress?: number;
  // Buscar · ¿Cómo es?: ya se eligió una forma
  hasChoice?: boolean;
  // Buscar · Cuéntanos más: ya se eligieron tamaño y color
  hasSize?: boolean;
  hasColor?: boolean;
  // Buscar · ¿Es alguna?: la planta correcta ya se resaltó
  isHighlighted?: boolean;
  // Detalle: ya se bajó para ver las recomendaciones
  hasScrolled?: boolean;
  // Personalizar: cuántas letras del nombre ya se escribieron, y qué opciones
  // ya se eligieron
  nameChars?: number;
  hasPlace?: boolean;
  hasLight?: boolean;
};
