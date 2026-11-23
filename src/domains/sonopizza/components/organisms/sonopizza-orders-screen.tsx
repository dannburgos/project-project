import { ArrowLeft, ArrowRight } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';

import { SONOPIZZA_PAST_ORDERS } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import { SONOPIZZA_TRACKING_STEP } from '../../sonopizza-order-steps.util';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaPastOrderCard } from '../molecules/sonopizza-past-order-card';

// 09 · Mis pedidos: arriba, el pedido en curso en una tarjeta azul (un toque y
// va a su seguimiento); debajo, los anteriores, cada uno con el botón "Pedir
// de nuevo" para repetirlo sin volver a armarlo
export function SonopizzaOrdersScreen() {
  const copy = sonopizzaMessages.orders;
  const order = sonopizzaMessages.confirmed;

  return (
    <div className="sp-screen sp-cart sp-orders">
      <header className="sp-cart__top">
        <SonopizzaIconButton
          icon={ArrowLeft}
          label={sonopizzaMessages.common.back}
        />
        <h1 className="sp-display sp-cart__title">{copy.title}</h1>
      </header>

      <section className="sp-orders__group">
        <h2 className="sp-label">{copy.activeTitle}</h2>
        <div className="sp-active">
          <div className="sp-active__text">
            <p className="sp-active__kicker">
              {fillTemplate(order.orderTemplate, { number: order.orderNumber })}
            </p>
            <p className="sp-display sp-active__status">
              {order.steps[SONOPIZZA_TRACKING_STEP]}
            </p>
            <p className="sp-active__eta">
              {order.etaLabel} {sonopizzaMessages.tracking.minutes}
            </p>
          </div>
          <span className="sp-active__go">
            <ArrowRight aria-label={copy.follow} />
          </span>
        </div>
      </section>

      <section className="sp-orders__group">
        <h2 className="sp-label">{copy.pastTitle}</h2>
        <ul className="sp-orders__list">
          {SONOPIZZA_PAST_ORDERS.map(past => (
            <SonopizzaPastOrderCard key={past.id} order={past} />
          ))}
        </ul>
      </section>
    </div>
  );
}
