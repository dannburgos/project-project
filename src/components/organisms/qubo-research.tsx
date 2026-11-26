import { QuboPending } from '@/components/atoms/qubo-pending';
import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboChips } from '@/components/molecules/qubo-chips';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboNumbered } from '@/components/molecules/qubo-numbered';
import { QuboTable } from '@/components/molecules/qubo-table';
import type {
  QuboLabels,
  QuboResearch as QuboResearchContent
} from '@/content/qubo-story.types';

type QuboResearchProps = {
  id: string;
  research: QuboResearchContent;
  labels: QuboLabels;
};

// 03 · Research. La comparación con los tres productos del benchmark, el
// espacio libre numerado (como las funciones de Armor), las hipótesis y los
// métodos. Los hallazgos quedan «en curso» hasta hacer las entrevistas.
export function QuboResearch({ id, research, labels }: QuboResearchProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="light">
      <QuboHead head={research.head} titleId={titleId} />

      <QuboBlock title={research.comparisonLabel}>
        <QuboTable
          table={research.comparison}
          label={research.comparisonLabel}
        />
      </QuboBlock>

      <div className="qb-gap">
        <QuboNumbered items={research.gap} />
        <p className="qb-note">{research.otherReferences}</p>
      </div>

      <QuboBlock title={research.hypothesesLabel}>
        <ul className="qb-hypotheses">
          {research.hypotheses.map(hypothesis => (
            <li key={hypothesis.number} className="qb-hypothesis">
              <header className="qb-hypothesis__head">
                <span className="qb-hypothesis__number">
                  {hypothesis.number}
                </span>
                <span className="qb-badge">{hypothesis.status}</span>
              </header>
              <h4 className="qb-hypothesis__title">{hypothesis.title}</h4>
              <dl className="qb-hypothesis__details">
                <div>
                  <dt>{research.hypothesisLabels.signal}</dt>
                  <dd>{hypothesis.signal}</dd>
                </div>
                <div>
                  <dt>{research.hypothesisLabels.evidence}</dt>
                  <dd>{hypothesis.evidence}</dd>
                </div>
                <div>
                  <dt>{research.hypothesisLabels.decision}</dt>
                  <dd>{hypothesis.decision}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </QuboBlock>

      <QuboBlock title={research.methodsLabel}>
        <QuboTable table={research.methods} label={research.methodsLabel} />
      </QuboBlock>

      <QuboBlock title={research.questionsLabel}>
        <ol className="qb-questions">
          {research.questions.map(question => (
            <li key={question} className="qb-questions__item">
              {question}
            </li>
          ))}
        </ol>
      </QuboBlock>

      <QuboBlock title={research.findingsLabel}>
        <div className="qb-placeholder">
          <QuboPending label={labels.pending} note={labels.pendingNote} />
          <QuboChips items={research.findingsFormat} />
        </div>
      </QuboBlock>
    </QuboChapter>
  );
}
