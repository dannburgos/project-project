import { cn } from '@/lib/utils';

type PlantiSwatchProps = {
  tone: 'plain' | 'patterned' | 'other';
  label: string;
  isSelected?: boolean;
};

// Una muestra de color redonda con su nombre debajo; la elegida lleva un aro
// verde
export function PlantiSwatch({
  tone,
  label,
  isSelected = false
}: PlantiSwatchProps) {
  return (
    <li
      className={cn('planti-swatch', isSelected && 'planti-swatch--selected')}
      aria-current={isSelected ? 'true' : undefined}
    >
      <span
        className={cn('planti-swatch__color', `planti-swatch__color--${tone}`)}
        aria-hidden="true"
      />
      <span className="planti-swatch__label">{label}</span>
    </li>
  );
}
