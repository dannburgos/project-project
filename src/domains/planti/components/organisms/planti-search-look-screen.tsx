import { ArrowDownToLine, Flower2, Leaf, Sprout } from 'lucide-react';

import { plantiMessages } from '../../messages';
import { PlantiLookTile } from '../atoms/planti-look-tile';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

const LOOK_ICONS = {
  large: Leaf,
  slim: Sprout,
  hanging: ArrowDownToLine,
  flowers: Flower2
} as const;

const LOOK_IMAGES: Partial<Record<keyof typeof LOOK_ICONS, string>> = {
  large: '/planti/look-large.webp',
  slim: '/planti/look-slim.webp',
  hanging: '/planti/look-hanging.webp',
  flowers: '/planti/look-flowers.webp'
};

type PlantiSearchLookScreenProps = {
  // Ya se eligió una forma (en el recorrido, se elige a mitad de la pantalla)
  hasChoice?: boolean;
};

// Buscar, paso 1: "¿Cómo lucen las hojas de tu planta?". Quien no sabe cómo se
// llama puede reconocerla por cómo se ve.
export function PlantiSearchLookScreen({
  hasChoice = true
}: PlantiSearchLookScreenProps) {
  const { search } = plantiMessages;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={search.title} />
      <h2 className="planti-search-question">{search.look.question}</h2>
      <ul className="planti-look-grid">
        {search.look.options.map(option => (
          <PlantiLookTile
            key={option.key}
            icon={LOOK_ICONS[option.key]}
            imageSrc={LOOK_IMAGES[option.key]}
            label={option.label}
            isSelected={hasChoice && 'isSelected' in option}
          />
        ))}
      </ul>
    </div>
  );
}
