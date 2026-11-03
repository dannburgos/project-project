import { Droplet, Leaf, Sprout } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiSectionHead } from '../atoms/planti-section-head';
import { PlantiTaskRow } from '../atoms/planti-task-row';

const CARE_ICONS = {
  water: Droplet,
  review: Leaf,
  fertilize: Sprout
} as const;

// Tu semana en una sola tarjeta: arriba los siete días (el de hoy resaltado
// y un ícono en los que tienen un cuidado) y debajo lo que viene, con su día
export function PlantiWeekAgenda() {
  const { week } = plantiMessages.home.withTasks;

  return (
    <section>
      <PlantiSectionHead title={week.title} aside={week.count} />
      <div className="planti-card planti-week-agenda">
        <ol className="planti-week-agenda__days">
          {week.days.map(day => {
            const CareIcon = 'care' in day ? CARE_ICONS[day.care] : null;

            return (
              <li
                key={day.key}
                className={cn(
                  'planti-week-agenda__day',
                  'isToday' in day && 'planti-week-agenda__day--today'
                )}
              >
                <span className="planti-week-agenda__label">{day.label}</span>
                <span className="planti-week-agenda__number">{day.number}</span>
                <span className="planti-week-agenda__care" aria-hidden="true">
                  {CareIcon && <CareIcon />}
                </span>
              </li>
            );
          })}
        </ol>
        <h3 className="planti-week-agenda__title">{week.comingTitle}</h3>
        <div className="planti-task-list">
          {week.coming.map(item => (
            <PlantiTaskRow
              key={item.key}
              icon={CARE_ICONS[item.key]}
              name={item.name}
              detail={item.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
