import localFont from 'next/font/local';

import { QuboMotion } from '@/components/atoms/qubo-motion';
import { QuboIndex } from '@/components/molecules/qubo-index';
import { QuboArchitecture } from '@/components/organisms/qubo-architecture';
import { QuboCover } from '@/components/organisms/qubo-cover';
import { QuboOpportunity } from '@/components/organisms/qubo-opportunity';
import { QuboProblem } from '@/components/organisms/qubo-problem';
import { QuboPrototype } from '@/components/organisms/qubo-prototype';
import { QuboResearch } from '@/components/organisms/qubo-research';
import { QuboStrategy } from '@/components/organisms/qubo-strategy';
import { QuboSystem } from '@/components/organisms/qubo-system';
import { QuboUser } from '@/components/organisms/qubo-user';
import { QuboUserFlow } from '@/components/organisms/qubo-user-flow';
import type { QuboStory as QuboStoryContent } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

// General Sans es la tipografía de Qubo (Regular y Medium, de Fontshare,
// servida desde el proyecto)
const generalSans = localFont({
  src: [
    {
      path: '../../fonts/general-sans/GeneralSans-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../fonts/general-sans/GeneralSans-Medium.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
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
    <div className={cn('qb-story', generalSans.variable)}>
      <QuboIndex sections={story.sections} labels={story.labels} />

      <QuboCover cover={story.cover} />
      <QuboOpportunity id={id(0)} opportunity={story.opportunity} />
      <QuboProblem id={id(1)} problem={story.problem} />
      <QuboResearch id={id(2)} research={story.research} />
      <QuboUser id={id(3)} user={story.user} />
      <QuboStrategy id={id(4)} strategy={story.strategy} />
      <QuboArchitecture id={id(5)} architecture={story.architecture} />
      <QuboUserFlow id={id(6)} userFlow={story.userFlow} />
      <QuboSystem id={id(7)} system={story.system} />
      <QuboPrototype id={id(8)} prototype={story.prototype} />
      <QuboMotion />
    </div>
  );
}
