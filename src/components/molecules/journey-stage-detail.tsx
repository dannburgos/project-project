import type { JourneyStage } from '@/content/journey';

type JourneyStageDetailProps = {
  stage: JourneyStage;
};

// Etiquetas de la etapa y su frase resumen.
export function JourneyStageDetail({ stage }: JourneyStageDetailProps) {
  return (
    <div className="journey-detail">
      <ul className="journey-detail__tags">
        {stage.tags.map(tag => (
          <li key={tag} className="journey-detail__tag">
            {tag}
          </li>
        ))}
      </ul>
      <p className="journey-detail__summary">{stage.summary}</p>
    </div>
  );
}
