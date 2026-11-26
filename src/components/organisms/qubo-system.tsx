import { QuboBlock } from '@/components/molecules/qubo-block';
import { QuboChapter } from '@/components/molecules/qubo-chapter';
import { QuboHead } from '@/components/molecules/qubo-head';
import { QuboNumbered } from '@/components/molecules/qubo-numbered';
import { QuboTable } from '@/components/molecules/qubo-table';
import type {
  QuboSwatch,
  QuboSystem as QuboSystemContent
} from '@/content/qubo-story.types';

type QuboSystemProps = {
  id: string;
  system: QuboSystemContent;
};

type QuboSwatchesProps = {
  swatches: readonly QuboSwatch[];
};

// Muestrario de color: cada tarjeta lleva su propio color de fondo y su texto
// legible encima. Es contenido del caso, no tema del sitio.
function QuboSwatches({ swatches }: QuboSwatchesProps) {
  return (
    <ul className="qb-swatches">
      {swatches.map(swatch => (
        <li
          key={swatch.name}
          className="qb-swatch"
          style={{ backgroundColor: swatch.hex, color: swatch.onColor }}
        >
          <span className="qb-swatch__name">{swatch.name}</span>
          <span className="qb-swatch__hex">{swatch.hex}</span>
          <span className="qb-swatch__use">{swatch.use}</span>
        </li>
      ))}
    </ul>
  );
}

// 09 · Mini design system y accesibilidad. Colores, contrastes, tipografía,
// forma, componentes y las reglas de accesibilidad numeradas.
export function QuboSystem({ id, system }: QuboSystemProps) {
  const titleId = `${id}-title`;

  return (
    <QuboChapter id={id} titleId={titleId} tone="light">
      <QuboHead head={system.head} titleId={titleId} />

      <QuboBlock title={system.baseLabel}>
        <QuboSwatches swatches={system.base} />
      </QuboBlock>

      <QuboBlock title={system.addedLabel} lead={system.addedLead}>
        <QuboSwatches swatches={system.added} />
      </QuboBlock>

      <aside className="qb-lime" data-qb-reveal>
        <p className="qb-lime__label">{system.limeLabel}</p>
        <p className="qb-lime__text">{system.lime}</p>
        <div className="qb-lime__bar" aria-hidden="true">
          <span className="qb-lime__fill" />
        </div>
        <p className="qb-lime__rule">{system.limeRule}</p>
      </aside>

      <QuboBlock title={system.contrastsLabel}>
        <QuboTable table={system.contrasts} label={system.contrastsLabel} />
      </QuboBlock>

      <QuboBlock title={system.adjustmentsLabel}>
        <QuboTable table={system.adjustments} label={system.adjustmentsLabel} />
      </QuboBlock>

      <QuboBlock title={system.typeLabel}>
        <div className="qb-type">
          <p className="qb-type__sample">{system.typeSample}</p>
          <p className="qb-type__note">{system.typeSampleNote}</p>
          <ul className="qb-list">
            {system.typeRules.map(rule => (
              <li key={rule} className="qb-list__item">
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </QuboBlock>

      <div className="qb-columns">
        <QuboBlock title={system.shapeLabel}>
          <ul className="qb-list">
            {system.shape.map(item => (
              <li key={item.title} className="qb-list__item">
                <strong>{item.title}:</strong> {item.text}
              </li>
            ))}
          </ul>
        </QuboBlock>
        <QuboBlock title={system.iconsLabel}>
          <p className="qb-copy">{system.icons}</p>
        </QuboBlock>
      </div>

      <QuboBlock title={system.componentsLabel}>
        <QuboTable table={system.components} label={system.componentsLabel} />
      </QuboBlock>

      <QuboBlock title={system.accessibilityLabel}>
        <QuboNumbered items={system.accessibility} />
      </QuboBlock>
    </QuboChapter>
  );
}
