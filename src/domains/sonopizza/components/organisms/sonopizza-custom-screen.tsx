import { ArrowLeft, Check, CircleAlert, TriangleAlert, X } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import { SONOPIZZA_EXTRAS, findSonopizzaProduct } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import type {
  SonopizzaCustomVariant,
  SonopizzaIngredientKey,
  SonopizzaSizeKey
} from '../../types/sonopizza.types';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaIngredientIcon } from '../atoms/sonopizza-ingredient-icon';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';
import { SonopizzaStepper } from '../atoms/sonopizza-stepper';

const SIZE_KEYS: readonly SonopizzaSizeKey[] = ['personal', 'medium', 'family'];

// Tamaño de la pizza en el escenario: el de cada anillo
const PIZZA_SIZE_CLASS: Record<SonopizzaSizeKey, string> = {
  personal: 'sp-custom__pizza--personal',
  medium: 'sp-custom__pizza--medium',
  family: 'sp-custom__pizza--family'
};

const RING_CLASS: Record<SonopizzaSizeKey, string> = {
  personal: 'sp-custom__ring--personal',
  medium: 'sp-custom__ring--medium',
  family: 'sp-custom__ring--family'
};

const LABEL_CLASS: Record<SonopizzaSizeKey, string> = {
  personal: 'sp-custom__ring-label--personal',
  medium: 'sp-custom__ring-label--medium',
  family: 'sp-custom__ring-label--family'
};

// Lo que eligió en el recorrido: mediana, sin cebolla y doble queso
const CHOSEN_SIZE: SonopizzaSizeKey = 'medium';
const REMOVED: readonly SonopizzaIngredientKey[] = ['onion'];
const CHOSEN_EXTRAS: readonly string[] = ['double-cheese'];

type SonopizzaCustomScreenProps = {
  variant?: SonopizzaCustomVariant;
};

