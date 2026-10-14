'use client';

import Link from 'next/link';

import { ShowcaseCard } from '@/components/molecules/showcase-card';
import { siteContent, type ExampleProject } from '@/content/site';
import { useViewedProjects } from '@/hooks/use-viewed-projects';

type CaseMoreProjectsProps = {
  projects: readonly ExampleProject[];
  currentSlug: string;
};

const GALLERY_SIZE = 3;

// Final de un caso: galería de tres proyectos para seguir explorando. Primero
// van los que la persona aún no ha visto; si quedan menos de tres, se completan
// con los ya vistos. Nunca incluye el proyecto actual.
export function CaseMoreProjects({
  projects,
  currentSlug
}: CaseMoreProjectsProps) {
  const viewed = useViewedProjects(currentSlug);
  const { endNavigation, imageLabelCard } = siteContent.caseStudy;
  const { work } = siteContent;

  const others = projects.filter(project => project.slug !== currentSlug);
  const unseen = others.filter(project => !viewed.includes(project.slug));
  const seen = others.filter(project => viewed.includes(project.slug));
  const gallery = [...unseen, ...seen].slice(0, GALLERY_SIZE);

  return (
    <section className="case-more" aria-labelledby="case-more-title">
      <div className="case-more__header">
        <h2 id="case-more-title" className="case-more__title">
          {endNavigation.title}
        </h2>
        <Link href="/work" className="case-more__all">
          {endNavigation.backToWork}
        </Link>
      </div>

      <ul className="case-more__grid">
        {gallery.map(project => (
          <li key={project.slug}>
            <ShowcaseCard
              href={`/work/${project.slug}`}
              title={project.name}
              description={project.industry}
              actionLabel={work.caseAction}
              mediaLabel={imageLabelCard}
              tags={project.tags}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
