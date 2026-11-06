import { ClosingContact } from '@/components/organisms/closing-contact';
import { PageCurtain } from '@/components/organisms/page-curtain';
import { WorkCarousel } from '@/components/organisms/work-carousel';
import { exampleProjects } from '@/content/site';

// Work: arranca en gris y, con el scroll o las flechas, cada proyecto crece
// desde su tarjeta hasta volverse el fondo. Al terminar, la página sigue
// hacia el cierre de contacto
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
