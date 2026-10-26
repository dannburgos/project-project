'use client';

import type { CSSProperties } from 'react';

import type { CaseCard } from '@/content/case-study.types';
import { siteContent } from '@/content/site';
import { useScrollLockSequence } from '@/hooks/use-scroll-lock-sequence';

type CaseSequenceProps = {
  title: string;
  items: readonly CaseCard[];
};

// Recorrido: cuando el módulo está completo en pantalla, toma el scroll (la
// página se queda quieta) y las tarjetas se encienden una a una mientras una
// línea las va uniendo. Al completarse suelta la página y aparece lo que
// sigue. En celular van apiladas y encendidas.
export function CaseSequence({ title, items }: CaseSequenceProps) {
  const ref = useScrollLockSequence<HTMLDivElement>();
  const { hint } = siteContent.caseStudy.labels.sequence;

  return (
    <div
      ref={ref}
      className="case-sequence"
      style={{ '--sequence-count': items.length } as CSSProperties}
    >
      <div className="case-sequence__header">
        <h3 className="case-block__title">{title}</h3>
        <p className="case-sequence__hint" aria-hidden="true">
          {hint}
        </p>
      </div>
      <div className="case-sequence__track" aria-hidden="true">
        <span className="case-sequence__fill" />
      </div>
      <ol className="case-sequence__items">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="case-sequence__item"
            style={{ '--item-index': index } as CSSProperties}
          >
            {item.eyebrow && (
              <span className="case-sequence__eyebrow">{item.eyebrow}</span>
            )}
            <p className="case-sequence__title">{item.title}</p>
            {item.text && <p className="case-sequence__text">{item.text}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
