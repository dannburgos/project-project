'use client';

import { Check, X } from 'lucide-react';

import { SonoDsStepper } from '@/components/atoms/sono-ds-stepper';
import type { SonoDesignSystem } from '@/content/sonopizza-design-system.types';
import { useSonoDsOrder } from '@/hooks/use-sono-ds-order';
import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

type SonoDsConfiguratorProps = {
  configurator: SonoDesignSystem['components']['configurator'];
};

// Personalización de una pizza armada con los componentes del sistema:
// selector de tamaño (obligatorio), ingredientes que se pueden quitar, extras
// con su costo, contador y resumen de precio. Funciona: el total y el botón
// cambian con cada elección (lo lleva useSonoDsOrder).
export function SonoDsConfigurator({ configurator }: SonoDsConfiguratorProps) {
  const order = useSonoDsOrder(configurator);

  return (
    <div className="sono-ds-config">
      <div className="sono-ds-config__options">
        <div className="sono-ds-config__group">
          <div className="sono-ds-config__head">
            <span className="sono-ds-config__title">
              {configurator.sizeTitle}
            </span>
            <span className="sono-ds-tag sono-ds-tag--required">
              {configurator.requiredLabel}
            </span>
          </div>
          <div
            className="sono-ds-sizes"
            role="radiogroup"
            aria-label={configurator.sizeTitle}
          >
            {configurator.sizes.map((size, index) => (
              <button
                key={size.name}
                type="button"
                role="radio"
                aria-checked={order.sizeIndex === index}
                className={cn(
                  'sono-ds-size',
                  order.sizeIndex === index && 'sono-ds-size--current'
                )}
                onClick={() => order.handleSize(index)}
              >
                <span className="sono-ds-size__name">{size.name}</span>
                <span className="sono-ds-size__detail">{size.detail}</span>
                <span className="sono-ds-size__price">
                  {formatPrice(size.price)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="sono-ds-config__group">
          <span className="sono-ds-config__title">
            {configurator.ingredientsTitle}
          </span>
          <div className="sono-ds-ingredients">
            {configurator.ingredients.map(ingredient => {
              const isRemoved = order.removed.includes(ingredient);
              return (
                <button
                  key={ingredient}
                  type="button"
                  aria-pressed={!isRemoved}
                  className={cn(
                    'sono-ds-ingredient',
                    isRemoved && 'sono-ds-ingredient--removed'
                  )}
                  onClick={() => order.handleIngredient(ingredient)}
                >
                  {isRemoved ? (
                    <X aria-hidden="true" />
                  ) : (
                    <Check aria-hidden="true" />
                  )}
                  {isRemoved
                    ? fillTemplate(configurator.removedTemplate, {
                        name: ingredient.toLowerCase()
                      })
                    : ingredient}
                </button>
              );
            })}
          </div>
        </div>

        <div className="sono-ds-config__group">
          <div className="sono-ds-config__head">
            <span className="sono-ds-config__title">
              {configurator.extrasTitle}
            </span>
            <span className="sono-ds-tag sono-ds-tag--optional">
              {configurator.optionalLabel}
            </span>
          </div>
          <div className="sono-ds-extras">
            {configurator.extras.map(extra => {
              const isChecked = order.chosenExtras.includes(extra.name);
              return (
                <button
                  key={extra.name}
                  type="button"
                  role="checkbox"
                  aria-checked={isChecked}
                  className={cn(
                    'sono-ds-extra',
                    isChecked && 'sono-ds-extra--checked'
                  )}
                  onClick={() => order.handleExtra(extra.name)}
                >
                  <span className="sono-ds-extra__box" aria-hidden="true">
                    {isChecked && <Check />}
                  </span>
                  <span className="sono-ds-extra__name">{extra.name}</span>
                  <span className="sono-ds-extra__price">
                    +{formatPrice(extra.price)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="sono-ds-config__summary">
        <div className="sono-ds-config__head">
          <span className="sono-ds-config__title">
            {configurator.quantityLabel}
          </span>
          <SonoDsStepper
            count={order.quantity}
            canDecrease={order.canDecrease}
            canIncrease={order.canIncrease}
            decreaseLabel={configurator.decreaseLabel}
            increaseLabel={configurator.increaseLabel}
            onDecrease={order.handleDecrease}
            onIncrease={order.handleIncrease}
          />
        </div>
        <dl className="sono-ds-bill">
          <div className="sono-ds-bill__row">
            <dt>{configurator.baseLabel}</dt>
            <dd>{formatPrice(order.base)}</dd>
          </div>
          <div className="sono-ds-bill__row">
            <dt>{configurator.extrasLabel}</dt>
            <dd>{formatPrice(order.extrasTotal)}</dd>
          </div>
          <div className="sono-ds-bill__row sono-ds-bill__row--total">
            <dt>{configurator.totalLabel}</dt>
            <dd aria-live="polite">{formatPrice(order.total)}</dd>
          </div>
        </dl>
        <button
          type="button"
          className="sono-ds-button sono-ds-button--primary sono-ds-button--block"
          disabled={!order.hasSize}
        >
          {order.hasSize
            ? `${configurator.addLabel} · ${formatPrice(order.total)}`
            : configurator.chooseSizeLabel}
        </button>
      </div>
    </div>
  );
}
