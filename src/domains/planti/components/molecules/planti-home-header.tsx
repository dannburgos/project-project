import { Bell } from 'lucide-react';

import { plantiMessages } from '../../messages';

export function PlantiHomeHeader() {
  const { home } = plantiMessages;

  return (
    <header className="planti-home-header">
      <div>
        <p className="planti-home-header__greeting">{home.greeting}</p>
        <p className="planti-home-header__daypart">{home.daypart}</p>
      </div>
      <button
        type="button"
        className="planti-icon-button planti-icon-button--flat"
        aria-label={home.notifications}
      >
        <Bell aria-hidden="true" />
      </button>
    </header>
  );
}
