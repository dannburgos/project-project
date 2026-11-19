import { petrideMessages } from '../../messages';
import { PetrideBoardFrame } from '../molecules/petride-board-frame';
import {
  PETRIDE_FLOW_ONE_SCREENS,
  type PetrideFlowScreen
} from './petride-flow-screens';

type PetrideBoardGroup = {
  key: keyof typeof petrideMessages.board.groups;
  items: PetrideFlowScreen[];
};

const GROUPS: PetrideBoardGroup[] = [
  { key: 'main', items: PETRIDE_FLOW_ONE_SCREENS }
];

// Número de la primera pantalla de un grupo: sigue la cuenta del anterior
function getGroupStart(groupIndex: number) {
  return GROUPS.slice(0, groupIndex).reduce(
    (total, group) => total + group.items.length,
    0
  );
}

// Tablero del flujo 1: todas las pantallas una al lado de la otra, en orden
export function PetrideBoard() {
  const { board } = petrideMessages;

  return (
    <main className="petride-board">
      <header className="petride-board__head">
        <span className="petride-board__eyebrow">{board.eyebrow}</span>
        <h1 className="petride-board__title">{board.title}</h1>
        <p className="petride-board__hint">{board.hint}</p>
      </header>
      {GROUPS.map((group, groupIndex) => (
        <section key={group.key} className="petride-board__group">
          <h2 className="petride-board__group-title">
            {board.groups[group.key]}
          </h2>
          <ol className="petride-board__frames">
            {group.items.map((item, index) => {
              const step = getGroupStart(groupIndex) + index + 1;
              return (
                <PetrideBoardFrame
                  key={item.key}
                  step={step}
                  title={board.frames[item.key].title}
                  note={board.frames[item.key].note}
                  navActive={item.navActive}
                  isStatusLight={item.isStatusLight}
                >
                  {item.screen}
                </PetrideBoardFrame>
              );
            })}
          </ol>
        </section>
      ))}
    </main>
  );
}
