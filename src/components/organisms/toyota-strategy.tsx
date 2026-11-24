import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import { ToyotaCallout } from '@/components/molecules/toyota-callout';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaChips } from '@/components/molecules/toyota-chips';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaLayers } from '@/components/molecules/toyota-layers';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import { ToyotaShifts } from '@/components/molecules/toyota-shifts';
import { ToyotaTable } from '@/components/molecules/toyota-table';
import type { ToyotaStrategy as ToyotaStrategyContent } from '@/content/toyota-story.types';

type ToyotaStrategyProps = {
  index: number;
  label: string;
  strategy: ToyotaStrategyContent;
};

// 03 · Strategy, en el mundo oscuro (plano técnico): propuesta de valor,
// trazabilidad de objetivos y estrategia de IA
export function ToyotaStrategy({
  index,
  label,
  strategy
}: ToyotaStrategyProps) {
  const { value, goals, ai } = strategy;

  return (
    <ToyotaChapter index={index} world="dark" label={label}>
      <ToyotaOpener opener={strategy.opener} />

      {/* Propuesta de valor: la promesa en grande, los cinco cambios frente a
          la experiencia tradicional y el canvas */}
      <div className="ty-module">
        <ToyotaHead head={value.head} />
        <p className="ty-promise" data-ty-mask>
          {value.promise}
        </p>
        <ToyotaShifts shifts={value.shifts} />
        <ToyotaVisual
          visual={value.canvas}
          className="ty-media ty-media--wide"
        />
      </div>

      {/* Trazabilidad: de cada punto de dolor a su objetivo, su criterio de
          éxito y su métrica */}
      <div className="ty-module">
        <ToyotaHead head={goals.head} />
        <ToyotaTable table={goals.table} accentColumn={3} />
        <ToyotaCallout text={goals.note} />
      </div>

      {/* Estrategia de IA: cuatro capas en plano técnico y cómo genera
          confianza */}
      <div className="ty-module ty-module--blueprint">
        <ToyotaHead head={ai.head} size="large" />
        <ToyotaLayers layers={ai.layers} />
        <ToyotaCallout text={ai.rule} tone="rule" />
        <ToyotaChips items={ai.mechanisms} label={ai.trustLabel} />
        <ToyotaCallout text={ai.trustRule} tone="rule" />
      </div>
    </ToyotaChapter>
  );
}
