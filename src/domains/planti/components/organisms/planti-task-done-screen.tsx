import { Check } from 'lucide-react';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiTaskCard } from '../molecules/planti-task-card';

// Cuidado completado: un check que se dibuja, el próximo riego y el cuidado
// que todavía queda hoy
export function PlantiTaskDoneScreen() {
  const { done } = plantiMessages.tasks;
  const { pending } = done;

  return (
    <div className="planti-screen planti-registered planti-task-done">
      <span className="planti-registered__check" aria-hidden="true">
        <Check />
      </span>
      <h1 className="planti-registered__title">{done.title}</h1>
      <p className="planti-registered__text">{done.text}</p>
      <section className="planti-task-done__pending">
        <h2 className="planti-task-done__pending-title">{done.pendingTitle}</h2>
        <ul className="planti-task-list-cards">
          <PlantiTaskCard
            title={pending.title}
            plant={pending.plant}
            hour={pending.hour}
            period={pending.period}
            careKey={pending.careKey}
            care={pending.care}
          />
        </ul>
      </section>
      <div className="planti-screen__footer">
        <PlantiButton variant="secondary">{done.action}</PlantiButton>
      </div>
    </div>
  );
}
