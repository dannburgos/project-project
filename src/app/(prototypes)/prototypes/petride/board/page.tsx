import type { Metadata } from 'next';

import { PetrideBoard } from '@/domains/petride/components/organisms/petride-board';
import { PETRIDE_FLOW_ONE_SCREENS } from '@/domains/petride/components/organisms/petride-flow-screens';
import { petrideMessages } from '@/domains/petride/messages';

export const metadata: Metadata = {
  title: petrideMessages.meta.boardTitle
};

// Tablero de revisión del prototipo de PetRide: las pantallas del flujo una al
// lado de la otra
export default function PetrideBoardPage() {
  return (
    <PetrideBoard
      copy={petrideMessages.board}
      screens={PETRIDE_FLOW_ONE_SCREENS}
    />
  );
}
