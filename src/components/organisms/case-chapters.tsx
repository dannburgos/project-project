'use client';

import { CaseStage } from '@/components/molecules/case-stage';
import type { CaseChapter } from '@/content/case-study.types';
import { siteContent } from '@/content/site';
import { useActiveSection } from '@/hooks/use-active-section';
import { cn } from '@/lib/utils';

type CaseChaptersProps = {
  chapters: readonly CaseChapter[];
  chapterIds: readonly string[];
};

// Cuerpo del caso en dos columnas (referencia: midu.design/nova). A la
// izquierda, más angosta y fija, los capítulos del proyecto (cada proyecto
// tiene los suyos): el que se está leyendo se abre con su título y resumen, y
// los demás quedan recogidos. A la derecha, los bloques de cada capítulo.
export function CaseChapters({ chapters, chapterIds }: CaseChaptersProps) {
  const activeId = useActiveSection(chapterIds);
  const { indexTitle } = siteContent.caseStudy;

  return (
    <div className="case-chapters">
      <nav aria-label={indexTitle} className="case-chapters__nav">
        <ol className="case-chapters__list">
          {chapters.map(chapter => {
            const isActive = chapter.id === activeId;
            return (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'case-chapter',
                    isActive && 'case-chapter--active'
                  )}
                >
                  <span className="case-chapter__title">{chapter.title}</span>
                  <span
                    className="case-chapter__detail"
                    aria-hidden={!isActive}
                  >
                    <span className="case-chapter__detail-inner">
                      <span className="case-chapter__heading">
                        {chapter.heading}
                      </span>
                      <span className="case-chapter__description">
                        {chapter.summary}
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
        {chapters.map(chapter => (
          <CaseStage key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </div>
  );
}
