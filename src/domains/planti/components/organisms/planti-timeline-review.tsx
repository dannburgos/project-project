'use client';

import { CHAPTER_ONE } from '../../chapter-one-timeline';
import {
  getNextStepStart,
  getPreviousStepStart
} from '../../planti-timeline.util';
import { usePlantiTimeline } from '../../hooks/use-planti-timeline';
import { PlantiPlayer } from './planti-player';
import { PlantiTimelinePanel } from './planti-timeline-panel';

// Pantalla de revisión: el recorrido corriendo a la izquierda y, a la derecha,
// cada paso con cuándo empieza y cuánto dura, resaltando el que se está viendo
export function PlantiTimelineReview() {
  const timeline = usePlantiTimeline(CHAPTER_ONE.durationMs);
  const scene =
    timeline.status === 'idle'
      ? CHAPTER_ONE.idleScene
      : CHAPTER_ONE.getScene(timeline.elapsedMs);

  return (
    <main className="planti-review">
      <div className="planti-review__player">
        <PlantiPlayer
          scene={scene}
          status={timeline.status}
          elapsedMs={timeline.elapsedMs}
          durationMs={CHAPTER_ONE.durationMs}
          isSettling={timeline.isSettling}
          hasControls
          isEmbedded
          onStart={timeline.handleStart}
          onPause={timeline.handlePause}
          onResume={timeline.handleResume}
          onReset={timeline.handleReset}
          onScrub={timeline.handleScrub}
          onPreviousStep={() =>
            timeline.handleJump(
              getPreviousStepStart(CHAPTER_ONE, timeline.elapsedMs)
            )
          }
          onNextStep={() =>
            timeline.handleJump(
              getNextStepStart(CHAPTER_ONE, timeline.elapsedMs)
            )
          }
        />
      </div>
      <PlantiTimelinePanel
        elapsedMs={timeline.elapsedMs}
        status={timeline.status}
        onGoToStep={timeline.handleJump}
      />
    </main>
  );
}
