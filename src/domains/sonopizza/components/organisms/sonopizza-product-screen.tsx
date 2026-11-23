'use client';

import { ArrowLeft, Clock3, Heart, Star } from 'lucide-react';

import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import {
  SONOPIZZA_EXTRAS,
  SONOPIZZA_SAUCES,
  findSonopizzaProduct
} from '../../example-menu';
import { useSolidOnScroll } from '../../hooks/use-solid-on-scroll';
import { sonopizzaMessages } from '../../messages';
import { calculateSonopizzaTotal } from '../../sonopizza-order.util';
import type {
  SonopizzaOrderChoice,
  SonopizzaSizeKey
} from '../../types/sonopizza.types';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';
import { SonopizzaStepper } from '../atoms/sonopizza-stepper';
import { SonopizzaAdditionRow } from '../molecules/sonopizza-addition-row';
import { SonopizzaChoiceOption } from '../molecules/sonopizza-choice-option';
import { SonopizzaIngredientRow } from '../molecules/sonopizza-ingredient-row';
import { SonopizzaPickTile } from '../molecules/sonopizza-pick-tile';
import { SonopizzaSauceOption } from '../molecules/sonopizza-sauce-option';
import { SonopizzaSizeOption } from '../molecules/sonopizza-size-option';
import { SonopizzaTotalBar } from '../molecules/sonopizza-total-bar';

// Cuántos píxeles se desplaza antes de que la barra de arriba se vuelva blanca:
// cuando la hoja ya subió casi hasta el borde de la pantalla (llega en 246 px)
// y del encabezado solo queda una franja angosta. Así el cambio es pequeño y,
// justo a esa altura, el texto de la hoja empieza a pasar por debajo de los
// botones y necesita el fondo
const SOLID_AFTER = 200;

const SIZE_KEYS: readonly SonopizzaSizeKey[] = ['personal', 'medium', 'family'];

// Lo que eligió en el recorrido: mediana, con la salsa de la receta, con todos
// sus ingredientes y con doble queso (lo mismo que queda en el carrito)
const CHOICE: SonopizzaOrderChoice = {
  size: 'medium',
  sauceId: 'tomato',
  extraIds: ['double-cheese'],
  removed: []
};

const CRUSTS = SONOPIZZA_EXTRAS.filter(extra => extra.group === 'crust');
const ADDITIONS = SONOPIZZA_EXTRAS.filter(extra => extra.group === 'addition');

