'use client';

import { usePlantiTimeline } from '../../hooks/use-planti-timeline';
import {
  PLANTI_CHAPTERS,
  type PlantiChapterNumber
} from '../../planti-chapters';
import {
  getNextStepStart,
  getPreviousStepStart
} from '../../planti-timeline.util';
import type { PlantiPrototypeScreen } from '../../prototype-screens';
import type { PlantiScene } from '../../types/planti-scene.types';
import { PlantiPlayer } from './planti-player';

type PlantiPrototypeProps = {
  // Qué capítulo (flujo) corre; por defecto, el 1
  chapterNumber?: PlantiChapterNumber;
  // Sin pantalla, corre el recorrido del capítulo desde su inicio
  screen?: PlantiPrototypeScreen;
  // Ocupa solo su espacio, para ponerlo junto a otra cosa
  isEmbedded?: boolean;
  // Dentro del caso: un solo botón de reproducir y pausar
  hasMinimalControls?: boolean;
};

// Prototipo de Planti (app móvil). Llega al inicio del capítulo elegido; al
// darle inicio lo corre de principio a fin con un solo reloj: se puede pausar,
// seguir y repetir. Con ?screen= se ve una pantalla suelta. Se ve solo
// en /prototypes/planti y dentro del capítulo "Prototipo" del caso.
export function PlantiPrototype({
  chapterNumber = 1,
  screen: initialScreen,
  isEmbedded = false,
  hasMinimalControls = false
}: PlantiPrototypeProps) {
  const chapter = PLANTI_CHAPTERS[chapterNumber];
  const timeline = usePlantiTimeline(chapter.durationMs);
  const isSequence = initialScreen === undefined;

  const scene: PlantiScene = isSequence
    ? timeline.status === 'idle'
      ? chapter.idleScene
      : chapter.getScene(timeline.elapsedMs)
    : { screen: initialScreen };

  return (
    <PlantiPlayer
      scene={scene}
      status={timeline.status}
      elapsedMs={timeline.elapsedMs}
      durationMs={chapter.durationMs}
      isSettling={timeline.isSettling}
      hasControls={isSequence}
      isEmbedded={isEmbedded}
      hasMinimalControls={hasMinimalControls}
      onStart={timeline.handleStart}
      onPause={timeline.handlePause}
      onResume={timeline.handleResume}
      onReset={timeline.handleReset}
      onScrub={timeline.handleScrub}
      onPreviousStep={() =>
        timeline.handleJump(getPreviousStepStart(chapter, timeline.elapsedMs))
      }
      onNextStep={() =>
        timeline.handleJump(getNextStepStart(chapter, timeline.elapsedMs))
      }
    />
  );
}
