'use client';

import { ImageIcon } from 'lucide-react';

import { useEntryProgress } from '@/hooks/use-entry-progress';

type HomeMediaPlaceholderProps = {
  label: string;
  number: number;
  title: string;
  note: string;
};

// Espacio de una pantalla completa para una imagen, un video o una animación
// que se define después (referencia: midu.design). Asoma como un marco con
// márgenes a los lados y esquinas redondeadas, y crece hacia los lados al hacer
// scroll hasta llenar toda la pantalla, de borde a borde.
export function HomeMediaPlaceholder({
  label,
  number,
  title,
  note
}: HomeMediaPlaceholderProps) {
  const ref = useEntryProgress<HTMLElement>('--media-progress');

  return (
    <section
      ref={ref}
      className="home-media"
      aria-labelledby={`module-${number}`}
    >
      <div className="home-media__frame">
        <p className="home-media__label">
          {label} {number}
        </p>
        <div className="home-media__content">
          <ImageIcon aria-hidden="true" />
          <h2 id={`module-${number}`} className="home-media__title">
            {title}
          </h2>
          <p className="home-media__note">{note}</p>
        </div>
      </div>
    </section>
  );
}
