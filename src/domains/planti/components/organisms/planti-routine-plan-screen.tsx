import { Droplet, Leaf, Sprout } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiPlanStep } from '../molecules/planti-plan-step';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

const STEP_ICONS = {
  water: Droplet,
  fertilize: Sprout,
  leaves: Leaf
} as const;

type PlantiRoutinePlanScreenProps = {
  isPressed?: boolean;
};

// La rutina que la app armó para la planta, paso a paso: qué hacer, cuándo
// toca y cómo se hace. La persona no elige nada; solo la sigue y activa los
// avisos.
export function PlantiRoutinePlanScreen({
  isPressed = false
}: PlantiRoutinePlanScreenProps) {
  const { plan } = plantiMessages.routine;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={plan.title} />
      <h2 className="planti-search-question">{plan.question}</h2>
      <p className="planti-routine__hint">{plan.hint}</p>
      <ul className="planti-plan-list">
        {plan.steps.map(step => (
          <PlantiPlanStep
            key={step.key}
            icon={STEP_ICONS[step.key]}
            name={step.name}
            when={step.when}
            how={step.how}
          />
        ))}
      </ul>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {plan.action}
        </PlantiButton>
      </div>
    </div>
  );
}
