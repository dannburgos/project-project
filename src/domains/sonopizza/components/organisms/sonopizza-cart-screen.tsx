import { ArrowLeft, MapPin, Trash2 } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { formatPrice } from '@/utils/price.util';

import {
  SONOPIZZA_CART,
  SONOPIZZA_DELIVERY,
  findSonopizzaProduct
} from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import type { SonopizzaCartVariant } from '../../types/sonopizza.types';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaCartLine } from '../molecules/sonopizza-cart-line';
import { SonopizzaTicket } from '../molecules/sonopizza-ticket';

type SonopizzaCartScreenProps = {
  variant?: SonopizzaCartVariant;
};

// 06 · Carrito: a dónde llega, cada producto con su detalle y acciones, el
// ticket con productos, domicilio y total, y el botón para confirmar con el
// total. Con "undo" acaba de quitar las pepperoni: el ticket ya se actualizó
// y un aviso deja deshacerlo durante cinco segundos (el anillo los cuenta)
export function SonopizzaCartScreen({
  variant = 'full'
}: SonopizzaCartScreenProps) {
  const copy = sonopizzaMessages.cart;
  const isUndo = variant === 'undo';
  const lines = isUndo ? SONOPIZZA_CART.slice(0, 1) : SONOPIZZA_CART;
  const removedLine = isUndo ? SONOPIZZA_CART[1] : undefined;
  const removedProduct = removedLine
    ? findSonopizzaProduct(removedLine.productId)
    : undefined;

  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const products = lines.reduce(
    (sum, line) => sum + line.unitPrice * line.quantity,
    0
  );
  const total = products + SONOPIZZA_DELIVERY;

  return (
    <div className="sp-screen sp-cart">
      <header className="sp-cart__top">
        <SonopizzaIconButton
          icon={ArrowLeft}
          label={sonopizzaMessages.common.back}
        />
        <div>
          <h1 className="sp-display sp-cart__title">{copy.title}</h1>
          <p className="sp-cart__count">
            {count === 1
              ? copy.countOne
              : fillTemplate(copy.countTemplate, { count })}
          </p>
        </div>
      </header>

      <div className="sp-address">
        <span className="sp-address__pin">
          <MapPin aria-hidden="true" />
        </span>
        <span className="sp-address__text">
          <span className="sp-label">{copy.deliverTo}</span>
          <span className="sp-address__line">{copy.address}</span>
        </span>
        <span className="sp-link">{copy.change}</span>
      </div>

      <ul className="sp-lines">
        {lines.map(line => (
          <SonopizzaCartLine key={line.id} line={line} />
        ))}
      </ul>

      <SonopizzaTicket
        title={copy.ticketTitle}
        rows={[
          { label: copy.productsLabel, value: products },
          { label: copy.deliveryLabel, value: SONOPIZZA_DELIVERY }
        ]}
        totalLabel={copy.totalLabel}
        total={total}
        note={copy.payNote}
      />

      {removedProduct && (
        <div className="sp-toast" role="status">
          <Trash2 aria-hidden="true" />
          <span className="sp-toast__text">
            {fillTemplate(copy.undoTemplate, { name: removedProduct.name })}
          </span>
          <span className="sp-toast__undo">
            {copy.undo}
            <svg
              className="sp-toast__timer"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="8" pathLength={1} />
            </svg>
          </span>
        </div>
      )}

      <div className="sp-cart__cta">
        <span className="sp-button sp-button--primary sp-button--block">
          {fillTemplate(copy.confirmTemplate, { total: formatPrice(total) })}
        </span>
      </div>
    </div>
  );
}
