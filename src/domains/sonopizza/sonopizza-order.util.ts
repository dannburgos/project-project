import { fillTemplate } from '@/lib/case-story/fill-template.util';

import { SONOPIZZA_EXTRAS, SONOPIZZA_SAUCES } from './example-menu';
import { sonopizzaMessages } from './messages';
import type {
  SonopizzaCartLine,
  SonopizzaOrderChoice,
  SonopizzaProduct
} from './types/sonopizza.types';

// Total de lo que eligió: la pizza del tamaño elegido, más lo que cuesta
// cambiar la salsa y los extras (borde y adiciones). Quitar un ingrediente no
// cambia el precio
export function calculateSonopizzaTotal(
  product: SonopizzaProduct,
  choice: SonopizzaOrderChoice
): number {
  const sauce = SONOPIZZA_SAUCES.find(item => item.id === choice.sauceId);
  const extras = SONOPIZZA_EXTRAS.filter(extra =>
    choice.extraIds.includes(extra.id)
  ).reduce((sum, extra) => sum + extra.price, 0);

  return product.prices[choice.size] + (sauce?.price ?? 0) + extras;
}

// Cómo se pidió una línea del carrito, listo para mostrar: el tamaño, lo que se
// quitó ("Sin cebolla") y los extras ("+ Doble queso")
export function describeSonopizzaCartLine(line: SonopizzaCartLine): string[] {
  const copy = sonopizzaMessages;

  return [
    copy.sizes[line.size],
    ...line.removed.map(ingredient =>
      fillTemplate(copy.product.removedTemplate, {
        name: copy.ingredients[ingredient].toLowerCase()
      })
    ),
    ...SONOPIZZA_EXTRAS.filter(extra => line.extras.includes(extra.id)).map(
      extra => `+ ${extra.name}`
    )
  ];
}
