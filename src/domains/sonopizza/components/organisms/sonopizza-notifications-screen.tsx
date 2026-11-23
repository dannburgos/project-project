import { ArrowLeft } from 'lucide-react';

import { sonopizzaMessages } from '../../messages';
import { SonopizzaIconButton } from '../atoms/sonopizza-icon-button';
import { SonopizzaNotificationItem } from '../molecules/sonopizza-notification-item';

// 03 · Notificaciones: lo que abre la campana del inicio. Los avisos van en
// dos grupos, "Hoy" y "Antes", cada uno con su ícono (pedido, promo o
// novedad); lo nuevo lleva un punto naranja y se pueden marcar todos como
// leídos de un toque
export function SonopizzaNotificationsScreen() {
  const copy = sonopizzaMessages.notifications;
  const groups = [
    { label: copy.todayLabel, items: copy.today },
    { label: copy.earlierLabel, items: copy.earlier }
  ];

  return (
    <div className="sp-screen sp-cart sp-notifications">
      <header className="sp-cart__top">
        <SonopizzaIconButton
          icon={ArrowLeft}
          label={sonopizzaMessages.common.back}
        />
        <h1 className="sp-display sp-cart__title sp-cart__title--long">
          {copy.title}
        </h1>
      </header>

      {groups.map((group, index) => (
        <section key={group.label} className="sp-notices">
          <div className="sp-notices__head">
            <h2 className="sp-label">{group.label}</h2>
            {index === 0 && (
              <button type="button" className="sp-notices__mark">
                {copy.markRead}
              </button>
            )}
          </div>
          <ul className="sp-notices__list">
            {group.items.map(item => (
              <SonopizzaNotificationItem key={item.title} {...item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
