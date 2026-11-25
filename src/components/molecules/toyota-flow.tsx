import type { CSSProperties } from 'react';

import type { ToyotaProduct } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaFlowProps = {
  flow: ToyotaProduct['flow'];
};

// Flujo de usuario como diagrama. En computador, una retícula de una columna
// por paso: arriba la banda con las seis etapas del concepto, luego el camino
// principal (su línea se dibuja con el scroll) y, debajo, las salidas hacia
// Toyota. En celular todo va en una columna.
export function ToyotaFlow({ flow }: ToyotaFlowProps) {
  const { steps, exits } = flow;
  const layout = { '--flow-columns': steps.length } as CSSProperties;

  return (
    <figure className="ty-flow" style={layout} data-ty-group>
      <div className="ty-flow__grid">
        {/* Las seis etapas del concepto, sobre los pasos que abarca cada una */}
        <ol className="ty-flow__stages">
          {flow.stages.map(stage => (
            <li
              key={stage.label}
              className={cn(
                'ty-flow__stage',
                stage.isHighlight && 'ty-flow__stage--highlight'
              )}
              style={{ '--stage-span': stage.span } as CSSProperties}
              data-ty-item
            >
              {stage.label}
            </li>
          ))}
        </ol>
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
                // Columna propia: así los pasos se montan sobre la línea, que
                // ocupa toda la fila en la retícula del computador
                style={{ gridColumn: index + 1 } as CSSProperties}
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
      </div>
    </figure>
  );
}
