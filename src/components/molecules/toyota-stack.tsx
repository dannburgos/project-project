import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import type {
  ToyotaStackCard,
  ToyotaVisual as ToyotaVisualContent
} from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaStackProps = {
  word: string;
  visual: ToyotaVisualContent;
  cards: readonly ToyotaStackCard[];
};

// Tres pilares (referencia: Lightship). La palabra gigante se queda arriba y
// un solo marco se queda fijo en el centro: adentro, una imagen larga baja
// más lento que el scroll, así que cada pilar muestra otra parte de la misma
// imagen. El texto de cada pilar llega a un costado, alternando izquierda y
// derecha, y se va cuando llega el siguiente.
export function ToyotaStack({ word, visual, cards }: ToyotaStackProps) {
  return (
    <div className="ty-stack">
      <p className="ty-stack__word" aria-hidden="true">
        {word}
      </p>
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
  );
}
