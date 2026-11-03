import { ClosingContact } from '@/components/organisms/closing-contact';
import { PageCurtain } from '@/components/organisms/page-curtain';
import { WorkCarousel } from '@/components/organisms/work-carousel';
import { exampleProjects } from '@/content/site';

// Work: un carrusel de proyectos que se mueve con el scroll y, al terminar,
// la página sigue hacia el cierre de contacto
export default function WorkPage() {
  return (
    <div className="work-page">
      <PageCurtain variant="flush">
        <WorkCarousel projects={exampleProjects} />
      </PageCurtain>

      <ClosingContact />
    </div>
  );
}
