import { ToyotaFillText } from '@/components/atoms/toyota-fill-text';
import { ToyotaCells } from '@/components/molecules/toyota-cells';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaChips } from '@/components/molecules/toyota-chips';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
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

// 02 · Discovery: benchmark, problema con su pregunta guía, usuario y el
// trabajo central
export function ToyotaDiscovery({
  index,
  label,
  discovery,
  labels
}: ToyotaDiscoveryProps) {
  const { benchmark, problem, user, hmw, jobs } = discovery;

  return (
    <ToyotaChapter index={index} world="light" label={label}>
      <ToyotaOpener opener={discovery.opener} />

      {/* Benchmark: tres referentes contados en una pista horizontal */}
      <div className="ty-module ty-module--bleed">
        <div className="ty-module__inner">
          <ToyotaHead head={benchmark.head} size="large" />
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

      {/* Problema: la brecha de interpretación, en rojo, y la pregunta guía
          que se enciende con el scroll */}
      <div className="ty-module">
        <ToyotaHead head={problem.head} />
        <ToyotaSteps steps={problem.model} className="ty-steps--large" />
        <div className="ty-manifesto">
          <p className="ty-manifesto__eyebrow" data-ty-rise>
            {hmw.eyebrow}
          </p>
          <ToyotaFillText text={hmw.question} className="ty-manifesto__text" />
        </div>
      </div>

      {/* Usuario: para quién, con la necesidad de cada segmento, y sus puntos
          de dolor (la descripción completa va en la tabla de Estrategia) */}
      <div className="ty-module">
        <ToyotaHead head={user.head} size="large" />
        <ToyotaCells items={user.segments} columns={4} />
        <ToyotaChips items={user.pains} label={user.painsLabel} />
      </div>

      {/* Jobs to Be Done: el Job Statement */}
      <div className="ty-module">
        <ToyotaHead head={jobs.head} size="large" />
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
