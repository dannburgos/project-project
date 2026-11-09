import { Leaf, Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

import { PlantiSectionHead } from '../atoms/planti-section-head';

export type PlantiPlantsCarouselContent = {
  title: string;
  timeLabel: string;
  placeLabel: string;
  items: readonly {
    key: string;
    name: string;
    time: string;
    place: string;
    // Color de fondo de la tarjeta
    tone: 'green' | 'cream';
    // La planta recortada; mientras no esté, lleva una hoja
    image?: string;
  }[];
  add: string;
};

type PlantiPlantsCarouselProps = {
  plants: PlantiPlantsCarouselContent;
  // La primera tarjeta se está tocando (en el recorrido)
  isFirstPressed?: boolean;
};

// Las plantas de la persona en un carrusel: cada tarjeta lleva el nombre, desde
// cuánto tiempo lleva con ella, con la planta recortada pegada a la derecha. La
// última tarjeta invita a añadir otra y deja asomar la siguiente.
export function PlantiPlantsCarousel({
  plants,
  isFirstPressed = false
}: PlantiPlantsCarouselProps) {
  return (
    <section>
      <PlantiSectionHead title={plants.title} />
      <ul className="planti-carousel">
        {plants.items.map((plant, index) => (
          <li
            key={plant.key}
            className={cn(
              'planti-carousel__card',
              plant.tone === 'cream' && 'planti-carousel__card--cream',
              index === 0 && isFirstPressed && 'planti-carousel__card--pressed'
            )}
          >
            <div className="planti-carousel__info">
              <h3 className="planti-carousel__name">{plant.name}</h3>
              <dl className="planti-carousel__facts">
                <div>
                  <dt>{plants.timeLabel}</dt>
                  <dd>{plant.time}</dd>
                </div>
                <div>
                  <dt>{plants.placeLabel}</dt>
                  <dd>{plant.place}</dd>
                </div>
              </dl>
            </div>
            {plant.image ? (
              <img
                className="planti-carousel__photo"
                src={plant.image}
                alt=""
                aria-hidden="true"
              />
            ) : (
              <Leaf className="planti-carousel__leaf" aria-hidden="true" />
            )}
          </li>
        ))}
        <li className="planti-carousel__card planti-carousel__card--add">
          <Plus aria-hidden="true" />
          <span>{plants.add}</span>
        </li>
      </ul>
    </section>
  );
}
