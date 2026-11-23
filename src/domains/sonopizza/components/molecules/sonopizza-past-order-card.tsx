import { Check, RotateCcw } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { formatPrice } from '@/utils/price.util';

import { SONOPIZZA_DELIVERY, findSonopizzaProduct } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import { describeSonopizzaCartLine } from '../../sonopizza-order.util';
import type { SonopizzaPastOrder } from '../../types/sonopizza.types';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';

type SonopizzaPastOrderCardProps = {
  order: SonopizzaPastOrder;
};

// Un pedido anterior: la foto, qué fue (y cuántos productos más), cuándo, que
// ya se entregó, lo que costó y el botón para pedirlo de nuevo con un toque
export function SonopizzaPastOrderCard({ order }: SonopizzaPastOrderCardProps) {
  const copy = sonopizzaMessages.orders;
  const [first] = order.lines;
  const product = first ? findSonopizzaProduct(first.productId) : undefined;
  if (!first || !product) return null;

  const total =
    order.lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0) +
    SONOPIZZA_DELIVERY;
  const extraProducts = order.lines.length - 1;

  return (
    <li className="sp-past">
      <div className="sp-past__top">
        <span className="sp-past__thumb">
          <SonopizzaPizzaPhoto photo={product.photo} turn={product.turn} />
        </span>
        <div className="sp-past__text">
          <p className="sp-past__name">{product.name}</p>
          <p className="sp-past__detail">
            {describeSonopizzaCartLine(first).join(' · ')}
            {extraProducts > 0 && (
              <b className="sp-past__more">
                {fillTemplate(copy.moreTemplate, { count: extraProducts })}
              </b>
            )}
          </p>
          <p className="sp-past__date">{order.date}</p>
        </div>
        <span className="sp-past__status">
          <Check aria-hidden="true" />
          {copy.delivered}
        </span>
      </div>
      <div className="sp-past__foot">
        <b className="sp-display sp-display--figures sp-past__total">
          {formatPrice(total)}
        </b>
        <button type="button" className="sp-past__reorder">
          <RotateCcw aria-hidden="true" />
          {copy.reorder}
        </button>
      </div>
    </li>
  );
}
