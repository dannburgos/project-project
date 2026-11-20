import type { sonopizzaMessages } from '../../messages';
import type { SonopizzaNavKey } from '../../types/sonopizza.types';
import { SonopizzaAddedScreen } from './sonopizza-added-screen';
import { SonopizzaCartScreen } from './sonopizza-cart-screen';
import { SonopizzaConfirmedScreen } from './sonopizza-confirmed-screen';
import { SonopizzaCustomScreen } from './sonopizza-custom-screen';
import { SonopizzaDetailScreen } from './sonopizza-detail-screen';
import { SonopizzaEmptyCartScreen } from './sonopizza-empty-cart-screen';
import { SonopizzaHomeScreen } from './sonopizza-home-screen';
import { SonopizzaMenuScreen } from './sonopizza-menu-screen';

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

// Productos en el carrito del recorrido (la vegetariana y dos pepperoni)
const CART_COUNT = 3;

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
        key: 'search',
        step: '02 · b',
        isState: true,
        screen: <SonopizzaMenuScreen variant="search" />
      },
      {
        key: 'detail',
        step: '03',
        isStatusLight: true,
        screen: <SonopizzaDetailScreen />
      }
    ]
  },
  {
    key: 'flowTwo',
    screens: [
      { key: 'custom', step: '04', screen: <SonopizzaCustomScreen /> },
      {
        key: 'missingSize',
        step: '04 · b',
        isState: true,
        screen: <SonopizzaCustomScreen variant="missingSize" />
      },
      { key: 'added', step: '05', screen: <SonopizzaAddedScreen /> }
    ]
  },
  {
    key: 'flowThree',
    screens: [
      {
        key: 'cart',
        step: '06',
        navActive: 'cart',
        cartCount: CART_COUNT,
        screen: <SonopizzaCartScreen />
      },
      {
        key: 'undo',
        step: '06 · b',
        isState: true,
        navActive: 'cart',
        cartCount: 1,
        screen: <SonopizzaCartScreen variant="undo" />
      },
      {
        key: 'confirmed',
        step: '07',
        isStatusLight: true,
        screen: <SonopizzaConfirmedScreen />
      },
      {
        key: 'emptyCart',
        step: '08',
        isState: true,
        navActive: 'cart',
        screen: <SonopizzaEmptyCartScreen />
      }
    ]
  }
];
