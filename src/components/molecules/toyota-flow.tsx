import type { CSSProperties } from 'react';

import type { ToyotaProduct } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaFlowProps = {
  flow: ToyotaProduct['flow'];
};

// Flujo de usuario como diagrama. En computador, una retícula de una columna
// por paso: el camino principal arriba (su línea se dibuja con el scroll),
// debajo el ciclo que vuelve atrás y las salidas hacia Toyota, y abajo el
// resultado abierto en sus variantes. En celular todo va en una columna.
export function ToyotaFlow({ flow }: ToyotaFlowProps) {
  const { steps, loop, exits, results } = flow;
  const resultAt = Math.max(
    0,
    steps.findIndex(step => step.isHighlight)
  );
  const layout = {
    '--flow-columns': steps.length,
    '--loop-start': loop.to + 1,
    '--loop-span': loop.from - loop.to + 1,
    '--result-col': resultAt + 1
  } as CSSProperties;

  return (
    <figure className="ty-flow" style={layout} data-ty-group>
      <div className="ty-flow__grid">
        <div className="ty-flow__track">
          <span className="ty-flow__line" aria-hidden="true" data-ty-line />
          <ol className="ty-flow__path">
            {steps.map((step, index) => (
              <li
                key={step.label}
                className={cn(
                  'ty-flow__step',
                  step.isHighlight && 'ty-flow__step--highlight'
                )}
                data-ty-item
              >
                <span className="ty-flow__node" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="ty-flow__label">{step.label}</span>
                {step.text && (
                  <span className="ty-flow__note">{step.text}</span>
                )}
              </li>
            ))}
          </ol>
        </div>

        {/* Ciclo: de «Tu perfil» se vuelve a «Asesoría» */}
        <div className="ty-flow__loop" data-ty-item>
          <span className="ty-flow__loop-arc" aria-hidden="true" />
          <p className="ty-flow__loop-text">
            <b>{loop.label}</b> {loop.text}
          </p>
        </div>

        {/* Del resultado baja el hilo hacia sus variantes */}
        <span className="ty-flow__stem" aria-hidden="true" />

        {/* Salidas: lo que ya existe en Toyota */}
        <div className="ty-flow__exits">
          <p className="ty-flow__exits-label">{flow.exitsLabel}</p>
          <ul className="ty-flow__exits-list">
            {exits.map(exit => (
              <li key={exit} className="ty-flow__exit" data-ty-item>
                {exit}
              </li>
            ))}
          </ul>
        </div>

        <div className="ty-flow__results">
          <p className="ty-flow__results-label">{flow.resultsLabel}</p>
          <ol className="ty-flow__variants">
            {results.map((item, index) => (
              <li key={item.name} className="ty-flow__variant" data-ty-item>
                <span className="ty-flow__variant-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="ty-flow__variant-name">{item.name}</p>
                <p className="ty-flow__variant-title">{item.title}</p>
                <p className="ty-flow__variant-example">
                  <b>{flow.exampleLabel}:</b> {item.example}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </figure>
  );
}
