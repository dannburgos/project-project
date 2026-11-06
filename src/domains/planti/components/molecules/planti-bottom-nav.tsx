import { CalendarCheck, House, Sprout, User } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';

export type PlantiNavKey = 'home' | 'plants' | 'routine' | 'profile';

type PlantiBottomNavProps = {
  active: PlantiNavKey;
};

const NAV_ITEMS = [
  { key: 'home', icon: House },
  { key: 'plants', icon: Sprout },
  { key: 'routine', icon: CalendarCheck },
  { key: 'profile', icon: User }
] as const;

// Barra de navegación flotante: Inicio, Mis plantas, Rutina y Perfil
export function PlantiBottomNav({ active }: PlantiBottomNavProps) {
  const { nav } = plantiMessages;

  return (
    <nav className="planti-nav" aria-label={nav.label}>
      <ul className="planti-nav__list">
        {NAV_ITEMS.map(({ key, icon: Icon }) => (
          <li
            key={key}
            className={cn(
              'planti-nav__item',
              key === active && 'planti-nav__item--active'
            )}
            aria-current={key === active ? 'page' : undefined}
          >
            <span className="planti-nav__icon">
              <Icon aria-hidden="true" />
            </span>
            <span className="planti-nav__label">{nav[key]}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
