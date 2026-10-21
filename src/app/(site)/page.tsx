import { HomeMediaPlaceholder } from '@/components/molecules/home-media-placeholder';
import { ClosingContact } from '@/components/organisms/closing-contact';
import { HomeCover } from '@/components/organisms/home-cover';
import { HomeIntro } from '@/components/organisms/home-intro';
import { HomeJourneyTeaser } from '@/components/organisms/home-journey-teaser';
import { HomeProjects } from '@/components/organisms/home-projects';
import { PageCurtain } from '@/components/organisms/page-curtain';
import { SiteIntro } from '@/components/organisms/site-intro';
import { siteContent } from '@/content/site';

// Home armado por módulos de pantalla completa que se irán llenando:
// 1 Portada · 2 Presentación · 3 Proyectos · 4 Imagen a pantalla completa ·
// 5 Trayectoria · 6 Cierre de contacto. Al entrar o recargar, corre la
// entrada del sitio (SiteIntro) por encima.
export default function HomePage() {
  const { home } = siteContent;

  return (
    <div className="home-page">
      <PageCurtain variant="flush">
        {/* La portada queda quieta solo en este tramo, mientras la presentación
            y los proyectos suben y la tapan */}
        <div className="home-cover-track">
          <HomeCover />
          <HomeIntro />
          <HomeProjects />
        </div>

        <HomeMediaPlaceholder
          label={home.moduleLabel}
          number={home.mediaModule.number}
          title={home.mediaModule.title}
          note={home.mediaModule.note}
        />

        <HomeJourneyTeaser />
      </PageCurtain>

      <ClosingContact />

      <SiteIntro />
    </div>
  );
}
