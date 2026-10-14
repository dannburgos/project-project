'use client';

import { IntroAssemblePro } from '@/components/organisms/intro-assemble-pro';
import { useIntroPreview } from '@/hooks/use-intro-preview';

// Entrada pro de la primera visita sobre el Home real. Corre al abrir la
// página; para repetirla, se recarga.
export function IntroPreview() {
  const { isPlaying, handleDone } = useIntroPreview();

  if (!isPlaying) return null;

  return <IntroAssemblePro mode="full" onDone={handleDone} />;
}
