import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboFacts } from '@/components/molecules/qubo-facts';
import { QuboHead } from '@/components/molecules/qubo-head';
import type { QuboDecisions as QuboDecisionsContent } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboDecisionsProps = {
  id: string;
  decisions: QuboDecisionsContent;
};

// 06 · Decisiones clave. Un bloque por decisión (formato de Made You Look):
// a la izquierda la etiqueta y el título; a la derecha las opciones, con las
// descartadas atenuadas y la elegida resaltada, y el porqué.
export function QuboDecisions({ id, decisions }: QuboDecisionsProps) {
  const titleId = `${id}-title`;
  const { labels } = decisions;

  return (
    <QuboChapter id={id} titleId={titleId} tone="light">
      <QuboHead head={decisions.head} titleId={titleId} />

      <div className="qb-decisions">
        {decisions.decisions.map(decision => (
          <article key={decision.number} className="qb-decision" data-qb-reveal>
            <header className="qb-decision__head">
              <p className="qb-decision__tag">{decision.tag}</p>
              <h3 className="qb-decision__title">{decision.title}</h3>
            </header>

            <div className="qb-decision__body">
              <p className="qb-decision__label">{labels.options}</p>
              <ul className="qb-options">
                {decision.options.map(option => (
                  <li
                    key={option.label}
                    className={cn(
                      'qb-option',
                      option.isChosen && 'qb-option--chosen'
                    )}
                  >
                    <span className="qb-option__letter">{option.label}</span>
                    <span className="qb-option__text">{option.text}</span>
                    {option.isChosen && (
                      <span className="qb-option__chosen">{labels.chosen}</span>
                    )}
                  </li>
                ))}
              </ul>

              <dl className="qb-decision__details">
                <div>
                  <dt>{labels.why}</dt>
                  <dd>{decision.why}</dd>
                </div>
                <div>
                  <dt>{labels.assume}</dt>
                  <dd>{decision.assume}</dd>
                </div>
                <div>
                  <dt>{labels.validate}</dt>
                  <dd>{decision.validate}</dd>
                </div>
              </dl>

              {decision.extras && (
                <QuboFacts
                  facts={decision.extras}
                  className="qb-facts--compact"
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </QuboChapter>
  );
}
