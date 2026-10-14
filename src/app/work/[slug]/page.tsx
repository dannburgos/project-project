import { notFound } from 'next/navigation';

import { CaseMedia } from '@/components/molecules/case-media';
import { CaseChapters } from '@/components/organisms/case-chapters';
import { CaseHero } from '@/components/organisms/case-hero';
import { CaseMoreProjects } from '@/components/organisms/case-more-projects';
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
// 3 Etapas en dos columnas · 4 Galería de proyectos por ver · 5 Cierre de contacto.
export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = exampleProjects.findIndex(item => item.slug === slug);
  if (projectIndex === -1) notFound();

  const project = exampleProjects[projectIndex];
  const { caseStudy } = siteContent;
  const stageIds = caseStudy.stages.map(stage => stage.id);

  return (
    <div className="case-page">
      <PageCurtain variant="flush">
        <CaseHero project={project} />
        <CaseMedia label={caseStudy.mediaLabel} />
        <CaseChapters stages={caseStudy.stages} stageIds={stageIds} />

        <CaseMoreProjects
          projects={exampleProjects}
          currentSlug={project.slug}
        />
      </PageCurtain>

      <ClosingContact />
    </div>
  );
}
