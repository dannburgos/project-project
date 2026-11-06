import { AboutSection } from '@/components/molecules/about-section';
import { journeyContent } from '@/content/journey';
import { siteContent } from '@/content/site';

// Resumen corto del CV: el perfil, los estudios y certificaciones, y el botón
// para descargarlo. La experiencia no va aquí: está en el CV y en Trayectoria.
// Los estudios salen del mismo contenido que la línea de tiempo.
export function AboutCv() {
  const { cv } = siteContent.about;
  const { cv: download } = siteContent.closingContact;

  const education = journeyContent.stages
    .filter(stage => stage.lane === 'academic')
    .toReversed();

  return (
    <AboutSection id="about-cv" title={cv.title}>
      <div className="about-cv">
        <p className="about-cv__summary">{cv.summary}</p>

        <div className="about-cv__group" data-glass="static">
          <h3 className="about-cv__label">{cv.educationLabel}</h3>
          <ul className="about-cv__list">
            {education.map(stage => (
              <li key={stage.id} className="about-cv__row">
                <p className="about-cv__main">
                  <span className="about-cv__name">{stage.title}</span>
                  <span className="about-cv__detail">{stage.organization}</span>
                </p>
                <p className="about-cv__period">{stage.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={download.href}
          className="button button--outline button--lg about-cv__download"
        >
          {download.label}
        </a>
      </div>
    </AboutSection>
  );
}
