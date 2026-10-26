import type { CSSProperties } from 'react';

import type { CaseNavigationSection } from '@/content/case-study.types';

type CaseNavigationMapProps = {
  title: string;
  sections: readonly CaseNavigationSection[];
};

// Mapa de navegación: la barra de pestañas del producto y, debajo de cada
// pestaña, lo que contiene
export function CaseNavigationMap({ title, sections }: CaseNavigationMapProps) {
  return (
    <div className="case-navigation">
      <h3 className="case-block__title">{title}</h3>
      <ol
        className="case-navigation__sections"
        style={{ '--section-count': sections.length } as CSSProperties}
      >
        {sections.map((section, index) => (
          <li
            key={section.name}
            className="case-navigation__section case-reveal__item"
            style={{ '--item-index': index } as CSSProperties}
          >
            <p className="case-navigation__tab">{section.name}</p>
            <p className="case-navigation__description">
              {section.description}
            </p>
            {section.children.length > 0 && (
              <ul className="case-navigation__children">
                {section.children.map(child => (
                  <li key={child} className="case-navigation__child">
                    {child}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
