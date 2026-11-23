'use client';

import {
  Check,
  Clock,
  Flame,
  House,
  type LucideIcon,
  Pencil,
  Pizza,
  Plus,
  Search,
  ShoppingBag,
  Trash2
} from 'lucide-react';

import { SonoDsStepper } from '@/components/atoms/sono-ds-stepper';
import { SonoPizzaArt } from '@/components/atoms/sono-pizza-art';
import { SonoDsConfigurator } from '@/components/molecules/sono-ds-configurator';
import { SonoDsSheet } from '@/components/molecules/sono-ds-sheet';
import type { SonoDesignSystem } from '@/content/sonopizza-design-system.types';
import { useSonoDsChoice } from '@/hooks/use-sono-ds-choice';
import { useSonoDsCounter } from '@/hooks/use-sono-ds-counter';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

// Ícono de cada pestaña de la barra de navegación, en su orden
const NAV_ICONS: readonly LucideIcon[] = [House, Pizza, ShoppingBag];

type SonoDsComponentsProps = {
  components: SonoDesignSystem['components'];
};

// Componentes de las pantallas clave de Sonopizza, armados con los
// fundamentos. Las pestañas, la barra, el contador y la personalización se
// pueden usar.
export function SonoDsComponents({ components }: SonoDsComponentsProps) {
  const {
    buttons,
    tabs,
    search,
    productCard,
    configurator,
    cartItem,
    confirmation,
    navBar
  } = components;
  const tab = useSonoDsChoice();
  const nav = useSonoDsChoice();
  const cart = useSonoDsCounter();
  // El último ítem de la barra es el carrito: lleva el número de productos
  const cartIndex = navBar.items.length - 1;

  return (
    <div className="sono-ds__grid">
      <SonoDsSheet title={buttons.title}>
        <div className="sono-ds__canvas">
          <div className="sono-ds-buttons">
            <button
              type="button"
              className="sono-ds-button sono-ds-button--primary"
            >
              {buttons.primary}
            </button>
            <button
              type="button"
              className="sono-ds-button sono-ds-button--secondary"
            >
              {buttons.secondary}
            </button>
            <button
              type="button"
              className="sono-ds-button sono-ds-button--text"
            >
              <Pencil aria-hidden="true" />
              {buttons.text}
            </button>
            <button
              type="button"
              className="sono-ds-button sono-ds-button--primary"
              disabled
            >
              {buttons.disabled}
            </button>
          </div>
        </div>
      </SonoDsSheet>

      <SonoDsSheet title={tabs.title}>
        <div className="sono-ds__canvas">
          {/* Pestañas y buscador en una misma fila que se parte: el buscador
              toma el espacio que dejan las pestañas */}
          <div className="sono-ds-filter">
            <div
              className="sono-ds-tabs"
              role="tablist"
              aria-label={tabs.title}
            >
              {tabs.items.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={tab.selected === index}
                  className={cn(
                    'sono-ds-tab',
                    tab.selected === index && 'sono-ds-tab--current'
                  )}
                  onClick={() => tab.handleSelect(index)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="sono-ds-search">
              <Search aria-hidden="true" />
              <span>{search.placeholder}</span>
            </div>
          </div>
        </div>
      </SonoDsSheet>

      <SonoDsSheet title={navBar.title}>
        <div className="sono-ds__canvas sono-ds__canvas--center">
          <div className="sono-ds-nav">
            {navBar.items.map((item, index) => {
              const Icon = NAV_ICONS[index] ?? House;
              const isCurrent = nav.selected === index;
              return (
                <button
                  key={item}
                  type="button"
                  aria-pressed={isCurrent}
                  className={cn(
                    'sono-ds-nav__item',
                    isCurrent && 'sono-ds-nav__item--current'
                  )}
                  onClick={() => nav.handleSelect(index)}
                >
                  <Icon aria-hidden="true" />
                  {item}
                  {index === cartIndex && (
                    <span className="sono-ds-nav__badge">
                      {navBar.cartCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </SonoDsSheet>

      <SonoDsSheet title={productCard.title}>
        <div className="sono-ds__canvas">
          <div className="sono-ds-product">
            <div className="sono-ds-product__media">
              <SonoPizzaArt />
              <span className="sono-ds-badge">
                <Flame aria-hidden="true" />
                {productCard.badge}
              </span>
            </div>
            <div className="sono-ds-product__body">
              <p className="sono-ds-product__name">{productCard.name}</p>
              <p className="sono-ds-product__text">{productCard.text}</p>
              <div className="sono-ds-product__foot">
                <span className="sono-ds-product__price">
                  {productCard.price}
                </span>
                <button
                  type="button"
                  className="sono-ds-icon-button"
                  aria-label={productCard.addLabel}
                >
                  <Plus aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </SonoDsSheet>

      <SonoDsSheet title={cartItem.title}>
        <div className="sono-ds__canvas">
          <div className="sono-ds-cart-item">
            <span className="sono-ds-cart-item__thumb">
              <SonoPizzaArt />
            </span>
            <div className="sono-ds-cart-item__info">
              <p className="sono-ds-cart-item__name">{cartItem.name}</p>
              <p className="sono-ds-cart-item__detail">{cartItem.detail}</p>
              <p className="sono-ds-cart-item__price" aria-live="polite">
                {formatPrice(cartItem.unitPrice * cart.count)}
              </p>
            </div>
          </div>
          <div className="sono-ds-cart-item__actions">
            <SonoDsStepper
              count={cart.count}
              canDecrease={cart.canDecrease}
              canIncrease={cart.canIncrease}
              decreaseLabel={configurator.decreaseLabel}
              increaseLabel={configurator.increaseLabel}
              onDecrease={cart.handleDecrease}
              onIncrease={cart.handleIncrease}
            />
            <button
              type="button"
              className="sono-ds-button sono-ds-button--text"
            >
              <Pencil aria-hidden="true" />
              {cartItem.editLabel}
            </button>
            <button
              type="button"
              className="sono-ds-button sono-ds-button--text"
            >
              <Trash2 aria-hidden="true" />
              {cartItem.removeLabel}
            </button>
          </div>
        </div>
      </SonoDsSheet>

      <SonoDsSheet title={confirmation.title}>
        <div className="sono-ds__canvas">
          <div className="sono-ds-confirm">
            <span className="sono-ds-confirm__badge">
              <Check aria-hidden="true" />
            </span>
            <p className="sono-ds-confirm__heading">{confirmation.heading}</p>
            <p className="sono-ds-confirm__text">{confirmation.text}</p>
            <span className="sono-ds-confirm__time">
              <Clock aria-hidden="true" />
              {confirmation.time}
            </span>
          </div>
        </div>
      </SonoDsSheet>

      <SonoDsSheet
        title={configurator.title}
        note={configurator.note}
        span="full"
      >
        <div className="sono-ds__canvas">
          <SonoDsConfigurator configurator={configurator} />
        </div>
      </SonoDsSheet>
    </div>
  );
}
