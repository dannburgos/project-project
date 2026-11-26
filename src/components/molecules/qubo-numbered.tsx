import type { QuboItem } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboNumberedProps = {
  items: readonly QuboItem[];
  className?: string;
};

// Funciones numeradas 01, 02, 03… (referencia: la lista de funciones de
// Armor). Cada una con su título y su texto.
export function QuboNumbered({ items, className }: QuboNumberedProps) {
  return (
    <ol className={cn('qb-numbered', className)}>
      {items.map((item, index) => (
        <li key={item.title} className="qb-numbered__item" data-qb-reveal>
          <span className="qb-numbered__number" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h4 className="qb-numbered__title">{item.title}</h4>
          {item.text && <p className="qb-numbered__text">{item.text}</p>}
        </li>
      ))}
    </ol>
  );
}
