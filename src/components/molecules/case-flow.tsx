import type { CSSProperties } from 'react';

import type { CaseFlowScreen } from '@/content/case-study.types';
import { siteContent } from '@/content/site';

type CaseFlowProps = {
  number: string;
  title: string;
  goal: string;
  steps: readonly string[];
  screens: readonly CaseFlowScreen[];
  notes?: readonly string[];
};

// Flujo de usuario: su objetivo, el recorrido en pasos (se encienden uno tras
// otro) y la lista de sus pantallas, solo en texto (Dann no quiere capturas;
// los flujos se rediseñan de forma dinámica al iterar su capítulo).
export function CaseFlow({
  number,
  title,
  goal,
  steps,
  screens,
  notes
}: CaseFlowProps) {
  const labels = siteContent.caseStudy.labels.flow;

  return (
    <article className="case-flow">
      <header className="case-flow__header">
        <span className="case-flow__number">{number}</span>
        <div className="case-flow__heading">
          <h3 className="case-flow__title">{title}</h3>
          <p className="case-flow__goal">
            <span className="case-flow__label">{labels.goal}</span>
            {goal}
          </p>
        </div>
      </header>

      <div className="case-flow__section">
        <p className="case-flow__label">{labels.steps}</p>
        <ol className="case-flow__steps">
          {steps.map((step, index) => (
            <li
              key={step}
              className="case-flow__step case-reveal__item"
              style={{ '--item-index': index } as CSSProperties}
            >
              <span className="case-flow__pill">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="case-flow__section">
        <p className="case-flow__label">{labels.screens}</p>
        <ol className="case-flow__screens">
          {screens.map((screen, index) => (
            <li
              key={screen.title}
              className="case-flow__screen case-reveal__item"
              style={{ '--item-index': index } as CSSProperties}
            >
              <p className="case-flow__screen-title">{screen.title}</p>
              <p className="case-flow__screen-description">
                {screen.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {notes && (
        <ul className="case-flow__notes">
          {notes.map(note => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
