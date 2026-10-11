'use client';

import type { JourneyStage } from '@/content/journey';
import { useMeasuredHeight } from '@/hooks/use-measured-height';
import { useRollingValue } from '@/hooks/use-rolling-value';
import { cn } from '@/lib/utils';

type JourneyFocusCardProps = {
  stage: JourneyStage;
};

function JourneyFocusCardContent({ stage }: { stage: JourneyStage }) {
  return (
    <>
      <header className="journey-focus-card__header">
        <p className="journey-focus-card__period">{stage.period}</p>
        <h3 className="journey-focus-card__organization">
          {stage.organization}
        </h3>
        <p className="journey-focus-card__title">{stage.title}</p>
      </header>
      <ul className="journey-detail__tags">
        {stage.tags.map(tag => (
          <li key={tag} className="journey-detail__tag">
            {tag}
          </li>
        ))}
      </ul>
      <p className="journey-detail__summary">{stage.summary}</p>
    </>
  );
}

// Tarjeta de escritorio, fija en el centro de la pantalla. Cuando la etapa
// cambia, la tarjeta se queda en su lugar: el contenido nuevo reemplaza al
// anterior con un cambio breve y la tarjeta ajusta su alto con suavidad.
export function JourneyFocusCard({ stage }: JourneyFocusCardProps) {
  const { ref: windowRef, height } = useMeasuredHeight<HTMLDivElement>();
  const items = useRollingValue(
    stage.id,
    <JourneyFocusCardContent stage={stage} />
  );

  return (
    <article
      className={cn(
        'journey-focus-card',
        stage.lane === 'academic' && 'journey-focus-card--academic'
      )}
      style={height ? { height: `${height}px` } : undefined}
    >
      <div ref={windowRef} className="journey-focus-card__window">
        {items.map(item => (
          <div
            key={item.key}
            className="journey-focus-card__content"
            data-state={
              item.isLeaving
                ? 'leaving'
                : item.isInitial
                  ? 'initial'
                  : 'entering'
            }
            aria-hidden={item.isLeaving || undefined}
          >
            {item.content}
          </div>
        ))}
      </div>
    </article>
  );
}
