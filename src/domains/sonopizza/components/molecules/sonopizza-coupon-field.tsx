import { Tag } from 'lucide-react';

import { sonopizzaMessages } from '../../messages';

// Campo para agregar un cupón: la etiqueta, el texto de ejemplo y el botón
// para aplicarlo (en el prototipo no se escribe)
export function SonopizzaCouponField() {
  const copy = sonopizzaMessages.cart;

  return (
    <div className="sp-coupon" role="group" aria-label={copy.couponLabel}>
      <Tag aria-hidden="true" />
      <span className="sp-coupon__placeholder">{copy.couponPlaceholder}</span>
      <button type="button" className="sp-coupon__apply">
        {copy.couponApply}
      </button>
    </div>
  );
}
