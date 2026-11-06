import { Droplet, House, Leaf, Sun, Wind } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiTaskRow } from '../atoms/planti-task-row';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

const FACT_ICONS = {
  indoor: House,
  light: Sun,
  water: Droplet,
  humidity: Wind
} as const;

const ROW_ICONS = {
  light: Sun,
  water: Droplet,
  humidity: Wind
} as const;

type PlantiNeedsScreenProps = {
  // El botón se está pulsando (en el recorrido)
  isPressed?: boolean;
  // Texto del botón: al iniciar la rutina (capítulo 2) dice "Crea tu rutina"
  actionLabel?: string;
};

// Necesidades de cuidado. Arriba, sin tarjeta: el nombre de la planta, sus
// datos y su foto grande, que se asoma sobre la hoja de abajo. En la hoja,
// las recomendaciones: aquí está la idea central del caso, la información de
// la planta se vuelve acciones. El contenido se desliza, para poder sumarle
// más información.
export function PlantiNeedsScreen({
  isPressed = false,
  actionLabel
}: PlantiNeedsScreenProps) {
  const { plant, needs } = plantiMessages;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader />
      <div className="planti-screen__scroll">
        <div className="planti-needs__top">
          <div className="planti-needs__intro">
            <h1 className="planti-needs__name">{plant.name}</h1>
            <p className="planti-needs__tagline">{plant.tagline}</p>
            <ul className="planti-needs__facts">
              {needs.facts.map(fact => {
                const Icon = FACT_ICONS[fact.key];

                return (
                  <li key={fact.key} className="planti-needs__fact">
                    <span
                      className="planti-needs__fact-icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                    {fact.text}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="planti-needs__plant" aria-hidden="true">
            <Leaf />
          </div>
        </div>
        <section className="planti-needs__sheet">
          <h2 className="planti-needs__title">{needs.sheetTitle}</h2>
          <div className="planti-card planti-task-list">
            {needs.rows.map(row => (
              <PlantiTaskRow
                key={row.key}
                icon={ROW_ICONS[row.key]}
                name={row.label}
                detail={row.value}
              />
            ))}
          </div>
        </section>
      </div>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {actionLabel ?? needs.action}
        </PlantiButton>
      </div>
    </div>
  );
}
