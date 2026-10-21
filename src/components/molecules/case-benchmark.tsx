import type { CSSProperties } from 'react';

import type { CaseBenchmarkApp } from '@/content/case-study.types';
import { siteContent } from '@/content/site';

type CaseBenchmarkProps = {
  apps: readonly CaseBenchmarkApp[];
  axesTitle: string;
  axes: readonly string[];
  synthesisTitle: string;
  synthesis: readonly string[];
};

// Benchmark: las apps analizadas con lo que ofrece cada una, los ejes con los
// que se compararon y la síntesis. Es cualitativo: no hay puntajes.
export function CaseBenchmark({
  apps,
  axesTitle,
  axes,
  synthesisTitle,
  synthesis
}: CaseBenchmarkProps) {
  const labels = siteContent.caseStudy.labels.benchmark;

  return (
    <div className="case-benchmark">
      <div className="case-benchmark__section">
        <h3 className="case-block__title">{labels.apps}</h3>
        <ul className="case-benchmark__apps">
          {apps.map((app, index) => (
            <li
              key={app.name}
              className="case-benchmark__app case-reveal__item"
              style={{ '--item-index': index } as CSSProperties}
            >
              <span className="case-benchmark__monogram" aria-hidden="true">
                {app.name.charAt(0)}
              </span>
              <p className="case-benchmark__name">{app.name}</p>
              <ul className="case-benchmark__features">
                {app.features.map(feature => (
                  <li key={feature} className="case-benchmark__feature">
                    {feature}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="case-benchmark__section">
        <h3 className="case-block__title">{axesTitle}</h3>
        <ol className="case-benchmark__axes">
          {axes.map((axis, index) => (
            <li
              key={axis}
              className="case-benchmark__axis case-reveal__item"
              style={{ '--item-index': index } as CSSProperties}
            >
              {axis}
            </li>
          ))}
        </ol>
      </div>

      <div className="case-benchmark__section case-surface case-surface--tint">
        <h3 className="case-block__title">{synthesisTitle}</h3>
        <ul className="case-benchmark__synthesis">
          {synthesis.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
