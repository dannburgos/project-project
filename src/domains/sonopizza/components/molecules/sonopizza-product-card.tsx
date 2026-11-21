import { Heart, Plus } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import { sonopizzaMessages } from '../../messages';
import type { SonopizzaProduct } from '../../types/sonopizza.types';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';

type SonopizzaProductCardProps = {
  product: SonopizzaProduct;
};

// Tarjeta del menú: la pizza va dentro de la tarjeta, sobre su plato, con la
// etiqueta (más pedida, nueva…) pegada a la foto para que todos los nombres
// queden a la misma altura. Muestra el precio desde el tamaño más pequeño: el
// tamaño se elige después, en la personalización. Arriba a la derecha, el
// favorito: corazón vacío, o lleno de naranja si ya está guardada
export function SonopizzaProductCard({ product }: SonopizzaProductCardProps) {
  const copy = sonopizzaMessages;
  const isFavorite = product.isFavorite ?? false;

  return (
    <li className="sp-product">
      <button
        type="button"
        className={cn(
          'sp-product__favorite',
          isFavorite && 'sp-product__favorite--on'
        )}
        aria-pressed={isFavorite}
        aria-label={
          isFavorite ? copy.common.favoriteRemove : copy.common.favoriteAdd
        }
      >
        <Heart aria-hidden="true" />
      </button>
      <span className="sp-product__media">
        <SonopizzaPizzaPhoto
          photo={product.photo}
          turn={product.turn}
          className="sp-product__pizza"
        />
        {product.tag && <span className="sp-product__tag">{product.tag}</span>}
      </span>
      <div className="sp-product__body">
        <h3 className="sp-product__name">{product.name}</h3>
        <p className="sp-product__text">{product.description}</p>
        <div className="sp-product__foot">
          <p className="sp-product__price">
            <span>{copy.common.from}</span>
            {formatPrice(product.prices.personal)}
          </p>
          <SonopizzaIconButton
            icon={Plus}
            tone="orange"
            label={fillTemplate(copy.common.addTemplate, {
              name: product.name
            })}
            className="sp-product__add"
          />
        </div>
      </div>
    </li>
  );
}
