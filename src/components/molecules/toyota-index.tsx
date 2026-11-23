'use client';

import type { CSSProperties } from 'react';

import type { ToyotaLabels, ToyotaSection } from '@/content/toyota-story.types';
import { useCaseStoryCounter } from '@/hooks/use-case-story-counter';
import { cn } from '@/lib/utils';

type ToyotaIndexProps = {
  sections: readonly ToyotaSection[];
  labels: ToyotaLabels;
};

// Índice del caso, siempre en el mismo lugar: un botón abajo a la derecha
// que dice en qué capítulo vas, con una línea roja que se llena con el avance
// de todo el caso. Al pasar el cursor (o al tocarlo, o con el teclado) la
// lista de capítulos se despliega hacia arriba para saltar a cualquiera.
export function ToyotaIndex({ sections, labels }: ToyotaIndexProps) {
  const { ref, section, isOpen, handleToggle, handleJump } =
    useCaseStoryCounter();
  const current = sections[section] ?? sections[0];

  return (
    <div ref={ref} className="ty-index" data-counter>
      <nav className="ty-index__compact" aria-label={labels.navigation}>
        <button
          type="button"
          className="ty-index__toggle"
          aria-expanded={isOpen}
          aria-label={`${labels.menu}: ${current.number} · ${current.name}`}
          onClick={handleToggle}
        >
          <span className="ty-index__toggle-number">{current.number}</span>
          <span className="ty-index__toggle-name">{current.name}</span>
          <span className="ty-index__toggle-total" aria-hidden="true">
            / {sections[sections.length - 1].number}
          </span>
          <span className="ty-index__progress" aria-hidden="true" />
        </button>
        {/* La lista siempre está en la página; mientras está recogida no se
            ve ni recibe el foco */}
        <div className={cn('ty-index__menu', isOpen && 'ty-index__menu--open')}>
          <ol className="ty-index__menu-list">
            {sections.map((item, index) => (
              <li
                key={item.number}
                className="ty-index__menu-row"
                style={{ '--item-index': index } as CSSProperties}
              >
                <button
                  type="button"
                  className={cn(
                    'ty-index__menu-item',
                    index < section && 'ty-index__menu-item--done',
                    index === section && 'ty-index__menu-item--current'
                  )}
                  aria-current={index === section ? 'step' : undefined}
                  onClick={() => handleJump(index)}
                >
                  <span className="ty-index__number">{item.number}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </div>
  );
}
