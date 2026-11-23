import { Droplet, Leaf, Sprout } from 'lucide-react';

import { cn } from '@/lib/utils';

const CARE_ICONS = {
  water: Droplet,
  fertilize: Sprout,
  review: Leaf
} as const;

type PlantiDayStripProps = {
  days: readonly {
    key: string;
    label: string;
    number: string;
    // El cuidado que toca ese día, si hay aviso
    care?: keyof typeof CARE_ICONS;
    isSelected?: boolean;
    isToday?: boolean;
  }[];
  // Al tocar un día se elige
  onSelect?: (key: string) => void;
  // El día que se está tocando ahora (en el recorrido)
  tappedKey?: string;
};

// La semana en píldoras: la letra del día y su número, con el ícono del
// cuidado arriba en los días que tienen aviso. El día elegido va en verde.
export function PlantiDayStrip({
  days,
  onSelect,
  tappedKey
}: PlantiDayStripProps) {
  return (
    <ol className="planti-day-strip">
      {days.map(day => {
        const CareIcon = day.care ? CARE_ICONS[day.care] : null;

        return (
          <li key={day.key} className="planti-day-strip__item">
            <button
              type="button"
              aria-pressed={day.isSelected ?? false}
              onClick={onSelect ? () => onSelect(day.key) : undefined}
              className={cn(
                'planti-day-strip__day',
                day.isSelected && 'planti-day-strip__day--selected',
                day.isToday && 'planti-day-strip__day--today',
                day.key === tappedKey && 'planti-day-strip__day--tapped'
              )}
            >
              <span className="planti-day-strip__care" aria-hidden="true">
                {CareIcon && <CareIcon />}
              </span>
              <span className="planti-day-strip__label">{day.label}</span>
              <span className="planti-day-strip__number">{day.number}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
