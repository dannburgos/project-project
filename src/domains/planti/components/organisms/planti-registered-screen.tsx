import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiPlantSummary } from '../molecules/planti-plant-summary';

type PlantiRegisteredScreenProps = {
  // El botón principal se está pulsando (en el recorrido)
  isPressed?: boolean;
};

// Planta registrada: confirma que quedó guardada y deja crear su rutina, que
// es opcional
export function PlantiRegisteredScreen({
  isPressed = false
}: PlantiRegisteredScreenProps) {
  const { plant, registered } = plantiMessages;

  return (
    <div className="planti-screen planti-registered">
      <span className="planti-registered__check" aria-hidden="true">
        <Check />
      </span>
      <h1 className="planti-registered__title">{registered.title}</h1>
      <p className="planti-registered__text">{registered.text}</p>
      <PlantiPlantSummary
        name={plant.nickname}
        detail={`${plant.name} · ${plant.place}`}
      />
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {registered.primary}
        </PlantiButton>
        <PlantiButton variant="secondary">{registered.secondary}</PlantiButton>
      </div>
    </div>
  );
}
