'use client';

import { useState } from 'react';

import { plantiMessages } from '../../messages';
import { PlantiFilterChips } from '../molecules/planti-filter-chips';
import { PlantiNoticeDone } from '../molecules/planti-notice-done';
import { PlantiNoticeFeatured } from '../molecules/planti-notice-featured';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

type PlantiNoticesScreenProps = {
  // El botón del aviso de hoy se está pulsando (en el recorrido)
  isPressed?: boolean;
};

// Notificaciones: la app se abre aquí al tocar el aviso de la pantalla
// bloqueada. Filtros arriba y, en una línea de tiempo por día, el aviso de hoy
// grande y los de antes, ya hechos.
export function PlantiNoticesScreen({
  isPressed = false
}: PlantiNoticesScreenProps) {
  const { notices } = plantiMessages.tasks;
  const [filterKey, setFilterKey] = useState('all');
  const days = notices.days.filter(
    day => filterKey === 'all' || day.status === filterKey
  );

  return (
    <div className="planti-screen planti-notices-screen">
      <PlantiScreenHeader title={notices.title} />
      <PlantiFilterChips
        filters={notices.filters}
        selectedKey={filterKey}
        onSelect={setFilterKey}
      />
      <div className="planti-screen__scroll planti-notices-screen__scroll">
        <ol className="planti-notices-timeline">
          {days.map(day => (
            <li
              key={day.key}
              className="planti-notices-timeline__day"
              data-status={day.status}
            >
              <h2 className="planti-notices-timeline__heading">
                {day.heading}
              </h2>
              {'image' in day ? (
                <PlantiNoticeFeatured
                  title={day.title}
                  text={day.text}
                  time={day.time}
                  image={day.image}
                  action={day.action}
                  isPressed={isPressed}
                />
              ) : (
                <PlantiNoticeDone
                  title={day.title}
                  text={day.text}
                  time={day.time}
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
