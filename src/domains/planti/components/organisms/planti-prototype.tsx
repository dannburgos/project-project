'use client';

import {
  CHAPTER_ONE_DURATION_MS,
  CHAPTER_ONE_IDLE_SCENE,
  getChapterOneScene,
  getNextStepStart,
  getPreviousStepStart
} from '../../chapter-one-timeline';
import { usePlantiTimeline } from '../../hooks/use-planti-timeline';
import type { PlantiPrototypeScreen } from '../../prototype-screens';
import type { PlantiScene } from '../../types/planti-scene.types';
import { PlantiPlayer } from './planti-player';

type PlantiPrototypeProps = {
  // Sin pantalla, corre el recorrido del capítulo 1 desde la portada
  screen?: PlantiPrototypeScreen;
};

// Prototipo de Planti (app móvil). Llega a la portada con el logo; al darle
// inicio corre el capítulo 1 de principio a fin con un solo reloj: se puede
// pausar, seguir y repetir. Con ?screen= se ve una pantalla suelta. Se ve solo
// en /prototypes/planti y dentro del capítulo "Prototipo" del caso.
export function PlantiPrototype({
  screen: initialScreen
}: PlantiPrototypeProps) {
  const timeline = usePlantiTimeline(CHAPTER_ONE_DURATION_MS);
  const isSequence = initialScreen === undefined;

  const scene: PlantiScene = isSequence
    ? timeline.status === 'idle'
      ? CHAPTER_ONE_IDLE_SCENE
      : getChapterOneScene(timeline.elapsedMs)
    : { screen: initialScreen };

  return (
    <PlantiPlayer
      scene={scene}
      status={timeline.status}
      elapsedMs={timeline.elapsedMs}
      isSettling={timeline.isSettling}
      hasControls={isSequence}
      onStart={timeline.handleStart}
      onPause={timeline.handlePause}
      onResume={timeline.handleResume}
      onReset={timeline.handleReset}
      onScrub={timeline.handleScrub}
      onPreviousStep={() =>
        timeline.handleJump(getPreviousStepStart(timeline.elapsedMs))
      }
      onNextStep={() =>
        timeline.handleJump(getNextStepStart(timeline.elapsedMs))
      }
    />
  );
}
