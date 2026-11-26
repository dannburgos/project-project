import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboTable } from '@/components/molecules/qubo-table';
import type { QuboResearch as QuboResearchContent } from '@/content/qubo-story.types';

type QuboResearchProps = {
  id: string;
  research: QuboResearchContent;
};

// 03 · Research. La comparación con los tres productos del benchmark y la
// hipótesis que guía las entrevistas.
export function QuboResearch({ id, research }: QuboResearchProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="light">
      <QuboHead head={research.head} titleId={titleId} />

      <div data-qb-reveal>
        <QuboTable
          table={research.comparison}
          label={research.comparisonLabel}
        />
      </div>

      <QuboBlock title={research.hypothesesLabel}>
        <article className="qb-hypothesis">
          <header className="qb-hypothesis__head">
            <h4 className="qb-hypothesis__title">
              {research.hypothesis.title}
            </h4>
            <span className="qb-badge">{research.hypothesis.status}</span>
          </header>

          <dl className="qb-hypothesis__details">
            <div>
              <dt>{research.hypothesisLabels.signal}</dt>
              <dd>{research.hypothesis.signal}</dd>
            </div>
            <div>
              <dt>{research.hypothesisLabels.evidence}</dt>
              <dd>{research.hypothesis.evidence}</dd>
            </div>
            <div>
              <dt>{research.hypothesisLabels.decision}</dt>
              <dd>{research.hypothesis.decision}</dd>
            </div>
          </dl>
        </article>
      </QuboBlock>
    </QuboChapter>
  );
}
