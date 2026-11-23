import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiEmptyPanel } from '../molecules/planti-empty-panel';
import { PlantiHomeBanner } from '../molecules/planti-home-banner';
import { PlantiHomeHeader } from '../molecules/planti-home-header';
import { PlantiPlantsCarousel } from '../molecules/planti-plants-carousel';

type PlantiHomeScreenProps = {
  // "empty": la primera vez, sin plantas (abre el capítulo 1).
  // "before-routine": con el Ficus ya registrado pero sin rutina todavía
  // (abre el capítulo 2).
  variant: 'empty' | 'before-routine';
  // El botón principal se está pulsando: Añade tu planta (vacío) o Crea su
  // rutina (antes de la rutina)
  isActionPressed?: boolean;
};

// Pantalla de Inicio: punto de entrada compartido de los flujos. La cabecera
// y la barra de navegación quedan fijas; el contenido hace scroll. En la
// primera vista caben el saludo, el banner y las plantas.
export function PlantiHomeScreen({
  variant,
  isActionPressed = false
}: PlantiHomeScreenProps) {
  const { home } = plantiMessages;

  return (
    <div className="planti-screen planti-home-screen">
      <PlantiHomeHeader />
      <div
        className={cn(
          'planti-home-screen__content',
          variant === 'before-routine' && 'planti-home-screen__content--fits'
        )}
        data-scroll-area
      >
        <div className="planti-home-screen__date">
          <p className="planti-home-screen__day">
            {variant === 'before-routine'
              ? plantiMessages.routine.home.date
              : home.date}
          </p>
          <p className="planti-home-screen__note">{home.dateNote}</p>
        </div>
        {variant === 'empty' ? (
          <PlantiEmptyPanel isActionPressed={isActionPressed} />
        ) : (
          <>
            <PlantiHomeBanner banner={plantiMessages.routine.home.banner} />
            <PlantiPlantsCarousel
              plants={plantiMessages.routine.home.plants}
              isFirstPressed={isActionPressed}
            />
          </>
        )}
      </div>
    </div>
  );
}
