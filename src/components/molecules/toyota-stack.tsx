import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import type { ToyotaStackCard } from '@/content/toyota-story.types';
import { cn } from '@/lib/utils';

type ToyotaStackProps = {
  word: string;
  cards: readonly ToyotaStackCard[];
};

// Lugar de cada tarjeta en la pila: corrida un poco hacia atrás, al centro o
// hacia adelante, con su texto alternando entre izquierda y derecha
const POSITION_CLASS = [
  'ty-stack__card--back',
  'ty-stack__card--middle',
  'ty-stack__card--front'
] as const;

// Tres pilares (referencia: Lightship). La palabra gigante arriba y las
// tarjetas apiladas al centro, con el texto de cada una a su costado
// (izquierda, derecha, izquierda). Al llegar, la 1 y la 2 ya están en la
// pila con sus textos a la vista; la escena se queda quieta un momento y el
// scroll solo sube la 3 encima. En celular (o con «reducir movimiento»)
// todas se ven desde el inicio, en columna.
export function ToyotaStack({ word, cards }: ToyotaStackProps) {
  const lastIndex = cards.length - 1;

  return (
    <div className="ty-stack" data-ty-stack>
      <div className="ty-stack__stage">
        <p className="ty-stack__word" aria-hidden="true">
          {word}
        </p>
        <ol className="ty-stack__list" aria-label={word}>
          {cards.map((card, index) => (
            <li
              key={card.number}
              className={cn(
                'ty-stack__card',
                POSITION_CLASS[Math.min(index, POSITION_CLASS.length - 1)]
              )}
              data-ty-stack-last={index === lastIndex ? '' : undefined}
            >
              <ToyotaVisual visual={card.visual} className="ty-stack__visual" />
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
