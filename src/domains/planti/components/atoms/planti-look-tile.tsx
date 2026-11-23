import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiLookTileProps = {
  icon: LucideIcon;
  imageSrc?: string;
  label: string;
  isSelected?: boolean;
  onSelect?: () => void;
};

// Una forma de ser de la planta, en palabras simples. Lleva su foto y, hasta
// tenerla, un ícono.
export function PlantiLookTile({
  icon: Icon,
  imageSrc,
  label,
  isSelected = false,
  onSelect
}: PlantiLookTileProps) {
  return (
    <li
      className={cn(
        'planti-look-tile',
        isSelected && 'planti-look-tile--selected'
      )}
      aria-current={isSelected ? 'true' : undefined}
      onClick={onSelect}
    >
      <span className="planti-look-tile__icon" aria-hidden="true">
        {imageSrc ? <img src={imageSrc} alt="" /> : <Icon />}
      </span>
      <span className="planti-look-tile__label">{label}</span>
    </li>
  );
}
