import type { CSSProperties } from 'react';

import type { CaseCard } from '@/content/case-study.types';

type CaseCardsProps = {
  title?: string;
  items: readonly CaseCard[];
};

// Tarjetas cortas en grilla: fricciones, pilares, decisiones, pasos... Entran
// una tras otra.
export function CaseCards({ title, items }: CaseCardsProps) {
  return (
    <div className="case-cards">
      {title && <h3 className="case-block__title">{title}</h3>}
      <ol className="case-cards__grid">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="case-cards__item case-reveal__item"
            style={{ '--item-index': index } as CSSProperties}
          >
            {item.eyebrow && (
              <span className="case-cards__eyebrow">{item.eyebrow}</span>
            )}
            <p className="case-cards__title">{item.title}</p>
            {item.text && <p className="case-cards__text">{item.text}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
