import { ChevronRight, Leaf } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';
import { PlantiSearchField } from '../molecules/planti-search-field';

type PlantiSearchScreenProps = {
  // "typing": se escribe y salen los resultados. "results": ya escrito, con
  // la planta elegida resaltada.
  stage: 'typing' | 'results';
};

// Buscar por nombre: el camino para quien sí sabe cómo se llama su planta. El
// recorrido no lo muestra, pero queda para cuando se pueda probar.
export function PlantiSearchScreen({ stage }: PlantiSearchScreenProps) {
  const { search } = plantiMessages;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={search.title} />
      <PlantiSearchField
        value={stage === 'typing' ? search.typed : search.query}
        placeholder={search.placeholder}
        hasCaret={stage === 'typing'}
      />
      <p className="planti-search-count">{search.count}</p>
      <ul className="planti-search-results">
        {search.results.map(result => (
          <li
            key={result.key}
            className={cn(
              'planti-result',
              stage === 'results' &&
                'isActive' in result &&
                'planti-result--active'
            )}
          >
            <span className="planti-result__photo" aria-hidden="true">
              <Leaf />
            </span>
            <div className="planti-result__text">
              <p className="planti-result__name">{result.name}</p>
              <p className="planti-result__scientific">{result.scientific}</p>
            </div>
            <ChevronRight aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  );
}