// 04 · Personalización. Arriba, tres anillos con los tamaños: la pizza crece
// hasta el anillo elegido (el tamaño se ve). Debajo, el tamaño (obligatorio),
// los ingredientes que se pueden quitar y los extras con su costo. La barra
// de abajo lleva la cantidad, el desglose y el botón con el total.
// Con "missingSize" intentó agregar sin tamaño: el bloque de tamaño se
// sacude, dice qué falta y el botón explica qué hacer
export function SonopizzaCustomScreen({
  variant = 'ready'
}: SonopizzaCustomScreenProps) {
  const copy = sonopizzaMessages.custom;
  const product = findSonopizzaProduct('veggie');
  if (!product) return null;

  const isMissing = variant === 'missingSize';
  const size = isMissing ? null : CHOSEN_SIZE;
  const removed = isMissing ? [] : REMOVED;
  const extras = isMissing ? [] : CHOSEN_EXTRAS;
  const base = size ? product.prices[size] : 0;
  const extrasTotal = SONOPIZZA_EXTRAS.filter(extra =>
    extras.includes(extra.id)
  ).reduce((sum, extra) => sum + extra.price, 0);

  return (
    <div
      className={cn('sp-screen sp-custom', isMissing && 'sp-custom--missing')}
    >
      <header className="sp-custom__top">
        <SonopizzaIconButton
          icon={ArrowLeft}
          label={sonopizzaMessages.common.back}
        />
        <div className="sp-custom__heading">
          <h1 className="sp-custom__title">{copy.title}</h1>
          <p className="sp-custom__product">{product.name}</p>
        </div>
      </header>

      <div className="sp-custom__stage" aria-hidden="true">
        {[...SIZE_KEYS].reverse().map(key => (
          <span
            key={key}
            className={cn(
              'sp-custom__ring',
              RING_CLASS[key],
              key === size && 'sp-custom__ring--on'
            )}
          />
        ))}
        <SonopizzaPizzaPhoto
          photo={product.photo}
          className={cn(
            'sp-custom__pizza',
            PIZZA_SIZE_CLASS[size ?? 'medium'],
            isMissing && 'sp-custom__pizza--ghost'
          )}
        />
        {isMissing && <span className="sp-custom__question">?</span>}
        {SIZE_KEYS.map(key => (
          <span
            key={key}
            className={cn(
              'sp-custom__ring-label',
              LABEL_CLASS[key],
              key === size && 'sp-custom__ring-label--on'
            )}
          >
            {sonopizzaMessages.sizes[key]}
          </span>
        ))}
      </div>

      <section className="sp-custom__group sp-custom__group--size">
        <div className="sp-custom__head">
          <h2 className="sp-custom__label">{copy.sizeTitle}</h2>
          {isMissing ? (
            <span className="sp-tag sp-tag--alert">
              <TriangleAlert aria-hidden="true" />
              {copy.missing}
            </span>
          ) : (
            <span className="sp-tag sp-tag--done">
              <Check aria-hidden="true" />
              {copy.done}
            </span>
          )}
        </div>
        <div
          className="sp-size-options"
          role="radiogroup"
          aria-label={copy.sizeTitle}
          aria-required="true"
        >
          {SIZE_KEYS.map(key => (
            <span
              key={key}
              role="radio"
              aria-checked={key === size}
              className={cn(
                'sp-size-option',
                key === size && 'sp-size-option--on'
              )}
            >
              <span className="sp-size-option__name">
                {sonopizzaMessages.sizes[key]}
              </span>
              <span className="sp-size-option__slices">
                {sonopizzaMessages.slices[key]}
              </span>
              <span className="sp-size-option__price">
                {formatPrice(product.prices[key])}
              </span>
              {key === size && (
                <span className="sp-size-option__check" aria-hidden="true">
                  <Check />
                </span>
              )}
            </span>
          ))}
        </div>
        {isMissing && (
          <p className="sp-custom__hint" role="alert">
            <CircleAlert aria-hidden="true" />
            {copy.missingHint}
          </p>
        )}
      </section>

      <section className="sp-custom__group">
        <div className="sp-custom__head">
          <h2 className="sp-custom__label">{copy.ingredientsTitle}</h2>
          <span className="sp-custom__aside">{copy.ingredientsHint}</span>
        </div>
        <ul className="sp-chips sp-chips--wrap">
          {product.ingredients.map(ingredient => {
            const isRemoved = removed.includes(ingredient);
            const name = sonopizzaMessages.ingredients[ingredient];
            return (
              <li
                key={ingredient}
                className={cn(
                  'sp-chip sp-chip--soft',
                  isRemoved && 'sp-chip--removed'
                )}
              >
                {isRemoved ? (
                  <X aria-hidden="true" />
                ) : (
                  <SonopizzaIngredientIcon ingredient={ingredient} />
                )}
                {isRemoved
                  ? fillTemplate(copy.removedTemplate, {
                      name: name.toLowerCase()
                    })
                  : name}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="sp-custom__group">
        <div className="sp-custom__head">
          <h2 className="sp-custom__label">{copy.extrasTitle}</h2>
          <span className="sp-tag sp-tag--soft">{copy.optional}</span>
        </div>
        <ul className="sp-extras">
          {SONOPIZZA_EXTRAS.map(extra => {
            const isOn = extras.includes(extra.id);
            return (
              <li
                key={extra.id}
                role="checkbox"
                aria-checked={isOn}
                className={cn('sp-extra', isOn && 'sp-extra--on')}
              >
                <span className="sp-extra__box" aria-hidden="true">
                  {isOn && <Check />}
                </span>
                <span className="sp-extra__name">{extra.name}</span>
                <span className="sp-extra__price">
                  +{formatPrice(extra.price)}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="sp-bar sp-custom__bar">
        <SonopizzaStepper
          count={1}
          decreaseLabel={sonopizzaMessages.common.decrease}
          increaseLabel={sonopizzaMessages.common.increase}
        />
        <div className="sp-custom__total">
          <span className="sp-custom__breakdown">
            {isMissing
              ? copy.emptyPrice
              : `${copy.baseLabel} ${formatPrice(base)} · ${copy.extrasLabel} ${formatPrice(extrasTotal)}`}
          </span>
          <span
            className={cn(
              'sp-button sp-button--primary sp-custom__add',
              isMissing && 'sp-button--off'
            )}
          >
            {isMissing
              ? copy.chooseSize
              : fillTemplate(copy.addTemplate, {
                  price: formatPrice(base + extrasTotal)
                })}
            {isMissing && <span className="sp-tap" aria-hidden="true" />}
          </span>
        </div>
      </div>
    </div>
  );
}
