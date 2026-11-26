'use client';

import { useState } from 'react';

import { QuboVisual } from '@/components/atoms/qubo-visual';
import type { QuboHeroScreen } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboHotspotsProps = {
  hero: QuboHeroScreen;
  hint: string;
};

// Pantalla héroe con puntos encima (referencia: los puntos que abren una
// tarjeta sobre la foto de Armor). Al tocar un punto, o su fila, se explica
// qué resuelve esa parte de la pantalla.
export function QuboHotspots({ hero, hint }: QuboHotspotsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article className="qb-hotspots" data-qb-reveal>
      <div className="qb-hotspots__stage">
        <QuboVisual visual={hero.visual} className="qb-hotspots__visual" />
        {hero.hotspots.map((hotspot, index) => (
          <button
            key={hotspot.title}
            type="button"
            className={cn(
              'qb-hotspots__dot',
              index === activeIndex && 'qb-hotspots__dot--active'
            )}
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            aria-pressed={index === activeIndex}
            aria-label={hotspot.title}
            onClick={() => setActiveIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="qb-hotspots__copy">
        <p className="qb-hotspots__tag">{hero.tag}</p>
        <h4 className="qb-hotspots__name">{hero.name}</h4>
        <p className="qb-hotspots__principle">{hero.principle}</p>
        <p className="qb-hotspots__hint">{hint}</p>
        <ol className="qb-hotspots__list">
          {hero.hotspots.map((hotspot, index) => (
            <li key={hotspot.title}>
              <button
                type="button"
                className={cn(
                  'qb-hotspots__row',
                  index === activeIndex && 'qb-hotspots__row--active'
                )}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                <span className="qb-hotspots__row-number">{index + 1}</span>
                <span className="qb-hotspots__row-title">{hotspot.title}</span>
              </button>
              {index === activeIndex && (
                <p className="qb-hotspots__row-text">{hotspot.text}</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
