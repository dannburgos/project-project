'use client';

import { ArrowRight, Droplet, Leaf, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

import { usePlantiBannerAutoplay } from '../../hooks/use-planti-banner-autoplay';
import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';

const SLIDE_ICONS = {
  alert: Droplet,
  needs: Leaf,
  add: Plus
} as const;

// Banner de tres destacados. Se mueve solo (el primer destacado es un aviso)
// y deja asomar el siguiente. El espacio de la derecha es para la foto de
// cada uno; mientras no esté, lleva un ícono.
export function PlantiHomeBanner() {
  const { banner } = plantiMessages.home.withTasks;
  const { ref, activeIndex } = usePlantiBannerAutoplay<HTMLDivElement>(
    banner.slides.length
  );

  return (
    <section aria-label={banner.label}>
      <div ref={ref} className="planti-banner">
        {banner.slides.map(slide => {
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
                <PlantiButton className="planti-banner__action">
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
