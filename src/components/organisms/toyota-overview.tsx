import { ToyotaFillText } from '@/components/atoms/toyota-fill-text';
import { ToyotaCallout } from '@/components/molecules/toyota-callout';
import { ToyotaCells } from '@/components/molecules/toyota-cells';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import { ToyotaQuote } from '@/components/molecules/toyota-quote';
import { ToyotaStack } from '@/components/molecules/toyota-stack';
import { ToyotaSteps } from '@/components/molecules/toyota-steps';
import type {
  ToyotaLabels,
  ToyotaOverview as ToyotaOverviewContent
} from '@/content/toyota-story.types';

type ToyotaOverviewProps = {
  index: number;
  label: string;
  overview: ToyotaOverviewContent;
  labels: ToyotaLabels;
};

// 01 · Overview: qué es, sus tres pilares y del problema a la oportunidad
export function ToyotaOverview({
  index,
  label,
  overview,
  labels
}: ToyotaOverviewProps) {
  const { description, problem } = overview;

  return (
    <ToyotaChapter index={index} world="light" label={label}>
      <ToyotaOpener opener={overview.opener} />

      {/* Descripción: una frase que se enciende con el scroll */}
      <div className="ty-module ty-module--center">
        <ToyotaHead head={description.head} size="large" align="center" />
        <ToyotaFillText text={description.statement} className="ty-lead-text" />
      </div>

      <ToyotaStack word={description.pillarsWord} cards={description.pillars} />

      {/* Del problema a la oportunidad: la frase que lo resume y las tres
          capacidades de la solución, hacia adelante */}
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
        <ToyotaQuote text={problem.quote} />
        <ToyotaCallout text={problem.note} label={labels.evidence} />
        <ToyotaSteps
          steps={problem.capabilities.map(capability => ({
            label: capability.title
          }))}
          label={problem.solutionLabel}
          className="ty-steps--large"
        />
        <ToyotaCells items={problem.capabilities} columns={3} />
        <p className="ty-statement" data-ty-mask>
          {problem.closing}
        </p>
      </div>
    </ToyotaChapter>
  );
}
