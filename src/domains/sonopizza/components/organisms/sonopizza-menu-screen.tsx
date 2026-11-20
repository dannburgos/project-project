import { ArrowRight, ChevronDown, CircleX, Search } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import { SONOPIZZA_PRODUCTS } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import {
  hasSonopizzaMatch,
  splitSonopizzaMatch
} from '../../sonopizza-match.util';
import type {
  SonopizzaIngredientKey,
  SonopizzaMenuVariant
} from '../../types/sonopizza.types';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaIngredientIcon } from '../atoms/sonopizza-ingredient-icon';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';
import { SonopizzaKeyboard } from '../molecules/sonopizza-keyboard';
import { SonopizzaProductCard } from '../molecules/sonopizza-product-card';

// Ingredientes sugeridos para buscar mientras se escribe
const SUGGESTED_INGREDIENTS: readonly SonopizzaIngredientKey[] = [
  'mushroom',
  'olive',
  'pepper'
];

type SonopizzaHighlightProps = {
  text: string;
  query: string;
};

// Texto con la parte que coincide con la búsqueda resaltada
function SonopizzaHighlight({ text, query }: SonopizzaHighlightProps) {
  const [before, match, after] = splitSonopizzaMatch(text, query);
  return (
    <>
      {before}
      {match && <mark className="sp-match">{match}</mark>}
      {after}
    </>
  );
}

// Menú buscando: el campo activo con lo escrito, resultados al instante (con
// la coincidencia resaltada, también en la etiqueta), búsqueda por
// ingrediente y el teclado
function SonopizzaMenuSearch() {
  const copy = sonopizzaMessages.search;
  const results = SONOPIZZA_PRODUCTS.filter(
    product =>
      hasSonopizzaMatch(product.name, copy.query) ||
      hasSonopizzaMatch(product.tag, copy.query)
  );

  return (
    <div className="sp-screen sp-menu sp-menu--search">
      <div className="sp-menu__searchbar">
        <div className="sp-search sp-search--active">
          <Search aria-hidden="true" />
          <span className="sp-search__query">
            {copy.query}
            <span className="sp-search__caret" aria-hidden="true" />
          </span>
          <button
            type="button"
            className="sp-search__clear"
            aria-label={copy.clearLabel}
          >
            <CircleX aria-hidden="true" />
          </button>
        </div>
        <span className="sp-link">{copy.cancel}</span>
      </div>

      <p className="sp-menu__results-label">
        {fillTemplate(copy.resultsTemplate, {
          count: results.length,
          query: copy.query
        })}
      </p>
      <ul className="sp-results">
        {results.map(product => (
          <li key={product.id} className="sp-result">
            <span className="sp-result__thumb">
              <SonopizzaPizzaPhoto photo={product.photo} turn={product.turn} />
            </span>
            <span className="sp-result__body">
              <span className="sp-result__name">
                <SonopizzaHighlight text={product.name} query={copy.query} />
              </span>
              {product.tag && (
                <span className="sp-result__tag">
                  <SonopizzaHighlight text={product.tag} query={copy.query} />
                </span>
              )}
              <span className="sp-result__price">
                {sonopizzaMessages.common.from}{' '}
                {formatPrice(product.prices.personal)}
              </span>
            </span>
            <ArrowRight className="sp-result__go" aria-hidden="true" />
          </li>
        ))}
      </ul>

      <p className="sp-menu__results-label">{copy.byIngredient}</p>
      <ul className="sp-chips sp-chips--wrap">
        {SUGGESTED_INGREDIENTS.map(ingredient => (
          <li key={ingredient} className="sp-chip sp-chip--soft">
            <SonopizzaIngredientIcon ingredient={ingredient} />
            {sonopizzaMessages.ingredients[ingredient]}
          </li>
        ))}
      </ul>

      <SonopizzaKeyboard />
    </div>
  );
}

type SonopizzaMenuScreenProps = {
  variant?: SonopizzaMenuVariant;
};

// 02 · Menú por categorías: título, pestañas, cuántas hay y cómo se ordenan,
// y las tarjetas con el tamaño elegible desde la tarjeta. Con la variante
// "search", el mismo menú buscando
export function SonopizzaMenuScreen({
  variant = 'browse'
}: SonopizzaMenuScreenProps) {
  const copy = sonopizzaMessages.menu;
  if (variant === 'search') return <SonopizzaMenuSearch />;

  return (
    <div className="sp-screen sp-menu">
      <header className="sp-menu__top">
        <h1 className="sp-display sp-menu__title">{copy.title}</h1>
        <SonopizzaIconButton icon={Search} label={copy.searchLabel} />
      </header>

      <ul className="sp-tabs" role="tablist">
        {copy.tabs.map((tab, index) => (
          <li
            key={tab}
            role="tab"
            aria-selected={index === 0}
            className={cn('sp-tab', index === 0 && 'sp-tab--on')}
          >
            {tab}
          </li>
        ))}
      </ul>

      <div className="sp-menu__meta">
        <span className="sp-menu__count">
          {fillTemplate(copy.countTemplate, {
            count: SONOPIZZA_PRODUCTS.length
          })}
        </span>
        <span className="sp-chip sp-chip--outline">
          {copy.sortLabel}
          <ChevronDown aria-hidden="true" />
        </span>
      </div>

      <ul className="sp-products">
        {SONOPIZZA_PRODUCTS.map((product, index) => (
          <SonopizzaProductCard
            key={product.id}
            product={product}
            size={index === 1 ? 'personal' : 'medium'}
            isFeatured={index === 0}
          />
        ))}
      </ul>
    </div>
  );
}
