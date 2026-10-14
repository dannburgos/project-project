import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { siteContent, type ExampleProject } from '@/content/site';
import { cn } from '@/lib/utils';

// Manchas de color del fondo, de la más lejana a la más cercana
const BACKDROP_LAYERS = 5;

type CaseHeroProps = {
  project: ExampleProject;
};

// Banner del caso (referencia: midu.design/nova). Ocupa todo el ancho: nombre
// del proyecto, industria y año, la ficha del proyecto y la introducción
// conceptual en dos columnas. Si el proyecto tiene tono, el fondo es un
// degradado por manchas de color a distintas profundidades que se aleja al
// cargar (referencia: Fabrica de Templifica).
export function CaseHero({ project }: CaseHeroProps) {
  const { backToWork, hero } = siteContent.caseStudy;

  return (
    <header
      data-surface="dark"
      className={cn('case-hero', project.tone && `case-hero--${project.tone}`)}
    >
      <Link href="/work" className="case-hero__back">
        <ArrowLeft aria-hidden="true" />
        {backToWork}
      </Link>

      <div className="case-hero__heading">
        <h1 className="case-hero__title">{project.name}</h1>
        <p className="case-hero__meta">{project.industry}</p>
      </div>

      <dl className="case-hero__facts" aria-label={hero.factsLabel}>
        {hero.facts
          .map(fact => ({
            ...fact,
            value:
              fact.label === 'Scope' && project.scope
                ? project.scope
                : fact.value
          }))
          .map(fact => (
            <div key={fact.label} className="case-hero__fact">
              <dt className="case-hero__fact-label">{fact.label}</dt>
              <dd className="case-hero__fact-value">{fact.value}</dd>
            </div>
          ))}
      </dl>

      <div className="case-hero__intro">
        {hero.intro.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {project.tone && (
        <div className="case-hero__backdrop" aria-hidden="true">
          {Array.from({ length: BACKDROP_LAYERS }, (_, index) => (
            <span key={index} className="case-hero__blob" />
          ))}
          <span className="case-hero__grain" />
        </div>
      )}
    </header>
  );
}
