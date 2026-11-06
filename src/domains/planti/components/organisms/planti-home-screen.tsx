import { plantiMessages } from '../../messages';
import { PlantiCareSummary } from '../molecules/planti-care-summary';
import { PlantiEmptyPanel } from '../molecules/planti-empty-panel';
import { PlantiHomeBanner } from '../molecules/planti-home-banner';
import { PlantiHomeHeader } from '../molecules/planti-home-header';
import { PlantiPlantsGrid } from '../molecules/planti-plants-grid';
import { PlantiSearchField } from '../molecules/planti-search-field';
import { PlantiWeekAgenda } from '../molecules/planti-week-agenda';

type PlantiHomeScreenProps = {
  // "empty": la primera vez, sin plantas (abre el capítulo 1).
  // "with-tasks": con los cuidados del día (abre el capítulo 3).
  // "before-routine": con el Ficus ya registrado pero sin rutina todavía
  // (abre el capítulo 2).
  variant: 'empty' | 'with-tasks' | 'before-routine';
  // El botón principal se está pulsando: Añade tu planta (vacío) o Crea su
  // rutina (antes de la rutina)
  isActionPressed?: boolean;
};

// Pantalla de Inicio: punto de entrada compartido de los flujos. La cabecera
// y la barra de navegación quedan fijas; el contenido hace scroll. En la
// primera vista caben el saludo, el banner y los cuidados de hoy; la semana
// asoma debajo.
export function PlantiHomeScreen({
  variant,
  isActionPressed = false
}: PlantiHomeScreenProps) {
  const { home } = plantiMessages;

  return (
    <div className="planti-screen planti-home-screen">
      <PlantiHomeHeader />
      <div className="planti-home-screen__content" data-scroll-area>
        <PlantiSearchField placeholder={home.searchPlaceholder} />
        <div className="planti-home-screen__date">
          <p className="planti-home-screen__day">{home.date}</p>
          <p className="planti-home-screen__note">{home.dateNote}</p>
        </div>
        {variant === 'empty' ? (
          <PlantiEmptyPanel isActionPressed={isActionPressed} />
        ) : variant === 'before-routine' ? (
          <>
            <PlantiHomeBanner
              banner={plantiMessages.routine.home.banner}
              isAutoplay={false}
              isFirstPressed={isActionPressed}
            />
            <PlantiPlantsGrid plants={plantiMessages.routine.home.plants} />
          </>
        ) : (
          <>
            <PlantiHomeBanner />
            <PlantiCareSummary />
            <PlantiWeekAgenda />
            <PlantiPlantsGrid />
          </>
        )}
      </div>
    </div>
  );
}
