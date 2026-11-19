import type { petrideMessages } from '../../messages';
import type { PetrideNavKey } from '../../types/petride.types';
import { PetrideCameraScreen } from './petride-camera-screen';
import { PetridePetIdentityScreen } from './petride-pet-identity-screen';
import { PetridePetRegisteredScreen } from './petride-pet-registered-screen';
import { PetridePetReviewScreen } from './petride-pet-review-screen';
import { PetridePetTravelScreen } from './petride-pet-travel-screen';
import { PetridePetsScreen } from './petride-pets-screen';

export type PetrideFlowScreenKey = keyof typeof petrideMessages.board.frames;

export type PetrideFlowScreen = {
  key: PetrideFlowScreenKey;
  navActive?: PetrideNavKey;
  isStatusLight?: boolean;
  screen: React.ReactNode;
};

// Pantallas del flujo 1 en orden. Las usan el tablero y la vista de una sola
// pantalla que el caso muestra dentro de cada celular
export const PETRIDE_FLOW_ONE_SCREENS: PetrideFlowScreen[] = [
  { key: 'list', navActive: 'pets', screen: <PetridePetsScreen /> },
  { key: 'camera', isStatusLight: true, screen: <PetrideCameraScreen /> },
  { key: 'identity', screen: <PetridePetIdentityScreen /> },
  { key: 'travel', screen: <PetridePetTravelScreen /> },
  { key: 'review', isStatusLight: true, screen: <PetridePetReviewScreen /> },
  {
    key: 'registered',
    isStatusLight: true,
    screen: <PetridePetRegisteredScreen />
  },
  {
    key: 'listUpdated',
    navActive: 'pets',
    screen: <PetridePetsScreen variant="updated" />
  }
];

export function findPetrideFlowScreen(key: string) {
  return PETRIDE_FLOW_ONE_SCREENS.find(item => item.key === key);
}
