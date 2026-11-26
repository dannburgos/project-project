import { QuboAccordion } from '@/components/molecules/qubo-accordion';
import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboCards } from '@/components/molecules/qubo-cards';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboChips } from '@/components/molecules/qubo-chips';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboSteps } from '@/components/molecules/qubo-steps';
import { QuboTable } from '@/components/molecules/qubo-table';
import type { QuboStrategy as QuboStrategyContent } from '@/content/qubo-story.types';

type QuboStrategyProps = {
  id: string;
  strategy: QuboStrategyContent;
};

// 05 · Estrategia y principios. La propuesta de valor, la North Star, las
// reglas del MVP, los riesgos como acordeón (referencia: el FAQ de Armor), el
// ciclo del negocio y los cuatro principios numerados.
export function QuboStrategy({ id, strategy }: QuboStrategyProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="dark">
      <QuboHead head={strategy.head} titleId={titleId} />

      <figure className="qb-manifesto" data-qb-reveal>
        <figcaption className="qb-manifesto__label">
          {strategy.valueLabel}
        </figcaption>
        <blockquote className="qb-manifesto__text">{strategy.value}</blockquote>
      </figure>

      <QuboBlock title={strategy.whyLabel}>
        <QuboCards items={strategy.why} className="qb-cards--three" />
      </QuboBlock>

      <QuboBlock title={strategy.earnLabel}>
        <QuboCards items={strategy.earn} className="qb-cards--three" />
      </QuboBlock>

      <aside className="qb-callout qb-callout--accent" data-qb-reveal>
        <p className="qb-callout__label">{strategy.northStarLabel}</p>
        <p className="qb-callout__text">{strategy.northStar}</p>
      </aside>

      <QuboBlock title={strategy.rulesLabel} lead={strategy.rulesNote}>
        <QuboTable table={strategy.rules} label={strategy.rulesLabel} />
      </QuboBlock>

      <QuboBlock title={strategy.risksLabel}>
        <QuboAccordion items={strategy.risks} />
      </QuboBlock>

      <aside className="qb-alert" data-qb-reveal>
        <p className="qb-alert__label">{strategy.tensionLabel}</p>
        <p className="qb-alert__text">{strategy.tension}</p>
      </aside>

      <QuboBlock title={strategy.outLabel}>
        <QuboChips items={strategy.out} />
      </QuboBlock>

      <QuboBlock title={strategy.cycleLabel}>
        <QuboSteps steps={strategy.cycle} isLoop />
      </QuboBlock>

      <div className="qb-subhead">
        <QuboHead head={strategy.principlesHead} titleId={`${id}-principles`} />
      </div>
      <ol className="qb-principles">
        {strategy.principles.map(principle => (
          <li key={principle.number} className="qb-principle" data-qb-reveal>
            <span className="qb-principle__number" aria-hidden="true">
              {principle.number}
            </span>
            <h4 className="qb-principle__title">{principle.title}</h4>
            <p className="qb-principle__meaning">{principle.meaning}</p>
            <dl className="qb-principle__details">
              <div>
                <dt>{strategy.principleLabels.discards}</dt>
                <dd>{principle.discards}</dd>
              </div>
              <div>
                <dt>{strategy.principleLabels.where}</dt>
                <dd>{principle.where}</dd>
              </div>
              <div>
                <dt>{strategy.principleLabels.from}</dt>
                <dd>{principle.from}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </QuboChapter>
  );
}
