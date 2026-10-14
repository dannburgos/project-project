import { BlurRevealText } from '@/components/atoms/blur-reveal-text';
import { siteContent } from '@/content/site';

// Módulo 2 del Home: la frase grande. Sube por encima de la
// portada y su texto aparece palabra por palabra al entrar en pantalla.
export function HomeIntro() {
  const { presentation } = siteContent.home;

  return (
    <section className="home-intro">
      <div className="home-intro__inner">
        <BlurRevealText
          as="h2"
          segments={[{ text: presentation.statement, isKey: true }]}
          className="home-intro__statement"
          step={55}
        />
      </div>
    </section>
  );
}
