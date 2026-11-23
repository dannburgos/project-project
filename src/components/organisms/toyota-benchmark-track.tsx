'use client';

import type { CSSProperties } from 'react';

import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import type { ToyotaBenchmarkReference } from '@/content/toyota-story.types';
import { useHorizontalShift } from '@/hooks/use-horizontal-shift';
import { useScrollLockSequence } from '@/hooks/use-scroll-lock-sequence';
import { fillTemplate } from '@/lib/case-story/fill-template.util';

// Recorrido de rueda o dedo para pasar por todas las referencias: unos 720 px
// por referencia, para leer cada una con calma
const DISTANCE_PER_REFERENCE_PX = 720;

type ToyotaBenchmarkTrackProps = {
  references: readonly ToyotaBenchmarkReference[];
  strengthLabel: string;
  opportunityLabel: string;
  hint: string;
  progressLabel: string;
};

function formatNumber(value: number) {
  return String(value).padStart(2, '0');
}

// Benchmark contado en horizontal (referencia: Later — Made You Look). Cuando
// el módulo está completo en pantalla, la página se congela y el scroll
// recorre la pista de izquierda a derecha: cada marca es un capítulo con su
// nombre girado como lomo, su captura y sus dos hallazgos. Mientras la pista
// avanza, la captura sube o baja a su propio ritmo; las notas van fijas en su
// panel. Al final suelta la página. En celular (o con «reducir movimiento») la pista se
// desliza con el dedo, sin congelar nada.
export function ToyotaBenchmarkTrack({
  references,
  strengthLabel,
  opportunityLabel,
  hint,
  progressLabel
}: ToyotaBenchmarkTrackProps) {
  const trackRef = useScrollLockSequence<HTMLDivElement>({
    fullDistance: DISTANCE_PER_REFERENCE_PX * references.length
  });
  const railRef = useHorizontalShift<HTMLOListElement>();
  const total = formatNumber(references.length);
  const lastIndex = Math.max(1, references.length - 1);

  return (
    <div ref={trackRef} className="ty-track">
      <div className="ty-track__bar">
        <p className="ty-track__hint">{hint}</p>
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
                <p className="ty-track__count">
                  {fillTemplate(progressLabel, {
                    current: formatNumber(index + 1),
                    total
                  })}
                </p>
                <h4 className="ty-track__name">{reference.name}</h4>
                <ToyotaVisual
                  visual={reference.visual}
                  className="ty-track__visual"
                />
                <dl className="ty-track__notes">
                  <div className="ty-track__note ty-track__note--strength">
                    <dt className="ty-track__note-label">{strengthLabel}</dt>
                    <dd className="ty-track__note-text">
                      {reference.strength}
                    </dd>
                  </div>
                  <div className="ty-track__note ty-track__note--opportunity">
                    <dt className="ty-track__note-label">{opportunityLabel}</dt>
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
  );
}
