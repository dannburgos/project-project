import type { sonopizzaMessages } from '../../messages';
import type { SonopizzaNavKey } from '../../types/sonopizza.types';
import { SonopizzaCartScreen } from './sonopizza-cart-screen';
import { SonopizzaCheckoutScreen } from './sonopizza-checkout-screen';
import { SonopizzaConfirmedScreen } from './sonopizza-confirmed-screen';
import { SonopizzaHomeScreen } from './sonopizza-home-screen';
import { SonopizzaNotificationsScreen } from './sonopizza-notifications-screen';
import { SonopizzaOrdersScreen } from './sonopizza-orders-screen';
import { SonopizzaMenuScreen } from './sonopizza-menu-screen';
import { SonopizzaProductScreen } from './sonopizza-product-screen';
import { SonopizzaTrackingScreen } from './sonopizza-tracking-screen';

export type SonopizzaScreenKey = keyof typeof sonopizzaMessages.board.frames;
export type SonopizzaFlowKey = keyof typeof sonopizzaMessages.board.groups;

export type SonopizzaFlowScreen = {
  key: SonopizzaScreenKey;
  // Número en el tablero ("02" o "02 · b" para un estado)
  step: string;
  isState?: boolean;
  navActive?: SonopizzaNavKey;
  cartCount?: number;
  isStatusLight?: boolean;
  screen: React.ReactNode;
};

export type SonopizzaFlow = {
  key: SonopizzaFlowKey;
  screens: SonopizzaFlowScreen[];
};

// Productos en el carrito del recorrido: una sola pizza, la vegetariana
const CART_COUNT = 1;

// Las pantallas clave de los tres flujos, en orden, con sus estados al lado
export const SONOPIZZA_FLOWS: SonopizzaFlow[] = [
  {
    key: 'flowOne',
    screens: [
      {
        key: 'home',
        step: '01',
        navActive: 'home',
        screen: <SonopizzaHomeScreen />
      },
      {
        key: 'menu',
        step: '02',
        navActive: 'menu',
        screen: <SonopizzaMenuScreen />
      },
      {
        key: 'notifications',
        step: '03',
        screen: <SonopizzaNotificationsScreen />
      }
    ]
  },
  {
    key: 'flowTwo',
    screens: [
      { key: 'product', step: '04', screen: <SonopizzaProductScreen /> }
    ]
  },
  {
    key: 'flowThree',
    screens: [
      {
        key: 'cart',
        step: '05',
        navActive: 'cart',
        cartCount: CART_COUNT,
        screen: <SonopizzaCartScreen />
      },
      { key: 'checkout', step: '06', screen: <SonopizzaCheckoutScreen /> },
      {
        key: 'confirmed',
        step: '07',
        isStatusLight: true,
        screen: <SonopizzaConfirmedScreen />
      },
      { key: 'tracking', step: '08', screen: <SonopizzaTrackingScreen /> },
      { key: 'orders', step: '09', screen: <SonopizzaOrdersScreen /> }
    ]
  }
];

// Todas las pantallas de los tres flujos en una sola lista
export const SONOPIZZA_ALL_SCREENS: SonopizzaFlowScreen[] =
  SONOPIZZA_FLOWS.flatMap(flow => flow.screens);

export function findSonopizzaFlowScreen(key: string) {
  return SONOPIZZA_ALL_SCREENS.find(item => item.key === key);
}
