import type { Metadata } from 'next';

import { PlantiBoard } from '@/domains/planti/components/organisms/planti-board';
import { plantiMessages } from '@/domains/planti/messages';
import { getPlantiChapterNumber } from '@/domains/planti/planti-chapters';

type PlantiBoardPageProps = {
  searchParams: Promise<{ flow?: string }>;
};

export async function generateMetadata({
  searchParams
}: PlantiBoardPageProps): Promise<Metadata> {
  const { flow } = await searchParams;
  const { board } = plantiMessages;

  const titles = { 1: board.title, 2: board.titleTwo, 3: board.titleThree };

  return { title: titles[getPlantiChapterNumber(flow)] };
}

// Tablero de revisión: el prototipo corriendo y las pantallas del recorrido,
// una al lado de la otra. Con ?flow=2 o ?flow=3 muestra el capítulo 2 o el 3
export default async function PlantiBoardPage({
  searchParams
}: PlantiBoardPageProps) {
  const { flow } = await searchParams;

  return <PlantiBoard chapterNumber={getPlantiChapterNumber(flow)} />;
}
