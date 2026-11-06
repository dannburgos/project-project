import type {
  PlantiBeat,
  PlantiChapter,
  PlantiTimelineStep
} from './types/planti-chapter.types';
import type { PlantiScene } from './types/planti-scene.types';

// La escena del último momento que ya empezó
export function getBeatScene(
  beats: readonly PlantiBeat[],
  elapsedMs: number
): PlantiScene {
  let current = beats[0].scene;

  for (const beat of beats) {
    if (beat.at > elapsedMs) break;
    current = beat.scene;
  }

  return current;
}

// Los pasos de un capítulo: cada pantalla con cuándo empieza, cuándo termina y
// lo que pasa dentro de ella
export function getChapterSteps(chapter: PlantiChapter): PlantiTimelineStep[] {
  const steps: PlantiTimelineStep[] = [];

  for (const beat of chapter.beats) {
    const last = steps[steps.length - 1];
    const event = { atMs: beat.at, event: beat.event };

    if (last && last.screen === beat.scene.screen) {
      last.events = [...last.events, event];
    } else {
      if (last) last.endMs = beat.at;
      steps.push({
        screen: beat.scene.screen,
        startMs: beat.at,
        endMs: chapter.durationMs,
        events: [event]
      });
    }
  }

  return steps;
}

// Si ya pasó un momento desde el inicio del paso, "anterior" vuelve a su
// comienzo; si no, al paso de antes
const RESTART_THRESHOLD_MS = 800;

export function getPreviousStepStart(
  chapter: PlantiChapter,
  elapsedMs: number
) {
  const starts = getChapterSteps(chapter).map(step => step.startMs);
  const current = [...starts].reverse().find(at => at <= elapsedMs) ?? 0;
  if (elapsedMs - current > RESTART_THRESHOLD_MS) return current;
  const previous = [...starts].reverse().find(at => at < current);
  return previous ?? 0;
}

export function getNextStepStart(chapter: PlantiChapter, elapsedMs: number) {
  const starts = getChapterSteps(chapter).map(step => step.startMs);
  return starts.find(at => at > elapsedMs) ?? chapter.durationMs;
}
