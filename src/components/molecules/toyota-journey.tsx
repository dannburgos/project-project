import type { CSSProperties } from 'react';

import type { ToyotaJourneyStep } from '@/content/toyota-story.types';

type ToyotaJourneyProps = {
  label: string;
  steps: readonly ToyotaJourneyStep[];
};

// Recorrido de hoy, centrado: la línea une el centro del primer paso con el
// del último y se dibuja con el scroll.
export function ToyotaJourney({ label, steps }: ToyotaJourneyProps) {
  const layout = { '--journey-count': steps.length } as CSSProperties;

  return (
    <figure className="ty-journey" style={layout} data-ty-group>
      <figcaption className="ty-journey__label">{label}</figcaption>
      <div className="ty-journey__track">
        <span className="ty-journey__line" aria-hidden="true" data-ty-line />
        <ol className="ty-journey__list">
          {steps.map((step, index) => (
            <li key={step.label} className="ty-journey__step" data-ty-item>
              <span className="ty-journey__node" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="ty-journey__name">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}
