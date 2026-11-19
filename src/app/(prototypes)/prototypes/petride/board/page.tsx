import type { Metadata } from 'next';

import { PetrideBoard } from '@/domains/petride/components/organisms/petride-board';
import { petrideMessages } from '@/domains/petride/messages';

export const metadata: Metadata = {
  title: petrideMessages.meta.boardTitle
};

// Tablero de revisión del prototipo de PetRide: las pantallas del flujo una al
// lado de la otra
export default function PetrideBoardPage() {
  return <PetrideBoard />;
}
