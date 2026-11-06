'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiPlantHero } from '../molecules/planti-plant-hero';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

// Lo que dura el desplazamiento hacia la descripción
const SCROLL_DURATION_S = 1.8;

type PlantiPlantDetailScreenProps = {
  // Ya se bajó para ver la descripción (en el recorrido)
  hasScrolled?: boolean;
  // El botón se está pulsando (en el recorrido)
  isPressed?: boolean;
};

// Detalle de la planta que se está mirando: su foto, sus nombres y cómo es
// (todavía no la eligió). El contenido se desliza y el botón para elegirla
// queda fijo abajo.
export function PlantiPlantDetailScreen({
  hasScrolled = false,
  isPressed = false
}: PlantiPlantDetailScreenProps) {
  const { plant, detail } = plantiMessages;
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
    <div className="planti-screen">
      <PlantiScreenHeader />
      <div ref={scrollRef} className="planti-screen__scroll">
        <PlantiPlantHero size="tall" />
        <h2 className="planti-plant-detail__name">{plant.name}</h2>
        <p className="planti-plant-detail__scientific">{plant.scientific}</p>
        <ul className="planti-plant-detail__traits">
          {plant.traits.map(trait => (
            <li key={trait} className="planti-plant-detail__trait">
              {trait}
            </li>
          ))}
        </ul>
        <p className="planti-plant-detail__description">{plant.description}</p>
      </div>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {detail.action}
        </PlantiButton>
      </div>
    </div>
  );
}
