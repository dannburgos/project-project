import type { CSSProperties } from 'react';

import type { CaseScopeGroup } from '@/content/case-study.types';

type CaseScopeProps = {
  groups: readonly CaseScopeGroup[];
  outTitle: string;
  out: readonly string[];
};

// Alcance de una versión: los bloques que entran, y debajo lo que queda fuera,
// que se tacha y se apaga al aparecer.
export function CaseScope({ groups, outTitle, out }: CaseScopeProps) {
  return (
    <div className="case-scope">
      <ol className="case-scope__groups">
        {groups.map((group, index) => (
          <li
            key={group.title}
            className="case-scope__group case-reveal__item"
            style={{ '--item-index': index } as CSSProperties}
          >
            <span className="case-scope__eyebrow">{group.eyebrow}</span>
            <p className="case-scope__title">{group.title}</p>
            <ul className="case-scope__items">
              {group.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="case-scope__out case-surface">
        <h3 className="case-block__title">{outTitle}</h3>
        <ul className="case-scope__out-list">
          {out.map((item, index) => (
            <li
              key={item}
              className="case-scope__out-item"
              style={{ '--item-index': index } as CSSProperties}
            >
              <span className="case-scope__out-text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
