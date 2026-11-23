import { Droplet } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

type PlantiTaskDetailScreenProps = {
  isPressed?: boolean;
};

// El cuidado de hoy: la planta arriba, la actividad en grande y los pasos para
// hacerlo sin saber de plantas. La hora y la frecuencia ya las dijo el aviso,
// así que van como texto, sin íconos. Abajo, marcarlo como realizado.
export function PlantiTaskDetailScreen({
  isPressed = false
}: PlantiTaskDetailScreenProps) {
  const { detail } = plantiMessages.tasks;

  return (
    <div className="planti-screen planti-needs-screen planti-task-detail">
      <PlantiScreenHeader title={detail.title} hasMenu />
      <div className="planti-screen__scroll">
        <div className="planti-needs__top">
          <div className="planti-task-detail__hero">
            <h1 className="planti-needs__name">{detail.plant}</h1>
            <p className="planti-task-detail__care">
              <Droplet aria-hidden="true" />
              {detail.care}
            </p>
            <p className="planti-task-detail__when">{detail.when}</p>
          </div>
          <img
            className="planti-needs__plant"
            src={detail.image}
            alt=""
            aria-hidden="true"
          />
        </div>
        <section className="planti-needs__sheet">
          <h2 className="planti-needs__title">{detail.howTitle}</h2>
          <ol className="planti-task-detail__steps">
            {detail.steps.map((step, index) => (
              <li key={step} className="planti-task-detail__step">
                <span className="planti-task-detail__number">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>
      </div>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {detail.action}
        </PlantiButton>
      </div>
    </div>
  );
}
