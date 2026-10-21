import { CaseReveal } from '@/components/atoms/case-reveal';
import { CaseBlock } from '@/components/molecules/case-block';
import type { CaseBlockSpan, CaseChapter } from '@/content/case-study.types';
import { cn } from '@/lib/utils';

type CaseStageProps = {
  chapter: CaseChapter;
};

const spanClass = (span: CaseBlockSpan = 'full') =>
  cn(
    span === 'full' && 'case-stage__cell--full',
    span === 'half' && 'case-stage__cell--half',
    span === 'third' && 'case-stage__cell--third',
    span === 'twoThirds' && 'case-stage__cell--two-thirds'
  );

// Capítulo del caso en la columna derecha: su nombre y sus bloques, que entran
// uno a uno con el scroll. Los bloques se acomodan en una grilla de seis
// columnas según su ancho (todo, mitad, un tercio o dos tercios); en celular
// van uno debajo del otro. En escritorio el título y el resumen se leen en la
// columna izquierda fija; en el celular van aquí, encima de los bloques.
export function CaseStage({ chapter }: CaseStageProps) {
  return (
    <section
      id={chapter.id}
      className="case-stage"
      aria-labelledby={`${chapter.id}-heading`}
    >
      <header className="case-stage__header">
        <p className="case-stage__label">{chapter.title}</p>
        <h2 id={`${chapter.id}-heading`} className="case-stage__heading">
          {chapter.heading}
        </h2>
        <p className="case-stage__description">{chapter.summary}</p>
      </header>

      <div className="case-stage__blocks">
        {chapter.blocks.map((block, index) => (
          <CaseReveal
            key={`${block.type}-${index}`}
            className={spanClass(block.span)}
          >
            <CaseBlock block={block} />
          </CaseReveal>
        ))}
      </div>
    </section>
  );
}
