import { cn } from '@/lib/utils';

type ToyotaChipsTone = 'default' | 'struck';

type ToyotaChipsProps = {
  items: readonly string[];
  label?: string;
  tone?: ToyotaChipsTone;
  className?: string;
};

const TONE_CLASS: Record<ToyotaChipsTone, string> = {
  default: '',
  struck: 'ty-chips--struck'
};

// Etiquetas cortas en fila (criterios, principios, lo que queda fuera)
export function ToyotaChips({
  items,
  label,
  tone = 'default',
  className
}: ToyotaChipsProps) {
  return (
    <div className={cn('ty-chips', TONE_CLASS[tone], className)} data-ty-group>
      {label && <p className="ty-chips__label">{label}</p>}
      <ul className="ty-chips__list">
        {items.map(item => (
          <li key={item} className="ty-chips__item" data-ty-item>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
