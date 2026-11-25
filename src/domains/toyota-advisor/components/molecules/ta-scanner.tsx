import type { CSSProperties } from 'react';

import { cn } from '@/lib/utils';
import { toyotaAdvisorMessages as copy, fillTemplate } from '../../messages';
import { TaVisual } from '../atoms/ta-visual';

export type TaScannerTag = {
  key: string;
  label: string;
  source: string;
  isNew: boolean;
};

export type TaScannerRow = {
  id: string;
  name: string;
  points: number;
  isInBudget: boolean;
  isLeader: boolean;
};

type TaScannerProps = {
  tags: readonly TaScannerTag[];
  rows: readonly TaScannerRow[];
  maxPoints: number;
  inPlay: number;
  notice?: string;
};

// La columna derecha de la asesoría: el sistema a la vista. Arriba, la
// silueta que se escanea; luego, qué etiquetas suman (y de qué respuesta
// salen) y el ranking de los 6 modelos, que se reordena en vivo
export function TaScanner({
  tags,
  rows,
  maxPoints,
  inPlay,
  notice
}: TaScannerProps) {
  const scanner = copy.advisor.scanner;

  return (
    <aside className="ta-scanner" aria-live="polite">
      <p className="ta-scanner__eyebrow">{scanner.eyebrow}</p>

      <div className="ta-scanner__frame">
        <span className="ta-scanner__corner ta-scanner__corner--tl" />
        <span className="ta-scanner__corner ta-scanner__corner--tr" />
        <span className="ta-scanner__corner ta-scanner__corner--bl" />
        <span className="ta-scanner__corner ta-scanner__corner--br" />
        <TaVisual
          label={scanner.visual}
          tone="dark"
          className="ta-scanner__visual"
        />
        <span className="ta-scanner__beam" aria-hidden="true" />
      </div>

      <section className="ta-scanner__section">
        <h3 className="ta-scanner__title">{scanner.tagsTitle}</h3>
        {tags.length === 0 ? (
          <p className="ta-scanner__empty">{scanner.tagsEmpty}</p>
        ) : (
          <ul className="ta-scanner__tags">
            {tags.map(tag => (
              <li
                key={tag.key}
                className={cn(
                  'ta-scanner__tag',
                  tag.isNew && 'ta-scanner__tag--new'
                )}
              >
                <b>{tag.label}</b>
                <span>
                  {fillTemplate(scanner.tagSource, { source: tag.source })}
                </span>
              </li>
            ))}
          </ul>
        )}
        {notice && <p className="ta-scanner__notice">{notice}</p>}
      </section>

      <section className="ta-scanner__section">
        <h3 className="ta-scanner__title">
          {scanner.rankingTitle}
          <span className="ta-scanner__count">
            {fillTemplate(scanner.inPlay, { count: inPlay })}
          </span>
        </h3>
        <ol className="ta-scanner__ranking">
          {rows.map((row, index) => (
            <li
              key={row.id}
              className={cn(
                'ta-scanner__row',
                row.isLeader && 'ta-scanner__row--leader',
                !row.isInBudget && 'ta-scanner__row--out'
              )}
              style={{ '--row': index } as CSSProperties}
            >
              <span className="ta-scanner__place">{index + 1}</span>
              <span className="ta-scanner__name">
                {row.name}
                {row.isLeader && (
                  <span className="ta-scanner__badge">{scanner.leader}</span>
                )}
                {!row.isInBudget && (
                  <span className="ta-scanner__out">{scanner.outOfBudget}</span>
                )}
              </span>
              <span className="ta-scanner__bar" aria-hidden="true">
                {Array.from({ length: maxPoints }, (_, point) => (
                  <span
                    key={point}
                    className={cn(
                      'ta-scanner__pip',
                      point < row.points && 'ta-scanner__pip--on'
                    )}
                  />
                ))}
              </span>
              <span className="ta-scanner__points">
                {fillTemplate(scanner.points, { points: row.points })}
              </span>
            </li>
          ))}
        </ol>
        <p className="ta-scanner__rule">{scanner.rule}</p>
      </section>
    </aside>
  );
}
