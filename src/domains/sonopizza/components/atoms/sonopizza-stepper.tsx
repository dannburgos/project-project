import { Minus, Plus } from 'lucide-react';

type SonopizzaStepperProps = {
  count: number;
  decreaseLabel: string;
  increaseLabel: string;
};

// Contador de cantidad de la app: restar, número y sumar. Con una unidad el
// botón de restar se ve apagado
export function SonopizzaStepper({
  count,
  decreaseLabel,
  increaseLabel
}: SonopizzaStepperProps) {
  return (
    <span className="sp-stepper">
      <button
        type="button"
        className="sp-stepper__button"
        aria-label={decreaseLabel}
        disabled={count <= 1}
      >
        <Minus aria-hidden="true" />
      </button>
      <span className="sp-stepper__count">{count}</span>
      <button
        type="button"
        className="sp-stepper__button sp-stepper__button--add"
        aria-label={increaseLabel}
      >
        <Plus aria-hidden="true" />
      </button>
    </span>
  );
}
