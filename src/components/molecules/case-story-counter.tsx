'use client';

import { useCaseStoryCounter } from '@/hooks/use-case-story-counter';

type CaseStoryCounterProps = {
  sections: readonly string[];
};

const formatNumber = (index: number) => String(index + 1).padStart(2, '0');

// Contador discreto en lugar de un menú lateral: dice en qué sección va el
// recorrido y, al tocarlo, deja saltar a cualquiera. En computador viaja
// colgado del eje; en celular queda abajo.
export function CaseStoryCounter({ sections }: CaseStoryCounterProps) {
  const { ref, section, isOpen, handleToggle, handleJump } =
    useCaseStoryCounter();

  return (
    <div ref={ref} className="case-story__counter" data-counter>
      <button
        type="button"
        className="case-story__counter-button"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        <b>{formatNumber(section)}</b> / {formatNumber(sections.length - 1)} ·{' '}
        {sections[section]}
      </button>
      {isOpen && (
        <div className="case-story__jump">
          {sections.map((name, index) => (
            <button
              key={name}
              type="button"
              className="case-story__jump-item"
              onClick={() => handleJump(index)}
            >
              {formatNumber(index)} · {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
