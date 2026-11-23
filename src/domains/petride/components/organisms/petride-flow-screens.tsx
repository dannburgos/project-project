import type { petrideMessages } from '../../messages';
import type { PetrideNavKey } from '../../types/petride.types';
import { PetrideDriverScreen } from './petride-driver-screen';
import { PetrideFareScreen } from './petride-fare-screen';
import { PetrideHomeScreen } from './petride-home-screen';
import { PetridePlacesScreen } from './petride-places-screen';
import { PetrideRatingScreen } from './petride-rating-screen';
import { PetrideSearchingScreen } from './petride-searching-screen';
import { PetrideTripPetsScreen } from './petride-trip-pets-screen';
import { PetrideCameraScreen } from './petride-camera-screen';
import { PetridePetIdentityScreen } from './petride-pet-identity-screen';
import { PetridePetRegisteredScreen } from './petride-pet-registered-screen';
import { PetridePetReviewScreen } from './petride-pet-review-screen';
import { PetridePetTravelScreen } from './petride-pet-travel-screen';
import { PetridePetsScreen } from './petride-pets-screen';

export type PetrideFlowScreenKey =
  | keyof typeof petrideMessages.board.frames
  | keyof typeof petrideMessages.boardTwo.frames;

export type PetrideFlowScreen = {
  key: PetrideFlowScreenKey;
  navActive?: PetrideNavKey;
  isStatusLight?: boolean;
  screen: React.ReactNode;
};

// Pantallas de cada flujo en orden. Las usan los tableros y la vista de una
// sola pantalla que el caso muestra dentro de cada celular
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

export const PETRIDE_FLOW_TWO_SCREENS: PetrideFlowScreen[] = [
  {
    key: 'home',
    navActive: 'home',
    isStatusLight: true,
    screen: <PetrideHomeScreen />
  },
  { key: 'places', isStatusLight: true, screen: <PetridePlacesScreen /> },
  { key: 'pets', screen: <PetrideTripPetsScreen /> },
  { key: 'fare', screen: <PetrideFareScreen /> },
  {
    key: 'searching',
    isStatusLight: true,
    screen: <PetrideSearchingScreen />
  },
  { key: 'driver', screen: <PetrideDriverScreen /> },
  { key: 'rating', isStatusLight: true, screen: <PetrideRatingScreen /> }
];

export const PETRIDE_ALL_SCREENS = [
  ...PETRIDE_FLOW_ONE_SCREENS,
  ...PETRIDE_FLOW_TWO_SCREENS
];

export function findPetrideFlowScreen(key: string) {
  return PETRIDE_ALL_SCREENS.find(item => item.key === key);
}
