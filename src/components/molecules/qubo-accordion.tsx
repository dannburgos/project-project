import type { QuboItem } from '@/content/qubo-story.types';

type QuboAccordionProps = {
  items: readonly QuboItem[];
};

// Preguntas y respuestas que se abren y se cierran (referencia: el FAQ de
// Armor). Usa <details>, así que funciona con teclado y sin JavaScript.
export function QuboAccordion({ items }: QuboAccordionProps) {
  return (
    <div className="qb-accordion">
      {items.map(item => (
        <details key={item.title} className="qb-accordion__item">
          <summary className="qb-accordion__summary">
            <span>{item.title}</span>
            <span className="qb-accordion__icon" aria-hidden="true" />
          </summary>
          {item.text && <p className="qb-accordion__text">{item.text}</p>}
        </details>
      ))}
    </div>
  );
}
