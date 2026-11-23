import { ToyotaFillText } from '@/components/atoms/toyota-fill-text';
import { ToyotaCells } from '@/components/molecules/toyota-cells';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaChips } from '@/components/molecules/toyota-chips';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import { ToyotaQuote } from '@/components/molecules/toyota-quote';
import { ToyotaStats } from '@/components/molecules/toyota-stats';
import { ToyotaSteps } from '@/components/molecules/toyota-steps';
import { ToyotaBenchmarkTrack } from '@/components/organisms/toyota-benchmark-track';
import type {
  ToyotaDiscovery as ToyotaDiscoveryContent,
  ToyotaLabels
} from '@/content/toyota-story.types';

type ToyotaDiscoveryProps = {
  index: number;
  label: string;
  discovery: ToyotaDiscoveryContent;
  labels: ToyotaLabels;
};

// 02 · Discovery: contexto, benchmark, problema, usuario, la pregunta guía y
// el trabajo central
export function ToyotaDiscovery({
  index,
  label,
  discovery,
  labels
}: ToyotaDiscoveryProps) {
  const { context, benchmark, problem, user, hmw, jobs } = discovery;
  // Los dos recorridos comparten columnas para que sus pasos queden alineados
  const compareColumns = Math.max(
    context.currentSteps.length,
    context.proposedSteps.length
  );

  return (
    <ToyotaChapter index={index} world="light" label={label}>
      <ToyotaOpener opener={discovery.opener} />

      {/* Contexto: las cifras que cuentan y el recorrido de hoy frente al
          propuesto */}
      <div className="ty-module">
        <ToyotaHead head={context.head} size="large" />
        <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
          {context.statement}
        </p>
        <ToyotaStats stats={context.stats} />
        <div className="ty-compare">
          <ToyotaSteps
            steps={context.currentSteps}
            label={context.currentLabel}
            tone="muted"
            columns={compareColumns}
          />
          <ToyotaSteps
            steps={context.proposedSteps}
            label={context.proposedLabel}
            columns={compareColumns}
          />
        </div>
        <ToyotaQuote text={context.quote} />
      </div>

      {/* Benchmark: tres referentes contados en una pista horizontal */}
      <div className="ty-module ty-module--bleed">
        <div className="ty-module__inner">
          <ToyotaHead head={benchmark.head} size="large" />
          <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
            {benchmark.statement}
          </p>
          <ToyotaChips
            items={benchmark.criteria}
            label={benchmark.criteriaLabel}
          />
        </div>
        <ToyotaBenchmarkTrack
          references={benchmark.references}
          strengthLabel={benchmark.strengthLabel}
          opportunityLabel={benchmark.opportunityLabel}
          hint={labels.trackHint}
          progressLabel={labels.trackProgress}
        />
      </div>

      {/* Problema: la brecha de interpretación, en rojo */}
      <div className="ty-module">
        <ToyotaHead head={problem.head} />
        <ToyotaSteps steps={problem.model} className="ty-steps--large" />
      </div>

      {/* Usuario: para quién, con la necesidad de cada segmento, y sus
          puntos de dolor */}
      <div className="ty-module">
        <ToyotaHead head={user.head} size="large" />
        <ToyotaCells items={user.segments} columns={4} />
        <h4 className="ty-subtitle">{user.painsLabel}</h4>
        <ToyotaCells items={user.pains} columns={3} badge={labels.hypothesis} />
      </div>

      {/* La pregunta guía, como manifiesto que se enciende con el scroll */}
      <div className="ty-module">
        <div className="ty-manifesto">
          <p className="ty-manifesto__eyebrow" data-ty-rise>
            {hmw.eyebrow}
          </p>
          <ToyotaFillText text={hmw.question} className="ty-manifesto__text" />
        </div>
      </div>

      {/* Jobs to Be Done: el progreso que busca la persona y su Job Statement */}
      <div className="ty-module">
        <ToyotaHead head={jobs.head} size="large" />
        <ToyotaCells items={jobs.progress} columns={3} />
        <figure className="ty-job">
          <figcaption className="ty-job__label">
            {jobs.statementLabel}
          </figcaption>
          <p className="ty-job__text" data-ty-group>
            {jobs.statement.map(part => (
              <span key={part.title} className="ty-job__part" data-ty-item>
                <b className="ty-job__key">{part.title}</b> {part.text}
              </span>
            ))}
          </p>
        </figure>
      </div>
    </ToyotaChapter>
  );
}
