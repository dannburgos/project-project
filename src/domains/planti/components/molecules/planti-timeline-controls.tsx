import { SkipBack, SkipForward } from 'lucide-react';

import { CHAPTER_ONE_DURATION_MS } from '../../chapter-one-timeline';
import type { PlantiTimelineStatus } from '../../hooks/use-planti-timeline';
import { plantiMessages } from '../../messages';
import { PlantiSequenceButton } from '../atoms/planti-sequence-button';

type PlantiTimelineControlsProps = {
  status: PlantiTimelineStatus;
  elapsedMs: number;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onScrub: (ms: number) => void;
  onPreviousStep: () => void;
  onNextStep: () => void;
};

// Controles del recorrido, debajo del celular: iniciar, pausar y seguir,
// repetir, ir al paso anterior o al siguiente y llevar el recorrido a
// cualquier momento con la barra
export function PlantiTimelineControls({
  status,
  elapsedMs,
  onStart,
  onPause,
  onResume,
  onReset,
  onScrub,
  onPreviousStep,
  onNextStep
}: PlantiTimelineControlsProps) {
  const { sequence } = plantiMessages;
  const isRunning = status !== 'idle';

  return (
    <>
      {isRunning && (
        <button
          type="button"
          className="planti-icon-button"
          aria-label={sequence.previousStep}
          onClick={onPreviousStep}
        >
          <SkipBack aria-hidden="true" />
        </button>
      )}
      {status === 'idle' && (
        <PlantiSequenceButton
          kind="start"
          label={sequence.start}
          onClick={onStart}
        />
      )}
      {status === 'playing' && (
        <PlantiSequenceButton
          kind="pause"
          label={sequence.pause}
          onClick={onPause}
        />
      )}
      {status === 'paused' && (
        <PlantiSequenceButton
          kind="resume"
          label={sequence.resume}
          onClick={onResume}
        />
      )}
      {status === 'done' && (
        <PlantiSequenceButton
          kind="replay"
          label={sequence.replay}
          onClick={onReset}
        />
      )}
      {isRunning && (
        <>
          <button
            type="button"
            className="planti-icon-button"
            aria-label={sequence.nextStep}
            onClick={onNextStep}
          >
            <SkipForward aria-hidden="true" />
          </button>
          <input
            type="range"
            className="planti-timeline-slider"
            min={0}
            max={CHAPTER_ONE_DURATION_MS}
            step={50}
            value={elapsedMs}
            aria-label={sequence.progress}
            onChange={event => onScrub(Number(event.target.value))}
          />
        </>
      )}
    </>
  );
}
