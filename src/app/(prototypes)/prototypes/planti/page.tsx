import type { Metadata } from 'next';

import { PlantiFlowSwitcher } from '@/domains/planti/components/organisms/planti-flow-switcher';
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
// elige una suelta (splash, onboarding, home-empty, lock-screen). Con ?embed=1
// (dentro del caso) los controles se reducen a un botón de reproducir y pausar.
// En la página completa, un selector deja pasar del flujo 1 al 2.
export default async function PlantiPrototypePage({
  searchParams
}: PlantiPrototypePageProps) {
  const { screen, embed, flow } = await searchParams;

  const chapterNumber = getPlantiChapterNumber(flow);
  const hasScreen = isPrototypeScreen(screen);
  // En la página completa (no dentro del caso ni una pantalla suelta) se puede
  // pasar de un flujo a otro
  const hasSwitcher = embed !== '1' && !hasScreen;

  return (
    <>
      {hasSwitcher && <PlantiFlowSwitcher current={chapterNumber} />}
      <PlantiPrototype
        chapterNumber={chapterNumber}
        screen={hasScreen ? screen : undefined}
        hasMinimalControls={embed === '1'}
      />
    </>
  );
}
