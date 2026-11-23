import { ToyotaCallout } from '@/components/molecules/toyota-callout';
import { ToyotaCells } from '@/components/molecules/toyota-cells';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaFlow } from '@/components/molecules/toyota-flow';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaMoscow } from '@/components/molecules/toyota-moscow';
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
// recomendación, el flujo y las variantes de resultado
export function ToyotaProduct({ index, label, product }: ToyotaProductProps) {
  const { mvp, logic, flow } = product;

  return (
    <ToyotaChapter index={index} world="dark" label={label}>
      <ToyotaOpener opener={product.opener} />

      {/* MVP: la barra MoSCoW y lo que garantiza */}
      <div className="ty-module">
        <ToyotaHead head={mvp.head} size="large" />
        <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
          {mvp.statement}
        </p>
        <ToyotaMoscow total={mvp.total} segments={mvp.moscow} />
        <h4 className="ty-subtitle">{mvp.behaviorsLabel}</h4>
        <ToyotaCells items={mvp.behaviors} columns={3} />
      </div>

      {/* Lógica: cifras, la matriz de etiquetas y tres reglas clave */}
      <div className="ty-module ty-module--blueprint">
        <ToyotaHead head={logic.head} size="large" />
        <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
          {logic.statement}
        </p>
        <ToyotaStats stats={logic.stats} />
        <ToyotaTagMatrix title={logic.matrixTitle} matrix={logic.matrix} />
        <ToyotaCells items={logic.rules} columns={3} />
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
    </ToyotaChapter>
  );
}
