import { BatteryFull, Signal, Wifi } from 'lucide-react';

import { cn } from '@/lib/utils';

import { sonopizzaMessages } from '../../messages';
import type { SonopizzaNavKey } from '../../types/sonopizza.types';
import { SonopizzaBottomNav } from '../molecules/sonopizza-bottom-nav';

type SonopizzaDeviceProps = {
  navActive?: SonopizzaNavKey;
  cartCount?: number;
  // Sobre fondos azules o fotos, la hora y los íconos van en blanco
  isStatusLight?: boolean;
  // Sin marco: solo la pantalla, para mostrarla dentro de otro celular
  isBare?: boolean;
  children: React.ReactNode;
};

// Marco de un celular (390 × 844) con su isla, la barra de estado y, en las
// pantallas principales, la barra inferior flotante de la app
export function SonopizzaDevice({
  navActive,
  cartCount = 0,
  isStatusLight = false,
  isBare = false,
  children
}: SonopizzaDeviceProps) {
  return (
    <div className={cn('sp-device', isBare && 'sp-device--bare')}>
      <div className="sp-app">
        {children}
        {navActive && (
          <SonopizzaBottomNav active={navActive} cartCount={cartCount} />
        )}
        <div
          className={cn(
            'sp-device__status',
            isStatusLight && 'sp-device__status--light'
          )}
          aria-hidden="true"
        >
          <span>{sonopizzaMessages.device.time}</span>
          <span className="sp-device__icons">
            <Signal />
            <Wifi />
            <BatteryFull />
          </span>
        </div>
        <span
          className={cn(
            'sp-device__home',
            isStatusLight && 'sp-device__home--light'
          )}
          aria-hidden="true"
        />
      </div>
      <span className="sp-device__island" aria-hidden="true" />
    </div>
  );
}
