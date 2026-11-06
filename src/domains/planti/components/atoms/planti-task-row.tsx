import type { LucideIcon } from 'lucide-react';

type PlantiTaskRowProps = {
  icon: LucideIcon;
  name: string;
  detail: string;
  // Estado a la derecha (opcional), por ejemplo un PlantiStatusPill
  status?: React.ReactNode;
};

// Una fila con ícono, nombre, un detalle (cuándo, o un valor) y, si hace
// falta, su estado
export function PlantiTaskRow({
  icon: Icon,
  name,
  detail,
  status
}: PlantiTaskRowProps) {
  return (
    <div className="planti-task">
      <span className="planti-task__icon" aria-hidden="true">
        <Icon />
      </span>
      <div className="planti-task__text">
        <p className="planti-task__name">{name}</p>
        <p className="planti-task__time">{detail}</p>
      </div>
      {status}
    </div>
  );
}
