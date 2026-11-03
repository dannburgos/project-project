import { Leaf } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiMatchTileProps = {
  name: string;
  look: string;
  isActive?: boolean;
};

// Una planta que coincide con lo que la persona describió: su foto, su nombre
// y una frase de cómo es, para que la reconozca
export function PlantiMatchTile({
  name,
  look,
  isActive = false
}: PlantiMatchTileProps) {
  return (
    <article
      className={cn(
        'planti-match-tile',
        isActive && 'planti-match-tile--active'
      )}
    >
      <div className="planti-match-tile__photo" aria-hidden="true">
        <Leaf />
      </div>
      <div className="planti-match-tile__info">
        <p className="planti-match-tile__name">{name}</p>
        <p className="planti-match-tile__look">{look}</p>
      </div>
    </article>
  );
}
