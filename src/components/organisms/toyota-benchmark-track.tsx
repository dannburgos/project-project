'use client';

import type { CSSProperties, ReactNode } from 'react';

import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import type { ToyotaBenchmarkReference } from '@/content/toyota-story.types';
import { useHorizontalShift } from '@/hooks/use-horizontal-shift';
import { useStickySequence } from '@/hooks/use-sticky-sequence';

// Scroll de la página que dura el recorrido de la pista: unos 720 px por
// referencia, para leer cada una con calma
const DISTANCE_PER_REFERENCE_PX = 720;
// Tramo final de scroll en el que la pista ya llegó y se queda quieta, antes de
// soltar la página: marca el fin del recorrido
const HOLD_DISTANCE_PX = 320;

type ToyotaBenchmarkTrackProps = {
  // Título del módulo: va dentro del escenario fijo, para verse siempre con
  // las referencias
  header: ReactNode;
  references: readonly ToyotaBenchmarkReference[];
  strengthLabel: string;
  opportunityLabel: string;
};

// Benchmark contado en horizontal (referencia: Later — Made You Look). El
// título y la pista se quedan fijos en pantalla mientras la página baja y el
// scroll recorre la pista de izquierda a derecha: cada marca es un capítulo
// con su nombre girado como lomo, su captura y sus dos hallazgos. El marco de
// la captura queda quieto en su panel y la foto se mueve por dentro; las notas
// van fijas. Al final suelta la página. En celular (o con «reducir
// movimiento») la pista se desliza con el dedo, sin fijarse.
export function ToyotaBenchmarkTrack({
  header,
  references,
  strengthLabel,
  opportunityLabel
}: ToyotaBenchmarkTrackProps) {
  const trackRef = useStickySequence<HTMLDivElement>({
    holdDistance: HOLD_DISTANCE_PX
  });
  const railRef = useHorizontalShift<HTMLOListElement>();
  const lastIndex = Math.max(1, references.length - 1);

  return (
    <div
      ref={trackRef}
      className="ty-track"
      style={
        {
          '--sequence-distance': `${DISTANCE_PER_REFERENCE_PX * references.length + HOLD_DISTANCE_PX}px`
        } as CSSProperties
      }
    >
      <div className="ty-track__stage" data-sequence-stage>
        <div className="ty-track__top">
          {header}
          <span className="ty-track__progress" aria-hidden="true">
            <span className="ty-track__progress-fill" />
          </span>
        </div>

        <div className="ty-track__viewport">
          <ol ref={railRef} className="ty-track__rail">
            {references.map((reference, index) => (
              <li
                key={reference.name}
                className="ty-track__panel"
                style={{ '--panel-center': index / lastIndex } as CSSProperties}
              >
                <p className="ty-track__spine" aria-hidden="true">
                  {reference.name}
                </p>
                <div className="ty-track__body">
                  <h4 className="ty-track__name">{reference.name}</h4>
                  <div className="ty-track__frame">
                    <ToyotaVisual
                      visual={reference.visual}
                      className="ty-track__visual"
                    />
                  </div>
                  <dl className="ty-track__notes">
                    <div className="ty-track__note ty-track__note--strength">
                      <dt className="ty-track__note-label">{strengthLabel}</dt>
                      <dd className="ty-track__note-text">
                        {reference.strength}
                      </dd>
                      <dd>
                        <ul className="ty-track__criteria">
                          {reference.criteria.map(criterion => (
                            <li key={criterion} className="ty-track__criterion">
                              {criterion}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                    <div className="ty-track__note ty-track__note--opportunity">
                      <dt className="ty-track__note-label">
                        {opportunityLabel}
                      </dt>
                      <dd className="ty-track__note-text">
                        {reference.opportunity}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
