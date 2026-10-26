import type { CSSProperties } from 'react';

import type { CaseBenchmarkApp } from '@/content/case-study.types';

type CaseBenchmarkProps = {
  apps: readonly CaseBenchmarkApp[];
};

// Benchmark (decisión de Dann): una fila de tarjetas, una por app, con su
// nombre y sus palabras clave. Todo a la vista, sin interacción; solo entran
// una tras otra al llegar.
export function CaseBenchmark({ apps }: CaseBenchmarkProps) {
  return (
    <ol className="case-benchmark">
      {apps.map((app, index) => (
        <li
          key={app.name}
          className="case-benchmark__card case-reveal__item"
          style={{ '--item-index': index } as CSSProperties}
        >
          <p className="case-benchmark__name">{app.name}</p>
          <ul className="case-benchmark__keywords">
            {app.keywords.map(keyword => (
              <li key={keyword} className="case-benchmark__keyword">
                {keyword}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
