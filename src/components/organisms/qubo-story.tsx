import { Manrope as manropeFont } from 'next/font/google';

import { QuboMotion } from '@/components/atoms/qubo-motion';
import { QuboIndex } from '@/components/molecules/qubo-index';
import { QuboCover } from '@/components/organisms/qubo-cover';
import { QuboDecisions } from '@/components/organisms/qubo-decisions';
import { QuboDesign } from '@/components/organisms/qubo-design';
import { QuboFlows } from '@/components/organisms/qubo-flows';
import { QuboLearnings } from '@/components/organisms/qubo-learnings';
import { QuboOpportunity } from '@/components/organisms/qubo-opportunity';
import { QuboProblem } from '@/components/organisms/qubo-problem';
import { QuboResearch } from '@/components/organisms/qubo-research';
import { QuboStrategy } from '@/components/organisms/qubo-strategy';
import { QuboSystem } from '@/components/organisms/qubo-system';
import { QuboUser } from '@/components/organisms/qubo-user';
import { QuboValidation } from '@/components/organisms/qubo-validation';
import type { QuboStory as QuboStoryContent } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

// Manrope es la tipografía de Qubo (de Light a ExtraBold)
const manrope = manropeFont({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-qubo',
  display: 'swap'
});

type QuboStoryProps = {
  story: QuboStoryContent;
};

// Caso Pulso by Qubo Bank. Servidor por defecto: solo el índice, las cifras
// que cuentan, los puntos de las pantallas y el revelado al scroll son
// cliente. Marca de Qubo: azul oscuro, azul, azul claro, azul noche y lima.
export function QuboStory({ story }: QuboStoryProps) {
  const id = (index: number) => story.sections[index].id;

  return (
    <div className={cn('qb-story', manrope.variable)}>
      <QuboIndex sections={story.sections} labels={story.labels} />

      <QuboCover cover={story.cover} />
      <QuboOpportunity id={id(0)} opportunity={story.opportunity} />
      <QuboProblem id={id(1)} problem={story.problem} />
      <QuboResearch
        id={id(2)}
        research={story.research}
        labels={story.labels}
      />
      <QuboUser id={id(3)} user={story.user} />
      <QuboStrategy id={id(4)} strategy={story.strategy} />
      <QuboDecisions id={id(5)} decisions={story.decisions} />
      <QuboFlows id={id(6)} flows={story.flows} />
      <QuboDesign id={id(7)} design={story.design} />
      <QuboSystem id={id(8)} system={story.system} />
      <QuboValidation
        id={id(9)}
        validation={story.validation}
        labels={story.labels}
      />
      <QuboLearnings
        id={`${id(9)}-close`}
        learnings={story.learnings}
        labels={story.labels}
      />

      <QuboMotion />
    </div>
  );
}
