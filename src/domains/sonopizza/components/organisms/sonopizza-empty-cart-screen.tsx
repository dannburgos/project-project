import { ArrowRight, Plus } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { formatPrice } from '@/utils/price.util';

import { SONOPIZZA_PRODUCTS } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';

// Caja de pizza abierta y vacía, con migas (dibujada para la marca)
function SonopizzaEmptyBox() {
  return (
    <svg className="sp-empty__box" viewBox="0 0 240 176" aria-hidden="true">
      {/* Tapa abierta hacia atrás, con el logo */}
      <path className="sp-empty__lid" d="M36 8h168l14 86H22Z" />
      <circle className="sp-empty__logo" cx="120" cy="50" r="22" />
      <path className="sp-empty__logo-mark" d="M110 58c5-17 15-17 20 0" />
      {/* Fondo de la caja visto desde arriba, vacío, con migas */}
      <path className="sp-empty__base" d="M22 94h196l12 22H10Z" />
      <path className="sp-empty__inside" d="M36 99h168l6 12H30Z" />
      <circle className="sp-empty__crumb" cx="84" cy="106" r="3" />
      <circle className="sp-empty__crumb" cx="148" cy="104" r="4" />
      <circle className="sp-empty__crumb" cx="118" cy="108" r="2" />
      {/* Frente de la caja */}
      <path
        className="sp-empty__front"
        d="M10 116h220v38a10 10 0 0 1-10 10H20a10 10 0 0 1-10-10Z"
      />
    </svg>
  );
}

// 08 · Carrito vacío: la caja abierta y vacía, un título con humor de marca,
// un solo botón para volver al menú y lo más pedido para agregar de una
export function SonopizzaEmptyCartScreen() {
  const copy = sonopizzaMessages.emptyCart;
  const suggestions = SONOPIZZA_PRODUCTS.slice(0, 2);

  return (
    <div className="sp-screen sp-empty">
      <header className="sp-cart__top">
        <h1 className="sp-display sp-cart__title">
          {sonopizzaMessages.cart.title}
        </h1>
      </header>

      <div className="sp-empty__hero">
        <SonopizzaEmptyBox />
        <h2 className="sp-display sp-empty__title">{copy.title}</h2>
        <p className="sp-empty__text">{copy.text}</p>
        <span className="sp-button sp-button--primary">
          {copy.cta}
          <ArrowRight aria-hidden="true" />
        </span>
      </div>

      <section className="sp-empty__suggestions">
        <h2 className="sp-label">{copy.suggestionsTitle}</h2>
        <ul className="sp-minis">
          {suggestions.map(product => (
            <li key={product.id} className="sp-mini">
              <SonopizzaPizzaPhoto
                photo={product.photo}
                turn={product.turn}
                className="sp-mini__pizza"
              />
              <span className="sp-mini__name">{product.name}</span>
              <span className="sp-mini__foot">
                <span className="sp-mini__price">
                  {formatPrice(product.prices.personal)}
                </span>
                <SonopizzaIconButton
                  icon={Plus}
                  tone="orange"
                  label={fillTemplate(sonopizzaMessages.common.addTemplate, {
                    name: product.name
                  })}
                  className="sp-mini__add"
                />
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
