import { House, Pizza, ShoppingBag } from 'lucide-react';

import { cn } from '@/lib/utils';

import { sonopizzaMessages } from '../../messages';
import type { SonopizzaNavKey } from '../../types/sonopizza.types';

const TABS = [
  { key: 'home', icon: House },
  { key: 'menu', icon: Pizza },
  { key: 'cart', icon: ShoppingBag }
] as const;

type SonopizzaBottomNavProps = {
  active: SonopizzaNavKey;
  // Productos en el carrito; con 0 no se muestra el número
  cartCount: number;
};

// Barra inferior tradicional: tres pestañas con ícono y nombre sobre un
// degradado claro con relieve. La pestaña actual pinta su ícono y su nombre de
// naranja; el carrito lleva el número de productos
export function SonopizzaBottomNav({
  active,
  cartCount
}: SonopizzaBottomNavProps) {
  return (
    <nav className="sp-nav" aria-label={sonopizzaMessages.nav.label}>
      {TABS.map(({ key, icon: Icon }) => {
        const isActive = key === active;
        return (
          <span
            key={key}
            className={cn('sp-nav__tab', isActive && 'sp-nav__tab--on')}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="sp-nav__icon">
              <Icon aria-hidden="true" />
              {key === 'cart' && cartCount > 0 && (
                <span className="sp-nav__badge">{cartCount}</span>
              )}
            </span>
            <span className="sp-nav__label">{sonopizzaMessages.nav[key]}</span>
          </span>
        );
      })}
    </nav>
  );
}
