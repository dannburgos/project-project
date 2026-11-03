import { Sprout } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';

// Inicio la primera vez: invita a añadir la primera planta. La búsqueda llega
// después, al tocar "Añadir planta".
type PlantiEmptyPanelProps = {
  // El botón se está pulsando (en el recorrido)
  isActionPressed?: boolean;
};

export function PlantiEmptyPanel({
  isActionPressed = false
}: PlantiEmptyPanelProps) {
  const { empty } = plantiMessages.home;

  return (
    <section className="planti-empty-panel">
      <span className="planti-empty-panel__icon" aria-hidden="true">
        <Sprout />
      </span>
      <h2 className="planti-empty-panel__title">{empty.title}</h2>
      <p className="planti-empty-panel__body">{empty.body}</p>
      <PlantiButton className={cn(isActionPressed && 'planti-button--pressed')}>
        {empty.action}
      </PlantiButton>
    </section>
  );
}
