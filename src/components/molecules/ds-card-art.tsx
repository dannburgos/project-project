import { Bell, Home, Search, User } from 'lucide-react';

import type { DsTopicId } from '@/content/design-system-story.types';

type DsCardArtProps = {
  topic: DsTopicId;
};

// Ilustración de cada tarjeta del mosaico. Es decorativa: el nombre del tema
// ya lo dice la tarjeta.
export function DsCardArt({ topic }: DsCardArtProps) {
  return (
    <span className={`ds-art ds-art--${topic}`} aria-hidden="true">
      {topic === 'color' && (
        <>
          <span className="ds-art__swatch" />
          <span className="ds-art__swatch" />
          <span className="ds-art__swatch" />
        </>
      )}
      {topic === 'voice' && (
        <>
          <span className="ds-art__quote">“</span>
          <span className="ds-art__quote ds-art__quote--end">”</span>
        </>
      )}
      {topic === 'typography' && <span className="ds-art__glyph">Aa</span>}
      {topic === 'iconography' && (
        <span className="ds-art__icons">
          <Home />
          <Search />
          <User />
          <Bell />
        </span>
      )}
      {topic === 'spacing' && (
        <span className="ds-art__bars">
          <span />
          <span />
          <span />
          <span />
        </span>
      )}
      {topic === 'components' && (
        <span className="ds-art__ui">
          <span className="ds-art__button" />
          <span className="ds-art__toggle" />
        </span>
      )}
      {topic === 'motion' && (
        <svg className="ds-art__curve" viewBox="0 0 100 100">
          <path d="M10 90 C 60 90, 40 10, 90 10" />
          <circle cx="10" cy="90" r="4" />
          <circle cx="90" cy="10" r="4" />
        </svg>
      )}
      {topic === 'accessibility' && <span className="ds-art__contrast" />}
    </span>
  );
}
