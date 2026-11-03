import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiLookTileProps = {
  icon: LucideIcon;
  label: string;
  isSelected?: boolean;
};

// Una forma de ser de la planta, en palabras simples (hasta tener la
// ilustración, lleva un ícono)
export function PlantiLookTile({
  icon: Icon,
  label,
  isSelected = false
}: PlantiLookTileProps) {
  return (
    <li
      className={cn(
        'planti-look-tile',
        isSelected && 'planti-look-tile--selected'
      )}
      aria-current={isSelected ? 'true' : undefined}
    >
      <span className="planti-look-tile__icon" aria-hidden="true">
        <Icon />
      </span>
      <span className="planti-look-tile__label">{label}</span>
    </li>
  );
}
