'use client';

import { Check, Plus, X, type LucideIcon } from 'lucide-react';

import { SonoIngredientIcon } from '@/components/atoms/sono-ingredient-icon';
import { SonoPizzaArt } from '@/components/atoms/sono-pizza-art';
import { SonoDsSheet } from '@/components/molecules/sono-ds-sheet';
import type {
  SonoDesignSystem,
  SonoDsBrandElementId,
  SonoDsToppingState
} from '@/content/sonopizza-design-system.types';
import { useSonoDsChoice } from '@/hooks/use-sono-ds-choice';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

// Las ocho porciones del cargador, cada una de 45° sobre un círculo de radio
// 44 centrado en un lienzo de 100 × 100 (empiezan arriba y giran a la derecha)
const SLICE_PATHS = Array.from({ length: 8 }, (_, index) => {
  const point = (angle: number) => {
    const radians = (angle * Math.PI) / 180;
    return `${(50 + 44 * Math.cos(radians)).toFixed(2)} ${(50 + 44 * Math.sin(radians)).toFixed(2)}`;
  };
  const start = -90 + index * 45;
  return `M50 50 L${point(start)} A44 44 0 0 1 ${point(start + 45)} Z`;
});

// Tamaño de cada pizza del selector, de la más chica a la más grande
const SIZE_CLASS: readonly string[] = [
  'sono-ds-size-art__pizza--small',
  'sono-ds-size-art__pizza--medium',
  'sono-ds-size-art__pizza--large'
];

const TOPPING_CLASS: Record<SonoDsToppingState, string> = {
  added: 'sono-ds-topping--added',
  removed: 'sono-ds-topping--removed',
  extra: 'sono-ds-topping--extra'
};

const TOPPING_ICON: Record<SonoDsToppingState, LucideIcon> = {
  added: Check,
  removed: X,
  extra: Plus
};

type SonoDsBrand = SonoDesignSystem['brand'];

type SonoDsBrandVisualProps = {
  id: SonoDsBrandElementId;
  brand: SonoDsBrand;
  palette: readonly string[];
};

// Selector de tamaño con tres pizzas que crecen: se elige viéndolo
type SonoDsSizePizzasProps = {
  sizes: readonly string[];
};

function SonoDsSizePizzas({ sizes }: SonoDsSizePizzasProps) {
  const size = useSonoDsChoice(1);

  return (
    <div
      className="sono-ds-size-art"
      role="radiogroup"
      aria-label={sizes.join(', ')}
    >
      {sizes.map((name, index) => (
        <button
          key={name}
          type="button"
          role="radio"
          aria-checked={size.selected === index}
          className={cn(
            'sono-ds-size-art__option',
            size.selected === index && 'sono-ds-size-art__option--current'
          )}
          onClick={() => size.handleSelect(index)}
        >
          <SonoPizzaArt
            className={cn('sono-ds-size-art__pizza', SIZE_CLASS[index])}
            hasSlices
          />
          {name}
        </button>
      ))}
    </div>
  );
}

// La muestra de cada elemento de marca
function SonoDsBrandVisual({ id, brand, palette }: SonoDsBrandVisualProps) {
  if (id === 'pepperoni-palette')
    return (
      <SonoPizzaArt
        className="sono-ds-brand__pizza"
        pepperoniColors={palette}
      />
    );

  if (id === 'size-pizzas') return <SonoDsSizePizzas sizes={brand.sizes} />;

  if (id === 'ingredient-icons')
    return (
      <ul className="sono-ds-ingredient-icons">
        {brand.ingredients.map(ingredient => (
          <li key={ingredient.id} className="sono-ds-icons__item">
            <span className="sono-ds-icon-badge">
              <SonoIngredientIcon id={ingredient.id} />
            </span>
            {ingredient.name}
          </li>
        ))}
      </ul>
    );

  if (id === 'slice-loader')
    return (
      <div className="sono-ds-loader">
        <svg
          className="sono-ds-loader__pizza"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          {SLICE_PATHS.map(path => (
            <path key={path} className="sono-ds-loader__slice" d={path} />
          ))}
        </svg>
        <span className="sono-ds-loader__label">{brand.loaderLabel}</span>
      </div>
    );

  if (id === 'topping-chips')
    return (
      <ul className="sono-ds-toppings">
        {brand.toppings.map(topping => {
          const Icon = TOPPING_ICON[topping.state];
          return (
            <li
              key={topping.name}
              className={cn('sono-ds-topping', TOPPING_CLASS[topping.state])}
            >
              <Icon aria-hidden="true" />
              {topping.name}
              {topping.price !== undefined && (
                <span className="sono-ds-topping__price">
                  +{formatPrice(topping.price)}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    );

  const total = brand.ticket.lines.reduce((sum, line) => sum + line.price, 0);
  return (
    <div className="sono-ds-ticket">
      <p className="sono-ds-ticket__title">{brand.ticket.title}</p>
      <dl className="sono-ds-ticket__lines">
        {brand.ticket.lines.map(line => (
          <div key={line.name} className="sono-ds-ticket__line">
            <dt>{line.name}</dt>
            <dd>{formatPrice(line.price)}</dd>
          </div>
        ))}
        <div className="sono-ds-ticket__line sono-ds-ticket__line--total">
          <dt>{brand.ticket.totalLabel}</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>
    </div>
  );
}

type SonoDsBrandElementsProps = {
  brand: SonoDsBrand;
  // Los HEX de la paleta, para los pepperonis
  palette: readonly string[];
};

// Elementos de marca de Sonopizza, al final del sistema de diseño: las
// partes de la pizza convertidas en piezas de la interfaz
export function SonoDsBrandElements({
  brand,
  palette
}: SonoDsBrandElementsProps) {
  return (
    <div className="sono-ds__grid">
      {brand.elements.map(element => (
        <SonoDsSheet key={element.id} title={element.title} note={element.text}>
          <div className="sono-ds__canvas sono-ds__canvas--center">
            <SonoDsBrandVisual
              id={element.id}
              brand={brand}
              palette={palette}
            />
          </div>
        </SonoDsSheet>
      ))}
    </div>
  );
}
