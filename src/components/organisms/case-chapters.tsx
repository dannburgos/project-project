'use client';

import { CaseStage } from '@/components/molecules/case-stage';
import { siteContent, type CaseStudyStage } from '@/content/site';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';

type CaseChaptersProps = {
  stages: readonly CaseStudyStage[];
  stageIds: readonly string[];
};

// Cuerpo del caso en dos columnas (referencia: midu.design/nova). A la
// izquierda, más angosta y fija, las etapas: la que se está leyendo se abre con
// su título y resumen, y las demás quedan recogidas. A la derecha, los bloques
// de cada etapa.
export function CaseChapters({ stages, stageIds }: CaseChaptersProps) {
  const activeId = useActiveSection(stageIds);
  const { indexTitle } = siteContent.caseStudy;

  return (
    <div className="case-chapters">
      <nav aria-label={indexTitle} className="case-chapters__nav">
        <ol className="case-chapters__list">
          {stages.map(stage => {
            const isActive = stage.id === activeId;
            return (
              <li key={stage.id}>
                <a
                  href={`#${stage.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'case-chapter',
                    isActive && 'case-chapter--active'
                  )}
                >
                  <span className="case-chapter__title">{stage.title}</span>
                  <span
                    className="case-chapter__detail"
                    aria-hidden={!isActive}
                  >
                    <span className="case-chapter__detail-inner">
                      <span className="case-chapter__heading">
                        {stage.heading}
                      </span>
                      <span className="case-chapter__description">
                        {stage.description}
                      </span>
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <div className="case-chapters__content">
        {stages.map(stage => (
          <CaseStage key={stage.id} stage={stage} />
        ))}
      </div>
    </div>
  );
}
