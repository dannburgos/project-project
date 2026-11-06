import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

import { CaseStoryImage } from '@/components/atoms/case-story-image';
import { CaseStoryOpener } from '@/components/atoms/case-story-opener';
import type { CaseStory } from '@/content/case-story.types';
import { cn } from '@/lib/utils';

type CaseStoryPrototypeProps = {
  prototype: CaseStory['prototype'];
  sectionName: string;
};

// 07 · Prototipo: primero las pantallas de la app suben como una lluvia al
// revés (las principales grandes y al frente); después llega el prototipo: a
// la izquierda qué es y un botón por flujo, a la derecha el celular. Elegir un
// flujo recarga el celular con ese recorrido; los que aún no existen quedan
// como "Próximamente".
export function CaseStoryPrototype({
  prototype,
  sectionName
}: CaseStoryPrototypeProps) {
  const firstReady = prototype.flows.find(flow => flow.isReady);
  const [selected, setSelected] = useState(firstReady?.number ?? '');
  // Cambia cada vez que se pulsa un flujo, para que el celular empiece de nuevo
  const [loadCount, setLoadCount] = useState(0);

  const handleSelectFlow = (number: string) => {
    setSelected(number);
    setLoadCount(count => count + 1);
  };

  return (
    <>
      <div className="story-view story-rain" data-view="rain" data-section="6">
        <CaseStoryOpener number="07" name={sectionName} />
        <div className="story-rain__stack">
          {prototype.screens.map(screen => (
            <CaseStoryImage
              key={screen.label}
              label={screen.label}
              variant="paper"
              className={cn(
                'story-rain__card',
                screen.isMain && 'story-rain__card--main'
              )}
              data-rain-card
            />
          ))}
        </div>
      </div>

      <div
        className="story-view story-prototype"
        data-view="prototype"
        data-section="6"
      >
        <div className="story-prototype__copy" data-part="copy">
          <p className="story-prototype__eyebrow">{prototype.eyebrow}</p>
          <h2 className="story-prototype__heading">
            {prototype.heading}
            <em className="story-prototype__accent">
              {prototype.headingAccent}
            </em>
          </h2>
          <p className="story-prototype__description">
            {prototype.description.map(part =>
              part.isStrong ? (
                <strong key={part.text}>{part.text}</strong>
              ) : (
                <span key={part.text}>{part.text}</span>
              )
            )}
          </p>
          <p className="story-prototype__live">
            <span className="story-prototype__dot" aria-hidden="true" />
            {prototype.liveHint}
            <ArrowRight aria-hidden="true" />
          </p>
          <div className="story-prototype__flows">
            <p className="story-prototype__flows-label">
              {prototype.flowsLabel}
            </p>
            <ul className="story-prototype__flow-list">
              {prototype.flows.map(flow => {
                const isSelected = flow.number === selected;

                return (
                  <li key={flow.number}>
                    <button
                      type="button"
                      disabled={!flow.isReady}
                      aria-pressed={flow.isReady ? isSelected : undefined}
                      onClick={() => handleSelectFlow(flow.number)}
                      className={cn(
                        'story-prototype__flow',
                        isSelected && 'story-prototype__flow--selected'
                      )}
                    >
                      <span className="story-prototype__flow-icon">
                        <Play aria-hidden="true" />
                      </span>
                      <span className="story-prototype__flow-number">
                        {flow.number}
                      </span>
                      <span className="story-prototype__flow-title">
                        {flow.title}
                      </span>
                      {!flow.isReady && (
                        <span className="story-prototype__flow-soon">
                          {prototype.soonLabel}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="story-prototype__phone" data-part="phone">
          <iframe
            key={`${selected}-${loadCount}`}
            src={`${prototype.src}?flow=${Number(selected)}&embed=1`}
            title={prototype.title}
            loading="lazy"
            className="story-prototype__screen"
          />
        </div>
      </div>
    </>
  );
}
