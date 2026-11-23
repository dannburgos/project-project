import type { LucideIcon } from 'lucide-react';

type PlantiPlanStepProps = {
  icon: LucideIcon;
  name: string;
  // Cuándo toca
  when: string;
  // Cómo se hace, en una línea
  how: string;
};

// Un paso de la rutina que la app armó: qué hacer, cuándo toca y cómo se hace
export function PlantiPlanStep({
  icon: Icon,
  name,
  when,
  how
}: PlantiPlanStepProps) {
  return (
    <li className="planti-plan-step">
      <span className="planti-plan-step__icon" aria-hidden="true">
        <Icon />
      </span>
      <div className="planti-plan-step__text">
        <p className="planti-plan-step__name">{name}</p>
        <p className="planti-plan-step__when">{when}</p>
        <p className="planti-plan-step__how">{how}</p>
      </div>
    </li>
  );
}
