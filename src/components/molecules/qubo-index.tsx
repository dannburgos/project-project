'use client';

import type { QuboLabels, QuboSection } from '@/content/qubo-story.types';
import { useQuboIndex } from '@/hooks/use-qubo-index';
import { cn } from '@/lib/utils';

type QuboIndexProps = {
  sections: readonly QuboSection[];
  labels: QuboLabels;
};

// Píldora flotante abajo al centro (referencia: la barra en píldora de
// Armor). Muestra el capítulo actual, una línea de avance y, al abrirla, la
// lista para saltar a cualquier capítulo.
export function QuboIndex({ sections, labels }: QuboIndexProps) {
  const { ref, isOpen, isVisible, activeIndex, handleToggle, handleJump } =
    useQuboIndex(sections.map(section => section.id));
  const current = sections[activeIndex];

  return (
    <div
      ref={ref}
      className={cn('qb-index', isVisible && 'qb-index--visible')}
      aria-hidden={!isVisible}
    >
      <nav className="qb-index__pill" aria-label={labels.navigation}>
        <button
          type="button"
          className="qb-index__toggle"
          aria-expanded={isOpen}
          aria-label={`${labels.menu}: ${current.number} · ${current.name}`}
          tabIndex={isVisible ? 0 : -1}
          onClick={handleToggle}
        >
          <span className="qb-index__number">{current.number}</span>
          <span className="qb-index__name">{current.name}</span>
          <span className="qb-index__total" aria-hidden="true">
            / {sections[sections.length - 1].number}
          </span>
          <span className="qb-index__progress" aria-hidden="true" />
        </button>

        <ol className={cn('qb-index__menu', isOpen && 'qb-index__menu--open')}>
          {sections.map((section, index) => (
            <li key={section.id}>
              <button
                type="button"
                className={cn(
                  'qb-index__item',
                  index === activeIndex && 'qb-index__item--current'
                )}
                aria-current={index === activeIndex ? 'step' : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => handleJump(index)}
              >
                <span className="qb-index__item-number">{section.number}</span>
                {section.name}
              </button>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
