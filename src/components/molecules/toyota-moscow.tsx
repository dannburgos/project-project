import type { CSSProperties } from 'react';

import type { ToyotaMoscowSegment } from '@/content/toyota-story.types';

type ToyotaMoscowProps = {
  total: string;
  segments: readonly ToyotaMoscowSegment[];
};

// Barra MoSCoW: cada tramo mide lo que pesa en el total y crece de izquierda
// a derecha al llegar a la vista. El primero (Must Have) va en rojo.
export function ToyotaMoscow({ total, segments }: ToyotaMoscowProps) {
  return (
    <figure className="ty-moscow" data-ty-group>
      <figcaption className="ty-moscow__total">{total}</figcaption>
      <div className="ty-moscow__bar" aria-hidden="true">
        {segments.map(segment => (
          <span
            key={segment.label}
            className="ty-moscow__segment"
            style={{ '--segment-weight': segment.value } as CSSProperties}
            data-ty-bar
          />
        ))}
      </div>
      <dl className="ty-moscow__legend">
        {segments.map(segment => (
          <div
            key={segment.label}
            className="ty-moscow__item"
            style={{ '--segment-weight': segment.value } as CSSProperties}
            data-ty-item
          >
            <dt className="ty-moscow__label">{segment.label}</dt>
            <dd className="ty-moscow__value" data-ty-count={segment.value}>
              {segment.value}
            </dd>
          </div>
        ))}
      </dl>
    </figure>
  );
}
