'use client';

import { cn } from '@/lib/utils';

import { usePlantiStageScale } from '../../hooks/use-planti-stage-scale';
import type { PlantiNavKey } from '../molecules/planti-bottom-nav';
import { PlantiDevice } from './planti-device';

type PlantiStageProps = {
  children: React.ReactNode;
  // El recorrido está en pausa: las animaciones se detienen donde estaban
  isPaused?: boolean;
  // Ocupa solo su espacio, no toda la ventana (para ponerlo junto a otra cosa)
  isEmbedded?: boolean;
  // Lo que va debajo del celular (por ahora, iniciar o repetir el recorrido)
  controls?: React.ReactNode;
  navActive?: PlantiNavKey | null;
};

// Escenario del prototipo: el celular siempre a su tamaño real, escalado para
// que quepa entero en su área, y los controles debajo
export function PlantiStage({
  children,
  controls,
  navActive = null,
  isPaused = false,
  isEmbedded = false
}: PlantiStageProps) {
  const ref = usePlantiStageScale<HTMLDivElement>();

  return (
    <div
      className={cn(
        'planti-stage',
        isPaused && 'planti-stage--paused',
        isEmbedded && 'planti-stage--embedded'
      )}
    >
      <div ref={ref} className="planti-stage__viewport">
        <PlantiDevice navActive={navActive}>{children}</PlantiDevice>
      </div>
      <div className="planti-stage__controls">{controls}</div>
    </div>
  );
}
