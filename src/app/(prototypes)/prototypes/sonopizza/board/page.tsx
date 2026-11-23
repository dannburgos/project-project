import type { Metadata } from 'next';

import { SonopizzaBoard } from '@/domains/sonopizza/components/organisms/sonopizza-board';
import { SONOPIZZA_FLOWS } from '@/domains/sonopizza/components/organisms/sonopizza-flow-screens';
import { sonopizzaMessages } from '@/domains/sonopizza/messages';

export const metadata: Metadata = {
  title: sonopizzaMessages.meta.boardTitle
};

// Tablero de revisión del prototipo de Sonopizza: las pantallas clave de los
// tres flujos, una al lado de la otra
export default function SonopizzaBoardPage() {
  return <SonopizzaBoard flows={SONOPIZZA_FLOWS} />;
}
