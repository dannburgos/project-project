import { UserRound } from 'lucide-react';
import type { CSSProperties } from 'react';

import { siteContent } from '@/content/site';

type CasePersonaProps = {
  badge: string;
  name: string;
  facts: readonly string[];
  quote: string;
  goal: string;
  frustration: string;
  needs: readonly string[];
  photoLabel: string;
};

const order = (index: number) => ({ '--item-index': index }) as CSSProperties;

// Tarjeta de una persona simulada: se arma por partes al llegar a ella (foto,
// datos, frase y rasgos). La etiqueta deja claro que no es una persona real.
export function CasePersona({
  badge,
  name,
  facts,
  quote,
  goal,
  frustration,
  needs,
  photoLabel
}: CasePersonaProps) {
  const labels = siteContent.caseStudy.labels.persona;

  return (
    <article className="case-persona">
      <p className="case-persona__badge case-reveal__item" style={order(0)}>
        {badge}
      </p>

      <div className="case-persona__head">
        <div className="case-persona__photo case-reveal__item" style={order(1)}>
          <UserRound aria-hidden="true" />
          <span>{photoLabel}</span>
        </div>
        <div
          className="case-persona__identity case-reveal__item"
          style={order(2)}
        >
          <h3 className="case-persona__name">{name}</h3>
          <ul className="case-persona__facts">
            {facts.map(fact => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>

      <blockquote
        className="case-persona__quote case-reveal__item"
        style={order(3)}
      >
        <p>{quote}</p>
      </blockquote>

      <dl className="case-persona__traits">
        <div className="case-persona__trait case-reveal__item" style={order(4)}>
          <dt>{labels.goal}</dt>
          <dd>{goal}</dd>
        </div>
        <div className="case-persona__trait case-reveal__item" style={order(5)}>
          <dt>{labels.frustration}</dt>
          <dd>{frustration}</dd>
        </div>
        <div className="case-persona__trait case-reveal__item" style={order(6)}>
          <dt>{labels.needs}</dt>
          <dd>
            <ul className="case-persona__needs">
              {needs.map(need => (
                <li key={need}>{need}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </article>
  );
}
