import { CaseBlock } from '@/components/molecules/case-block';
import type { CaseStudyStage } from '@/content/site';

type CaseStageProps = {
  stage: CaseStudyStage;
};

// Etapa del caso en la columna derecha: nombre de la etapa y sus bloques. En
// escritorio el título y el resumen se leen en la columna izquierda fija; en
// el celular van aquí, encima de los bloques.
export function CaseStage({ stage }: CaseStageProps) {
  return (
    <section
      id={stage.id}
      className="case-stage"
      aria-labelledby={`${stage.id}-heading`}
    >
      <header className="case-stage__header">
        <p className="case-stage__label">{stage.title}</p>
        <h2 id={`${stage.id}-heading`} className="case-stage__heading">
          {stage.heading}
        </h2>
        <p className="case-stage__description">{stage.description}</p>
      </header>

      <div className="case-stage__blocks">
        {stage.blocks.map((block, index) => (
          <CaseBlock key={`${block}-${index}`} type={block} />
        ))}
      </div>
    </section>
  );
}
