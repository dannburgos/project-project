import { sonopizzaMessages } from '../../messages';
import type { SonopizzaNavKey } from '../../types/sonopizza.types';
import { SonopizzaDevice } from '../organisms/sonopizza-device';

type SonopizzaBoardFrameProps = {
  step: string;
  title: string;
  note: string;
  // Variación de la pantalla anterior (búsqueda, error, deshacer…)
  isState?: boolean;
  navActive?: SonopizzaNavKey;
  cartCount?: number;
  isStatusLight?: boolean;
  children: React.ReactNode;
};

// Una pantalla del tablero: el celular reducido, su número, su nombre y qué
// mejora (con una etiqueta si es un estado de otra pantalla)
export function SonopizzaBoardFrame({
  step,
  title,
  note,
  isState = false,
  navActive,
  cartCount,
  isStatusLight,
  children
}: SonopizzaBoardFrameProps) {
  return (
    <li className="sp-board__frame">
      <div className="sp-board__screen">
        <SonopizzaDevice
          navActive={navActive}
          cartCount={cartCount}
          isStatusLight={isStatusLight}
        >
          {children}
        </SonopizzaDevice>
      </div>
      <p className="sp-board__step">
        <span className="sp-board__number">{step}</span>
        {title}
        {isState && (
          <span className="sp-board__state">
            {sonopizzaMessages.board.stateLabel}
          </span>
        )}
      </p>
      <p className="sp-board__note">{note}</p>
    </li>
  );
}
