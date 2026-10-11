import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PageCurtainProps = {
  children: ReactNode;
  // "flush" quita el margen interior: cada módulo de la página pone el suyo
  // (Home, con módulos de pantalla completa).
  variant?: 'padded' | 'flush';
};

// Cortina: el contenido de la página va por encima del cierre de contacto
// (ClosingContact) y sube con el scroll para descubrirlo. El scroll suave lo
// pone el sitio completo (SmoothScroll).
export function PageCurtain({
  children,
  variant = 'padded'
}: PageCurtainProps) {
  return (
    <div
      className={cn(
        'page-curtain',
        variant === 'flush' && 'page-curtain--flush'
      )}
    >
      {children}
    </div>
  );
}
