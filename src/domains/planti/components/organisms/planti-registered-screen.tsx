import { Check } from 'lucide-react';

import { plantiMessages } from '../../messages';

// Planta registrada: confirma que quedó guardada. Es el cierre del capítulo 1
export function PlantiRegisteredScreen() {
  const { registered } = plantiMessages;

  return (
    <div className="planti-screen planti-registered">
      <span className="planti-registered__check" aria-hidden="true">
        <Check />
      </span>
      <h1 className="planti-registered__title">{registered.title}</h1>
      <p className="planti-registered__text">{registered.text}</p>
    </div>
  );
}
