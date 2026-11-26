import { QuboVisual } from '@/components/atoms/qubo-visual';
import type { QuboCover as QuboCoverContent } from '@/content/qubo-story.types';

type QuboCoverProps = {
  cover: QuboCoverContent;
};

// Portada del caso. Hero oscuro con degradado de la marca (referencias: el
// hero de Armor y el de Made You Look), el titular con su firma y la imagen
// principal.
export function QuboCover({ cover }: QuboCoverProps) {
  return (
    <header className="qb-cover">
      <div className="qb-cover__glow" aria-hidden="true" />

      <div className="qb-cover__hero">
        <div className="qb-cover__copy">
          <p className="qb-cover__eyebrow">{cover.eyebrow}</p>
          <h1 className="qb-cover__title">
            <span className="qb-cover__name">{cover.title}</span>
            <span className="qb-cover__byline">{cover.byline}</span>
          </h1>
          <p className="qb-cover__tagline">{cover.tagline}</p>
        </div>

        <div className="qb-cover__stage">
          <QuboVisual visual={cover.visual} className="qb-cover__visual" />
        </div>
      </div>
    </header>
  );
}
