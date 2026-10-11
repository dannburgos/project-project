import { ArrowDown } from 'lucide-react';

import { RevealText } from '@/components/atoms/reveal-text';
import { LocalTime } from '@/components/atoms/local-time';
import { siteContent } from '@/content/site';

// Módulo 1 del Home: portada a pantalla completa. Se queda quieta mientras el
// siguiente módulo sube y la va tapando (referencia: midu.design).
export function HomeCover() {
  const { home } = siteContent;

  return (
    <section className="home-cover">
      <h1 className="home-cover__tagline">
        <RevealText text={home.title} />
      </h1>

      <div className="home-cover__meta">
        <div className="home-cover__facts">
          <p>{home.role}</p>
          <p className="home-cover__place">
            <span>{home.cover.location}</span>
            <LocalTime timeZone={home.cover.timeZone} />
          </p>
        </div>
        <p className="home-cover__hint">
          {home.cover.scrollHint}
          <ArrowDown aria-hidden="true" />
        </p>
      </div>

      <p className="home-cover__word" aria-hidden="true">
        {home.cover.word.split(' ').map(word => (
          <span key={word} className="home-cover__word-part">
            {word}
          </span>
        ))}
      </p>
    </section>
  );
}
