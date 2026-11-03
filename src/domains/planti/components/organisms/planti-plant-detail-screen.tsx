'use client';

import { gsap } from 'gsap';
import { Droplet, Sun, Wind } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiTaskRow } from '../atoms/planti-task-row';
import { PlantiPlantHero } from '../molecules/planti-plant-hero';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

const RECOMMENDATION_ICONS = {
  light: Sun,
  water: Droplet,
  humidity: Wind
} as const;

// Lo que dura el desplazamiento hacia las recomendaciones
const SCROLL_DURATION_S = 1.8;

type PlantiPlantDetailScreenProps = {
  // Ya se bajó para ver las recomendaciones (en el recorrido)
  hasScrolled?: boolean;
  // El botón se está pulsando (en el recorrido)
  isPressed?: boolean;
};

// Detalle de la planta que se está mirando: su foto, sus nombres, cómo es y lo
// general sobre sus cuidados (todavía no la eligió). El contenido se desliza
// y el botón para elegirla queda fijo abajo.
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
        <h3 className="planti-plant-detail__section">
          {detail.recommendationsTitle}
        </h3>
        <div className="planti-card planti-task-list">
          {detail.recommendations.map(item => (
            <PlantiTaskRow
              key={item.key}
              icon={RECOMMENDATION_ICONS[item.key]}
              name={item.name}
              detail={item.text}
            />
          ))}
        </div>
        <p className="planti-plant-detail__note">{detail.note}</p>
      </div>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {detail.action}
        </PlantiButton>
      </div>
    </div>
  );
}
