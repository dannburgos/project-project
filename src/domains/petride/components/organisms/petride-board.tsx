import { PetrideBoardFrame } from '../molecules/petride-board-frame';
import type { PetrideFlowScreen } from './petride-flow-screens';

// Textos de un tablero: encabezado, nombre del grupo y, por pantalla, su
// título y qué pasa en ella
export type PetrideBoardCopy = {
  eyebrow: string;
  title: string;
  hint: string;
  groups: { main: string };
  frames: Record<string, { title: string; note: string }>;
};

type PetrideBoardProps = {
  copy: PetrideBoardCopy;
  screens: PetrideFlowScreen[];
};

// Tablero de un flujo: todas sus pantallas una al lado de la otra, en orden
export function PetrideBoard({ copy, screens }: PetrideBoardProps) {
  return (
    <main className="petride-board">
      <header className="petride-board__head">
        <span className="petride-board__eyebrow">{copy.eyebrow}</span>
        <h1 className="petride-board__title">{copy.title}</h1>
        <p className="petride-board__hint">{copy.hint}</p>
      </header>
      <section className="petride-board__group">
        <h2 className="petride-board__group-title">{copy.groups.main}</h2>
        <ol className="petride-board__frames">
          {screens.map((item, index) => (
            <PetrideBoardFrame
              key={item.key}
              step={index + 1}
              title={copy.frames[item.key].title}
              note={copy.frames[item.key].note}
              navActive={item.navActive}
              isStatusLight={item.isStatusLight}
            >
              {item.screen}
            </PetrideBoardFrame>
          ))}
        </ol>
      </section>
    </main>
  );
}
