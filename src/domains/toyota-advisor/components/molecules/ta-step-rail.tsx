import type { CSSProperties } from 'react';

import { cn } from '@/lib/utils';

export type TaRailBlock = {
  id: string;
  index: string;
  label: string;
  // Estado de cada pregunta del bloque
  ticks: readonly ('done' | 'current' | 'next')[];
};

type TaStepRailProps = {
  blocks: readonly TaRailBlock[];
  counter: string;
};

// Avance de la asesoría: los 5 bloques con un segmento por pregunta. Lo hecho
// en blanco, la pregunta actual en rojo y lo que falta en gris
export function TaStepRail({ blocks, counter }: TaStepRailProps) {
  return (
    <nav className="ta-rail" aria-label={counter}>
      <ol className="ta-rail__blocks">
        {blocks.map(block => {
          const isCurrent = block.ticks.includes('current');
          const isDone = block.ticks.every(tick => tick === 'done');
          return (
            <li
              key={block.id}
              className={cn(
                'ta-rail__block',
                isCurrent && 'ta-rail__block--current',
                isDone && 'ta-rail__block--done'
              )}
              style={{ '--ticks': block.ticks.length } as CSSProperties}
              aria-current={isCurrent ? 'step' : undefined}
            >
              <span className="ta-rail__ticks" aria-hidden="true">
                {block.ticks.map((tick, index) => (
                  <span
                    key={index}
                    className={cn('ta-rail__tick', `ta-rail__tick--${tick}`)}
                  />
                ))}
              </span>
              <span className="ta-rail__label">
                <span className="ta-rail__index">{block.index}</span>
                {block.label}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="ta-rail__counter">{counter}</p>
    </nav>
  );
}
