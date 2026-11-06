'use client';

import { CHAPTER_ONE } from '../../chapter-one-timeline';
import { getChapterSteps } from '../../planti-timeline.util';
import { usePlantiActiveStepScroll } from '../../hooks/use-planti-active-step-scroll';
import type { PlantiTimelineStatus } from '../../hooks/use-planti-timeline';
import { plantiMessages } from '../../messages';
import { cn } from '@/lib/utils';

type PlantiTimelinePanelProps = {
  elapsedMs: number;
  status: PlantiTimelineStatus;
  // Lleva el recorrido al comienzo de un paso
  onGoToStep: (ms: number) => void;
};

const STEPS = getChapterSteps(CHAPTER_ONE);

function formatSeconds(ms: number) {
  return `${(ms / 1000).toFixed(1).replace('.', ',')} s`;
}

// Los pasos del recorrido con cuándo empiezan, cuánto duran y lo que pasa en
// cada uno; el que se está viendo se resalta y avanza con el reloj
export function PlantiTimelinePanel({
  elapsedMs,
  status,
  onGoToStep
}: PlantiTimelinePanelProps) {
  const { timeline } = plantiMessages;
  const activeStep =
    status === 'idle'
      ? null
      : (STEPS.find(
          step => elapsedMs >= step.startMs && elapsedMs < step.endMs
        ) ?? STEPS[STEPS.length - 1]);
  const ref = usePlantiActiveStepScroll<HTMLOListElement>(
    activeStep?.screen ?? null
  );

  return (
    <section className="planti-timeline-panel">
      <h1 className="planti-timeline-panel__title">{timeline.title}</h1>
      <p className="planti-timeline-panel__hint">{timeline.hint}</p>
      <p className="planti-timeline-panel__total">
        {timeline.total}:{' '}
        <strong>{formatSeconds(CHAPTER_ONE.durationMs)}</strong>
      </p>
      <ol
        ref={ref}
        className="planti-timeline-panel__steps"
        aria-label={timeline.stepsLabel}
      >
        {STEPS.map((step, index) => {
          const isActive = step === activeStep;
          const isDone = status !== 'idle' && elapsedMs >= step.endMs;

          return (
            <li
              key={step.screen}
              data-active={isActive}
              className={cn(
                'planti-timeline-step',
                isActive && 'planti-timeline-step--active',
                isDone && 'planti-timeline-step--done'
              )}
            >
              <div className="planti-timeline-step__head">
                <span className="planti-timeline-step__number">
                  {index + 1}
                </span>
                <h2 className="planti-timeline-step__title">
                  <button
                    type="button"
                    className="planti-timeline-step__go"
                    onClick={() => onGoToStep(step.startMs)}
                  >
                    {timeline.steps[step.screen as keyof typeof timeline.steps]}
                  </button>
                </h2>
                <span className="planti-timeline-step__time">
                  {timeline.from} {formatSeconds(step.startMs)} ·{' '}
                  {timeline.lasts}{' '}
                  <strong>{formatSeconds(step.endMs - step.startMs)}</strong>
                </span>
              </div>
              <progress
                className="planti-progress planti-timeline-step__progress"
                value={Math.min(
                  Math.max(elapsedMs - step.startMs, 0),
                  step.endMs - step.startMs
                )}
                max={step.endMs - step.startMs}
                aria-hidden="true"
              />
              <ul className="planti-timeline-step__events">
                {step.events.map(item => (
                  <li
                    key={item.atMs}
                    className={cn(
                      'planti-timeline-step__event',
                      status !== 'idle' &&
                        elapsedMs >= item.atMs &&
                        'planti-timeline-step__event--done'
                    )}
                  >
                    <span>{formatSeconds(item.atMs)}</span>
                    {timeline.events[item.event]}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
