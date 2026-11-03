'use client';

import Link from 'next/link';

import {
  WorkCarouselCard,
  type WorkCarouselTone
} from '@/components/molecules/work-carousel-card';
import { siteContent, type ExampleProject } from '@/content/site';
import { useWorkCarousel } from '@/hooks/use-work-carousel';
import { cn } from '@/lib/utils';

type WorkCarouselProps = {
  projects: readonly ExampleProject[];
};

const BACKDROP_CLASS: Record<WorkCarouselTone, string> = {
  green: 'work-carousel__backdrop--green',
  purple: 'work-carousel__backdrop--purple',
  neutral: 'work-carousel__backdrop--neutral'
};

const formatNumber = (index: number) => String(index + 1).padStart(2, '0');

// Work como carrusel (referencias: productionportugal.com/locations y
// alcove.com.au): la sección se fija y el scroll mueve los proyectos de lado;
// el del centro es el protagonista, con su nombre y su categoría a los lados
// del marco y su frase debajo. El fondo se difumina hacia el color de cada
// proyecto. Al terminar, la página sigue hacia el cierre de contacto.
export function WorkCarousel({ projects }: WorkCarouselProps) {
  const { work } = siteContent;
  const { ref, activeIndex, handleCardClick, handleOpenActive } =
    useWorkCarousel(projects.length);
  const toneOf = (project: ExampleProject): WorkCarouselTone =>
    project.tone ?? 'neutral';
  const active = projects[activeIndex] ?? projects[0];
  const activeHref = `/work/${active.slug}`;

  return (
    <div ref={ref} className="work-carousel">
      <section
        className="work-carousel__stage"
        data-carousel-stage
        data-surface="dark"
        aria-label={work.carouselLabel}
      >
        {projects.map((project, index) => (
          <span
            key={project.slug}
            className={cn(
              'work-carousel__backdrop',
              BACKDROP_CLASS[toneOf(project)]
            )}
            data-carousel-backdrop
            data-variant={index % 3}
            aria-hidden="true"
          />
        ))}

        <h1 className="work-carousel__title">{work.title}</h1>
        <p className="work-carousel__counter" aria-live="polite">
          <b>{formatNumber(activeIndex)}</b> /{' '}
          {formatNumber(projects.length - 1)}
        </p>

        <ul className="work-carousel__track" data-carousel-track>
          {projects.map((project, index) => (
            <li key={project.slug} className="work-carousel__item">
              <WorkCarouselCard
                href={`/work/${project.slug}`}
                index={index}
                name={project.name}
                industry={project.industry}
                summary={project.summary}
                tag={project.tags[0]}
                cover={project.cover}
                tone={toneOf(project)}
                onClick={handleCardClick}
              />
            </li>
          ))}
        </ul>

        <div className="work-carousel__info" key={active.slug}>
          <div className="work-carousel__details">
            <p className="work-carousel__name">{active.name}</p>
            <Link
              href={activeHref}
              className="work-carousel__action"
              onClick={event => handleOpenActive(event, toneOf(active))}
            >
              {work.caseAction}
            </Link>
          </div>
        </div>
      </section>

      <span
        className="work-carousel__portal"
        data-carousel-portal
        aria-hidden="true"
      />
    </div>
  );
}
