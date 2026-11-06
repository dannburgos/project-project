import { Droplet, Leaf, Pencil, Sprout } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiTaskRow } from '../atoms/planti-task-row';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

const CARE_ICONS = {
  water: Droplet,
  fertilize: Sprout,
  leaves: Leaf
} as const;

type PlantiRoutineReviewScreenProps = {
  isPressed?: boolean;
};

// Rutina, paso 3: el resumen antes de confirmar. Arriba la planta; debajo
// cada cuidado con su frecuencia y la próxima fecha, y un lápiz para volver
// a editarlo
export function PlantiRoutineReviewScreen({
  isPressed = false
}: PlantiRoutineReviewScreenProps) {
  const { routine } = plantiMessages;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={routine.reviewTitle} />
      <div className="planti-routine-review__plant">
        <span className="planti-routine-review__photo" aria-hidden="true">
          <Leaf />
        </span>
        <div>
          <p className="planti-routine-review__name">{routine.reviewPlant}</p>
          <p className="planti-routine-review__detail">
            {routine.reviewPlantDetail}
          </p>
        </div>
      </div>
      <div className="planti-card planti-task-list planti-routine-review__list">
        {routine.reviewItems.map(item => {
          const care = routine.cares.find(entry => entry.key === item.key);

          return (
            <PlantiTaskRow
              key={item.key}
              icon={CARE_ICONS[item.key]}
              name={care?.name ?? ''}
              detail={item.detail}
              status={
                <span
                  className="planti-routine-review__edit"
                  role="button"
                  aria-label={`${routine.edit} ${care?.name ?? ''}`}
                >
                  <Pencil aria-hidden="true" />
                </span>
              }
            />
          );
        })}
      </div>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {routine.reviewAction}
        </PlantiButton>
      </div>
    </div>
  );
}
