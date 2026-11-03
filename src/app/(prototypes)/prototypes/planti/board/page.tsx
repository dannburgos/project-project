import type { Metadata } from 'next';

import { PlantiBoard } from '@/domains/planti/components/organisms/planti-board';
import { plantiMessages } from '@/domains/planti/messages';

export const metadata: Metadata = {
  title: plantiMessages.board.title
};

// Tablero de revisión: las pantallas del recorrido, una al lado de la otra
export default function PlantiBoardPage() {
  return <PlantiBoard />;
}
