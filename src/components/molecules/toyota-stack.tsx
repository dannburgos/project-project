import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import type {
  ToyotaHead as ToyotaHeadContent,
  ToyotaStackCard,
  ToyotaVisual as ToyotaVisualContent
} from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaStackProps = {
  // Titular de la solución, sobre la palabra gigante
  head?: ToyotaHeadContent;
  word: string;
  visual: ToyotaVisualContent;
  cards: readonly ToyotaStackCard[];
};

// Tres pilares (referencia: Lightship). La palabra gigante se queda arriba y
// un solo marco se queda fijo en el centro: adentro, una imagen larga baja
// más lento que el scroll, así que cada pilar muestra otra parte de la misma
// imagen. El texto de cada pilar llega a un costado, alternando izquierda y
// derecha, y se va cuando llega el siguiente.
export function ToyotaStack({ head, word, visual, cards }: ToyotaStackProps) {
  return (
    <div className="ty-stack">
      {head && (
        <ToyotaHead
          head={head}
          size="large"
          align="center"
          className="ty-stack__head"
        />
      )}
      <p className="ty-stack__word" aria-hidden="true">
        {word}
      </p>
      {/* El marco y la lista comparten un cuerpo: así el marco fijo termina
          junto con la lista y no se pasa al módulo siguiente */}
      <div className="ty-stack__body">
        <div className="ty-stack__frame">
          <ToyotaVisual visual={visual} className="ty-stack__visual" />
        </div>
        <ol className="ty-stack__list" aria-label={word}>
          {cards.map((card, index) => (
            <li
              key={card.number}
              className={cn(
                'ty-stack__card',
                index % 2 === 1 && 'ty-stack__card--right'
              )}
            >
              <div className="ty-stack__caption">
                <span className="ty-stack__number">{card.number}</span>
                <h4 className="ty-stack__title">{card.title}</h4>
                <p className="ty-stack__text">{card.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
