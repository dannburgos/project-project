import { Plus } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import { sonopizzaMessages } from '../../messages';
import type {
  SonopizzaProduct,
  SonopizzaSizeKey
} from '../../types/sonopizza.types';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';

const SIZE_KEYS: readonly SonopizzaSizeKey[] = ['personal', 'medium', 'family'];

type SonopizzaProductCardProps = {
  product: SonopizzaProduct;
  // Tamaño elegido en la tarjeta: el precio es el de ese tamaño
  size: SonopizzaSizeKey;
  isFeatured?: boolean;
};

// Tarjeta del menú: la pizza se sale por la izquierda, y el tamaño se elige
// desde la tarjeta (P, M, F) con el precio de ese tamaño al lado del botón
// para agregar
export function SonopizzaProductCard({
  product,
  size,
  isFeatured = false
}: SonopizzaProductCardProps) {
  const copy = sonopizzaMessages;

  return (
    <li className={cn('sp-product', isFeatured && 'sp-product--featured')}>
      <SonopizzaPizzaPhoto
        photo={product.photo}
        turn={product.turn}
        className="sp-product__pizza"
      />
      <div className="sp-product__body">
        {product.tag && <span className="sp-product__tag">{product.tag}</span>}
        <h3 className="sp-product__name">{product.name}</h3>
        <p className="sp-product__text">{product.description}</p>
        <div className="sp-product__foot">
          <span
            className="sp-sizes"
            role="radiogroup"
            aria-label={copy.menu.sizeLabel}
          >
            {SIZE_KEYS.map(key => (
              <span
                key={key}
                role="radio"
                aria-checked={key === size}
                aria-label={copy.sizes[key]}
                className={cn(
                  'sp-sizes__item',
                  key === size && 'sp-sizes__item--on'
                )}
              >
                {copy.sizeShort[key]}
              </span>
            ))}
          </span>
          <span className="sp-product__price">
            {formatPrice(product.prices[size])}
          </span>
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
