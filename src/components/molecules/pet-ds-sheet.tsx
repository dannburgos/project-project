import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PetDsSheetProps = {
  title: string;
  note?: string;
  badge?: string;
  isWide?: boolean;
  children: ReactNode;
};

// Hoja clara del sistema de diseño: la app es de modo claro, así que cada
// pieza se muestra sobre su propio fondo dentro del caso oscuro
export function PetDsSheet({
  title,
  note,
  badge,
  isWide = false,
  children
}: PetDsSheetProps) {
  return (
    <article
      className={cn('pet-ds__sheet', isWide && 'pet-ds__sheet--wide')}
      data-pet-rise
    >
      <header className="pet-ds__sheet-head">
        <h4 className="pet-ds__sheet-title">{title}</h4>
        {note && <p className="pet-ds__sheet-note">{note}</p>}
        {badge && <span className="pet-ds__sheet-badge">{badge}</span>}
      </header>
      {children}
    </article>
  );
}
