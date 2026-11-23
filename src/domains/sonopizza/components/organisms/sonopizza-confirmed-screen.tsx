import { Check } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/utils/price.util';

import { SONOPIZZA_CART, SONOPIZZA_DELIVERY } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import {
  SONOPIZZA_ORDER_CURRENT_STEP,
  SONOPIZZA_ORDER_STEP_ICONS
} from '../../sonopizza-order-steps.util';

// 07 · Pedido confirmado: celebración en azul con la mascota, el número del
// pedido y una tarjeta con lo que más importa: cuánto falta y en qué paso va
// (el horno se mueve). Abajo, el resumen y las dos salidas
export function SonopizzaConfirmedScreen() {
  const copy = sonopizzaMessages.confirmed;
  const count = SONOPIZZA_CART.reduce((sum, line) => sum + line.quantity, 0);
  const total =
    SONOPIZZA_CART.reduce(
      (sum, line) => sum + line.unitPrice * line.quantity,
      0
    ) + SONOPIZZA_DELIVERY;

  return (
    <div className="sp-screen sp-confirmed">
      <img
        src="/sonopizza/mascot.webp"
        alt=""
        className="sp-confirmed__mascot"
        draggable={false}
      />
      <h1 className="sp-display sp-confirmed__title">{copy.title}</h1>
      <p className="sp-confirmed__order">
        {fillTemplate(copy.orderTemplate, { number: copy.orderNumber })}
      </p>

      <section className="sp-eta" aria-label={copy.etaLabel}>
        <p className="sp-label sp-eta__label">{copy.etaLabel}</p>
        <p className="sp-display sp-display--figures sp-eta__time">
          {copy.eta}
        </p>
        <ol className="sp-steps">
          {copy.steps.map((step, index) => {
            const Icon = SONOPIZZA_ORDER_STEP_ICONS[index] ?? Check;
            const isDone = index < SONOPIZZA_ORDER_CURRENT_STEP;
            const isCurrent = index === SONOPIZZA_ORDER_CURRENT_STEP;
            return (
              <li
                key={step}
                className={cn(
                  'sp-steps__item',
                  isDone && 'sp-steps__item--done',
                  isCurrent && 'sp-steps__item--current'
                )}
                aria-current={isCurrent ? 'step' : undefined}
              >
                <span className="sp-steps__dot">
                  {isDone ? (
                    <Check aria-hidden="true" />
                  ) : (
                    <Icon aria-hidden="true" />
                  )}
                </span>
                <span className="sp-steps__name">{step}</span>
              </li>
            );
          })}
        </ol>
        <p className="sp-eta__summary">
          {count === 1
            ? fillTemplate(copy.summaryOneTemplate, {
                total: formatPrice(total)
              })
            : fillTemplate(copy.summaryTemplate, {
                count,
                total: formatPrice(total)
              })}
        </p>
      </section>

      <div className="sp-confirmed__actions">
        <span className="sp-button sp-button--primary sp-button--block">
          {copy.track}
        </span>
        <span className="sp-button sp-button--on-dark sp-button--block">
          {copy.home}
        </span>
      </div>
    </div>
  );
}
