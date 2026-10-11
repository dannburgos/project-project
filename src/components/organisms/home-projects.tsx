import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { ShowcaseCard } from '@/components/molecules/showcase-card';
import { exampleProjects, siteContent } from '@/content/site';

// Módulo 4 del Home: tres proyectos que, juntos, forman un solo rectángulo.
// Escritorio: una tarjeta grande a la izquierda y dos apiladas a la derecha.
// Celular: una tarjeta a todo el ancho y, debajo, dos más pequeñas. Debajo del
// bloque, un botón lleva a todos los proyectos.
export function HomeProjects() {
  const { home, work } = siteContent;
  const projects = exampleProjects.slice(0, home.projects.count);

  return (
    <section className="home-module" aria-labelledby="home-projects-title">
      <h2 id="home-projects-title" className="sr-only">
        {work.title}
      </h2>

      <ul className="home-projects">
        {projects.map(project => (
          <li key={project.slug} className="home-projects__item">
            <ShowcaseCard
              href={`/work/${project.slug}`}
              title={project.name}
              description={project.industry}
              actionLabel={work.caseAction}
              mediaLabel={work.imageLabel}
              size="fill"
            />
          </li>
        ))}
      </ul>

      <div className="home-projects__cta">
        <Link
          href={home.projects.cta.href}
          className="button button--outline button--lg"
        >
          {home.projects.cta.label}
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
