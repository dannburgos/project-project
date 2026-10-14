import { siteContent } from '@/content/site';

// Banner grande de About: fondo oscuro de borde a borde con el título enorme.
// Arriba, un cuadro para la foto y la nota con la información que se define
// después.
export function AboutBanner() {
  const { about } = siteContent;

  return (
    <header className="about-banner" data-surface="dark">
      <div className="about-banner__top">
        <div className="about-banner__photo">{about.banner.photoLabel}</div>
        <p className="about-banner__note">{about.banner.note}</p>
      </div>
      <h1 className="about-banner__title">{about.title}</h1>
    </header>
  );
}
