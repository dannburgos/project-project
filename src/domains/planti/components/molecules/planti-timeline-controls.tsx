import { SkipBack, SkipForward } from 'lucide-react';

import type { PlantiTimelineStatus } from '../../hooks/use-planti-timeline';
import { plantiMessages } from '../../messages';
import { PlantiSequenceButton } from '../atoms/planti-sequence-button';

type PlantiTimelineControlsProps = {
  status: PlantiTimelineStatus;
  elapsedMs: number;
  // Cuánto dura el capítulo que se está viendo (fin de la barra)
  durationMs: number;
  onStart: () => void;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
  onScrub: (ms: number) => void;
  onPreviousStep: () => void;
  onNextStep: () => void;
  // Dentro del caso: un solo botón de reproducir y pausar, sin saltos ni barra
  isMinimal?: boolean;
};

// Controles del recorrido, debajo del celular: iniciar, pausar y seguir,
// repetir, ir al paso anterior o al siguiente y llevar el recorrido a
// cualquier momento con la barra
export function PlantiTimelineControls({
  status,
  elapsedMs,
  durationMs,
  onStart,
  onPause,
  onResume,
  onReset,
  onScrub,
  onPreviousStep,
  onNextStep,
  isMinimal = false
}: PlantiTimelineControlsProps) {
  const { sequence } = plantiMessages;
  const isRunning = status !== 'idle';

  // Dentro del caso: un solo botón redondo que alterna entre reproducir y
  // pausar; al terminar, vuelve a reproducir desde el principio
  if (isMinimal) {
    const isPlaying = status === 'playing';
    const kind = isPlaying ? 'pause' : status === 'paused' ? 'resume' : 'start';
    const label = isPlaying
      ? sequence.pause
      : status === 'paused'
        ? sequence.resume
        : status === 'done'
          ? sequence.replay
          : sequence.start;
    const handleClick = isPlaying
      ? onPause
      : status === 'paused'
        ? onResume
        : onStart;

    return (
      <PlantiSequenceButton
        kind={kind}
        label={label}
        onClick={handleClick}
        isIconOnly
      />
    );
  }

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
            max={durationMs}
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
