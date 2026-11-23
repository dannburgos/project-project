import { ArrowLeft, Banknote, CreditCard, MapPin } from 'lucide-react';

import { formatPrice } from '@/utils/price.util';

import { SONOPIZZA_CART, SONOPIZZA_DELIVERY } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaCartLine } from '../molecules/sonopizza-cart-line';
import { SonopizzaSegment } from '../molecules/sonopizza-segment';
import { SonopizzaTotalBar } from '../molecules/sonopizza-total-bar';

// 06 · Checkout: el último paso, sin la barra de navegación para que nada
// distraiga. Dos tarjetas con un solo propósito cada una. La primera es lo que
// pagas: el producto (foto, nombre y precio) y, bajo una línea punteada, lo que
// cuesta el domicilio. La segunda es lo que decides, en tres bloques separados
// por una línea fina: dónde (la dirección), cuándo (lo antes posible o
// programado) y cómo pagas (todo al recibir: efectivo o datáfono). Abajo,
// siempre a la vista, el total y un solo botón para confirmar
export function SonopizzaCheckoutScreen() {
  const copy = sonopizzaMessages.checkout;
  const [line] = SONOPIZZA_CART;
  if (!line) return null;

  const total =
    SONOPIZZA_CART.reduce(
      (sum, item) => sum + item.unitPrice * item.quantity,
      0
    ) + SONOPIZZA_DELIVERY;

  return (
    <div className="sp-screen sp-cart sp-checkout">
      <header className="sp-cart__top">
        <SonopizzaIconButton
          icon={ArrowLeft}
          label={sonopizzaMessages.common.back}
        />
        <h1 className="sp-display sp-cart__title">{copy.title}</h1>
      </header>

      <section className="sp-checkout__sheet" aria-label={copy.orderTitle}>
        <h2 className="sp-label">{copy.orderTitle}</h2>
        <ul className="sp-lines">
          <SonopizzaCartLine line={line} isCompact />
        </ul>
        <p className="sp-checkout__fee">
          <span>{copy.deliveryFeeLabel}</span>
          <b>{formatPrice(SONOPIZZA_DELIVERY)}</b>
        </p>
      </section>

      <div className="sp-checkout__sheet">
        <section className="sp-checkout__block">
          <h2 className="sp-label">{copy.deliveryTitle}</h2>
          <div className="sp-checkout__address">
            <span className="sp-address__pin">
              <MapPin aria-hidden="true" />
            </span>
            <span className="sp-address__text">
              <span className="sp-address__line">{copy.address}</span>
            </span>
            <button type="button" className="sp-checkout__change-button">
              {copy.change}
            </button>
          </div>
        </section>

        <section className="sp-checkout__block">
          <h2 className="sp-label">{copy.whenTitle}</h2>
          <SonopizzaSegment
            label={copy.whenTitle}
            selectedId="asap"
            options={[
              {
                id: 'asap',
                label: copy.asap,
                note: sonopizzaMessages.confirmed.eta
              },
              { id: 'schedule', label: copy.schedule, note: copy.scheduleNote }
            ]}
          />
        </section>

        <section className="sp-checkout__block">
          <h2 className="sp-checkout__heading">
            <span className="sp-label">{copy.payTitle}</span>
            <span className="sp-checkout__sub">{copy.paySub}</span>
          </h2>
          <SonopizzaSegment
            label={copy.payTitle}
            selectedId="cash"
            options={[
              { id: 'cash', label: copy.cash, icon: Banknote },
              { id: 'card', label: copy.card, icon: CreditCard }
            ]}
          />
        </section>
      </div>

      <SonopizzaTotalBar
        label={copy.totalLabel}
        total={total}
        actionLabel={copy.confirm}
      />
    </div>
  );
}
