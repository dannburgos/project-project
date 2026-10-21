'use client';

import type { ReactNode } from 'react';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

type CaseRevealProps = {
  children: ReactNode;
  className?: string;
};

// Envoltura de cada bloque de un caso: aparece al entrar en pantalla (sube un
// poco y se aclara). Sus partes marcadas con "case-reveal__item" aparecen en
// cadena, en el orden que indica --item-index.
export function CaseReveal({ children, className }: CaseRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={cn(
        'case-reveal',
        isInView && 'case-reveal--visible',
        className
      )}
    >
      {children}
    </div>
  );
}
