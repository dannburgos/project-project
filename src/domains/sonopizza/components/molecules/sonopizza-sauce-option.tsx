import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import { sonopizzaMessages } from '../../messages';
import type { SonopizzaSauce } from '../../types/sonopizza.types';
import { SonopizzaSauceSwatch } from '../atoms/sonopizza-sauce-swatch';

type SonopizzaSauceOptionProps = {
  sauce: SonopizzaSauce;
  isOn: boolean;
  // La de la receta dice "Incluida" en vez de "Sin costo"
  isRecipe: boolean;
};

// Opción de salsa: una cucharada con su textura, el nombre y lo que cuesta
export function SonopizzaSauceOption({
  sauce,
  isOn,
  isRecipe
}: SonopizzaSauceOptionProps) {
  const copy = sonopizzaMessages.product;
  const note = sauce.price
    ? `+${formatPrice(sauce.price)}`
    : isRecipe
      ? copy.sauceIncluded
      : copy.sauceFree;

  return (
    <span
      role="radio"
      aria-checked={isOn}
      className={cn('sp-sauce', isOn && 'sp-sauce--on')}
    >
      <SonopizzaSauceSwatch tone={sauce.tone} className="sp-sauce__swatch" />
      <span className="sp-sauce__name">{sauce.name}</span>
      <span className="sp-sauce__note">{note}</span>
    </span>
  );
}
