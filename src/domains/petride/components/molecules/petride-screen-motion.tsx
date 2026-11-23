'use client';

import { usePetrideScreenReveal } from '../../hooks/use-petride-screen-reveal';

type PetrideScreenMotionProps = {
  // Qué pantalla es: elige su coreografía en petride-motion.css
  screen: string;
  // Si la pantalla muestra un dedo que toca los controles
  hasTouch?: boolean;
  children: React.ReactNode;
};

// Escenario de una pantalla en el caso: sus microinteracciones esperan
// quietas en el primer cuadro y corren cuando la pantalla se revela. El dedo
// muestra dónde toca la persona en cada paso
export function PetrideScreenMotion({
  screen,
  hasTouch = true,
  children
}: PetrideScreenMotionProps) {
  const { ref, phase, cycle } = usePetrideScreenReveal();

  return (
    <div
      ref={ref}
      className="petride-motion"
      data-screen={screen}
      data-motion={phase}
    >
      <div key={cycle} className="petride-motion__stage">
        {children}
        {hasTouch && (
          <span className="petride-touch" aria-hidden="true">
            <span className="petride-touch__ripple" />
          </span>
        )}
      </div>
    </div>
  );
}
