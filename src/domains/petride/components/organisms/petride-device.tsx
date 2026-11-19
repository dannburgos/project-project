import { BatteryFull, Signal, Wifi } from 'lucide-react';

import { cn } from '@/lib/utils';

import { petrideMessages } from '../../messages';
import type { PetrideNavKey } from '../../types/petride.types';
import { PetrideBottomNav } from '../molecules/petride-bottom-nav';

type PetrideDeviceProps = {
  navActive?: PetrideNavKey;
  // Sobre fondos oscuros o fotos, la hora y los íconos van en blanco
  isStatusLight?: boolean;
  // Sin marco: solo la pantalla, para mostrarla dentro de otro celular
  isBare?: boolean;
  children: React.ReactNode;
};

// Marco de un celular (390 x 844) con su isla, la barra de estado y, en las
// pantallas principales, la barra inferior de la app
export function PetrideDevice({
  navActive,
  isStatusLight = false,
  isBare = false,
  children
}: PetrideDeviceProps) {
  return (
    <div className={cn('petride-device', isBare && 'petride-device--bare')}>
      <div className="petride-app">
        {children}
        {navActive && <PetrideBottomNav active={navActive} />}
        <div
          className={cn(
            'petride-device__status',
            isStatusLight && 'petride-device__status--light'
          )}
          aria-hidden="true"
        >
          <span>{petrideMessages.device.time}</span>
          <span className="petride-device__icons">
            <Signal />
            <Wifi />
            <BatteryFull />
          </span>
        </div>
        <span
          className={cn(
            'petride-device__home',
            (isStatusLight || navActive) && 'petride-device__home--light'
          )}
          aria-hidden="true"
        />
      </div>
      <span className="petride-device__island" aria-hidden="true" />
    </div>
  );
}
