import type { QuboFact } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboFactsProps = {
  facts: readonly QuboFact[];
  className?: string;
};

// Lista de datos «etiqueta → valor», como los créditos de una producción
export function QuboFacts({ facts, className }: QuboFactsProps) {
  return (
    <dl className={cn('qb-facts', className)}>
      {facts.map(fact => (
        <div key={fact.label} className="qb-facts__item">
          <dt className="qb-facts__label">{fact.label}</dt>
          <dd className="qb-facts__value">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
