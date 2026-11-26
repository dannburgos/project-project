import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type QuboBlockProps = {
  title: string;
  lead?: string;
  children: ReactNode;
  className?: string;
};

// Bloque dentro de un capítulo: un título pequeño y su contenido
export function QuboBlock({
  title,
  lead,
  children,
  className
}: QuboBlockProps) {
  return (
    <div className={cn('qb-block', className)} data-qb-reveal>
      <h3 className="qb-block__title">{title}</h3>
      {lead && <p className="qb-block__lead">{lead}</p>}
      {children}
    </div>
  );
}
