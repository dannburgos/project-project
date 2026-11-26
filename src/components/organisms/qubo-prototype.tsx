import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboHotspots } from '@/components/molecules/qubo-hotspots';
import type { QuboPrototype as QuboPrototypeContent } from '@/content/qubo-story.types';

type QuboPrototypeProps = {
  id: string;
  prototype: QuboPrototypeContent;
};

// 09 · Prototipo. Las dos pantallas héroe, cada una con puntos que explican
// qué resuelve cada parte (referencia: los puntos sobre la foto de Armor). Se
// llena con las pantallas reales cuando existan.
export function QuboPrototype({ id, prototype }: QuboPrototypeProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="dark">
      <QuboHead head={prototype.head} titleId={titleId} />

      <div className="qb-heroes">
        {prototype.heroes.map(hero => (
          <QuboHotspots
            key={hero.number}
            hero={hero}
            hint={prototype.hotspotHint}
          />
        ))}
      </div>
    </QuboChapter>
  );
}
