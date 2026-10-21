import type { Metadata } from 'next';

import { PlantiPrototype } from '@/domains/planti/components/organisms/planti-prototype';
import { plantiMessages } from '@/domains/planti/messages';

export const metadata: Metadata = {
  title: plantiMessages.meta.title
};

// Prototipo de Planti a pantalla completa. El caso de Planti muestra esta
// misma página dentro de un celular.
export default function PlantiPrototypePage() {
  return <PlantiPrototype />;
}
