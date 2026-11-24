import type { ToyotaShiftSet } from '@/content/toyota-story.types';

type ToyotaShiftsProps = {
  shifts: ToyotaShiftSet;
};

// Lo que cambia frente a la experiencia tradicional, como una tabla de tres
// columnas: el tema, cómo es hoy y cómo será con la propuesta (lo que se va a
// tener en cuenta). Cada fila llega una tras otra con el scroll.
export function ToyotaShifts({ shifts }: ToyotaShiftsProps) {
  return (
    <figure className="ty-shifts">
      <figcaption className="ty-shifts__head" aria-hidden="true">
        <span className="ty-shifts__head-before">{shifts.beforeLabel}</span>
        <span className="ty-shifts__head-after">{shifts.afterLabel}</span>
      </figcaption>
      <ol className="ty-shifts__list" data-ty-group>
        {shifts.items.map(item => (
          <li key={item.topic} className="ty-shifts__item" data-ty-item>
            <span className="ty-shifts__topic">{item.topic}</span>
            <span className="ty-shifts__before">
              <span className="sr-only">{shifts.beforeLabel}: </span>
              {item.before}
            </span>
            <span className="ty-shifts__arrow" aria-hidden="true">
              →
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
