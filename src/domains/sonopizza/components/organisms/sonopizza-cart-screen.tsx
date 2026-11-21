import { ArrowLeft, Plus } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { formatPrice } from '@/utils/price.util';

import { SONOPIZZA_CART, SONOPIZZA_DELIVERY } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaCartLine } from '../molecules/sonopizza-cart-line';
import { SonopizzaCouponField } from '../molecules/sonopizza-coupon-field';
import { SonopizzaPurchaseSummary } from '../molecules/sonopizza-purchase-summary';

// 05 · Carrito: el producto con su detalle y acciones, una salida para agregar
// algo más, el campo del cupón, el resumen de compra (subtotal, domicilio y
// total) y el botón para continuar con el total. El prototipo usa una sola
// pizza
export function SonopizzaCartScreen() {
  const copy = sonopizzaMessages.cart;

  const products = SONOPIZZA_CART.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
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
        <h1 className="sp-display sp-cart__title">{copy.title}</h1>
      </header>

      <ul className="sp-lines">
        {SONOPIZZA_CART.map(item => (
          <SonopizzaCartLine key={item.id} line={item} />
        ))}
      </ul>

      <button type="button" className="sp-cart__more">
        <Plus aria-hidden="true" />
        {copy.addMore}
      </button>

      <SonopizzaCouponField />

      <SonopizzaPurchaseSummary
        title={copy.summaryTitle}
        rows={[
          { label: copy.subtotalLabel, value: products },
          { label: copy.deliveryLabel, value: SONOPIZZA_DELIVERY }
        ]}
        totalLabel={copy.totalLabel}
        total={total}
      />

      <div className="sp-cart__cta">
        <span className="sp-button sp-button--primary sp-button--block">
          {fillTemplate(copy.continueTemplate, { total: formatPrice(total) })}
        </span>
      </div>
    </div>
  );
}
