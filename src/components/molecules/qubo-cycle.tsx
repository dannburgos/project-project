import type { QuboCycleStep } from '@/content/qubo-story.types';

type QuboCycleProps = {
  items: readonly QuboCycleStep[];
  decisionLabel: string;
};

// Ciclo de pasos numerados: cada tarjeta lleva a la siguiente con una flecha y
// la última vuelve a la primera. Al pie de cada una, la decisión que la respalda.
export function QuboCycle({ items, decisionLabel }: QuboCycleProps) {
  return (
    <ol className="qb-cycle">
      {items.map((item, index) => (
        <li key={item.title} className="qb-cycle__item" data-qb-reveal>
          <span className="qb-cycle__number" aria-hidden="true">
            {index + 1}
          </span>
          <h4 className="qb-cycle__title">{item.title}</h4>
          <p className="qb-cycle__text">{item.text}</p>
          <p className="qb-cycle__decision">
            <span className="qb-cycle__decision-label">{decisionLabel}</span>
            {item.decision}
          </p>
        </li>
      ))}
    </ol>
  );
}
