import { notFound } from 'next/navigation';

import { PetrideScreenMotion } from '@/domains/petride/components/molecules/petride-screen-motion';
import { PetrideDevice } from '@/domains/petride/components/organisms/petride-device';
import {
  PETRIDE_FLOW_ONE_SCREENS,
  findPetrideFlowScreen
} from '@/domains/petride/components/organisms/petride-flow-screens';

type PetrideScreenPageProps = {
  params: Promise<{ screen: string }>;
};

export function generateStaticParams() {
  return PETRIDE_FLOW_ONE_SCREENS.map(item => ({ screen: item.key }));
}

// Una sola pantalla del flujo 1, sin marco: el caso la muestra dentro de cada
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
      hasTouch={item.key !== 'listUpdated'}
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
