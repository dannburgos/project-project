import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type CaseStoryImageProps = ComponentProps<'div'> & {
  label: string;
  // La foto, cuando ya exista; mientras tanto se muestra la etiqueta
  src?: string;
  // tone: imagen de apoyo (tono plano) · paper: sobre el mundo verde ·
  // leaf: imagen grande de respiro (con franjas de hojas)
  variant?: 'tone' | 'paper' | 'leaf';
};

// Espacio marcado para una imagen que llega después: dice qué foto va ahí
export function CaseStoryImage({
  label,
  src,
  variant = 'tone',
  className,
  ...props
}: CaseStoryImageProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'story-image',
        variant === 'paper' && 'story-image--paper',
        variant === 'leaf' && 'story-image--leaf',
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt="" className="story-image__photo" />
      ) : (
        <span className="story-image__label" aria-hidden="true">
          {label}
        </span>
      )}
    </div>
  );
}
