import Link from 'next/link';
import { notFound } from 'next/navigation';

import { CaseMedia } from '@/components/molecules/case-media';
import { CaseChapters } from '@/components/organisms/case-chapters';
import { CaseHero } from '@/components/organisms/case-hero';
import { ClosingContact } from '@/components/organisms/closing-contact';
import { PageCurtain } from '@/components/organisms/page-curtain';
import { exampleProjects, siteContent } from '@/content/site';

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return exampleProjects.map(project => ({ slug: project.slug }));
}

// Detalle de un proyecto (referencia: midu.design/nova):
// 1 Banner con ficha e introducción · 2 Imagen que crece con el scroll ·
// 3 Etapas en dos columnas · 4 ¿Y ahora? · 5 Cierre de contacto.
export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = exampleProjects.findIndex(item => item.slug === slug);
  if (projectIndex === -1) notFound();

  const project = exampleProjects[projectIndex];
  const nextProject =
    exampleProjects[(projectIndex + 1) % exampleProjects.length];
  const { caseStudy } = siteContent;
  const stageIds = caseStudy.stages.map(stage => stage.id);

  return (
    <div className="case-page">
      <PageCurtain variant="flush">
        <CaseHero project={project} />
        <CaseMedia label={caseStudy.mediaLabel} />
        <CaseChapters stages={caseStudy.stages} stageIds={stageIds} />

        <nav aria-label={caseStudy.endNavigation.title} className="case-end">
          <h2 className="case-end__title">{caseStudy.endNavigation.title}</h2>
          <ul className="case-end__list">
            <li>
              <Link
                href={`/work/${nextProject.slug}`}
                className="case-end__link"
              >
                {caseStudy.endNavigation.nextProject}: {nextProject.name}
              </Link>
            </li>
            <li>
              <Link href="/work" className="case-end__link">
                {caseStudy.endNavigation.backToWork}
              </Link>
            </li>
            <li>
              <Link href="/journey" className="case-end__link">
                {caseStudy.endNavigation.journey}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="case-end__link">
                {caseStudy.endNavigation.contact}
              </Link>
            </li>
          </ul>
        </nav>
      </PageCurtain>

      <ClosingContact />
    </div>
  );
}
