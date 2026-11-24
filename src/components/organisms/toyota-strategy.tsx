import { ToyotaVisual } from '@/components/atoms/toyota-visual';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaLayers } from '@/components/molecules/toyota-layers';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import { ToyotaShifts } from '@/components/molecules/toyota-shifts';
import type { ToyotaStrategy as ToyotaStrategyContent } from '@/content/toyota-story.types';

type ToyotaStrategyProps = {
  index: number;
  label: string;
  strategy: ToyotaStrategyContent;
};

// 03 · Strategy, en el mundo oscuro (plano técnico): propuesta de valor
// y estrategia de IA
export function ToyotaStrategy({
  index,
  label,
  strategy
}: ToyotaStrategyProps) {
  const { value, ai } = strategy;

  return (
    <ToyotaChapter index={index} world="dark" label={label}>
      <ToyotaOpener opener={strategy.opener} />

      {/* Propuesta de valor: la promesa en grande, los cinco cambios frente a
          la experiencia tradicional y el canvas */}
      <div className="ty-module">
        <p className="ty-promise" data-ty-mask>
          {value.promise}
        </p>
        <ToyotaShifts shifts={value.shifts} />
        <ToyotaVisual
          visual={value.canvas}
          className="ty-media ty-media--wide"
        />
      </div>

      {/* Estrategia de IA: cuatro capas en plano técnico, cada una con lo que
          garantiza para generar confianza */}
      <div className="ty-module ty-module--blueprint">
        <ToyotaHead head={ai.head} size="large" />
        <ToyotaLayers layers={ai.layers} />
      </div>
    </ToyotaChapter>
  );
}
