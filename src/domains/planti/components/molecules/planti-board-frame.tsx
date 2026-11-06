import { PlantiDevice } from '../organisms/planti-device';
import type { PlantiNavKey } from './planti-bottom-nav';

type PlantiBoardFrameProps = {
  step: number;
  title: string;
  note: string;
  children: React.ReactNode;
  navActive?: PlantiNavKey | null;
};

// Una pantalla del tablero: el celular reducido, con su número, su nombre y
// qué pasa en ella
export function PlantiBoardFrame({
  step,
  title,
  note,
  children,
  navActive = null
}: PlantiBoardFrameProps) {
  return (
    <li className="planti-board__frame">
      <div className="planti-board__screen">
        <PlantiDevice navActive={navActive}>{children}</PlantiDevice>
      </div>
      <p className="planti-board__step">
        {step} · {title}
      </p>
      <p className="planti-board__note">{note}</p>
    </li>
  );
}
