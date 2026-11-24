import { ToyotaCallout } from '@/components/molecules/toyota-callout';
import { ToyotaCells } from '@/components/molecules/toyota-cells';
import { ToyotaDesignSystem } from '@/components/molecules/toyota-design-system';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaFlow } from '@/components/molecules/toyota-flow';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import { ToyotaStats } from '@/components/molecules/toyota-stats';
import { ToyotaTagMatrix } from '@/components/molecules/toyota-tag-matrix';
import type { ToyotaProduct as ToyotaProductContent } from '@/content/toyota-story.types';

type ToyotaProductProps = {
  index: number;
  label: string;
  product: ToyotaProductContent;
};

// 04 · Product Definition, en el mundo oscuro: el MVP, la lógica de
// recomendación, el flujo y el sistema de diseño
export function ToyotaProduct({ index, label, product }: ToyotaProductProps) {
  const { mvp, logic, flow, design } = product;

  return (
    <ToyotaChapter index={index} world="dark" label={label}>
      <ToyotaOpener opener={product.opener} />

      {/* MVP: lo que garantiza */}
      <div className="ty-module">
        <h4 className="ty-subtitle">{mvp.behaviorsLabel}</h4>
        <ToyotaCells items={mvp.behaviors} columns={2} />
      </div>

      {/* Lógica: cifras, la matriz de etiquetas y tres reglas clave */}
      <div className="ty-module">
        <ToyotaHead head={logic.head} size="large" />
        <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
          {logic.statement}
        </p>
        <ToyotaStats stats={logic.stats} />
        <ToyotaTagMatrix title={logic.matrixTitle} matrix={logic.matrix} />
      </div>

      {/* Flujo de usuario como diagrama: el camino, el ciclo de editar el
          perfil, las salidas hacia Toyota y las variantes del resultado */}
      <div className="ty-module">
        <ToyotaHead head={flow.head} />
        <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
          {flow.statement}
        </p>
        <ToyotaFlow flow={flow} />
        <ToyotaCallout text={flow.decision} tone="rule" />
      </div>

      {/* Sistema de diseño del prototipo, documentado como un inspector
          interactivo */}
      <div className="ty-module">
        <ToyotaHead head={design.head} size="large" />
        <ToyotaDesignSystem system={design.system} />
      </div>
    </ToyotaChapter>
  );
}
