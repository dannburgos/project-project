import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import type { ToyotaOpener as ToyotaOpenerContent } from '@/content/toyota-story.types';

type ToyotaOpenerProps = {
  opener: ToyotaOpenerContent;
};

// Apertura de capítulo (referencias: Longbow y S-2K). El fondo queda casi
// quieto y la palabra gigante se queda en el centro; encima sube una
// retícula de dos filas: las celdas sólidas tapan partes de la palabra y las
// vacías son ventanas al fondo, así que la palabra se completa con el
// scroll. El título real del capítulo va en una celda, para el lector de
// pantalla.
export function ToyotaOpener({ opener }: ToyotaOpenerProps) {
  return (
    <div className="ty-opener">
      <div className="ty-opener__backdrop" data-ty-speed="0.12">
        <ToyotaVisual
          visual={opener.background}
          className="ty-opener__visual"
        />
      </div>

      <p className="ty-opener__word" aria-hidden="true">
        {opener.word}
      </p>

      <div className="ty-opener__grid">
        <span className="ty-opener__cell ty-opener__cell--window" />
        <span className="ty-opener__cell ty-opener__cell--window" />
        <span className="ty-opener__cell ty-opener__cell--solid ty-opener__cell--edge" />
        <div className="ty-opener__cell ty-opener__cell--solid ty-opener__cell--number">
          <span className="ty-opener__number" aria-hidden="true">
            {opener.number}
          </span>
        </div>

        <div className="ty-opener__cell ty-opener__cell--solid ty-opener__cell--title">
          <h2 className="ty-opener__title" data-ty-focus tabIndex={-1}>
            <span className="ty-opener__title-number">{opener.number}</span>
            {opener.word}
          </h2>
          <p className="ty-opener__summary">{opener.summary}</p>
        </div>
        <div className="ty-opener__cell ty-opener__cell--media">
          <ToyotaVisual visual={opener.window} className="ty-opener__window" />
        </div>
        <div className="ty-opener__cell ty-opener__cell--solid ty-opener__cell--list">
          <p className="ty-opener__list-label">{opener.sectionsLabel}</p>
          <ol className="ty-opener__list">
            {opener.sections.map(section => (
              <li key={section}>{section}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
