'use client';

import { Fragment, type CSSProperties } from 'react';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export type RevealSegment = {
  text: string;
  // Las partes clave se resaltan; el resto queda en gris.
  isKey?: boolean;
};

type BlurRevealTextProps = {
  segments: readonly RevealSegment[];
  as?: 'h2' | 'p';
  className?: string;
  // Retraso inicial y separación entre palabras (en ms).
  delay?: number;
  step?: number;
};

// Texto que aparece palabra por palabra al entrar en pantalla: primero
// desenfocado y un poco más abajo, después nítido (referencia: midu.design).
export function BlurRevealText({
  segments,
  as: Element = 'p',
  className,
  delay = 0,
  step = 45
}: BlurRevealTextProps) {
  const { ref, isInView } = useInView<HTMLElement>(0.2);
  let wordIndex = 0;

  return (
    <Element
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={cn(
        'blur-reveal',
        isInView && 'blur-reveal--visible',
        className
      )}
    >
      {segments.map((segment, segmentIndex) => (
        <Fragment key={segmentIndex}>
          {segment.text.split(' ').map((word, index) => {
            const style = {
              '--reveal-delay': `${delay + wordIndex++ * step}ms`
            } as CSSProperties;
            return (
              <Fragment key={`${segmentIndex}-${index}`}>
                <span
                  className={cn(
                    'blur-reveal__word',
                    segment.isKey && 'blur-reveal__word--key'
                  )}
                  style={style}
                >
                  {word}
                </span>{' '}
              </Fragment>
            );
          })}
        </Fragment>
      ))}
    </Element>
  );
}
