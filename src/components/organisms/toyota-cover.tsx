import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import { ToyotaScrollGauge } from '@/components/molecules/toyota-scroll-gauge';
import type { ToyotaCover as ToyotaCoverContent } from '@/content/toyota-story.types';

type ToyotaCoverProps = {
  cover: ToyotaCoverContent;
};

const TITLE_SEPARATOR = ' — ';

// Portada del caso (referencia: Lightship, ajustada al manual de Toyota). La
// captura arranca como una tarjeta al centro y, con el scroll, crece hacia
// adelante hasta llenar la pantalla (Toyota pide no encoger). El titular va
// partido: la marca a la izquierda y el proyecto a la derecha. Debajo, la
// ficha del proyecto en celdas de retícula.
export function ToyotaCover({ cover }: ToyotaCoverProps) {
  const [brand, project] = cover.title.split(TITLE_SEPARATOR);

  return (
    <header className="ty-cover" data-surface="dark" data-ty-cover>
      {/* La pista da el recorrido; el escenario se queda fijo mientras la
          captura crece */}
      <div className="ty-cover__runway" data-ty-runway>
        <div className="ty-cover__stage">
          <div className="ty-cover__frame" data-ty-grow>
            <ToyotaVisual visual={cover.visual} className="ty-cover__visual" />
          </div>

          <p className="ty-cover__eyebrow">{cover.eyebrow}</p>
          <h1 className="ty-cover__title">
            <span className="ty-cover__brand">
              {brand}
              {project && (
                <span className="ty-cover__dash">{TITLE_SEPARATOR}</span>
              )}
            </span>
            {project && <span className="ty-cover__project">{project}</span>}
          </h1>

          <p className="ty-cover__intro">{cover.intro}</p>
          {/* Indicador de scroll: el velocímetro que sube con la captura */}
          <ToyotaScrollGauge
            label={cover.scrollHint}
            className="ty-cover__hint"
          />
        </div>
      </div>

      <div className="ty-cover__facts">
        <h2 className="ty-cover__facts-title" data-ty-mask>
          {cover.factsTitle}
        </h2>
        <dl className="ty-facts" data-ty-group>
          {cover.facts.map(fact => (
            <div key={fact.label} className="ty-facts__item" data-ty-item>
              <dt className="ty-facts__label">{fact.label}</dt>
              <dd className="ty-facts__value">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
