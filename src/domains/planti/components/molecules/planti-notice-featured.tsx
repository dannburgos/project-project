import { cn } from '@/lib/utils';

import { PlantiButton } from '../atoms/planti-button';

type PlantiNoticeFeaturedProps = {
  title: string;
  text: string;
  time: string;
  image: string;
  action: string;
  // El botón se está pulsando (en el recorrido)
  isPressed?: boolean;
};

// El aviso de hoy, grande: la planta, qué le toca, a qué hora llegó y un botón
// claro para ver cómo se hace
export function PlantiNoticeFeatured({
  title,
  text,
  time,
  image,
  action,
  isPressed = false
}: PlantiNoticeFeaturedProps) {
  return (
    <div className="planti-notice-featured">
      <div className="planti-notice-featured__head">
        <img
          className="planti-notice-featured__photo"
          src={image}
          alt=""
          aria-hidden="true"
        />
        <div className="planti-notice-featured__body">
          <p className="planti-notice-featured__meta">
            <span className="planti-notice-featured__dot" aria-hidden="true" />
            Nuevo · {time}
          </p>
          <p className="planti-notice-featured__title">{title}</p>
          <p className="planti-notice-featured__text">{text}</p>
        </div>
      </div>
      <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
        {action}
      </PlantiButton>
    </div>
  );
}
