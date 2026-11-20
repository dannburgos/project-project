import { Check, Plus, ShoppingBag } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { formatPrice } from '@/utils/price.util';

import {
  SONOPIZZA_CART,
  SONOPIZZA_EXTRAS,
  SONOPIZZA_SIDES,
  findSonopizzaProduct
} from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';
import { SonopizzaCustomScreen } from './sonopizza-custom-screen';

// 05 · Agregado al carrito: sobre la personalización (atenuada) sube una hoja.
// La pizza cae en su plato con un sello de listo, se repite qué se agregó
// (tamaño, lo que se quitó y los extras) con su precio, cómo queda el
// carrito, qué podría acompañarla y las dos salidas: ir al carrito o seguir
// explorando
export function SonopizzaAddedScreen() {
  const copy = sonopizzaMessages.added;
  const [line] = SONOPIZZA_CART;
  const product = line ? findSonopizzaProduct(line.productId) : undefined;
  if (!line || !product) return null;

  const count = SONOPIZZA_CART.reduce((sum, item) => sum + item.quantity, 0);
  const total = SONOPIZZA_CART.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );
  const details = [
    ...line.removed.map(ingredient =>
      fillTemplate(sonopizzaMessages.custom.removedTemplate, {
        name: sonopizzaMessages.ingredients[ingredient].toLowerCase()
      })
    ),
    ...SONOPIZZA_EXTRAS.filter(extra => line.extras.includes(extra.id)).map(
      extra => `+ ${extra.name}`
    )
  ];

  return (
    <div className="sp-screen sp-added">
      <div className="sp-added__behind" aria-hidden="true">
        <SonopizzaCustomScreen />
      </div>
      <div className="sp-added__dim" aria-hidden="true" />

      <section className="sp-sheet sp-added__sheet" aria-label={copy.title}>
        <span className="sp-sheet__handle" aria-hidden="true" />
        <div className="sp-added__plate">
          <SonopizzaPizzaPhoto
            photo={product.photo}
            className="sp-added__pizza"
          />
          <span className="sp-added__seal" aria-hidden="true">
            <Check />
          </span>
        </div>
        <h1 className="sp-display sp-added__title">{copy.title}</h1>

        <div className="sp-added__item">
          <div className="sp-added__item-text">
            <p className="sp-added__item-name">
              {fillTemplate(copy.lineTemplate, {
                name: product.name,
                size: sonopizzaMessages.sizes[line.size]
              })}
            </p>
            <ul className="sp-chips sp-chips--wrap">
              {details.map(detail => (
                <li key={detail} className="sp-chip sp-chip--mini">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <span className="sp-added__item-price">
            {formatPrice(line.unitPrice)}
          </span>
        </div>

        <p className="sp-added__cart">
          <ShoppingBag aria-hidden="true" />
          {fillTemplate(copy.cartTemplate, {
            count,
            total: formatPrice(total)
          })}
        </p>

        <h2 className="sp-label sp-added__pair-title">{copy.pairTitle}</h2>
        <ul className="sp-added__pair">
          {SONOPIZZA_SIDES.map(side => (
            <li key={side.id} className="sp-side">
              <span className="sp-side__text">
                <span className="sp-side__name">{side.name}</span>
                <span className="sp-side__price">
                  +{formatPrice(side.price)}
                </span>
              </span>
              <SonopizzaIconButton
                icon={Plus}
                tone="light"
                label={fillTemplate(sonopizzaMessages.common.addTemplate, {
                  name: side.name
                })}
                className="sp-side__add"
              />
            </li>
          ))}
        </ul>

        <span className="sp-button sp-button--primary sp-button--block">
          {copy.goCart}
        </span>
        <span className="sp-button sp-button--ghost sp-button--block">
          {copy.keepExploring}
        </span>
      </section>
    </div>
  );
}
