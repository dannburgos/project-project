import type { CSSProperties } from 'react';

import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import type {
  QuboFlowBranch,
  QuboFlowStep,
  QuboUserFlow as QuboUserFlowContent
} from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboUserFlowProps = {
  id: string;
  userFlow: QuboUserFlowContent;
};

type FlowPillProps = {
  step: QuboFlowStep;
  isBranch?: boolean;
};

// Un paso en forma de píldora. El inicio va en lima; la pantalla donde se ve
// va debajo del nombre.
function FlowPill({ step, isBranch }: FlowPillProps) {
  return (
    <div
      className={cn(
        'qb-pill',
        step.isStart && 'qb-pill--start',
        isBranch && 'qb-pill--branch'
      )}
    >
      <span className="qb-pill__label">{step.label}</span>
      {step.screens && <span className="qb-pill__screens">{step.screens}</span>}
    </div>
  );
}

type FlowBranchProps = {
  branch: QuboFlowBranch;
};

// Camino alterno bajo un paso: píldoras unidas con flechas punteadas. Si
// vuelve a un paso anterior, el regreso se dibuja con una línea punteada; si
// no, termina en una píldora «↩ a dónde va».
function FlowBranch({ branch }: FlowBranchProps) {
  const loopStyle = branch.loopBack
    ? ({ '--back': branch.loopBack } as CSSProperties)
    : undefined;

  return (
    <div
      className={cn(
        'qb-uflow__branch',
        branch.loopBack && 'qb-uflow__branch--loops'
      )}
      style={loopStyle}
    >
      {branch.steps.map(step => (
        <div key={step.label} className="qb-uflow__drop-item">
          <span className="qb-uflow__drop" aria-hidden="true" />
          <FlowPill step={step} isBranch />
          {step.note && <p className="qb-uflow__note">{step.note}</p>}
        </div>
      ))}
      {branch.goes && (
        <div className="qb-uflow__drop-item qb-uflow__drop-item--goes">
          <span className="qb-uflow__drop" aria-hidden="true" />
          <p className="qb-uflow__goes">
            <span aria-hidden="true">↩</span> {branch.goes}
          </p>
        </div>
      )}
      {branch.loopBack && (
        <span className="qb-uflow__loop" aria-hidden="true" />
      )}
    </div>
  );
}

// 07 · User flow. El recorrido de Marta en filas de píldoras unidas con
// flechas; los errores y rechazos cuelgan debajo con líneas punteadas.
export function QuboUserFlow({ id, userFlow }: QuboUserFlowProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="light">
      <QuboHead head={userFlow.head} titleId={titleId} />

      <div className="qb-uflow">
        {userFlow.stages.map(stage => (
          <section key={stage.name} className="qb-uflow__stage" data-qb-reveal>
            <header className="qb-uflow__head">
              <h3 className="qb-uflow__name">{stage.name}</h3>
              <p className="qb-uflow__tagline">{stage.tagline}</p>
            </header>

            <ol
              className="qb-uflow__row"
              style={{ '--cols': stage.steps.length } as CSSProperties}
            >
              {stage.steps.map((step, index) => (
                <li key={step.label} className="qb-uflow__cell">
                  <FlowPill step={step} />
                  {step.note && <p className="qb-uflow__note">{step.note}</p>}
                  {step.branch && <FlowBranch branch={step.branch} />}
                  {index < stage.steps.length - 1 && (
                    <span className="qb-uflow__link" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </QuboChapter>
  );
}
