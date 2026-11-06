import type { Metadata } from 'next';

import { PlantiTimelineReview } from '@/domains/planti/components/organisms/planti-timeline-review';
import { plantiMessages } from '@/domains/planti/messages';

export const metadata: Metadata = {
  title: plantiMessages.timeline.title
};

// Revisión del recorrido: el prototipo corriendo y, al lado, los pasos con sus
// tiempos
export default function PlantiTimelinePage() {
  return <PlantiTimelineReview />;
}
