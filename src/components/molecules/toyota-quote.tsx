import { cn } from '@/lib/utils';

type ToyotaQuoteProps = {
  text: string;
  eyebrow?: string;
  className?: string;
};

// Frase protagonista con la comilla colgada a la izquierda en rojo (regla de
// titulares alineados a la izquierda del manual de Toyota)
export function ToyotaQuote({ text, eyebrow, className }: ToyotaQuoteProps) {
  return (
    <figure className={cn('ty-quote', className)}>
      {eyebrow && (
        <figcaption className="ty-quote__eyebrow" data-ty-rise>
          {eyebrow}
        </figcaption>
      )}
      <blockquote className="ty-quote__text" data-ty-mask>
        <span className="ty-quote__mark" aria-hidden="true">
          “
        </span>
        {text}
      </blockquote>
    </figure>
  );
}
