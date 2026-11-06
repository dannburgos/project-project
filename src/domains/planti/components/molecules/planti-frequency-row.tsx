import type { LucideIcon } from 'lucide-react';
import { Minus, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

type PlantiFrequencyRowProps = {
  icon: LucideIcon;
  name: string;
  value: string;
  next: string;
  // Con − y + para ajustar la frecuencia (solo en el riego)
  hasStepper?: boolean;
  decreaseLabel?: string;
  increaseLabel?: string;
  // El + se acaba de tocar (en el recorrido)
  isRaised?: boolean;
};

// Un cuidado con cada cuánto se hace y cuándo toca la próxima vez. El valor
// se anima al cambiar para que se note el ajuste
export function PlantiFrequencyRow({
  icon: Icon,
  name,
  value,
  next,
  hasStepper = false,
  decreaseLabel,
  increaseLabel,
  isRaised = false
}: PlantiFrequencyRowProps) {
  return (
    <li className="planti-frequency">
      <span className="planti-frequency__icon" aria-hidden="true">
        <Icon />
      </span>
      <div className="planti-frequency__text">
        <p className="planti-frequency__name">{name}</p>
        <p key={value} className="planti-frequency__value">
          {value}
        </p>
        <p className="planti-frequency__next">{next}</p>
      </div>
      {hasStepper && (
        <div className="planti-frequency__stepper">
          <span
            className="planti-frequency__step"
            role="button"
            aria-label={decreaseLabel}
          >
            <Minus aria-hidden="true" />
          </span>
          <span
            className={cn(
              'planti-frequency__step',
              isRaised && 'planti-frequency__step--tapped'
            )}
            role="button"
            aria-label={increaseLabel}
          >
            <Plus aria-hidden="true" />
          </span>
        </div>
      )}
    </li>
  );
}
