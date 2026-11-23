import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

// Ancho de la hoja en la grilla de tres columnas: dos columnas o todas
type SonoDsSheetSpan = 'wide' | 'full';

const SPAN_CLASS: Record<SonoDsSheetSpan, string> = {
  wide: 'sono-ds__sheet--wide',
  full: 'sono-ds__sheet--full'
};

type SonoDsSheetProps = {
  title: string;
  note?: string;
  span?: SonoDsSheetSpan;
  children: ReactNode;
};

// Hoja del sistema de diseño de Sonopizza: tarjeta blanca con borde y sombra
// corrida, su nombre arriba y la muestra abajo. Entra al asomarse en el área
// con scroll libre (data-free-in).
export function SonoDsSheet({ title, note, span, children }: SonoDsSheetProps) {
  return (
    <article
      className={cn('sono-ds__sheet', span && SPAN_CLASS[span])}
      data-free-in
    >
      <header className="sono-ds__sheet-head">
        <h4 className="sono-ds__sheet-title">{title}</h4>
        {note && <p className="sono-ds__sheet-note">{note}</p>}
      </header>
      {children}
    </article>
  );
}
