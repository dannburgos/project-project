import type { QuboItem } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboCardsProps = {
  items: readonly QuboItem[];
  className?: string;
};

// Tarjetas con título y texto, en columnas
export function QuboCards({ items, className }: QuboCardsProps) {
  return (
    <ul className={cn('qb-cards', className)}>
      {items.map(item => (
        <li key={item.title} className="qb-cards__item" data-qb-reveal>
          <h4 className="qb-cards__title">{item.title}</h4>
          {item.text && <p className="qb-cards__text">{item.text}</p>}
        </li>
      ))}
    </ul>
  );
}
