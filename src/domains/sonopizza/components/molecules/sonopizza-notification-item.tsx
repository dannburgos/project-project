import { Bike, Percent, Sparkles, type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import type { SonopizzaNotificationKind } from '../../types/sonopizza.types';

const KIND_ICON: Record<SonopizzaNotificationKind, LucideIcon> = {
  order: Bike,
  promo: Percent,
  news: Sparkles
};

type SonopizzaNotificationItemProps = {
  kind: SonopizzaNotificationKind;
  title: string;
  text: string;
  time: string;
  // Todavía no se ha leído: lleva un punto y el título más fuerte
  isNew: boolean;
};

// Un aviso: el ícono de su tipo (pedido, promo o novedad), el título, el texto y
// cuándo llegó. Lo nuevo lleva un punto naranja
export function SonopizzaNotificationItem({
  kind,
  title,
  text,
  time,
  isNew
}: SonopizzaNotificationItemProps) {
  const Icon = KIND_ICON[kind];

  return (
    <li className={cn('sp-notice', isNew && 'sp-notice--new')}>
      <span className="sp-notice__icon">
        <Icon aria-hidden="true" />
      </span>
      <div className="sp-notice__body">
        <p className="sp-notice__title">{title}</p>
        <p className="sp-notice__text">{text}</p>
        <p className="sp-notice__time">{time}</p>
      </div>
      {isNew && <span className="sp-notice__dot" aria-label="Nuevo" />}
    </li>
  );
}
