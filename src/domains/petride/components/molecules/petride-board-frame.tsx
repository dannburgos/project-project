import type { PetrideNavKey } from '../../types/petride.types';
import { PetrideDevice } from '../organisms/petride-device';

type PetrideBoardFrameProps = {
  step: number;
  title: string;
  note: string;
  navActive?: PetrideNavKey;
  isStatusLight?: boolean;
  children: React.ReactNode;
};

// Una pantalla del tablero: el celular reducido, su número, su nombre y qué
// pasa en ella
export function PetrideBoardFrame({
  step,
  title,
  note,
  navActive,
  isStatusLight,
  children
}: PetrideBoardFrameProps) {
  return (
    <li className="petride-board__frame">
      <div className="petride-board__screen">
        <PetrideDevice navActive={navActive} isStatusLight={isStatusLight}>
          {children}
        </PetrideDevice>
      </div>
      <p className="petride-board__step">
        <span className="petride-board__number">
          {String(step).padStart(2, '0')}
        </span>
        {title}
      </p>
      <p className="petride-board__note">{note}</p>
    </li>
  );
}
