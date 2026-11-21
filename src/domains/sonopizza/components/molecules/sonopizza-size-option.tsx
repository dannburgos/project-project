import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import { SONOPIZZA_SLICE_COUNT } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import type { SonopizzaSizeKey } from '../../types/sonopizza.types';
import { SonopizzaSizePizza } from '../atoms/sonopizza-size-pizza';

// El dibujo crece de un tamaño al siguiente
const PIZZA_CLASS: Record<SonopizzaSizeKey, string> = {
  personal: 'sp-size-card__pizza--personal',
  medium: 'sp-size-card__pizza--medium',
  family: 'sp-size-card__pizza--family'
};

type SonopizzaSizeOptionProps = {
  size: SonopizzaSizeKey;
  price: number;
  isOn: boolean;
};

// Opción de tamaño: la pizza dibujada y partida en sus porciones, el nombre,
// cuántas porciones trae y el precio. La elegida lleva un anillo naranja
export function SonopizzaSizeOption({
  size,
  price,
  isOn
}: SonopizzaSizeOptionProps) {
  return (
    <span
      role="radio"
      aria-checked={isOn}
      className={cn('sp-size-card', isOn && 'sp-size-card--on')}
    >
      <SonopizzaSizePizza
        slices={SONOPIZZA_SLICE_COUNT[size]}
        className={cn('sp-size-card__pizza', PIZZA_CLASS[size])}
      />
      <span className="sp-size-card__name">
        {sonopizzaMessages.sizes[size]}
      </span>
      <span className="sp-size-card__slices">
        {sonopizzaMessages.slices[size]}
      </span>
      <span className="sp-size-card__price">{formatPrice(price)}</span>
      {isOn && (
        <span className="sp-size-card__check" aria-hidden="true">
          <Check />
        </span>
      )}
    </span>
  );
}
