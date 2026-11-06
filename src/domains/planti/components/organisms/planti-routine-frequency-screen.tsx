import { Droplet, Leaf, Sprout } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiFrequencyRow } from '../molecules/planti-frequency-row';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

const CARE_ICONS = {
  water: Droplet,
  fertilize: Sprout,
  leaves: Leaf
} as const;

type PlantiRoutineFrequencyScreenProps = {
  // Cuántas veces por semana se riega (por defecto, 2)
  waterTimes?: number;
  isPressed?: boolean;
};

// Rutina, paso 2: cada cuidado con cada cuánto se hace y cuándo toca. El
// riego se ajusta con − y +; en el recorrido sube de 1 a 2 veces por semana
export function PlantiRoutineFrequencyScreen({
  waterTimes = 2,
  isPressed = false
}: PlantiRoutineFrequencyScreenProps) {
  const { routine } = plantiMessages;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={routine.frequencyTitle} />
      <h2 className="planti-search-question">{routine.frequencyQuestion}</h2>
      <ul className="planti-frequency-list">
        {routine.frequencies.map(frequency => {
          const care = routine.cares.find(item => item.key === frequency.key);
          const isWater = frequency.key === 'water';

          return (
            <PlantiFrequencyRow
              key={frequency.key}
              icon={CARE_ICONS[frequency.key]}
              name={care?.name ?? ''}
              value={
                'value' in frequency
                  ? frequency.value
                  : routine.waterUnit(waterTimes)
              }
              next={frequency.next}
              hasStepper={isWater}
              decreaseLabel={routine.decrease}
              increaseLabel={routine.increase}
              isRaised={isWater && waterTimes > 1}
            />
          );
        })}
      </ul>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {routine.frequencyAction}
        </PlantiButton>
      </div>
    </div>
  );
}
