import { Droplet, Leaf, Sprout } from 'lucide-react';

const CARE_ICONS = {
  water: Droplet,
  fertilize: Sprout,
  leaves: Leaf
} as const;

type PlantiTaskCardProps = {
  title: string;
  plant: string;
  hour: string;
  period: string;
  careKey: keyof typeof CARE_ICONS;
  care: string;
};

// Un cuidado del día: la hora a la izquierda, en grande, y a la derecha qué
// toca, de qué planta y qué tipo de cuidado es
export function PlantiTaskCard({
  title,
  plant,
  hour,
  period,
  careKey,
  care
}: PlantiTaskCardProps) {
  const CareIcon = CARE_ICONS[careKey];

  return (
    <li className="planti-task-card">
      <div className="planti-task-card__clock">
        <span className="planti-task-card__hour">{hour}</span>
        <span className="planti-task-card__period">{period}</span>
      </div>
      <div className="planti-task-card__body">
        <h3 className="planti-task-card__title">{title}</h3>
        <p className="planti-task-card__plant">{plant}</p>
        <span className="planti-task-card__tag">
          <CareIcon aria-hidden="true" />
          {care}
        </span>
      </div>
    </li>
  );
}
