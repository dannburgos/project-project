import { Bike, CircleHelp, X } from 'lucide-react';

import { fillTemplate } from '@/lib/case-story/fill-template.util';

import { SONOPIZZA_CART, findSonopizzaProduct } from '../../example-menu';
import { sonopizzaMessages } from '../../messages';
import { SonopizzaCountdownRing } from '../atoms/sonopizza-countdown-ring';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaPizzaPhoto } from '../atoms/sonopizza-pizza-photo';

// Cuánto del tiempo de entrega ya pasó (el pedido va en camino y faltan 12 min)
const ELAPSED_SHARE = 0.75;

// 08 · Seguimiento del pedido: a donde lleva "Seguir mi pedido", un rato
// después de confirmar y sin repetir la confirmación. Cuenta lo que ya cambió:
// cuánto falta en grande y a qué hora llega, la pizza como reloj (el arco azul
// es el tiempo que ya pasó), el código de entrega para dárselo al repartidor y
// quién va en camino. Sin mapa. Se puede cerrar con la equis de arriba
export function SonopizzaTrackingScreen() {
  const copy = sonopizzaMessages.tracking;
  const [line] = SONOPIZZA_CART;
  const product = line ? findSonopizzaProduct(line.productId) : undefined;
  if (!product) return null;

  return (
    <div className="sp-screen sp-cart sp-tracking">
      <header className="sp-cart__top">
        <SonopizzaIconButton icon={X} label={copy.close} />
        <h1 className="sp-display sp-cart__title">{copy.title}</h1>
      </header>

      <section className="sp-tracking__eta">
        <p className="sp-label">{copy.etaLabel}</p>
        <p className="sp-display sp-display--figures sp-tracking__minutes">
          {copy.minutes}
        </p>
        <p className="sp-tracking__clock">
          {fillTemplate(copy.arrivalTemplate, { time: copy.arrival })}
        </p>
      </section>

      <div className="sp-tracking__stage">
        <SonopizzaCountdownRing progress={ELAPSED_SHARE}>
          <SonopizzaPizzaPhoto
            photo={product.photo}
            turn={product.turn}
            className="sp-tracking__pizza"
          />
        </SonopizzaCountdownRing>
      </div>

      <section className="sp-code" aria-label={copy.codeLabel}>
        <p className="sp-label">{copy.codeLabel}</p>
        <ul className="sp-code__digits">
          {copy.code.map((digit, index) => (
            <li key={index} className="sp-display sp-code__digit">
              {digit}
            </li>
          ))}
        </ul>
        <p className="sp-code__hint">{copy.codeHint}</p>
      </section>

      <div className="sp-courier">
        <span className="sp-courier__icon">
          <Bike aria-hidden="true" />
        </span>
        <div className="sp-courier__text">
          <p className="sp-courier__title">{copy.courierTitle}</p>
          <p className="sp-courier__sub">{copy.courierSub}</p>
        </div>
      </div>

      <button type="button" className="sp-tracking__help">
        <CircleHelp aria-hidden="true" />
        {copy.help}
      </button>
    </div>
  );
}
