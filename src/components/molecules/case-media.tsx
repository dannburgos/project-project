'use client';

import { ImageIcon } from 'lucide-react';

import { useEntryProgress } from '@/hooks/use-entry-progress';

type CaseMediaProps = {
  label: string;
};

// Imagen principal del caso: una tarjeta que crece hacia los lados con el
// scroll, sin llegar a ocupar todo el ancho de la pantalla.
export function CaseMedia({ label }: CaseMediaProps) {
  const ref = useEntryProgress<HTMLElement>('--media-progress');

  return (
    <section ref={ref} className="case-media" aria-label={label}>
      <div className="case-media__card">
        <ImageIcon aria-hidden="true" />
        <span>{label}</span>
      </div>
    </section>
  );
}
