import { Car, Home, PawPrint, Route, UserRound } from 'lucide-react';

import { cn } from '@/lib/utils';

import { petrideMessages } from '../../messages';
import type { PetrideNavKey } from '../../types/petride.types';

const LEFT_TABS = [
  { key: 'home', icon: Home },
  { key: 'pets', icon: PawPrint }
] as const;

const RIGHT_TABS = [
  { key: 'trip', icon: Route },
  { key: 'profile', icon: UserRound }
] as const;

type PetrideBottomNavProps = {
  active: PetrideNavKey;
};

type PetrideNavTabProps = {
  tabKey: PetrideNavKey;
  icon: typeof Home;
  isActive: boolean;
};

function PetrideNavTab({ tabKey, icon: Icon, isActive }: PetrideNavTabProps) {
  return (
    <span
      className={cn('petride-nav__tab', isActive && 'petride-nav__tab--on')}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon aria-hidden="true" />
      <span className="petride-nav__label">{petrideMessages.nav[tabKey]}</span>
    </span>
  );
}

// Barra inferior índigo pegada al borde, con una muesca en el centro donde
// encaja el botón lima de Pedir viaje, la acción principal de la app
export function PetrideBottomNav({ active }: PetrideBottomNavProps) {
  return (
    <nav className="petride-nav">
      <span className="petride-nav__bar" aria-hidden="true" />
      <span className="petride-nav__side">
        {LEFT_TABS.map(tab => (
          <PetrideNavTab
            key={tab.key}
            tabKey={tab.key}
            icon={tab.icon}
            isActive={tab.key === active}
          />
        ))}
      </span>
      <button
        type="button"
        className="petride-nav__request"
        aria-label={petrideMessages.nav.request}
      >
        <Car aria-hidden="true" />
      </button>
      <span className="petride-nav__side">
        {RIGHT_TABS.map(tab => (
          <PetrideNavTab
            key={tab.key}
            tabKey={tab.key}
            icon={tab.icon}
            isActive={tab.key === active}
          />
        ))}
      </span>
    </nav>
  );
}
