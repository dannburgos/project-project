import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { siteContent, type ExampleProject } from '@/content/site';

type CaseHeroProps = {
  project: ExampleProject;
};

// Banner del caso (referencia: midu.design/nova). Ocupa todo el ancho: nombre
// del proyecto, industria y año, la ficha del proyecto y la introducción
// conceptual en dos columnas.
export function CaseHero({ project }: CaseHeroProps) {
  const { backToWork, hero } = siteContent.caseStudy;

  return (
    <header className="case-hero">
      <Link href="/work" className="case-hero__back">
        <ArrowLeft aria-hidden="true" />
        {backToWork}
      </Link>

      <div className="case-hero__heading">
        <h1 className="case-hero__title">{project.name}</h1>
        <p className="case-hero__meta">
          {project.industry} · {hero.year}
        </p>
      </div>

      <dl className="case-hero__facts" aria-label={hero.factsLabel}>
        {hero.facts.map(fact => (
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
    </header>
  );
}
