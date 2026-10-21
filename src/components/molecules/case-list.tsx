import type { CSSProperties } from 'react';

import type { CaseListItem } from '@/content/case-study.types';

type CaseListProps = {
  title: string;
  items: readonly CaseListItem[];
};

// Lista con título: cada elemento entra en cadena
export function CaseList({ title, items }: CaseListProps) {
  return (
    <div className="case-list">
      <h3 className="case-block__title">{title}</h3>
      <ul className="case-list__items">
        {items.map((item, index) => (
          <li
            key={item.title}
            className="case-list__item case-reveal__item"
            style={{ '--item-index': index } as CSSProperties}
          >
            <p className="case-list__title">{item.title}</p>
            {item.text && <p className="case-list__text">{item.text}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
