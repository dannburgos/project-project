import { sonopizzaMessages } from '../../messages';
import { SonopizzaBoardFrame } from '../molecules/sonopizza-board-frame';
import type { SonopizzaFlow } from './sonopizza-flow-screens';

type SonopizzaBoardProps = {
  flows: SonopizzaFlow[];
};

// Tablero de las pantallas clave de Sonopizza: un grupo por flujo y, en cada
// uno, sus pantallas una al lado de la otra (los estados junto a su pantalla)
export function SonopizzaBoard({ flows }: SonopizzaBoardProps) {
  const copy = sonopizzaMessages.board;

  return (
    <main className="sp-board">
      <header className="sp-board__head">
        <span className="sp-board__eyebrow">{copy.eyebrow}</span>
        <h1 className="sp-board__title">{copy.title}</h1>
        <p className="sp-board__hint">{copy.hint}</p>
      </header>
      {flows.map(flow => (
        <section
          key={flow.key}
          className="sp-board__group"
          aria-label={copy.groups[flow.key]}
        >
          <h2 className="sp-board__group-title">{copy.groups[flow.key]}</h2>
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
    </main>
  );
}
