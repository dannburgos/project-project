import { Search, SlidersHorizontal } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';

import { SONOPIZZA_PRODUCTS } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import type {
  SonopizzaIngredientKey,
  SonopizzaSizeKey
} from '../../types/sonopizza.types';
import { SonopizzaProductCard } from '../molecules/sonopizza-product-card';

// Ingredientes que se pueden filtrar en el panel
const FILTER_INGREDIENTS: readonly SonopizzaIngredientKey[] = [
  'mushroom',
  'olive',
  'pepper',
  'pepperoni'
];

const SIZE_KEYS: readonly SonopizzaSizeKey[] = ['personal', 'medium', 'family'];

// 02 · Menú: título, buscador como el del inicio con el botón de filtros,
// cuántas hay y cómo se ordenan, y las tarjetas con el precio desde (el
// tamaño se elige en la personalización). Una animación toca el botón de
// filtros y despliega el panel (orden, preferencias, ingredientes y tamaño),
// que se queda abierto un momento y se vuelve a cerrar
export function SonopizzaMenuScreen() {
  const copy = sonopizzaMessages.menu;

  return (
    <div className="sp-screen sp-menu">
      <header className="sp-menu__top">
        <h1 className="sp-display sp-menu__title">{copy.title}</h1>
      </header>

      <div className="sp-menu__finder">
        <div className="sp-search sp-search--home">
          <Search aria-hidden="true" />
          <span className="sp-search__placeholder">
            {copy.searchPlaceholder}
          </span>
          <span className="sp-search__divider" aria-hidden="true" />
          <button
            type="button"
            className="sp-search__tool sp-menu__filter-button"
            aria-label={copy.filterLabel}
          >
            <SlidersHorizontal aria-hidden="true" />
            <span className="sp-tap sp-menu__filter-tap" aria-hidden="true" />
          </button>
        </div>

        <section className="sp-filters" aria-label={copy.filters.title}>
          <div className="sp-filters__group">
            <span className="sp-label">{copy.filters.sortTitle}</span>
            <ul className="sp-chips sp-chips--wrap">
              {copy.filters.sort.map((option, index) => (
                <li
                  key={option}
                  className={cn(
                    'sp-chip sp-chip--soft',
                    index === 0 && 'sp-chip--on'
                  )}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="sp-filters__group">
            <ul className="sp-chips sp-chips--wrap">
              {copy.filters.preferences.map(option => (
                <li key={option} className="sp-chip sp-chip--soft">
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="sp-filters__group">
            <span className="sp-label">{copy.filters.ingredientsTitle}</span>
            <ul className="sp-chips sp-chips--wrap">
              {FILTER_INGREDIENTS.map(ingredient => (
                <li key={ingredient} className="sp-chip sp-chip--soft">
                  {sonopizzaMessages.ingredients[ingredient]}
                </li>
              ))}
            </ul>
          </div>
          <div className="sp-filters__group">
            <span className="sp-label">{copy.filters.sizeTitle}</span>
            <ul className="sp-chips sp-chips--wrap">
              {SIZE_KEYS.map(size => (
                <li key={size} className="sp-chip sp-chip--soft">
                  {sonopizzaMessages.sizes[size]}
                </li>
              ))}
            </ul>
          </div>
          <span className="sp-button sp-button--primary sp-button--small sp-button--block">
            {fillTemplate(copy.filters.applyTemplate, {
              count: SONOPIZZA_PRODUCTS.length
            })}
          </span>
        </section>
      </div>

      <div className="sp-menu__meta">
        <span className="sp-menu__count">
          {fillTemplate(copy.countTemplate, {
            count: SONOPIZZA_PRODUCTS.length
          })}
        </span>
        <span className="sp-menu__sorted">{copy.sortedLabel}</span>
      </div>

      <ul className="sp-products">
        {SONOPIZZA_PRODUCTS.map(product => (
          <SonopizzaProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
