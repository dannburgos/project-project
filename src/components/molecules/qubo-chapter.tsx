import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type QuboChapterTone = 'light' | 'tint' | 'dark';

type QuboChapterProps = {
  id: string;
  titleId: string;
  tone: QuboChapterTone;
  children: ReactNode;
};

// Capítulo del caso. Tres mundos: claro (blanco), tinte (azul muy suave) y
// oscuro (azul noche). El lima solo vive en el oscuro.
export function QuboChapter({ id, titleId, tone, children }: QuboChapterProps) {
  return (
    <section
      id={id}
      className={cn(
        'qb-chapter',
        tone === 'light' && 'qb-chapter--light',
        tone === 'tint' && 'qb-chapter--tint',
        tone === 'dark' && 'qb-chapter--dark'
      )}
      aria-labelledby={titleId}
    >
      <div className="qb-chapter__inner">{children}</div>
    </section>
  );
}
