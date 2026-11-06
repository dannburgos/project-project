import { Leaf } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiMatchTileProps = {
  name: string;
  isActive?: boolean;
};

// Una planta que coincide con lo que la persona describió: su foto y su
// nombre, para que la reconozca
export function PlantiMatchTile({
  name,
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
      </div>
    </article>
  );
}
