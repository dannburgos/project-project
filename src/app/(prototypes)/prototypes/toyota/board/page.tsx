import type { Metadata } from 'next';

import { TaBoard } from '@/domains/toyota-advisor/components/organisms/ta-board';
import { toyotaAdvisorMessages } from '@/domains/toyota-advisor/messages';

export const metadata: Metadata = {
  title: toyotaAdvisorMessages.meta.boardTitle
};

// Tablero de revisión del prototipo de Toyota: las pantallas de «Encuentra
// tu Toyota» a tamaño real
export default function ToyotaBoardPage() {
  return <TaBoard />;
}
