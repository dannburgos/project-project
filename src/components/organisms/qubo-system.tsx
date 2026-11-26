import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboDsComponents } from '@/components/organisms/qubo-ds-components';
import { QuboDsFoundations } from '@/components/organisms/qubo-ds-foundations';
import type { QuboSystem as QuboSystemContent } from '@/content/qubo-story.types';

type QuboSystemProps = {
  id: string;
  system: QuboSystemContent;
};

// 07 · Sistema de diseño de la app en modo oscuro. Mismas categorías que el de
// PetRide, en dos bloques: fundamentos y componentes.
export function QuboSystem({ id, system }: QuboSystemProps) {
  const titleId = `${id}-title`;
  const blocks = [
    {
      title: system.foundations.title,
      content: <QuboDsFoundations foundations={system.foundations} />
    },
    {
      title: system.components.title,
      content: <QuboDsComponents components={system.components} />
    }
  ];

  return (
    <QuboChapter id={id} titleId={titleId} tone="tint">
      <QuboHead head={system.head} titleId={titleId} />

      {blocks.map((block, index) => (
        <section
          key={block.title}
          className="qb-ds-block"
          aria-label={block.title}
        >
          <h3 className="qb-ds-block__title" data-qb-reveal>
            <span className="qb-ds-block__index">
              {String(index + 1).padStart(2, '0')}
            </span>
            {block.title}
          </h3>
          {block.content}
        </section>
      ))}
    </QuboChapter>
  );
}
