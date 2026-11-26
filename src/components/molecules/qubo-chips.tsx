import { cn } from '@/lib/utils';

type QuboChipsProps = {
  items: readonly string[];
  isCode?: boolean;
  className?: string;
};

// Etiquetas en fila. Con `isCode`, se leen como nombres de eventos.
export function QuboChips({ items, isCode, className }: QuboChipsProps) {
  return (
    <ul className={cn('qb-chips', isCode && 'qb-chips--code', className)}>
      {items.map(item => (
        <li key={item} className="qb-chips__item">
          {item}
        </li>
      ))}
    </ul>
  );
}
