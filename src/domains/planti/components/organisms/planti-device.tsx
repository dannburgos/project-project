import { BatteryFull, Signal, Wifi } from 'lucide-react';

import { plantiMessages } from '../../messages';
import {
  PlantiBottomNav,
  type PlantiNavKey
} from '../molecules/planti-bottom-nav';

type PlantiDeviceProps = {
  children: React.ReactNode;
  navActive?: PlantiNavKey | null;
};

// Marco de un celular (375 x 750 de pantalla) con su isla y su barra de
// estado, para que la pantalla blanca no se pierda contra un fondo blanco. La
// barra de navegación es del celular, no de cada pantalla: se queda quieta
// mientras las pantallas cambian.
export function PlantiDevice({
  children,
  navActive = null
}: PlantiDeviceProps) {
  const { device } = plantiMessages;

  return (
    <div className="planti-device">
      <div className="planti-app">
        {children}
        {navActive && <PlantiBottomNav active={navActive} />}
        <div className="planti-device__status" aria-hidden="true">
          <span className="planti-device__time">{device.time}</span>
          <span className="planti-device__icons">
            <Signal />
            <Wifi />
            <BatteryFull />
          </span>
        </div>
        <span className="planti-device__home" aria-hidden="true" />
      </div>
      <span className="planti-device__island" aria-hidden="true" />
    </div>
  );
}
