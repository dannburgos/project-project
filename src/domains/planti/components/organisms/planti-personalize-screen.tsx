import { MapPin, Moon, Pencil, Sun, SunDim } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiIconChoice } from '../atoms/planti-icon-choice';
import { PlantiInputField } from '../molecules/planti-input-field';
import { PlantiPlantHero } from '../molecules/planti-plant-hero';
import { PlantiSelectField } from '../molecules/planti-select-field';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

type PlantiPersonalizeScreenProps = {
  // Cuántas letras del nombre ya se escribieron (por defecto, todas) y qué
  // opciones ya se eligieron (en el recorrido se llenan de a una)
  nameChars?: number;
  hasPlace?: boolean;
  hasLight?: boolean;
  // La lista de "¿Dónde vive?" está abierta
  isPlaceOpen?: boolean;
  // El botón se está pulsando (en el recorrido)
  isPressed?: boolean;
};

const LIGHT_ICONS = {
  direct: Sun,
  indirect: SunDim,
  low: Moon
} as const;

export function PlantiPersonalizeScreen({
  nameChars = Infinity,
  hasPlace = true,
  hasLight = true,
  isPlaceOpen = false,
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
        <PlantiSelectField
          icon={MapPin}
          placeholder={personalize.placeLabel}
          options={personalize.places}
          selectedKey={chosenPlace?.key}
          isOpen={isPlaceOpen}
        />
      </div>
      <section className="planti-field">
        <h2 className="planti-field__label">{personalize.lightLabel}</h2>
        <ul className="planti-icon-choice-list">
          {personalize.lights.map(light => (
            <PlantiIconChoice
              key={light.key}
              icon={LIGHT_ICONS[light.key]}
              isSelected={hasLight && 'isSelected' in light}
            >
              {light.label}
            </PlantiIconChoice>
          ))}
        </ul>
      </section>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {personalize.action}
        </PlantiButton>
      </div>
    </div>
  );
}
