import { plantiMessages } from '../../messages';
import { PlantiWeekAgenda } from '../molecules/planti-week-agenda';

// Pestaña Rutina: donde termina el capítulo 2. La semana recién programada
// con lo que viene, todo del Ficus de Laura
export function PlantiRoutineScreen() {
  const { routine } = plantiMessages;

  return (
    <div className="planti-screen planti-routine">
      <h1 className="planti-routine__title">{routine.tabTitle}</h1>
      <div className="planti-screen__scroll planti-routine__content">
        <PlantiWeekAgenda week={routine.week} />
      </div>
    </div>
  );
}
