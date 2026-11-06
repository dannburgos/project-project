import { CHAPTER_ONE } from './chapter-one-timeline';
import { CHAPTER_TWO } from './chapter-two-timeline';
import type { PlantiChapter } from './types/planti-chapter.types';

// Los capítulos (flujos) que ya tienen recorrido. El caso y el tablero eligen
// uno con ?flow=N; si no existe, se usa el 1.
export const PLANTI_CHAPTERS = {
  1: CHAPTER_ONE,
  2: CHAPTER_TWO
} as const satisfies Record<number, PlantiChapter>;

export type PlantiChapterNumber = keyof typeof PLANTI_CHAPTERS;

export function getPlantiChapterNumber(value?: string): PlantiChapterNumber {
  const number = Number(value);
  return number in PLANTI_CHAPTERS ? (number as PlantiChapterNumber) : 1;
}
