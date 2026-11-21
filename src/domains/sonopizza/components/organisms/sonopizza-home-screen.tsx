import {
  Bell,
  ChevronDown,
  MapPin,
  Search,
  SlidersHorizontal
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import {
  SONOPIZZA_PRODUCTS,
  SONOPIZZA_WEEK_PROMO,
  SONOPIZZA_WEEK_PROMOS_TOTAL
} from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import { SonopizzaCategorySticker } from '../atoms/sonopizza-category-sticker';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';

// Sticker y color de fondo de cada acceso a una categoría, en el orden de los
// textos: porción, pizza de dos sabores, caja con gaseosa y el vaso
const CATEGORY_ART = [
  { art: 'slice', tone: 'sp-shortcut__art--orange' },
  { art: 'half', tone: 'sp-shortcut__art--cream' },
  { art: 'combo', tone: 'sp-shortcut__art--electric' },
  { art: 'drink', tone: 'sp-shortcut__art--royal' }
] as const;

// 01 · Inicio: dónde se entrega y las notificaciones, la pregunta del día, el
// buscador, accesos directos a las categorías del menú, la pizza más pedida
// como póster (su nombre gigante en contorno detrás, la pizza quieta y
// recortada por la tarjeta, el precio y debajo un solo botón) y, abajo, la
// promo de la semana con el precio normal tachado y lo que se ahorra
export function SonopizzaHomeScreen() {
  const copy = sonopizzaMessages.home;
  const [hero] = SONOPIZZA_PRODUCTS;
  if (!hero) return null;

  return (
    <div className="sp-screen sp-home">
      <header className="sp-home__top">
        <div className="sp-home__place">
          <span className="sp-label">{copy.deliverTo}</span>
          <span className="sp-home__address">
            <MapPin aria-hidden="true" />
            {copy.address}
            <ChevronDown aria-hidden="true" />
          </span>
        </div>
        <button
          type="button"
          className="sp-icon-button sp-icon-button--light sp-home__bell"
          aria-label={copy.notificationsLabel}
        >
          <Bell aria-hidden="true" />
          <span className="sp-home__bell-dot" aria-hidden="true" />
        </button>
      </header>

      <h1 className="sp-display sp-home__title">{copy.title}</h1>

      <div className="sp-search sp-search--home">
        <Search aria-hidden="true" />
        <span className="sp-search__placeholder">{copy.searchPlaceholder}</span>
        <span className="sp-search__divider" aria-hidden="true" />
        <button
          type="button"
          className="sp-search__tool"
          aria-label={copy.filterLabel}
        >
          <SlidersHorizontal aria-hidden="true" />
        </button>
      </div>

      <ul className="sp-shortcuts" aria-label={copy.categoriesLabel}>
        {copy.categories.map((name, index) => {
          const art = CATEGORY_ART[index];
          return (
            <li key={name} className="sp-shortcut">
              <span className={cn('sp-shortcut__art', art?.tone)}>
                {art && (
                  <SonopizzaCategorySticker
                    art={art.art}
                    className="sp-shortcut__sticker"
                  />
                )}
              </span>
              <span className="sp-shortcut__name">{name}</span>
            </li>
          );
        })}
      </ul>

      <article className="sp-hero">
        <span className="sp-hero__media" aria-hidden="true">
          <span className="sp-display sp-hero__word">{copy.heroWord}</span>
          <SonopizzaPizzaPhoto photo={hero.photo} className="sp-hero__pizza" />
        </span>
        <div className="sp-hero__info">
          <h2 className="sp-display sp-hero__name">{hero.name}</h2>
          <p className="sp-hero__price">
            <span>{sonopizzaMessages.common.from}</span>
            {formatPrice(hero.prices.personal)}
          </p>
          <span className="sp-button sp-button--primary sp-button--small">
            {copy.heroCta}
          </span>
        </div>
      </article>

      <section className="sp-home__promos">
        <div className="sp-section-head">
          <h2 className="sp-home__promos-title">{copy.promosTitle}</h2>
        </div>
        <article className="sp-promo">
          <SonopizzaPizzaPhoto
            photo={SONOPIZZA_WEEK_PROMO.photo}
            turn={1}
            className="sp-promo__pizza"
          />
          <span className="sp-display sp-promo__burst">{copy.promo.burst}</span>
          <div className="sp-promo__info">
            <span className="sp-promo__day">{copy.promo.day}</span>
            <h3 className="sp-promo__title">{copy.promo.title}</h3>
            <p className="sp-promo__prices">
              <span className="sr-only">{copy.promo.regularPriceLabel}</span>
              <s className="sp-promo__regular">
                {formatPrice(SONOPIZZA_WEEK_PROMO.regularPrice)}
              </s>
              <span className="sp-display sp-display--figures sp-promo__price">
                {formatPrice(SONOPIZZA_WEEK_PROMO.price)}
              </span>
            </p>
            <span className="sp-promo__savings">
              {copy.promo.savingsTemplate.replace(
                '{amount}',
                formatPrice(SONOPIZZA_WEEK_PROMO.savings)
              )}
            </span>
          </div>
        </article>
        <div className="sp-promos__dots">
          <span className="sr-only">
            {copy.promoPositionTemplate
              .replace('{current}', '1')
              .replace('{total}', String(SONOPIZZA_WEEK_PROMOS_TOTAL))}
          </span>
          {Array.from({ length: SONOPIZZA_WEEK_PROMOS_TOTAL }, (_, index) => (
            <span
              key={index}
              className={cn(
                'sp-promos__dot',
                index === 0 && 'sp-promos__dot--on'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
