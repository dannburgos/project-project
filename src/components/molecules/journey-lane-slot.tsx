'use client';

import { JourneyFocusCard } from '@/components/molecules/journey-focus-card';
import type { JourneyStage } from '@/content/journey';
import { useSlotPresence } from '@/hooks/use-slot-presence';

type JourneyLaneSlotProps = {
  stage: JourneyStage | null;
  // Hacia dónde se ancla la tarjeta dentro de su lugar mientras este crece o
  // se encoge: así no se monta sobre su vecina.
  align: 'start' | 'center' | 'end';
};

// Lugar de una tarjeta junto a la línea. La tarjeta se despliega desde la
// línea al aparecer, cambia su contenido y se recoge al desaparecer.
export function JourneyLaneSlot({ stage, align }: JourneyLaneSlotProps) {
  const { shown, phase } = useSlotPresence(stage);
  if (!shown) return null;

  return (
    <div className="journey-slot" data-phase={phase} data-align={align}>
      <JourneyFocusCard stage={shown} />
    </div>
  );
}
