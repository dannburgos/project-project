import type { ToyotaItem } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaCellsColumns = 2 | 3 | 4;
type ToyotaCellsMark = 'number' | 'check' | 'cross';

type ToyotaCellsProps = {
  items: readonly (ToyotaItem | string)[];
  columns?: ToyotaCellsColumns;
  mark?: ToyotaCellsMark;
  // Etiqueta corta sobre cada celda (por ejemplo, «Hipótesis»)
  badge?: string;
  className?: string;
};

const COLUMNS_CLASS: Record<ToyotaCellsColumns, string> = {
  2: 'ty-cells--two',
  3: 'ty-cells--three',
  4: 'ty-cells--four'
};

const MARK_SYMBOL: Record<Exclude<ToyotaCellsMark, 'number'>, string> = {
  check: '+',
  cross: '×'
};

function toItem(item: ToyotaItem | string): ToyotaItem {
  return typeof item === 'string' ? { title: item } : item;
}

// Celdas de retícula con cruces en las esquinas (referencia: Longbow). Cada
// celda lleva su número en píldora (.01) o una marca de incluye/no incluye.
export function ToyotaCells({
  items,
  columns = 3,
  mark = 'number',
  badge,
  className
}: ToyotaCellsProps) {
  return (
    <ol
      className={cn('ty-cells', COLUMNS_CLASS[columns], className)}
      data-ty-group
    >
      {items.map(toItem).map((item, index) => (
        <li
          key={item.title}
          className={cn(
            'ty-cells__item',
            mark === 'cross' && 'ty-cells__item--muted'
          )}
          data-ty-item
        >
          <span className="ty-cells__mark" aria-hidden="true">
            {mark === 'number'
              ? `.${String(index + 1).padStart(2, '0')}`
              : MARK_SYMBOL[mark]}
          </span>
          {badge && <span className="ty-cells__badge">{badge}</span>}
          <p className="ty-cells__title">{item.title}</p>
          {item.text && <p className="ty-cells__text">{item.text}</p>}
        </li>
      ))}
    </ol>
  );
}
