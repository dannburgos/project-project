import { QuboPending } from '@/components/atoms/qubo-pending';
import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboChips } from '@/components/molecules/qubo-chips';
import { QuboFacts } from '@/components/molecules/qubo-facts';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboTable } from '@/components/molecules/qubo-table';
import type {
  QuboLabels,
  QuboValidation as QuboValidationContent
} from '@/content/qubo-story.types';

type QuboValidationProps = {
  id: string;
  validation: QuboValidationContent;
  labels: QuboLabels;
};

// 10 · Validación e impacto. El plan de prueba, las reglas de decisión, el
// registro de iteraciones (en curso) y las métricas como hipótesis medibles.
export function QuboValidation({
  id,
  validation,
  labels
}: QuboValidationProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="tint">
      <QuboHead head={validation.head} titleId={titleId} />

      <QuboBlock title={validation.testLabel}>
        <QuboFacts facts={validation.test} />
      </QuboBlock>

      <QuboBlock title={validation.tasksLabel}>
        <QuboTable table={validation.tasks} label={validation.tasksLabel} />
      </QuboBlock>

      <QuboBlock title={validation.rulesLabel}>
        <QuboTable table={validation.rules} label={validation.rulesLabel} />
      </QuboBlock>

      <QuboBlock title={validation.planBLabel}>
        <p className="qb-copy">{validation.planB}</p>
      </QuboBlock>

      <QuboBlock title={validation.iterationsLabel}>
        <QuboPending label={labels.pending} note={labels.pendingNote} />
        <QuboTable
          table={validation.iterations}
          label={validation.iterationsLabel}
        />
        <p className="qb-note">{validation.iterationsHint}</p>
      </QuboBlock>

      <div className="qb-subhead">
        <h3 className="qb-subhead__title" data-qb-reveal>
          {validation.metricsLabel}
        </h3>
      </div>

      <aside className="qb-callout qb-callout--ink" data-qb-reveal>
        <p className="qb-callout__label">{validation.northStarLabel}</p>
        <p className="qb-callout__text">{validation.northStar}</p>
        <p className="qb-callout__note">{validation.northStarWhy}</p>
      </aside>

      <QuboBlock title={validation.stagesLabel}>
        <QuboTable table={validation.stages} label={validation.stagesLabel} />
      </QuboBlock>

      <QuboBlock title={validation.protectionLabel}>
        <QuboTable
          table={validation.protection}
          label={validation.protectionLabel}
        />
      </QuboBlock>

      <QuboBlock title={validation.impactLabel}>
        <div className="qb-columns">
          <div>
            <h4 className="qb-columns__title">{validation.businessLabel}</h4>
            <ul className="qb-list">
              {validation.business.map(item => (
                <li key={item} className="qb-list__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="qb-columns__title">{validation.merchantLabel}</h4>
            <ul className="qb-list">
              {validation.merchant.map(item => (
                <li key={item} className="qb-list__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </QuboBlock>

      <QuboBlock title={validation.eventsLabel}>
        <QuboChips items={validation.events} isCode />
        <p className="qb-note">{validation.measureNote}</p>
      </QuboBlock>
    </QuboChapter>
  );
}
