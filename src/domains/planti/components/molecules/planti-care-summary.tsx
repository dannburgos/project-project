import { ChevronRight, Droplet, Leaf } from 'lucide-react';

import { plantiMessages } from '../../messages';
import { PlantiSectionHead } from '../atoms/planti-section-head';
import { PlantiStatusPill } from '../atoms/planti-status-pill';
import { PlantiTaskRow } from '../atoms/planti-task-row';

// "Cuidados de hoy": el primero va completo (qué toca, dónde, cuándo y cómo
// hacerlo, y lleva al detalle) y los demás, en una fila
export function PlantiCareSummary() {
  const { care } = plantiMessages.home.withTasks;
  const { primary } = care;

  return (
    <section>
      <PlantiSectionHead title={care.title} aside={care.count} />
      <div className="planti-card planti-care-card">
        <progress
          className="planti-progress"
          value={0}
          max={care.others.length + 1}
        />
        <article className="planti-care-primary">
          <div className="planti-care-primary__head">
            <span className="planti-care-primary__thumb" aria-hidden="true">
              <Leaf />
            </span>
            <div className="planti-care-primary__text">
              <h3 className="planti-care-primary__name">{primary.name}</h3>
              <p className="planti-care-primary__meta">
                {primary.place} · {primary.time}
              </p>
            </div>
            <PlantiStatusPill tone="pending">{primary.status}</PlantiStatusPill>
          </div>
          <div className="planti-care-primary__how">
            <p>{primary.instruction}</p>
            <ChevronRight aria-hidden="true" />
          </div>
        </article>
        {care.others.map(other => (
          <PlantiTaskRow
            key={other.key}
            icon={Droplet}
            name={other.name}
            detail={`${other.place} · ${other.time}`}
            status={
              <PlantiStatusPill tone="pending">{other.status}</PlantiStatusPill>
            }
          />
        ))}
      </div>
    </section>
  );
}
