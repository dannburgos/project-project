import { ArrowLeft, ArrowRight, Clock3, Heart, Star } from 'lucide-react';

import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import { findSonopizzaProduct } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import type { SonopizzaSizeKey } from '../../types/sonopizza.types';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaIngredientIcon } from '../atoms/sonopizza-ingredient-icon';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';

const SIZE_KEYS: readonly SonopizzaSizeKey[] = ['personal', 'medium', 'family'];

// Lugar de cada ingrediente que flota alrededor de la pizza
const BUBBLE_CLASS: readonly string[] = [
  'sp-detail__bubble--one',
  'sp-detail__bubble--two',
  'sp-detail__bubble--three',
  'sp-detail__bubble--four'
];

// 03 · Detalle de producto: un póster azul con el nombre corto gigante, la
// pizza girando al frente y sus ingredientes flotando alrededor. Abajo, una
// hoja con nombre, valoración, tiempo, descripción, ingredientes y los tres
// tamaños con su precio; el botón lleva a personalizar
export function SonopizzaDetailScreen() {
  const copy = sonopizzaMessages.detail;
  const product = findSonopizzaProduct('veggie');
  if (!product) return null;

  return (
    <div className="sp-screen sp-detail">
      <div className="sp-detail__poster">
        <div className="sp-detail__actions">
          <SonopizzaIconButton
            icon={ArrowLeft}
            label={sonopizzaMessages.common.back}
            tone="glass"
          />
          <SonopizzaIconButton
            icon={Heart}
            label={copy.favoriteLabel}
            tone="glass"
          />
        </div>
        <span className="sp-display sp-detail__word" aria-hidden="true">
          {copy.poster}
        </span>
        <SonopizzaPizzaPhoto
          photo={product.photo}
          isSpinning
          className="sp-detail__pizza"
        />
        {product.ingredients.slice(0, 4).map((ingredient, index) => (
          <span
            key={ingredient}
            className={cn('sp-detail__bubble', BUBBLE_CLASS[index])}
            aria-hidden="true"
          >
            <SonopizzaIngredientIcon ingredient={ingredient} />
          </span>
        ))}
        {product.tag && (
          <span className="sp-sticker sp-detail__tag">{product.tag}</span>
        )}
      </div>

      <div className="sp-sheet sp-detail__sheet">
        <h1 className="sp-display sp-detail__name">{product.name}</h1>
        <div className="sp-detail__meta">
          <span className="sp-meta">
            <Star aria-hidden="true" />
            <b>{copy.rating}</b>
            {copy.ratingCount}
          </span>
          <span className="sp-meta">
            <Clock3 aria-hidden="true" />
            {copy.time}
          </span>
        </div>
        <p className="sp-detail__text">{product.description}</p>

        <h2 className="sp-label sp-detail__label">{copy.ingredientsTitle}</h2>
        <ul className="sp-chips sp-detail__ingredients">
          {product.ingredients.map(ingredient => (
            <li key={ingredient} className="sp-chip sp-chip--soft">
              <SonopizzaIngredientIcon ingredient={ingredient} />
              {sonopizzaMessages.ingredients[ingredient]}
            </li>
          ))}
        </ul>

        <h2 className="sp-label sp-detail__label">{copy.sizesTitle}</h2>
        <ul className="sp-detail__sizes">
          {SIZE_KEYS.map(key => (
            <li key={key} className="sp-detail__size">
              <span className="sp-detail__size-name">
                {sonopizzaMessages.sizes[key]}
              </span>
              <span className="sp-detail__size-slices">
                {sonopizzaMessages.slices[key]}
              </span>
              <span className="sp-detail__size-price">
                {formatPrice(product.prices[key])}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="sp-bar">
        <p className="sp-bar__price">
          <span>{sonopizzaMessages.common.from}</span>
          {formatPrice(product.prices.personal)}
        </p>
        <span className="sp-button sp-button--primary sp-bar__cta">
          {copy.cta}
          <ArrowRight aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
