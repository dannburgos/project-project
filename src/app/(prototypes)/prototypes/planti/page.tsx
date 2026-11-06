import type { Metadata } from 'next';

import { PlantiPrototype } from '@/domains/planti/components/organisms/planti-prototype';
import { plantiMessages } from '@/domains/planti/messages';
import { getPlantiChapterNumber } from '@/domains/planti/planti-chapters';
import {
  PLANTI_PROTOTYPE_SCREENS,
  type PlantiPrototypeScreen
} from '@/domains/planti/prototype-screens';

export const metadata: Metadata = {
  title: plantiMessages.meta.title
};

type PlantiPrototypePageProps = {
  searchParams: Promise<{ screen?: string; embed?: string; flow?: string }>;
};

function isPrototypeScreen(value?: string): value is PlantiPrototypeScreen {
  return PLANTI_PROTOTYPE_SCREENS.some(screen => screen === value);
}

// Prototipo de Planti a pantalla completa. El caso de Planti muestra esta
// misma página dentro de un celular. Sin parámetros corre la secuencia de
// entrada desde la portada. Mientras se construyen las pantallas, ?screen=
// elige una suelta (splash, onboarding, home-empty, home-tasks). Con ?embed=1
// (dentro del caso) los controles se reducen a un botón de reproducir y pausar.
export default async function PlantiPrototypePage({
  searchParams
}: PlantiPrototypePageProps) {
  const { screen, embed, flow } = await searchParams;

  return (
    <PlantiPrototype
      chapterNumber={getPlantiChapterNumber(flow)}
      screen={isPrototypeScreen(screen) ? screen : undefined}
      hasMinimalControls={embed === '1'}
    />
  );
}
