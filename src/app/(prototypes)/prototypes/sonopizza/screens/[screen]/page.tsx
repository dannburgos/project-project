import { notFound } from 'next/navigation';

import { SonopizzaDevice } from '@/domains/sonopizza/components/organisms/sonopizza-device';
import {
  SONOPIZZA_ALL_SCREENS,
  findSonopizzaFlowScreen
} from '@/domains/sonopizza/components/organisms/sonopizza-flow-screens';

type SonopizzaScreenPageProps = {
  params: Promise<{ screen: string }>;
};

export function generateStaticParams() {
  return SONOPIZZA_ALL_SCREENS.map(item => ({ screen: item.key }));
}

// Una sola pantalla de los flujos, sin marco: el caso la muestra dentro del
// teléfono de cada escena del módulo "El producto en acción"
export default async function SonopizzaScreenPage({
  params
}: SonopizzaScreenPageProps) {
  const { screen } = await params;
  const item = findSonopizzaFlowScreen(screen);
  if (!item) notFound();

  return (
    <main className="sp-screen-page">
      <SonopizzaDevice
        navActive={item.navActive}
        cartCount={item.cartCount}
        isStatusLight={item.isStatusLight}
        isBare
      >
        {item.screen}
      </SonopizzaDevice>
    </main>
  );
}
