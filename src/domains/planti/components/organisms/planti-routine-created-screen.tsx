import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';

type PlantiRoutineCreatedScreenProps = {
  isPressed?: boolean;
};

// Rutina creada: se dibuja el check, como al registrar la planta, y queda el
// acceso a las tareas
export function PlantiRoutineCreatedScreen({
  isPressed = false
}: PlantiRoutineCreatedScreenProps) {
  const { routine } = plantiMessages;

  return (
    <div className="planti-screen planti-registered planti-routine-created">
      <span className="planti-registered__check" aria-hidden="true">
        <Check />
      </span>
      <h1 className="planti-registered__title">{routine.createdTitle}</h1>
      <p className="planti-registered__text">{routine.createdText}</p>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {routine.createdAction}
        </PlantiButton>
      </div>
    </div>
  );
}
