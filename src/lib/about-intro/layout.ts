// Medidas del banner de About: el lienzo del título "About Me" y desde qué
// punto de cada letra sale su nota. La forma de las letras está en
// title-shapes.ts (contornos vectoriales).

export type AboutIntroLayout = 'desktop' | 'mobile';

// Lienzo del título en unidades propias (la proporción la fija el CSS; las
// notas y el zoom se ubican en porcentajes de este lienzo)
export const VIEW_BOX: Record<
  AboutIntroLayout,
  { width: number; height: number }
> = {
  desktop: { width: 1000, height: 560 },
  mobile: { width: 600, height: 640 }
};

// Punto de cada letra del que sale su línea, como fracción de su caja, y si su
// nota va arriba o abajo del título (las líneas arrancan en el borde de la
// letra)
type LetterAnchor = { x: number; side: 'top' | 'bottom' };

export const LETTER_ANCHORS: readonly LetterAnchor[] = [
  { x: 0.5, side: 'top' },
  { x: 0.14, side: 'bottom' },
  { x: 0.5, side: 'top' },
  { x: 0.82, side: 'bottom' },
  { x: 0.38, side: 'top' },
  { x: 0.5, side: 'bottom' },
  { x: 0.5, side: 'top' }
];

// Separación entre el borde de la letra y el inicio de su línea
export const LEADER_GAP = 8;

// Alto en el lienzo donde terminan las líneas y empiezan las notas
export const NOTE_Y = { top: 100, bottom: 470 } as const;
export const NOTE_WIDTH = 170;

// Líneas guía horizontales que cruzan el lienzo: alto de las mayúsculas, alto
// de las minúsculas y línea base
export const GUIDE_LINES = [184, 220, 330] as const;
