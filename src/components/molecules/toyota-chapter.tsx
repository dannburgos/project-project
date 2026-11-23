import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type ToyotaWorld = 'light' | 'dark';

type ToyotaChapterProps = {
  index: number;
  world: ToyotaWorld;
  label: string;
  children: ReactNode;
};

const WORLD_CLASS: Record<ToyotaWorld, string> = {
  light: 'ty-chapter--light',
  dark: 'ty-chapter--dark'
};

// Capítulo del caso. Su mundo (claro u oscuro) cambia el fondo, avisa al
// encabezado del sitio qué superficie hay debajo y le dice al índice en qué
// capítulo va.
export function ToyotaChapter({
  index,
  world,
  label,
  children
}: ToyotaChapterProps) {
  return (
    <section
      id={`toyota-${index}`}
      className={cn('ty-chapter', WORLD_CLASS[world])}
      data-ty-chapter={index}
      data-ty-world={world}
      data-surface={world}
      aria-label={label}
    >
      {children}
    </section>
  );
}
