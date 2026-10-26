import { Sprout } from 'lucide-react';
import type { CSSProperties } from 'react';

import { ProfileAvatar } from '@/components/atoms/profile-avatar';
import type { CaseFact, CaseFinding } from '@/content/case-study.types';

type CaseProfileProps = {
  name: string;
  facts: string;
  orbitCount: number;
  orbitLabel: string;
  quote: string;
  traits: readonly CaseFact[];
  findingsTitle: string;
  findings: readonly CaseFinding[];
};

const order = (index: number) => ({ '--item-index': index }) as CSSProperties;

// Perfil de usuario resumido en una grilla (opción A, elegida por Dann): todo
// a la vista desde que se llega. Arriba, la persona y su frase; en el medio,
// sus rasgos; abajo, los hallazgos que salen de sus respuestas. Alrededor del
// avatar giran lentamente sus plantas (opción L3, elegida por Dann). Las casillas
// entran en cascada una sola vez, sin depender del scroll. Al pasar el mouse
// (o enfocar) un hallazgo, se ve de qué preguntas sale.
export function CaseProfile({
  name,
  facts,
  orbitCount,
  orbitLabel,
  quote,
  traits,
  findingsTitle,
  findings
}: CaseProfileProps) {
  return (
    <div className="case-profile">
      <div className="case-profile__top">
        <div
          className="case-profile__person case-reveal__item"
          style={order(0)}
        >
          <div
            className="case-profile__orbit"
            role="img"
            aria-label={orbitLabel}
            style={{ '--orbit-count': orbitCount } as CSSProperties}
          >
            <span className="case-profile__ring" aria-hidden="true" />
            <span className="case-profile__satellites" aria-hidden="true">
              {Array.from({ length: orbitCount }, (_, index) => (
                <span
                  key={index}
                  className="case-profile__satellite"
                  style={{ '--orbit-index': index } as CSSProperties}
                >
                  <span className="case-profile__satellite-icon">
                    <Sprout />
                  </span>
                </span>
              ))}
            </span>
            <span className="case-profile__avatar">
              <ProfileAvatar />
            </span>
          </div>
          <div className="case-profile__identity">
            <h3 className="case-profile__name">{name}</h3>
            <p className="case-profile__facts">{facts}</p>
          </div>
        </div>

        <blockquote
          className="case-profile__quote case-reveal__item"
          style={order(1)}
        >
          <p>{quote}</p>
        </blockquote>
      </div>

      <dl className="case-profile__traits">
        {traits.map((trait, index) => (
          <div
            key={trait.label}
            className="case-profile__trait case-reveal__item"
            style={order(index + 2)}
          >
            <dt className="case-profile__label">{trait.label}</dt>
            <dd className="case-profile__value">{trait.value}</dd>
          </div>
        ))}
      </dl>

      <div className="case-profile__findings-block">
        <h4
          className="case-profile__findings-title case-reveal__item"
          style={order(5)}
        >
          {findingsTitle}
        </h4>
        <ol className="case-profile__findings">
          {findings.map((finding, index) => (
            <li
              key={finding.title}
              tabIndex={0}
              className="case-profile__finding case-reveal__item"
              style={order(index + 6)}
            >
              <span className="case-profile__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="case-profile__finding-title">{finding.title}</p>
              <p className="case-profile__finding-text">{finding.text}</p>
              <p className="case-profile__source">{finding.source}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
