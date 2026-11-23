import type { Metadata } from 'next';

import { PetrideBoard } from '@/domains/petride/components/organisms/petride-board';
import { PETRIDE_FLOW_TWO_SCREENS } from '@/domains/petride/components/organisms/petride-flow-screens';
import { petrideMessages } from '@/domains/petride/messages';

export const metadata: Metadata = {
  title: petrideMessages.meta.boardTwoTitle
};

// Tablero del flujo 2 (Solicitar viaje): sus pantallas una al lado de la otra
export default function PetrideBoardTwoPage() {
  return (
    <PetrideBoard
      copy={petrideMessages.boardTwo}
      screens={PETRIDE_FLOW_TWO_SCREENS}
    />
  );
}