// 04 · Elige tu pizza: el detalle y la personalización en una sola vista, que
// se desplaza. Arriba, la pizza y sus datos. Después, primero lo obligatorio:
// la pizza como la vendemos (el tamaño). Y luego, todo opcional: la salsa, qué
// quitamos y los extras (borde y adiciones). Abajo, siempre a la vista, solo
// el total (que se actualiza con cada elección), la cantidad y el botón para
// agregar. Arriba, la pizza queda fija y la hoja con la descripción y las
// casillas sube por encima y la va tapando; cuando la cubre del todo, la barra
// de arriba se vuelve blanca y le sale el nombre, sin saltos.
export function SonopizzaProductScreen() {
  const copy = sonopizzaMessages.product;
  const { ref, isSolid } = useSolidOnScroll(SOLID_AFTER);
  const product = findSonopizzaProduct('veggie');
  if (!product) return null;

  const choice = CHOICE;
  const total = calculateSonopizzaTotal(product, choice);
  const chosenCrust = CRUSTS.find(crust => choice.extraIds.includes(crust.id));

  return (
    <div className={cn('sp-screen sp-pick', isSolid && 'sp-pick--solid')}>
      <div ref={ref} className="sp-pick__scroll">
        <div className="sp-pick__content">
          <header className="sp-pick__hero">
            <div className="sp-pick__hero-inner">
              <SonopizzaPizzaPhoto
                photo={product.photo}
                className="sp-pick__photo"
              />
              <div className="sp-pick__intro">
                <h1 className="sp-display sp-pick__name">{product.name}</h1>
                <div className="sp-pick__pills">
                  <span className="sp-pick__pill">
                    <Star aria-hidden="true" />
                    <b>{copy.rating}</b>
                    <span>{copy.ratingCount}</span>
                  </span>
                  <span className="sp-pick__pill">
                    <Clock3 aria-hidden="true" />
                    {copy.time}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="sp-pick__sheet">
            <p className="sp-pick__text">{product.description}</p>
            <div className="sp-pick__tiles">
              <SonopizzaPickTile title={copy.sizeTitle} subtitle={copy.sizeSub}>
                <div
                  className="sp-pick__sizes"
                  role="radiogroup"
                  aria-label={copy.sizeTitle}
                  aria-required="true"
                >
                  {SIZE_KEYS.map(key => (
                    <SonopizzaSizeOption
                      key={key}
                      size={key}
                      price={product.prices[key]}
                      isOn={key === choice.size}
                    />
                  ))}
                </div>
              </SonopizzaPickTile>

              <div className="sp-pick__section">
                <h2 className="sp-pick__section-title">
                  {copy.customizeTitle}
                </h2>
              </div>

              <SonopizzaPickTile title={copy.sauceTitle}>
                <div
                  className="sp-pick__sauces"
                  role="radiogroup"
                  aria-label={copy.sauceTitle}
                >
                  {SONOPIZZA_SAUCES.map(sauce => (
                    <SonopizzaSauceOption
                      key={sauce.id}
                      sauce={sauce}
                      isOn={sauce.id === choice.sauceId}
                      isRecipe={sauce.id === SONOPIZZA_SAUCES[0]?.id}
                    />
                  ))}
                </div>
              </SonopizzaPickTile>

              <SonopizzaPickTile
                title={copy.removeTitle}
                subtitle={copy.removeHint}
              >
                <ul className="sp-pick__ingredients">
                  {product.ingredients.map(ingredient => (
                    <SonopizzaIngredientRow
                      key={ingredient}
                      ingredient={ingredient}
                      isRemoved={choice.removed.includes(ingredient)}
                    />
                  ))}
                </ul>
              </SonopizzaPickTile>

              <SonopizzaPickTile title={copy.extrasTitle}>
                <div className="sp-pick__group">
                  <h3 className="sp-label">{copy.crustTitle}</h3>
                  <div
                    className="sp-pick__crusts"
                    role="radiogroup"
                    aria-label={copy.crustTitle}
                  >
                    <SonopizzaChoiceOption
                      name={copy.crustNone}
                      note={copy.crustIncluded}
                      isOn={!chosenCrust}
                    />
                    {CRUSTS.map(crust => (
                      <SonopizzaChoiceOption
                        key={crust.id}
                        name={crust.shortName ?? crust.name}
                        note={`+${formatPrice(crust.price)}`}
                        isOn={crust.id === chosenCrust?.id}
                      />
                    ))}
                  </div>
                </div>
                <div className="sp-pick__group">
                  <h3 className="sp-label">{copy.additionsTitle}</h3>
                  <ul className="sp-pick__additions">
                    {ADDITIONS.map(extra => (
                      <SonopizzaAdditionRow
                        key={extra.id}
                        extra={extra}
                        isOn={choice.extraIds.includes(extra.id)}
                      />
                    ))}
                  </ul>
                </div>
              </SonopizzaPickTile>
            </div>
          </div>
        </div>
      </div>

      <div className="sp-pick__top">
        <SonopizzaIconButton
          icon={ArrowLeft}
          label={sonopizzaMessages.common.back}
        />
        <span className="sp-pick__top-title">
          <span className="sp-pick__top-name">{product.name}</span>
        </span>
        <SonopizzaIconButton icon={Heart} label={copy.favoriteLabel} />
      </div>

      <SonopizzaTotalBar
        label={copy.totalLabel}
        total={total}
        aside={
          <SonopizzaStepper
            count={1}
            decreaseLabel={sonopizzaMessages.common.decrease}
            increaseLabel={sonopizzaMessages.common.increase}
          />
        }
        actionLabel={copy.addToCart}
      />
    </div>
  );
}
