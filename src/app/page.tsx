import { HomeMediaPlaceholder } from '@/components/molecules/home-media-placeholder';
import { HomeModulePlaceholder } from '@/components/molecules/home-module-placeholder';
import { ClosingContact } from '@/components/organisms/closing-contact';
import { HomeCover } from '@/components/organisms/home-cover';
import { HomeIntro } from '@/components/organisms/home-intro';
import { HomeProjects } from '@/components/organisms/home-projects';
import { PageCurtain } from '@/components/organisms/page-curtain';
import { siteContent } from '@/content/site';

// Home armado por módulos de pantalla completa que se irán llenando:
// 1 Portada · 2 Presentación · 3 Proyectos · 4 Imagen a pantalla completa ·
// 5 Cómo pienso · 6 Trayectoria · 7 Cierre de contacto.
export default function HomePage() {
  const { home } = siteContent;

  return (
    <div className="home-page">
      <PageCurtain variant="flush">
        <HomeCover />
        <HomeIntro />

        <HomeProjects />

        <HomeMediaPlaceholder
          label={home.moduleLabel}
          number={home.mediaModule.number}
          title={home.mediaModule.title}
          note={home.mediaModule.note}
        />

        {home.placeholderModules.map(module => (
          <HomeModulePlaceholder
            key={module.number}
            label={home.moduleLabel}
            number={module.number}
            title={module.title}
            note={module.note}
          />
        ))}
      </PageCurtain>

      <ClosingContact />
    </div>
  );
}
