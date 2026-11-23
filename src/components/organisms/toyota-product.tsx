import { ToyotaCallout } from '@/components/molecules/toyota-callout';
import { ToyotaCells } from '@/components/molecules/toyota-cells';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaMoscow } from '@/components/molecules/toyota-moscow';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import { ToyotaStats } from '@/components/molecules/toyota-stats';
import { ToyotaSteps } from '@/components/molecules/toyota-steps';
import { ToyotaTagMatrix } from '@/components/molecules/toyota-tag-matrix';
import type {
  ToyotaLabels,
  ToyotaProduct as ToyotaProductContent
} from '@/content/toyota-story.types';

type ToyotaProductProps = {
  index: number;
  label: string;
  product: ToyotaProductContent;
  labels: ToyotaLabels;
};

// 04 · Product Definition, en el mundo oscuro: el MVP, la lógica de
// recomendación, el flujo y las variantes de resultado
export function ToyotaProduct({
  index,
  label,
  product,
  labels
}: ToyotaProductProps) {
  const { mvp, logic, flow, variants } = product;

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
        <ToyotaCallout text={logic.note} label={labels.evidence} />
      </div>

      {/* Flujo único, con el resultado destacado */}
      <div className="ty-module">
        <ToyotaHead head={flow.head} />
        <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
          {flow.statement}
        </p>
        <ToyotaSteps steps={flow.steps} className="ty-steps--dense" />
        <ToyotaCallout text={flow.decision} tone="rule" />
      </div>

      {/* Variantes de resultado: tres tarjetas con su titular en pantalla */}
      <div className="ty-module">
        <ToyotaHead head={variants.head} />
        <ol className="ty-variants" data-ty-group>
          {variants.items.map((item, itemIndex) => (
            <li key={item.name} className="ty-variants__item" data-ty-item>
              <span className="ty-variants__number">
                {String(itemIndex + 1).padStart(2, '0')}
              </span>
              <p className="ty-variants__name">{item.name}</p>
              <p className="ty-variants__title">{item.title}</p>
              <p className="ty-variants__example">
                <b>{variants.exampleLabel}:</b> {item.example}
              </p>
            </li>
          ))}
        </ol>
        <ToyotaCallout text={variants.note} />
      </div>
    </ToyotaChapter>
  );
}
