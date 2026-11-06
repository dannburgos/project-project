'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import {
  WorkCarouselCard,
  type WorkCarouselTone
} from '@/components/molecules/work-carousel-card';
import { siteContent, type ExampleProject } from '@/content/site';
import { useWorkCarousel } from '@/hooks/use-work-carousel';

type WorkCarouselProps = {
  projects: readonly ExampleProject[];
};

const formatNumber = (index: number) => String(index).padStart(2, '0');

// Work (referencia: motionin.design/gallery/nova): arranca en una pantalla
// gris con la fila de proyectos a la derecha. Con el scroll o las flechas,
// la primera tarjeta crece hasta volverse el fondo y a la izquierda aparecen
// su nombre, su frase y "Ver caso".
export function WorkCarousel({ projects }: WorkCarouselProps) {
  const { work } = siteContent;
  const { ref, step, handleGoTo, handlePrevious, handleNext, handleKeyDown } =
    useWorkCarousel(projects.length);
  const active = step > 0 ? projects[step - 1] : undefined;
  const toneOf = (project: ExampleProject): WorkCarouselTone =>
    project.tone ?? 'neutral';

  return (
    <div ref={ref} className="work-carousel">
      <section
        className="work-carousel__stage"
        data-gallery-stage
        data-surface="dark"
        aria-label={work.carouselLabel}
        aria-roledescription={work.carouselRole}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <h1 className="sr-only">{work.title}</h1>
        <ul className="work-carousel__cards">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <WorkCarouselCard
                index={index}
                name={project.name}
                actionLabel={work.showProject}
                cover={project.cover}
                tone={toneOf(project)}
                onSelect={target => handleGoTo(target + 1)}
              />
            </li>
          ))}
        </ul>
        <span className="work-carousel__shade" aria-hidden="true" />

        <div className="work-carousel__copy" key={step} aria-live="polite">
          {active ? (
            <>
              <p className="work-carousel__eyebrow">
                {formatNumber(step)} / {formatNumber(projects.length)}
              </p>
              <h2 className="work-carousel__title">{active.name}</h2>
              <p className="work-carousel__text">{active.industry}</p>
              <p className="work-carousel__summary">{active.summary}</p>
              <ul className="work-carousel__tags">
                {active.tags.map(tag => (
                  <li key={tag} className="work-carousel__tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <Link
                href={`/work/${active.slug}`}
                className="work-carousel__action"
              >
                {work.caseAction}
                <ArrowRight className="work-carousel__action-icon" />
              </Link>
            </>
          ) : (
            <>
              <p className="work-carousel__eyebrow">{work.introEyebrow}</p>
              <p
                className="work-carousel__title work-carousel__title--intro"
                aria-hidden="true"
              >
                {work.title}
              </p>
              <p className="work-carousel__text">{work.introText}</p>
            </>
          )}
        </div>

        <div className="work-carousel__controls">
          <button
            type="button"
            className="work-carousel__arrow"
            aria-label={work.previous}
            disabled={step === 0}
            onClick={handlePrevious}
          >
            <ArrowLeft className="work-carousel__arrow-icon" />
          </button>
          <button
            type="button"
            className="work-carousel__arrow"
            aria-label={work.next}
            disabled={step === projects.length}
            onClick={handleNext}
          >
            <ArrowRight className="work-carousel__arrow-icon" />
          </button>
          <span className="work-carousel__progress" aria-hidden="true">
            <span className="work-carousel__progress-fill" data-step={step} />
          </span>
        </div>
        <p className="work-carousel__number" aria-hidden="true">
          {formatNumber(step)}
        </p>
      </section>
    </div>
  );
}
