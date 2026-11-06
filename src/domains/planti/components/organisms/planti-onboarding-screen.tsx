import { ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';

// Largo de la circunferencia de la línea (2 x π x radio 34)
const RING_LENGTH = 214;

type PlantiOnboardingScreenProps = {
  // Cuánto de la circunferencia ya está dibujado, de 0 a 1 (por defecto, toda)
  ringProgress?: number;
  // El botón se está pulsando
  isPressed?: boolean;
};

// Intro a lo que la persona va a encontrar. Se ve solo unos segundos: una
// línea rodea el botón durante 2 s y, al completar la circunferencia, el botón
// se pulsa solo. El avance de la línea lo da el recorrido, así se puede
// adelantar y retroceder. Foto a pantalla completa.
export function PlantiOnboardingScreen({
  ringProgress = 1,
  isPressed = false
}: PlantiOnboardingScreenProps) {
  const { onboarding } = plantiMessages;

  return (
    <div className="planti-onboarding">
      <img
        src="/planti/onboarding-plant.webp"
        alt=""
        className="planti-onboarding__photo"
      />
      <div className="planti-onboarding__content">
        <h1 className="planti-onboarding__title">{onboarding.title}</h1>
        <p className="planti-onboarding__text">{onboarding.text}</p>
        <button
          type="button"
          className={cn(
            'planti-onboarding__next',
            isPressed && 'planti-onboarding__next--pressed'
          )}
          aria-label={onboarding.next}
        >
          <svg
            className="planti-onboarding__ring"
            viewBox="0 0 72 72"
            aria-hidden="true"
          >
            <circle
              className="planti-onboarding__ring-track"
              cx="36"
              cy="36"
              r="34"
            />
            <circle
              className="planti-onboarding__ring-line"
              cx="36"
              cy="36"
              r="34"
              strokeDashoffset={RING_LENGTH * (1 - ringProgress)}
            />
          </svg>
          <ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
