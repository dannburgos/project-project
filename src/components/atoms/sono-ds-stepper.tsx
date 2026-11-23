import { Minus, Plus } from 'lucide-react';

type SonoDsStepperProps = {
  count: number;
  canDecrease: boolean;
  canIncrease: boolean;
  decreaseLabel: string;
  increaseLabel: string;
  onDecrease: () => void;
  onIncrease: () => void;
};

// Contador de cantidad de la app de Sonopizza: restar, número y sumar
export function SonoDsStepper({
  count,
  canDecrease,
  canIncrease,
  decreaseLabel,
  increaseLabel,
  onDecrease,
  onIncrease
}: SonoDsStepperProps) {
  return (
    <div className="sono-ds-stepper">
      <button
        type="button"
        className="sono-ds-stepper__button"
        aria-label={decreaseLabel}
        disabled={!canDecrease}
        onClick={onDecrease}
      >
        <Minus aria-hidden="true" />
      </button>
      <span className="sono-ds-stepper__count" aria-live="polite">
        {count}
      </span>
      <button
        type="button"
        className="sono-ds-stepper__button"
        aria-label={increaseLabel}
        disabled={!canIncrease}
        onClick={onIncrease}
      >
        <Plus aria-hidden="true" />
      </button>
    </div>
  );
}
