import { notFound } from 'next/navigation';

import { CaseMedia } from '@/components/molecules/case-media';
import { CaseChapters } from '@/components/organisms/case-chapters';
import { CaseHero } from '@/components/organisms/case-hero';
import { CaseMoreProjects } from '@/components/organisms/case-more-projects';
import { CaseStory } from '@/components/organisms/case-story';
import { PetrideStory } from '@/components/organisms/petride-story';
import { SonopizzaStory } from '@/components/organisms/sonopizza-story';
import { ClosingContact } from '@/components/organisms/closing-contact';
import { PageCurtain } from '@/components/organisms/page-curtain';
import { getCaseStory } from '@/content/case-stories';
import { getCaseStudy } from '@/content/case-studies';
import { petrideStory } from '@/content/cases/petride-story';
import { sonopizzaStory } from '@/content/cases/sonopizza-story';
import { exampleProjects, type ExampleProject } from '@/content/site';
import { cn } from '@/lib/utils';

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return exampleProjects.map(project => ({ slug: project.slug }));
}

// Detalle de un proyecto (referencia: midu.design/nova):
// 1 Banner con ficha e introducción · 2 Imagen que crece con el scroll ·
// 3 Capítulos propios del proyecto en dos columnas · 4 Galería de proyectos
// por ver · 5 Cierre de contacto. El tono del proyecto da el color de acento.
// Los proyectos contados como recorrido (Planti, PetRide y Sonopizza) cambian 1 a 3
// por su escenario, con su propia marca.

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const projectIndex = exampleProjects.findIndex(item => item.slug === slug);
  if (projectIndex === -1) notFound();

  const project = exampleProjects[projectIndex];
  const story = getCaseStory(project.slug);

  return (
    <div
      className={cn(
        'case-page',
        project.tone === 'green' && 'case-page--green',
        project.tone === 'purple' && 'case-page--purple',
        project.tone === 'blue' && 'case-page--blue',
        project.tone === 'indigo' && 'case-page--indigo'
      )}
    >
      <PageCurtain variant="flush">
        {project.slug === 'sonopizza' ? (
          <SonopizzaStory story={sonopizzaStory} />
        ) : project.slug === 'petride' ? (
          <PetrideStory story={petrideStory} />
        ) : story ? (
          <CaseStory story={story} cover={project.cover} />
        ) : (
          <CaseChaptersStudy project={project} />
        )}

        <CaseMoreProjects
          projects={exampleProjects}
          currentSlug={project.slug}
        />
      </PageCurtain>

      <ClosingContact />
    </div>
  );
}

type CaseChaptersStudyProps = {
  project: ExampleProject;
};

// Caso por capítulos: banner, imagen que crece y capítulos en dos columnas
function CaseChaptersStudy({ project }: CaseChaptersStudyProps) {
  const caseStudy = getCaseStudy(project.slug);
  const chapterIds = caseStudy.chapters.map(chapter => chapter.id);

  return (
    <>
      <CaseHero
        project={project}
        facts={caseStudy.facts}
        headline={caseStudy.headline}
        intro={caseStudy.intro}
      />
      <CaseMedia label={caseStudy.mediaLabel} />
      <CaseChapters chapters={caseStudy.chapters} chapterIds={chapterIds} />
    </>
  );
}
