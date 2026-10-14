import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import HomePage from '@/app/page';
import { IntroPreview } from '@/components/organisms/intro-preview';

// Que los buscadores no la indexen
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};

// Página de prueba: el Home real con la entrada encima, para verla en alta.
// Solo existe en desarrollo; en el sitio publicado no.
export default function IntroPreviewPage() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <>
      <HomePage />
      <IntroPreview />
    </>
  );
}
