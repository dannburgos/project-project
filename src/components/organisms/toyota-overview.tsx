import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import { ToyotaStack } from '@/components/molecules/toyota-stack';
import { ToyotaStats } from '@/components/molecules/toyota-stats';
import { ToyotaSteps } from '@/components/molecules/toyota-steps';
import type { ToyotaOverview as ToyotaOverviewContent } from '@/content/toyota-story.types';

type ToyotaOverviewProps = {
  index: number;
  label: string;
  overview: ToyotaOverviewContent;
};

// 01 · Contexto: Toyota en Colombia, el problema y la oportunidad, y la
// solución (los tres pilares, cada uno una capacidad)
export function ToyotaOverview({
  index,
  label,
  overview
}: ToyotaOverviewProps) {
  const { context, description, problem } = overview;

  return (
    <ToyotaChapter index={index} world="light" label={label}>
      <ToyotaOpener opener={overview.opener} />

      {/* La situación: las cifras que cuentan y el recorrido de hoy */}
      <div className="ty-module">
        <ToyotaHead head={context.head} size="large" />
        <ToyotaStats stats={context.stats} />
        <ToyotaSteps
          steps={context.currentSteps}
          label={context.currentLabel}
          tone="muted"
        />
      </div>

      {/* Del problema a la oportunidad */}
      <div className="ty-module">
        <div className="ty-columns">
          <div className="ty-text-block" data-ty-rise>
            <h3 className="ty-text-block__eyebrow">{problem.problemEyebrow}</h3>
            <p className="ty-body ty-body--large">{problem.problem}</p>
          </div>
          <div className="ty-text-block" data-ty-rise>
            <h3 className="ty-text-block__eyebrow">
              {problem.opportunityEyebrow}
            </h3>
            <p className="ty-body ty-body--large">{problem.opportunity}</p>
          </div>
        </div>
      </div>

      {/* La solución: su frase y los tres pilares */}
      <ToyotaStack
        head={description.head}
        word={description.pillarsWord}
        visual={description.pillarsVisual}
        cards={description.pillars}
      />
    </ToyotaChapter>
  );
}
