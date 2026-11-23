import { cn } from '@/lib/utils';

type PlantiFilterChipsProps = {
  filters: readonly { key: string; label: string; count?: number }[];
  selectedKey: string;
  onSelect: (key: string) => void;
};

// Filtros en cápsulas: la elegida va en verde; algunas llevan su cantidad
export function PlantiFilterChips({
  filters,
  selectedKey,
  onSelect
}: PlantiFilterChipsProps) {
  return (
    <ul className="planti-filter-chips">
      {filters.map(filter => (
        <li key={filter.key}>
          <button
            type="button"
            aria-pressed={filter.key === selectedKey}
            onClick={() => onSelect(filter.key)}
            className={cn(
              'planti-filter-chips__chip',
              filter.key === selectedKey &&
                'planti-filter-chips__chip--selected'
            )}
          >
            {filter.label}
            {filter.count !== undefined && ` · ${filter.count}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
