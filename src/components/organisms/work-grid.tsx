import { ShowcaseCard } from '@/components/molecules/showcase-card';
import { siteContent, type ExampleProject } from '@/content/site';

type WorkGridProps = {
  projects: readonly ExampleProject[];
};

// Work, de momento: un encabezado y los proyectos en una cuadrícula de tres
// por fila (dos en tabletas y una en celular). Cada tarjeta lleva a su caso.
export function WorkGrid({ projects }: WorkGridProps) {
  const { work } = siteContent;

  return (
    <section className="work-grid" aria-labelledby="work-grid-title">
      <header className="work-grid__head">
        <p className="work-grid__eyebrow">{work.introEyebrow}</p>
        <h1 id="work-grid-title" className="work-grid__title">
          {work.title}
        </h1>
        <p className="work-grid__text">{work.gridText}</p>
      </header>

      <ul className="work-grid__list">
        {projects.map(project => (
          <li key={project.slug} className="work-grid__item">
            <ShowcaseCard
              href={`/work/${project.slug}`}
              title={project.name}
              description={project.industry}
              actionLabel={work.caseAction}
              mediaLabel={work.imageLabel}
              size="portrait"
              tags={project.tags}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
