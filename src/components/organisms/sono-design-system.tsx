import { SonoDsBrandElements } from '@/components/molecules/sono-ds-brand-elements';
import { SonoDsComponents } from '@/components/molecules/sono-ds-components';
import { SonoDsFoundations } from '@/components/molecules/sono-ds-foundations';
import type { SonoDesignSystem as SonoDesignSystemContent } from '@/content/sonopizza-design-system.types';
import { formatSectionNumber } from '@/utils/section-number.util';

type SonoDsPartProps = {
  id: string;
  index: number;
  title: string;
  lead: string;
};

// Encabezado de cada parte del sistema: número, nombre y para qué sirve
function SonoDsPart({ id, index, title, lead }: SonoDsPartProps) {
  return (
    <header className="sono-ds__part" data-free-in>
      <span className="sono-ds__part-index">
        {formatSectionNumber(index, 1)}
      </span>
      <h3 id={id} className="sono-display sono-display--lg">
        {title}
      </h3>
      <p className="sono-body">{lead}</p>
    </header>
  );
}

type SonoDesignSystemProps = {
  system: SonoDesignSystemContent;
};

// 04 · Sistema de diseño de Sonopizza, dentro del área con scroll libre del
// caso: una portada con las tres partes y un panel por parte (fundamentos,
// componentes de las pantallas clave y, al final, los elementos de marca).
export function SonoDesignSystem({ system }: SonoDesignSystemProps) {
  const { parts, foundations, components, brand } = system;
  const partNames = [parts.foundations, parts.components, parts.brand];

  return (
    <>
      <div
        className="sono-free__panel sono-view--blue sono-ds-intro"
        data-surface="dark"
      >
        <p className="sono-opener" data-sono-in="0">
          <b>{system.number}</b> · {system.name}
        </p>
        <h2 className="sono-display sono-display--xl" data-free-in>
          {system.title}
        </h2>
        <p className="sono-body sono-ds-intro__lead" data-free-in>
          {system.lead}
        </p>
        <ol className="sono-ds-intro__parts">
          {partNames.map((name, index) => (
            <li
              key={name}
              className="sono-ds-intro__part"
              data-free-in
              data-free-fx="pop"
            >
              <b>{formatSectionNumber(index, 1)}</b>
              {name}
            </li>
          ))}
        </ol>
      </div>

      <section
        className="sono-free__panel sono-view--white sono-ds"
        data-surface="light"
        aria-labelledby="sono-ds-foundations"
      >
        <SonoDsPart
          id="sono-ds-foundations"
          index={0}
          title={parts.foundations}
          lead={foundations.lead}
        />
        <SonoDsFoundations foundations={foundations} />
      </section>

      <section
        className="sono-free__panel sono-view--navy sono-ds sono-ds--dark"
        data-surface="dark"
        aria-labelledby="sono-ds-components"
      >
        <SonoDsPart
          id="sono-ds-components"
          index={1}
          title={parts.components}
          lead={components.lead}
        />
        <SonoDsComponents components={components} />
      </section>

      <section
        className="sono-free__panel sono-view--white sono-ds"
        data-surface="light"
        aria-labelledby="sono-ds-brand"
      >
        <SonoDsPart
          id="sono-ds-brand"
          index={2}
          title={parts.brand}
          lead={brand.lead}
        />
        <SonoDsBrandElements
          brand={brand}
          palette={foundations.color.swatches.map(swatch => swatch.hex)}
        />
      </section>
    </>
  );
}
