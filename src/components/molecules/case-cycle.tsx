import { RotateCw } from 'lucide-react';
import type { CSSProperties } from 'react';

import { siteContent } from '@/content/site';

type CaseCycleProps = {
  title: string;
  steps: readonly string[];
  note?: string;
};

// Ciclo de pasos que vuelve a empezar. En escritorio los pasos forman un
// círculo y un resaltado lo recorre sin parar, para que se lea como un ciclo;
// en celular van en columna.
export function CaseCycle({ title, steps, note }: CaseCycleProps) {
  const labels = siteContent.caseStudy.labels.cycle;

  return (
    <div className="case-cycle">
      <h3 className="case-block__title">{title}</h3>
      <div
        className="case-cycle__stage"
        style={{ '--cycle-count': steps.length } as CSSProperties}
      >
        <span className="case-cycle__ring" aria-hidden="true" />
        <ol className="case-cycle__steps">
          {steps.map((step, index) => (
            <li
              key={step}
              className="case-cycle__step case-reveal__item"
              style={{ '--item-index': index } as CSSProperties}
            >
              <span className="case-cycle__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="case-cycle__name">{step}</span>
            </li>
          ))}
        </ol>
        <p className="case-cycle__restart">
          <RotateCw aria-hidden="true" />
          {labels.restart}
        </p>
      </div>
      {note && <p className="case-cycle__note">{note}</p>}
    </div>
  );
}
