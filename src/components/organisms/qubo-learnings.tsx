import { QuboPending } from '@/components/atoms/qubo-pending';
import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboChips } from '@/components/molecules/qubo-chips';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboTable } from '@/components/molecules/qubo-table';
import type {
  QuboLabels,
  QuboLearnings as QuboLearningsContent
} from '@/content/qubo-story.types';

type QuboLearningsProps = {
  id: string;
  learnings: QuboLearningsContent;
  labels: QuboLabels;
};

// Cierre del caso. Aprendizajes y «qué haría distinto» (en curso hasta la
// validación), próximos pasos, uso de IA, fuentes con sus limitaciones y la
// frase final.
export function QuboLearnings({ id, learnings, labels }: QuboLearningsProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="dark">
      <QuboHead head={learnings.head} titleId={titleId} />

      <QuboBlock title={learnings.learningsLabel}>
        <div className="qb-placeholder">
          <QuboPending label={labels.pending} note={labels.pendingNote} />
          <QuboChips items={learnings.learningsFormat} />
        </div>
      </QuboBlock>

      <QuboBlock title={learnings.differentLabel}>
        <div className="qb-placeholder">
          <QuboPending label={labels.pending} />
          <p className="qb-copy">{learnings.differentHint}</p>
        </div>
      </QuboBlock>

      <QuboBlock title={learnings.nextLabel} lead={learnings.nextLead}>
        <QuboTable table={learnings.next} label={learnings.nextLabel} />
      </QuboBlock>

      <QuboBlock title={learnings.aiLabel}>
        <QuboTable table={learnings.ai} label={learnings.aiLabel} />
        <aside className="qb-callout qb-callout--accent">
          <p className="qb-callout__label">{learnings.notDelegatedLabel}</p>
          <p className="qb-callout__text">{learnings.notDelegated}</p>
        </aside>
      </QuboBlock>

      <div className="qb-columns">
        <QuboBlock title={learnings.sourcesLabel}>
          <ul className="qb-links">
            {learnings.sources.map(source => (
              <li key={source.url}>
                <a
                  className="qb-links__item"
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ul>
        </QuboBlock>
        <QuboBlock title={learnings.limitationsLabel}>
          <ul className="qb-list">
            {learnings.limitations.map(item => (
              <li key={item} className="qb-list__item">
                {item}
              </li>
            ))}
          </ul>
        </QuboBlock>
      </div>

      <figure className="qb-closing" data-qb-reveal>
        <blockquote className="qb-closing__text">
          {learnings.closing}
        </blockquote>
      </figure>
    </QuboChapter>
  );
}
