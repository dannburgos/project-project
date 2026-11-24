'use client';

import { Figtree as figtreeFont } from 'next/font/google';

import { ToyotaIndex } from '@/components/molecules/toyota-index';
import { ToyotaCover } from '@/components/organisms/toyota-cover';
import { ToyotaDiscovery } from '@/components/organisms/toyota-discovery';
import { ToyotaOverview } from '@/components/organisms/toyota-overview';
import { ToyotaProduct } from '@/components/organisms/toyota-product';
import { ToyotaStrategy } from '@/components/organisms/toyota-strategy';
import { ToyotaValidation } from '@/components/organisms/toyota-validation';
import type { ToyotaStory as ToyotaStoryContent } from '@/content/toyota-story.types';
import { useToyotaStory } from '@/hooks/use-toyota-story';
import { cn } from '@/lib/utils';

// Toyota Type pide acceso; mientras tanto el caso usa Figtree, igual que el
// prototipo (decisión B.11 del caso). Book, Semibold, Bold y Black.
const figtree = figtreeFont({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-toyota',
  display: 'swap'
});

type ToyotaStoryProps = {
  story: ToyotaStoryContent;
};

// Caso Toyota — Beyond the Model, con scroll libre. Dos mundos: el claro
// (entender a las personas) y el oscuro (el sistema: IA, datos y lógica).
// Referencias: Lightship (scroll y composición), Longbow y S-2K (revelado de
// información y datos) y Later (narración horizontal), con las reglas del
// manual de Toyota. Con «reducir movimiento», todo queda visible y quieto.
export function ToyotaStory({ story }: ToyotaStoryProps) {
  const ref = useToyotaStory<HTMLDivElement>();
  const name = (index: number) =>
    `${story.sections[index].number} · ${story.sections[index].name}`;

  return (
    <div
      ref={ref}
      className={cn('ty-story', figtree.variable)}
      data-case-story
      data-world="dark"
    >
      <ToyotaIndex
        sections={story.sections}
        labels={story.labels}
        car={story.progressCar}
      />

      <ToyotaCover cover={story.cover} />
      <ToyotaOverview index={0} label={name(0)} overview={story.overview} />
      <ToyotaDiscovery index={1} label={name(1)} discovery={story.discovery} />
      <ToyotaStrategy index={2} label={name(2)} strategy={story.strategy} />
      <ToyotaProduct index={3} label={name(3)} product={story.product} />
      <ToyotaValidation
        index={4}
        label={name(4)}
        validation={story.validation}
        labels={story.labels}
      />
    </div>
  );
}
