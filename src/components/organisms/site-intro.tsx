'use client';

import { IntroAssemblePro } from '@/components/organisms/intro-assemble-pro';
import { useSiteIntro } from '@/hooks/use-site-intro';

// Entrada del sitio sobre el Home (ver useSiteIntro): corre al entrar o al
// recargar y luego se quita
export function SiteIntro() {
  const { isPlaying, handleDone } = useSiteIntro();

  if (!isPlaying) return null;

  return <IntroAssemblePro onDone={handleDone} />;
}
