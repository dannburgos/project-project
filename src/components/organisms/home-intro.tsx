import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { BlurRevealText } from '@/components/atoms/blur-reveal-text';
import { siteContent } from '@/content/site';

// Módulo 2 del Home: la frase grande y la presentación. Sube por encima de la
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

        <div className="home-intro__columns">
          <BlurRevealText
            segments={presentation.about}
            className="home-intro__about"
            delay={500}
            step={22}
          />
          <BlurRevealText
            segments={[{ text: presentation.secondary }]}
            className="home-intro__secondary"
            delay={900}
            step={18}
          />
        </div>

        <Link
          href={presentation.action.href}
          className="button button--outline button--lg home-intro__action"
        >
          <ArrowUpRight aria-hidden="true" />
          {presentation.action.label}
        </Link>
      </div>
    </section>
  );
}
