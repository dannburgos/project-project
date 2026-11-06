'use client';

import { ArrowRight, CalendarPlus, Droplet, Leaf, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

import { usePlantiBannerAutoplay } from '../../hooks/use-planti-banner-autoplay';
import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';

const SLIDE_ICONS = {
  alert: Droplet,
  needs: Leaf,
  add: Plus,
  routine: CalendarPlus
} as const;

export type PlantiBannerContent = {
  label: string;
  slides: readonly {
    key: keyof typeof SLIDE_ICONS;
    tag: string;
    title: string;
    text: string;
    action: string;
  }[];
};

type PlantiHomeBannerProps = {
  // Qué destacados se muestran; por defecto, los de Inicio con tareas
  banner?: PlantiBannerContent;
  // Se mueve solo; apagado se queda en el primero
  isAutoplay?: boolean;
  // El botón del primer destacado se está pulsando (en el recorrido)
  isFirstPressed?: boolean;
};

// Banner de destacados. Se mueve solo (el primer destacado es un aviso) y deja
// asomar el siguiente. El espacio de la derecha es para la foto de cada uno;
// mientras no esté, lleva un ícono.
export function PlantiHomeBanner({
  banner = plantiMessages.home.withTasks.banner,
  isAutoplay = true,
  isFirstPressed = false
}: PlantiHomeBannerProps) {
  const { ref, activeIndex } = usePlantiBannerAutoplay<HTMLDivElement>(
    banner.slides.length,
    isAutoplay
  );

  return (
    <section aria-label={banner.label}>
      <div ref={ref} className="planti-banner">
        {banner.slides.map((slide, index) => {
          const Icon = SLIDE_ICONS[slide.key];

          return (
            <article key={slide.key} className="planti-banner__slide">
              <div className="planti-banner__text">
                <span
                  className={cn(
                    'planti-banner__tag',
                    slide.key === 'alert' && 'planti-banner__tag--alert'
                  )}
                >
                  {slide.tag}
                </span>
                <h2 className="planti-banner__title">{slide.title}</h2>
                <p className="planti-banner__body">{slide.text}</p>
                <PlantiButton
                  className={cn(
                    'planti-banner__action',
                    index === 0 && isFirstPressed && 'planti-button--pressed'
                  )}
                >
                  {slide.action}
                  <ArrowRight aria-hidden="true" />
                </PlantiButton>
              </div>
              <div className="planti-banner__photo" aria-hidden="true">
                <Icon />
              </div>
            </article>
          );
        })}
      </div>
      <div className="planti-banner__dots" aria-hidden="true">
        {banner.slides.map((slide, index) => (
          <span
            key={slide.key}
            className={cn(
              'planti-banner__dot',
              index === activeIndex && 'planti-banner__dot--active'
            )}
          />
        ))}
      </div>
    </section>
  );
}
