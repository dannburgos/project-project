import { ClosingContact } from '@/components/organisms/closing-contact';
import { PageCurtain } from '@/components/organisms/page-curtain';
import { WorkGrid } from '@/components/organisms/work-grid';
import { exampleProjects } from '@/content/site';

// Work: de momento, los proyectos en una cuadrícula de tres por fila. El
// carrusel (WorkCarousel) sigue en el código, sin usarse, para volver a él.
// Al terminar, la página sigue hacia el cierre de contacto
export default function WorkPage() {
  return (
    <div className="work-page">
      <PageCurtain variant="flush">
        <WorkGrid projects={exampleProjects} />
      </PageCurtain>

      <ClosingContact />
    </div>
  );
}
