import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboCycle } from '@/components/molecules/qubo-cycle';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import type { QuboStrategy as QuboStrategyContent } from '@/content/qubo-story.types';

type QuboStrategyProps = {
  id: string;
  strategy: QuboStrategyContent;
};

// 05 · Estrategia. La propuesta de valor y cómo gana Qubo, como un ciclo de
// cuatro pasos (con las reglas del MVP).
export function QuboStrategy({ id, strategy }: QuboStrategyProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="dark">
      <QuboHead head={strategy.head} titleId={titleId} />

      <figure className="qb-manifesto" data-qb-reveal>
        <figcaption className="qb-manifesto__label">
          {strategy.valueLabel}
        </figcaption>
        <blockquote className="qb-manifesto__text">{strategy.value}</blockquote>
      </figure>

      <QuboBlock title={strategy.earnLabel}>
        <QuboCycle
          items={strategy.earn}
          decisionLabel={strategy.decisionLabel}
        />
      </QuboBlock>
    </QuboChapter>
  );
}
