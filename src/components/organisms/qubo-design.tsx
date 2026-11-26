import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboCards } from '@/components/molecules/qubo-cards';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboHotspots } from '@/components/molecules/qubo-hotspots';
import type { QuboDesign as QuboDesignContent } from '@/content/qubo-story.types';
import { cn } from '@/lib/utils';

type QuboDesignProps = {
  id: string;
  design: QuboDesignContent;
};

// 08 · Pantallas. Las dos pantallas héroe con puntos que explican cada parte
// (referencia: Armor), las doce principales por momento, los estados borde y
// las pantallas de apoyo.
export function QuboDesign({ id, design }: QuboDesignProps) {
  const titleId = `${id}-title`;
  const { screenLabels } = design;

  return (
    <QuboChapter id={id} titleId={titleId} tone="dark">
      <QuboHead head={design.head} titleId={titleId} />

      <QuboBlock title={design.heroLabel} lead={design.heroLead}>
        <div className="qb-heroes">
          {design.heroes.map(hero => (
            <QuboHotspots
              key={hero.number}
              hero={hero}
              hint={design.hotspotHint}
            />
          ))}
        </div>
      </QuboBlock>

      <QuboBlock title={design.levelsLabel}>
        <QuboCards items={design.levels} className="qb-cards--two" />
      </QuboBlock>

      {design.moments.map(moment => (
        <QuboBlock key={moment.name} title={moment.name} lead={moment.tagline}>
          <ul className="qb-screens">
            {moment.screens.map(screen => (
              <li
                key={screen.number}
                className={cn(
                  'qb-screen',
                  screen.level === 'A' && 'qb-screen--hero'
                )}
              >
                <header className="qb-screen__head">
                  <span className="qb-screen__number">{screen.number}</span>
                  <span className="qb-screen__level">
                    {screen.level === 'A'
                      ? screenLabels.levelA
                      : screenLabels.levelB}
                  </span>
                </header>
                <h4 className="qb-screen__name">{screen.name}</h4>
                <dl className="qb-screen__details">
                  <div>
                    <dt>{screenLabels.solves}</dt>
                    <dd>{screen.solves}</dd>
                  </div>
                  <div>
                    <dt>{screenLabels.micro}</dt>
                    <dd>{screen.micro}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </QuboBlock>
      ))}

      <div className="qb-columns">
        <QuboBlock title={design.edgeLabel}>
          <ul className="qb-list">
            {design.edge.map(item => (
              <li key={item} className="qb-list__item">
                {item}
              </li>
            ))}
          </ul>
        </QuboBlock>
        <QuboBlock title={design.supportLabel}>
          <ul className="qb-list">
            {design.support.map(item => (
              <li key={item} className="qb-list__item">
                {item}
              </li>
            ))}
          </ul>
        </QuboBlock>
      </div>

      <p className="qb-copy">{design.total}</p>
      <p className="qb-note">{design.priority}</p>
    </QuboChapter>
  );
}
