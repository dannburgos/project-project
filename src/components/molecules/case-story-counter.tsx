'use client';

import { siteContent } from '@/content/site';
import { useCaseStoryCounter } from '@/hooks/use-case-story-counter';
import { cn } from '@/lib/utils';

type CaseStoryCounterProps = {
  sections: readonly string[];
  // Número de la primera sección: 1 en Planti; 0 en Sonopizza, donde la
  // portada es la 00 y cada módulo lleva su número del caso (01 · El reto)
  firstNumber?: number;
};

// Navegación del recorrido. En computador: siete cuadrados sobre la línea de
// arriba (la actual rellena, las vistas tenues y la línea pintada hasta la
// actual); al pasar el cursor dicen su nombre y al tocarlos saltan. Al final
// de la fila, el nombre de la sección actual. En celular: el contador de
// abajo, que al tocarlo deja saltar a cualquiera.
export function CaseStoryCounter({
  sections,
  firstNumber = 1
}: CaseStoryCounterProps) {
  const formatNumber = (index: number) =>
    String(index + firstNumber).padStart(2, '0');
  const { ref, section, isOpen, handleToggle, handleJump } =
    useCaseStoryCounter();

  return (
    <div ref={ref} className="case-story__counter" data-counter>
      <nav
        className="case-story__nodes"
        aria-label={siteContent.caseStudy.labels.storyNavigation}
      >
        <ol className="case-story__node-list">
          {sections.map((name, index) => (
            <li key={name}>
              <button
                type="button"
                className={cn(
                  'case-story__node',
                  index < section && 'case-story__node--done',
                  index === section && 'case-story__node--current'
                )}
                aria-current={index === section ? 'step' : undefined}
                aria-label={`${formatNumber(index)} · ${name}`}
                onClick={() => handleJump(index)}
              >
                <span className="case-story__node-tip" aria-hidden="true">
                  {formatNumber(index)} · {name}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <p className="case-story__nodes-current">
          <b>{formatNumber(section)}</b> · {sections[section]}
        </p>
      </nav>

      <div className="case-story__counter-mobile">
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
    </div>
  );
}
