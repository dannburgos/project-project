import { cn } from '@/lib/utils';

import { PlantiButton } from '../atoms/planti-button';

export type PlantiBannerContent = {
  label: string;
  title: string;
  text: string;
  action: string;
};

type PlantiHomeBannerProps = {
  // Qué destacado se muestra
  banner: PlantiBannerContent;
  // El botón del destacado se está pulsando (en el recorrido)
  isPressed?: boolean;
};

// Tarjeta destacada de Inicio: un título, una frase y un botón,
// con la foto a la derecha
export function PlantiHomeBanner({
  banner,
  isPressed = false
}: PlantiHomeBannerProps) {
  return (
    <section aria-label={banner.label}>
      <article className="planti-banner">
        <div className="planti-banner__text">
          <h2 className="planti-banner__title">{banner.title}</h2>
          <p className="planti-banner__body">{banner.text}</p>
          <PlantiButton
            className={cn(
              'planti-banner__action',
              isPressed && 'planti-button--pressed'
            )}
          >
            {banner.action}
          </PlantiButton>
        </div>
        <div className="planti-banner__photo" aria-hidden="true">
          <img src="/planti/plantahome1.png" alt="" />
        </div>
      </article>
    </section>
  );
}
