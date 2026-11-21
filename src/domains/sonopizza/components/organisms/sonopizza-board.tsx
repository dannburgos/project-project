import { sonopizzaMessages } from '../../messages';
import { SonopizzaBoardFrame } from '../molecules/sonopizza-board-frame';
import type { SonopizzaFlow } from './sonopizza-flow-screens';

type SonopizzaBoardProps = {
  flows: SonopizzaFlow[];
};

// Tablero de las pantallas clave de Sonopizza: todas en una sola fila, en el
// orden de los flujos (los estados junto a su pantalla). Arriba de cada grupo
// va el flujo al que pertenece, con una línea que abarca sus pantallas
export function SonopizzaBoard({ flows }: SonopizzaBoardProps) {
  const copy = sonopizzaMessages.board;

  return (
    <main className="sp-board">
      <header className="sp-board__head">
        <span className="sp-board__eyebrow">{copy.eyebrow}</span>
        <h1 className="sp-board__title">{copy.title}</h1>
        <p className="sp-board__hint">{copy.hint}</p>
      </header>
      <div className="sp-board__row">
        {flows.map(flow => (
          <section
            key={flow.key}
            className="sp-board__group"
            aria-label={copy.groups[flow.key]}
          >
            <div className="sp-board__group-head">
              <h2 className="sp-board__group-title">{copy.groups[flow.key]}</h2>
              <span className="sp-board__group-line" aria-hidden="true" />
            </div>
            <ol className="sp-board__frames">
              {flow.screens.map(item => (
                <SonopizzaBoardFrame
                  key={item.key}
                  step={item.step}
                  title={copy.frames[item.key].title}
                  note={copy.frames[item.key].note}
                  isState={item.isState}
                  navActive={item.navActive}
                  cartCount={item.cartCount}
                  isStatusLight={item.isStatusLight}
                >
                  {item.screen}
                </SonopizzaBoardFrame>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </main>
  );
}
