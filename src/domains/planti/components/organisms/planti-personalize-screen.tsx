import { MapPin, Pencil } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiChoiceChip } from '../atoms/planti-choice-chip';
import { PlantiInputField } from '../molecules/planti-input-field';
import { PlantiPlantHero } from '../molecules/planti-plant-hero';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

type PlantiPersonalizeScreenProps = {
  // Cuántas letras del nombre ya se escribieron (por defecto, todas) y qué
  // opciones ya se eligieron (en el recorrido se llenan de a una)
  nameChars?: number;
  hasPlace?: boolean;
  hasLight?: boolean;
  // El botón se está pulsando (en el recorrido)
  isPressed?: boolean;
};

type ChoiceOption = {
  key: string;
  label: string;
  isSelected?: boolean;
};

type ChoiceGroupProps = {
  label: string;
  options: readonly ChoiceOption[];
  hasChoice: boolean;
};

function ChoiceGroup({ label, options, hasChoice }: ChoiceGroupProps) {
  return (
    <section className="planti-field">
      <h2 className="planti-field__label">{label}</h2>
      <ul className="planti-chip-list">
        {options.map(option => (
          <PlantiChoiceChip
            key={option.key}
            isSelected={hasChoice && option.isSelected}
          >
            {option.label}
          </PlantiChoiceChip>
        ))}
      </ul>
    </section>
  );
}

export function PlantiPersonalizeScreen({
  nameChars = Infinity,
  hasPlace = true,
  hasLight = true,
  isPressed = false
}: PlantiPersonalizeScreenProps) {
  const { plant, personalize } = plantiMessages;
  const isTyping = nameChars > 0 && nameChars < plant.nickname.length;
  const chosenPlace = hasPlace
    ? personalize.places.find(place => 'isSelected' in place)
    : undefined;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={personalize.title} />
      <PlantiPlantHero size="large">
        <span className="planti-plant-hero__caption">
          {plant.name} · {plant.scientific}
        </span>
      </PlantiPlantHero>
      <div className="planti-personalize__fields">
        <PlantiInputField
          icon={Pencil}
          placeholder={personalize.namePlaceholder}
          value={
            nameChars === 0 ? undefined : plant.nickname.slice(0, nameChars)
          }
          hasCaret={isTyping}
        />
        <PlantiInputField
          icon={MapPin}
          placeholder={personalize.placeLabel}
          value={chosenPlace?.label}
          hasChevron
          isTapped={Boolean(chosenPlace)}
        />
      </div>
      <ChoiceGroup
        label={personalize.lightLabel}
        options={personalize.lights}
        hasChoice={hasLight}
      />
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {personalize.action}
        </PlantiButton>
      </div>
    </div>
  );
}
