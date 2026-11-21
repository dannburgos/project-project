import { cn } from '@/lib/utils';

import { sonopizzaMessages } from '../../messages';
import type { SonopizzaIngredientKey } from '../../types/sonopizza.types';

type SonopizzaIngredientRowProps = {
  ingredient: SonopizzaIngredientKey;
  // Pidió que se lo quiten: queda en "Sin" y el nombre se apaga
  isRemoved: boolean;
};

// Ingrediente de la pizza con su elección al lado: "Con" (lo lleva, es lo
// normal) o "Sin" (que lo quiten)
export function SonopizzaIngredientRow({
  ingredient,
  isRemoved
}: SonopizzaIngredientRowProps) {
  const copy = sonopizzaMessages.product;
  const name = sonopizzaMessages.ingredients[ingredient];

  return (
    <li className="sp-ingredient">
      <span
        className={cn(
          'sp-ingredient__name',
          isRemoved && 'sp-ingredient__name--off'
        )}
      >
        {name}
      </span>
      <span
        role="radiogroup"
        aria-label={name}
        className="sp-ingredient__choice"
      >
        <span
          role="radio"
          aria-checked={!isRemoved}
          className={cn(
            'sp-ingredient__option',
            !isRemoved && 'sp-ingredient__option--with'
          )}
        >
          {copy.withIngredient}
        </span>
        <span
          role="radio"
          aria-checked={isRemoved}
          className={cn(
            'sp-ingredient__option',
            isRemoved && 'sp-ingredient__option--without'
          )}
        >
          {copy.withoutIngredient}
        </span>
      </span>
    </li>
  );
}
