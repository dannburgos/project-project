import type { ToyotaStat } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaStatsProps = {
  stats: readonly ToyotaStat[];
  className?: string;
};

// Cifras destacadas: el número grande cuenta desde cero al llegar a la vista.
// La base de la etiqueta se alinea con la base del número (regla de Toyota).
export function ToyotaStats({ stats, className }: ToyotaStatsProps) {
  return (
    <dl className={cn('ty-stats', className)} data-ty-group>
      {stats.map(stat => (
        <div key={stat.label} className="ty-stats__item" data-ty-item>
          <dt className="ty-stats__label">{stat.label}</dt>
          <dd className="ty-stats__value" data-ty-count={stat.value}>
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
