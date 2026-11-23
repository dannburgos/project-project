import Link from 'next/link';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import type { PlantiChapterNumber } from '../../planti-chapters';

type PlantiFlowSwitcherProps = {
  // El flujo que está corriendo
  current: PlantiChapterNumber;
};

// Selector de flujos de la página completa del prototipo: quien llega desde el
// caso puede pasar del flujo 1 al 2 sin volver atrás. Los que aún no existen
// quedan como "Próximamente".
export function PlantiFlowSwitcher({ current }: PlantiFlowSwitcherProps) {
  const { flows } = plantiMessages;

  return (
    <nav className="planti-flow-switcher" aria-label={flows.label}>
      <ul className="planti-flow-switcher__list">
        {flows.items.map(flow => (
          <li key={flow.number}>
            {flow.isReady ? (
              <Link
                href={`/prototypes/planti?flow=${flow.number}`}
                aria-current={flow.number === current ? 'page' : undefined}
                className={cn(
                  'planti-flow-switcher__item',
                  flow.number === current &&
                    'planti-flow-switcher__item--active'
                )}
              >
                <span className="planti-flow-switcher__number">
                  {String(flow.number).padStart(2, '0')}
                </span>
                {flow.title}
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="planti-flow-switcher__item planti-flow-switcher__item--soon"
              >
                <span className="planti-flow-switcher__number">
                  {String(flow.number).padStart(2, '0')}
                </span>
                {flow.title}
                <span className="planti-flow-switcher__soon">{flows.soon}</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
