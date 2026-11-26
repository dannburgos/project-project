import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import type { QuboOpportunity as QuboOpportunityContent } from '@/content/qubo-story.types';

type QuboOpportunityProps = {
  id: string;
  opportunity: QuboOpportunityContent;
};

// 01 · Oportunidad. Frase grande con la cifra que la sostiene (referencia: el
// «About us» de Armor) y la oportunidad.
export function QuboOpportunity({ id, opportunity }: QuboOpportunityProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="light">
      <QuboHead head={opportunity.head} titleId={titleId} />

      <p className="qb-statement" data-qb-reveal>
        {opportunity.statement}
      </p>

      <aside className="qb-callout" data-qb-reveal>
        <p className="qb-callout__label">{opportunity.opportunityLabel}</p>
        <p className="qb-callout__text">{opportunity.opportunity}</p>
      </aside>
    </QuboChapter>
  );
}
