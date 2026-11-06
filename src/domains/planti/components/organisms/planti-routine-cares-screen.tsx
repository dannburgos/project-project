import { Droplet, Leaf, Sprout } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiCareOption } from '../atoms/planti-care-option';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

const CARE_ICONS = {
  water: Droplet,
  fertilize: Sprout,
  leaves: Leaf
} as const;

type PlantiRoutineCaresScreenProps = {
  // Cuántos cuidados ya se marcaron, en orden (por defecto, todos)
  checkedCares?: number;
  isPressed?: boolean;
};

// Rutina, paso 1: los cuidados que recomienda Planti para esta planta, cada
// uno con por qué sirve. En el recorrido se marcan de a uno
export function PlantiRoutineCaresScreen({
  checkedCares = Infinity,
  isPressed = false
}: PlantiRoutineCaresScreenProps) {
  const { routine } = plantiMessages;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={routine.title} />
      <h2 className="planti-search-question">{routine.caresQuestion}</h2>
      <p className="planti-routine__hint">{routine.caresHint}</p>
      <ul className="planti-care-list">
        {routine.cares.map((care, index) => (
          <PlantiCareOption
            key={care.key}
            icon={CARE_ICONS[care.key]}
            name={care.name}
            text={care.text}
            isChecked={index < checkedCares}
          />
        ))}
      </ul>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {routine.caresAction}
        </PlantiButton>
      </div>
    </div>
  );
}
