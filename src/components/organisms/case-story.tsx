'use client';

import { CaseStoryBenchmark } from '@/components/molecules/case-story-benchmark';
import { CaseStoryConcept } from '@/components/molecules/case-story-concept';
import { CaseStoryCounter } from '@/components/molecules/case-story-counter';
import { CaseStoryFlows } from '@/components/molecules/case-story-flows';
import { CaseStoryIntro } from '@/components/molecules/case-story-intro';
import { CaseStoryProblem } from '@/components/molecules/case-story-problem';
import { CaseStoryPrototype } from '@/components/molecules/case-story-prototype';
import { CaseStoryRespite } from '@/components/molecules/case-story-respite';
import { CaseStoryUser } from '@/components/molecules/case-story-user';
import type { CaseStory as CaseStoryContent } from '@/content/case-story.types';
import type { ProjectCover } from '@/content/site';
import { useCaseStory } from '@/hooks/use-case-story';

type CaseStoryProps = {
  story: CaseStoryContent;
  cover: ProjectCover;
};

// Caso contado como recorrido (Planti): un escenario fijo con un esqueleto de
// líneas donde las capas entran y salen; primero el mundo claro de la
// investigación y, desde el concepto, el mundo verde de la marca. Arriba queda
// una franja libre para la navegación del sitio (logo, menú y contador), que
// se adapta al fondo de cada mundo. El movimiento lo arma useCaseStory; aquí
// solo va el contenido.
export function CaseStory({ story, cover }: CaseStoryProps) {
  const ref = useCaseStory<HTMLDivElement>();
  const { sections } = story;

  return (
    <div
      ref={ref}
      className="case-story case-story--planti"
      data-surface="light"
      data-case-story
    >
      <section
        className="case-story__stage"
        data-stage
        aria-label={story.intro.name}
      >
        <i
          className="case-story__line case-story__line--top"
          data-skeleton-line
        />
        <i
          className="case-story__line case-story__line--left"
          data-skeleton-line
        />
        <i
          className="case-story__line case-story__line--right"
          data-skeleton-line
        />

        <CaseStoryIntro
          intro={story.intro}
          cover={cover}
          sectionName={sections[0]}
        />
        <CaseStoryRespite label={story.respiteLabel} section={0} />
        <CaseStoryProblem problem={story.problem} sectionName={sections[1]} />
        <CaseStoryUser user={story.user} sectionName={sections[2]} />
        <CaseStoryBenchmark
          benchmark={story.benchmark}
          sectionName={sections[3]}
        />

        <div className="case-story__green" data-green-run data-surface="dark">
          <CaseStoryConcept concept={story.concept} sectionName={sections[4]} />
          <CaseStoryFlows flows={story.flows} sectionName={sections[5]} />
          <CaseStoryPrototype
            prototype={story.prototype}
            sectionName={sections[6]}
          />
        </div>

        <span className="case-story__axis" data-axis aria-hidden="true">
          <i className="case-story__axis-mark" />
        </span>
      </section>
      <CaseStoryCounter sections={sections} />
    </div>
  );
}
