import { ToyotaDesignSystem } from '@/components/molecules/toyota-design-system';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaFlow } from '@/components/molecules/toyota-flow';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaLogicExample } from '@/components/molecules/toyota-logic-example';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import type { ToyotaProduct as ToyotaProductContent } from '@/content/toyota-story.types';

type ToyotaProductProps = {
  index: number;
  label: string;
  product: ToyotaProductContent;
};

// 04 · Product Definition, en el mundo oscuro: la lógica de recomendación,
// el flujo y el sistema de diseño
export function ToyotaProduct({ index, label, product }: ToyotaProductProps) {
  const { logic, flow, design } = product;

  return (
    <ToyotaChapter index={index} world="dark" label={label}>
      <ToyotaOpener opener={product.opener} />

      {/* Lógica: la regla y un ejemplo de cómo funciona */}
      <div className="ty-module">
        <ToyotaHead head={logic.head} size="large" />
        <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
          {logic.statement}
        </p>
        <ToyotaLogicExample example={logic.example} />
      </div>

      {/* Flujo de usuario como diagrama: el camino, el ciclo de editar el
          perfil, las salidas hacia Toyota y las variantes del resultado */}
      <div className="ty-module">
        <ToyotaHead head={flow.head} />
        <ToyotaFlow flow={flow} />
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
