import type { plantiMessages } from '../messages';
import type { PlantiPrototypeScreen } from '../prototype-screens';
import type { PlantiScene } from './planti-scene.types';

export type PlantiTimelineEventKey =
  keyof (typeof plantiMessages)['timeline']['events'];

// Un momento del recorrido: desde qué milisegundo se ve esta escena
export type PlantiBeat = {
  at: number;
  event: PlantiTimelineEventKey;
  scene: PlantiScene;
};

// Un capítulo (un flujo) del prototipo: su lista de momentos, cuánto dura, la
// pantalla quieta antes de iniciar y cómo se ve en cada milisegundo
export type PlantiChapter = {
  durationMs: number;
  beats: readonly PlantiBeat[];
  idleScene: PlantiScene;
  getScene: (elapsedMs: number) => PlantiScene;
};

export type PlantiTimelineStep = {
  screen: PlantiPrototypeScreen;
  startMs: number;
  endMs: number;
  events: ReadonlyArray<{ atMs: number; event: PlantiTimelineEventKey }>;
};
