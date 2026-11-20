import { Minus, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

type SonopizzaStepperProps = {
  count: number;
  decreaseLabel: string;
  increaseLabel: string;
  // Más compacto, dentro de las tarjetas del carrito
  isSmall?: boolean;
};

// Contador de cantidad de la app: restar, número y sumar. Con una unidad el
// botón de restar se ve apagado
export function SonopizzaStepper({
  count,
  decreaseLabel,
  increaseLabel,
  isSmall = false
}: SonopizzaStepperProps) {
  return (
    <span className={cn('sp-stepper', isSmall && 'sp-stepper--small')}>
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
