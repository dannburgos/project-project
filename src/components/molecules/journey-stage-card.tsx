import { Briefcase, ChevronDown, GraduationCap } from 'lucide-react';

import { JourneyStageDetail } from '@/components/molecules/journey-stage-detail';
import { journeyContent, type JourneyStage } from '@/content/journey';
import { cn } from '@/lib/utils';

type JourneyStageCardProps = {
  stage: JourneyStage;
  isPinned: boolean;
  onTogglePin: (id: string) => void;
};

// Tarjeta de móvil. Una etiqueta con ícono distingue la experiencia laboral
// (borde sólido) de los estudios (borde punteado y fondo suave). El toque abre
// el detalle dentro de la misma tarjeta.
export function JourneyStageCard({
  stage,
  isPinned,
  onTogglePin
}: JourneyStageCardProps) {
  const isAcademic = stage.lane === 'academic';
  const TypeIcon = isAcademic ? GraduationCap : Briefcase;

  return (
    <article
      className={cn(
        'journey-card',
        isAcademic && 'journey-card--academic',
        isPinned && 'journey-card--pinned'
      )}
    >
      <button
        type="button"
        aria-expanded={isPinned}
        aria-label={`${stage.organization}, ${stage.period}. ${journeyContent.detail.open}`}
        className="journey-card__trigger"
        onClick={() => onTogglePin(stage.id)}
      >
        <span className="journey-card__type">
          <TypeIcon aria-hidden="true" />
          {journeyContent.typeLabels[stage.lane]}
        </span>
        <span className="journey-card__period">{stage.period}</span>
        <span className="journey-card__organization">{stage.organization}</span>
        <span className="journey-card__title">{stage.title}</span>
        <ChevronDown aria-hidden="true" className="journey-card__chevron" />
      </button>

      <div className="journey-card__expand" data-open={isPinned}>
        <div className="journey-card__expand-inner">
          <JourneyStageDetail stage={stage} />
        </div>
      </div>
    </article>
  );
}
