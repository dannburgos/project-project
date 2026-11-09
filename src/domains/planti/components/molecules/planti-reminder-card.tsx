import { Droplet, Leaf, Repeat, Sprout } from 'lucide-react';

const CARE_ICONS = {
  water: Droplet,
  fertilize: Sprout,
  leaves: Leaf
} as const;

type PlantiReminderCardProps = {
  title: string;
  // La hora, en grande, y si es de la mañana o de la tarde
  hour: string;
  period: string;
  // Cómo se hace, en una línea
  how: string;
  careKey: keyof typeof CARE_ICONS;
  care: string;
  frequency: string;
};

// Un aviso de la línea de tiempo, como en una agenda: la hora a la izquierda,
// y a la derecha qué toca, cómo se hace y cada cuánto
export function PlantiReminderCard({
  title,
  hour,
  period,
  how,
  careKey,
  care,
  frequency
}: PlantiReminderCardProps) {
  const CareIcon = CARE_ICONS[careKey];

  return (
    <li className="planti-reminder">
      <div className="planti-reminder__clock">
        <span className="planti-reminder__hour">{hour}</span>
        <span className="planti-reminder__period">{period}</span>
      </div>
      <div className="planti-reminder__body">
        <h3 className="planti-reminder__title">{title}</h3>
        <p className="planti-reminder__how">{how}</p>
        <div className="planti-reminder__tags">
          <span className="planti-reminder__tag">
            <CareIcon aria-hidden="true" />
            {care}
          </span>
          <span className="planti-reminder__tag">
            <Repeat aria-hidden="true" />
            {frequency}
          </span>
        </div>
      </div>
    </li>
  );
}
