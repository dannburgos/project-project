import type { QuboHead as QuboHeadContent } from '@/content/qubo-story.types';

type QuboHeadProps = {
  head: QuboHeadContent;
  titleId: string;
};

// Encabezado de capítulo: número, eyebrow, titular y bajada
export function QuboHead({ head, titleId }: QuboHeadProps) {
  return (
    <header className="qb-head" data-qb-reveal>
      <p className="qb-head__eyebrow">
        <span className="qb-head__number">{head.number}</span>
        {head.eyebrow}
      </p>
      <h2 id={titleId} className="qb-head__title">
        {head.title}
      </h2>
      {head.lead && <p className="qb-head__lead">{head.lead}</p>}
    </header>
  );
}
