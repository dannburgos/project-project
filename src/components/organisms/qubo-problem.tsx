import { QuboVisual } from '@/components/atoms/qubo-visual';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import type { QuboProblem as QuboProblemContent } from '@/content/qubo-story.types';

type QuboProblemProps = {
  id: string;
  problem: QuboProblemContent;
};

// 02 · Problema. El insight y la pregunta guía en grande (como el manifiesto de Made You Look).
export function QuboProblem({ id, problem }: QuboProblemProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="dark">
      <QuboHead head={problem.head} titleId={titleId} />

      <div className="qb-split" data-qb-reveal>
        <p className="qb-split__label">{problem.insightLabel}</p>
        <div>
          <p className="qb-split__text">{problem.insight}</p>
          <p className="qb-note">{problem.hypothesisNote}</p>
        </div>
      </div>

      <QuboVisual visual={problem.visual} className="qb-wide-visual" />

      <figure className="qb-manifesto" data-qb-reveal>
        <figcaption className="qb-manifesto__label">
          {problem.hmwLabel}
        </figcaption>
        <blockquote className="qb-manifesto__text">{problem.hmw}</blockquote>
      </figure>
    </QuboChapter>
  );
}
