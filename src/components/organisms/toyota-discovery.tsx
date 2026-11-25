import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import { ToyotaPersona } from '@/components/molecules/toyota-persona';
import { ToyotaSteps } from '@/components/molecules/toyota-steps';
import { ToyotaBenchmarkTrack } from '@/components/organisms/toyota-benchmark-track';
import type { ToyotaDiscovery as ToyotaDiscoveryContent } from '@/content/toyota-story.types';

type ToyotaDiscoveryProps = {
  index: number;
  label: string;
  discovery: ToyotaDiscoveryContent;
};

// 02 · Discovery: benchmark, problema y la persona usuaria con su trabajo
// por hacer
export function ToyotaDiscovery({
  index,
  label,
  discovery
}: ToyotaDiscoveryProps) {
  const { benchmark, problem, user } = discovery;

  return (
    <ToyotaChapter index={index} world="light" label={label}>
      <ToyotaOpener opener={discovery.opener} />

      {/* Benchmark: tres referentes contados en una pista horizontal */}
      <div className="ty-module ty-module--bleed">
        <ToyotaBenchmarkTrack
          header={<ToyotaHead head={benchmark.head} size="large" />}
          references={benchmark.references}
          strengthLabel={benchmark.strengthLabel}
          opportunityLabel={benchmark.opportunityLabel}
        />
      </div>

      {/* Problema: la brecha de interpretación, en rojo */}
      <div className="ty-module ty-module--roomy">
        <ToyotaHead head={problem.head} />
        <ToyotaSteps steps={problem.model} className="ty-steps--large" />
      </div>

      {/* Usuario: la persona en un solo bloque, con su foto, sus segmentos,
          sus puntos de dolor y el trabajo que quiere lograr */}
      <div className="ty-module ty-module--spacious">
        <ToyotaHead head={user.head} size="large" />
        <ToyotaPersona user={user} />
      </div>
    </ToyotaChapter>
  );
}
