import { notFound } from 'next/navigation';

import { PetrideScreenMotion } from '@/domains/petride/components/molecules/petride-screen-motion';
import { PetrideDevice } from '@/domains/petride/components/organisms/petride-device';
import {
  PETRIDE_ALL_SCREENS,
  findPetrideFlowScreen
} from '@/domains/petride/components/organisms/petride-flow-screens';

// Pantallas sin dedo: la persona no toca nada en ellas
const SCREENS_WITHOUT_TOUCH = ['listUpdated', 'searching'];

type PetrideScreenPageProps = {
  params: Promise<{ screen: string }>;
};

export function generateStaticParams() {
  return PETRIDE_ALL_SCREENS.map(item => ({ screen: item.key }));
}

// Una sola pantalla de los flujos, sin marco: el caso la muestra dentro de cada
// celular del módulo Flow
export default async function PetrideScreenPage({
  params
}: PetrideScreenPageProps) {
  const { screen } = await params;
  const item = findPetrideFlowScreen(screen);
  if (!item) notFound();

  return (
    <PetrideScreenMotion
      screen={item.key}
      hasTouch={!SCREENS_WITHOUT_TOUCH.includes(item.key)}
    >
      <PetrideDevice
        navActive={item.navActive}
        isStatusLight={item.isStatusLight}
        isBare
      >
        {item.screen}
      </PetrideDevice>
    </PetrideScreenMotion>
  );
}
