import { Fragment } from 'react';

import { cn } from '@/lib/utils';

type PetLettersProps = {
  text: string;
  className?: string;
  // 'load' anima al cargar la página; 'scroll', al llegar a la vista
  trigger?: 'load' | 'scroll';
};

// Texto partido en letras para que suban una por una. Las letras van
// agrupadas por palabra para que nunca se corte una palabra al bajar de
// línea. Un salto de línea (\n) en el texto parte el título en dos renglones. El
// lector de pantalla lee el texto completo.
export function PetLetters({
  text,
  className,
  trigger = 'scroll'
}: PetLettersProps) {
  return (
    <span className={cn('pet-letters', className)} data-pet-letters={trigger}>
      <span className="sr-only">{text.replace(/\n/g, ' ')}</span>
      <span aria-hidden="true">
        {text.split('\n').map((line, lineIndex) => (
          <Fragment key={`${line}-${lineIndex}`}>
            {lineIndex > 0 && <br />}
            {line.split(' ').map((word, wordIndex) => (
              <span key={`${word}-${wordIndex}`} className="pet-letters__word">
                {Array.from(word).map((letter, index) => (
                  <span key={`${letter}-${index}`} className="pet-letter">
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </Fragment>
        ))}
      </span>
    </span>
  );
}
