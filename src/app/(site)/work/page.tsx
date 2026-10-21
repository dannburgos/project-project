import { ShowcaseCard } from '@/components/molecules/showcase-card';
import { ClosingContact } from '@/components/organisms/closing-contact';
import { PageCurtain } from '@/components/organisms/page-curtain';
import { exampleProjects, siteContent } from '@/content/site';

export default function WorkPage() {
  const { work } = siteContent;

  return (
    <div className="work-page">
      <PageCurtain>
        <h1 className="work-title">{work.title}</h1>
        <ul className="work-grid">
          {exampleProjects.map(project => (
            <li key={project.slug}>
              <ShowcaseCard
                href={`/work/${project.slug}`}
                title={project.name}
                description={project.industry}
                actionLabel={work.caseAction}
                mediaLabel={work.imageLabel}
                tags={project.tags}
              />
            </li>
          ))}
        </ul>
      </PageCurtain>

      <ClosingContact />
    </div>
  );
}
