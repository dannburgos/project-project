import type { CSSProperties } from 'react';

import type { ToyotaShiftSet } from '@/content/toyota-story.types';

type ToyotaShiftsProps = {
  shifts: ToyotaShiftSet;
};

// Lo que cambia frente a la experiencia tradicional, en una sola fila. Con
// el scroll, cada frase vieja se tacha en rojo y la nueva se enciende, una
// tras otra
export function ToyotaShifts({ shifts }: ToyotaShiftsProps) {
  const layout = { '--shift-count': shifts.items.length } as CSSProperties;

  return (
    <figure className="ty-shifts" style={layout}>
      <figcaption className="ty-shifts__legend">
        <span className="ty-shifts__key">{shifts.beforeLabel}</span>
        <span className="ty-shifts__key ty-shifts__key--after">
          {shifts.afterLabel}
        </span>
      </figcaption>
      <ol className="ty-shifts__list" data-ty-line>
        {shifts.items.map((item, index) => (
          <li
            key={item.topic}
            className="ty-shifts__item"
            style={{ '--shift-index': index } as CSSProperties}
          >
            <span className="ty-shifts__topic">{item.topic}</span>
            <span className="ty-shifts__before">
              <span className="sr-only">{shifts.beforeLabel}: </span>
              <span className="ty-shifts__struck">{item.before}</span>
            </span>
            <span className="ty-shifts__after">
              <span className="sr-only">{shifts.afterLabel}: </span>
              {item.after}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
