import { QuboVisual } from '@/components/atoms/qubo-visual';
import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboChips } from '@/components/molecules/qubo-chips';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboSteps } from '@/components/molecules/qubo-steps';
import { QuboTable } from '@/components/molecules/qubo-table';
import type { QuboFlows as QuboFlowsContent } from '@/content/qubo-story.types';

type QuboFlowsProps = {
  id: string;
  flows: QuboFlowsContent;
};

// 07 · Flujos y arquitectura. Los dos momentos del ciclo, con su bifurcación
// en el día malo, los casos borde y la arquitectura de la app.
export function QuboFlows({ id, flows }: QuboFlowsProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="tint">
      <QuboHead head={flows.head} titleId={titleId} />

      <div className="qb-moments">
        {flows.moments.map(moment => (
          <article key={moment.number} className="qb-moment" data-qb-reveal>
            <header className="qb-moment__head">
              <span className="qb-moment__number" aria-hidden="true">
                {moment.number}
              </span>
              <h3 className="qb-moment__name">{moment.name}</h3>
              <p className="qb-moment__tagline">{moment.tagline}</p>
            </header>
            <QuboSteps steps={moment.steps} />
            {moment.branches && (
              <div className="qb-moment__branches">
                {moment.branches.map(branch => (
                  <div key={branch.condition} className="qb-branch">
                    <p className="qb-branch__condition">{branch.condition}</p>
                    <QuboSteps steps={branch.steps} />
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <QuboVisual visual={flows.visual} className="qb-wide-visual" />

      <QuboBlock title={flows.edgeLabel}>
        <QuboTable table={flows.edge} label={flows.edgeLabel} />
      </QuboBlock>

      <QuboBlock title={flows.architectureLabel} lead={flows.architectureLead}>
        <QuboTable table={flows.tabs} label={flows.architectureLabel} />
        <p className="qb-copy">{flows.architectureWhy}</p>
      </QuboBlock>

      <QuboBlock title={flows.internalLabel}>
        <QuboChips items={flows.internal} />
      </QuboBlock>
    </QuboChapter>
  );
}
