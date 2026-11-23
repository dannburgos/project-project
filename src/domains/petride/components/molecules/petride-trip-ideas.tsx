import { Bone, Stethoscope, Trees } from 'lucide-react';

import { cn } from '@/lib/utils';

import { PETRIDE_TRIP_IDEAS } from '../../example-trip';
import { petrideMessages } from '../../messages';
import { fillPetrideTemplate } from '../../petride-template.util';
import type { PetrideTripIdea } from '../../types/petride.types';

const ICONS: Record<PetrideTripIdea['kind'], typeof Trees> = {
  park: Trees,
  vet: Stethoscope,
  daycare: Bone
};

// Carrusel de ideas para el próximo viaje: tarjetas anchas de color (lima,
// lila y noche) con el ícono grande, el plan, el lugar y los minutos. Los
// puntos de abajo dicen cuántas hay y en cuál va
export function PetrideTripIdeas() {
  const { home } = petrideMessages;

  return (
    <section className="petride-ideas">
      <h2 className="petride-section-head__title">{home.planTitle}</h2>
      <ul className="petride-ideas__list">
        {PETRIDE_TRIP_IDEAS.map(idea => {
          const Icon = ICONS[idea.kind];
          return (
            <li
              key={idea.id}
              className={cn(
                'petride-idea',
                idea.kind === 'park' && 'petride-idea--lime',
                idea.kind === 'vet' && 'petride-idea--lilac',
                idea.kind === 'daycare' && 'petride-idea--night'
              )}
            >
              <span className="petride-idea__icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="petride-idea__text">
                <span className="petride-idea__title">{idea.title}</span>
                <span className="petride-idea__meta">
                  {fillPetrideTemplate(home.ideaMeta, {
                    place: idea.place,
                    minutes: idea.minutes
                  })}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      <span className="petride-ideas__dots" aria-hidden="true">
        {PETRIDE_TRIP_IDEAS.map((idea, index) => (
          <span
            key={idea.id}
            className={cn(
              'petride-ideas__dot',
              index === 0 && 'petride-ideas__dot--on'
            )}
          />
        ))}
      </span>
    </section>
  );
}
