import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import { ToyotaStack } from '@/components/molecules/toyota-stack';
import { ToyotaJourney } from '@/components/molecules/toyota-journey';
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
        <ToyotaJourney label={context.journeyLabel} steps={context.journey} />
      </div>

      {/* Del problema a la oportunidad: dos recuadros juntos y centrados, cuyo
          contorno se dibuja con el scroll */}
      <div className="ty-module">
        <div className="ty-pair" data-ty-group>
          {[
            { eyebrow: problem.problemEyebrow, text: problem.problem },
            { eyebrow: problem.opportunityEyebrow, text: problem.opportunity }
          ].map(box => (
            <div key={box.eyebrow} className="ty-pair__box">
              <svg className="ty-pair__frame" aria-hidden="true" data-ty-line>
                <rect pathLength="1" />
              </svg>
              <h3 className="ty-text-block__eyebrow" data-ty-rise>
                {box.eyebrow}
              </h3>
              <p className="ty-body ty-body--large" data-ty-rise>
                {box.text}
              </p>
            </div>
          ))}
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
