'use client';

import { gsap } from 'gsap';
import { Award, House } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

// Un ícono por cada rasgo de la planta, en el mismo orden
const TRAIT_ICONS = [House, Award] as const;

// Lo que dura el desplazamiento hacia la descripción
const SCROLL_DURATION_S = 1.8;

type PlantiPlantDetailScreenProps = {
  // Ya se bajó para ver la descripción (en el recorrido)
  hasScrolled?: boolean;
  // El botón se está pulsando (en el recorrido)
  isPressed?: boolean;
};

// Detalle de la planta que se está mirando (todavía no la eligió): igual que
// Mis plantas, sus nombres y rasgos a la izquierda, su foto grande asomando
// sobre la hoja con la descripción, y el botón para elegirla fijo abajo.
export function PlantiPlantDetailScreen({
  hasScrolled = false,
  isPressed = false
}: PlantiPlantDetailScreenProps) {
  const { plant, detail, needs } = plantiMessages;
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const area = scrollRef.current;
    if (!area) return;
    const target = hasScrolled ? area.scrollHeight - area.clientHeight : 0;
    const tween = gsap.to(area, {
      scrollTop: target,
      duration: SCROLL_DURATION_S,
      ease: 'power2.inOut'
    });
    return () => {
      tween.kill();
    };
  }, [hasScrolled]);

  return (
    <div className="planti-screen planti-needs-screen planti-plant-detail">
      <PlantiScreenHeader />
      <div ref={scrollRef} className="planti-screen__scroll">
        <div className="planti-needs__top">
          <div className="planti-needs__intro">
            <h1 className="planti-needs__name">{plant.name}</h1>
            <p className="planti-needs__tagline">{plant.scientific}</p>
            <ul className="planti-needs__facts">
              {plant.traits.map((trait, index) => {
                const Icon = TRAIT_ICONS[index];

                return (
                  <li key={trait} className="planti-needs__fact">
                    <span
                      className="planti-needs__fact-icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>
                    {trait}
                  </li>
                );
              })}
            </ul>
          </div>
          <img
            className="planti-needs__plant"
            src={plant.cutoutImage}
            alt=""
            aria-hidden="true"
          />
        </div>
        <section className="planti-needs__sheet">
          <h2 className="planti-needs__title">{needs.descriptionTitle}</h2>
          <p className="planti-needs__description">{plant.description}</p>
        </section>
      </div>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {detail.action}
        </PlantiButton>
      </div>
    </div>
  );
}
