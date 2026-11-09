'use client';

import { useState } from 'react';
import { Droplet, MapPin, Moon, Pencil, Sun, SunDim } from 'lucide-react';

import { cn } from '@/lib/utils';

import { plantiMessages } from '../../messages';
import { PlantiButton } from '../atoms/planti-button';
import { PlantiIconChoice } from '../atoms/planti-icon-choice';
import { PlantiInputField } from '../molecules/planti-input-field';
import { PlantiSelectField } from '../molecules/planti-select-field';
import { PlantiScreenHeader } from '../molecules/planti-screen-header';

type PlantiPersonalizeScreenProps = {
  // Cuántas letras del nombre ya se escribieron (por defecto, todas) y qué
  // opciones ya se eligieron (en el recorrido se llenan de a una)
  nameChars?: number;
  hasPlace?: boolean;
  hasLight?: boolean;
  hasWatering?: boolean;
  // La lista de "¿Dónde vive?" o la de "¿Cuándo la regaste?" está abierta
  isPlaceOpen?: boolean;
  isWateringOpen?: boolean;
  // El botón se está pulsando (en el recorrido)
  isPressed?: boolean;
  // Se puede escribir el nombre y elegir las opciones (en el tablero)
  isInteractive?: boolean;
};

const LIGHT_ICONS = {
  direct: Sun,
  indirect: SunDim,
  low: Moon
} as const;

// Personalizar: nombre, dónde vive, cuánta luz recibe y cuándo se regó por
// última vez, para que la rutina arranque con el primer riego bien puesto
export function PlantiPersonalizeScreen({
  nameChars = Infinity,
  hasPlace = true,
  hasLight = true,
  hasWatering = true,
  isPlaceOpen = false,
  isWateringOpen = false,
  isPressed = false,
  isInteractive = false
}: PlantiPersonalizeScreenProps) {
  const { plant, personalize } = plantiMessages;
  const [name, setName] = useState<string>(plant.nickname);
  const [placeKey, setPlaceKey] = useState<string | undefined>(
    personalize.places.find(place => 'isSelected' in place)?.key
  );
  const [lightKey, setLightKey] = useState<string | undefined>(
    personalize.lights.find(light => 'isSelected' in light)?.key
  );
  const [wateringKey, setWateringKey] = useState<string | undefined>(
    personalize.waterings.find(watering => 'isSelected' in watering)?.key
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isWateringMenuOpen, setIsWateringMenuOpen] = useState(false);
  const isTyping = nameChars > 0 && nameChars < plant.nickname.length;
  const chosenPlace = isInteractive
    ? { key: placeKey }
    : hasPlace
      ? personalize.places.find(place => 'isSelected' in place)
      : undefined;
  const chosenWatering = isInteractive
    ? { key: wateringKey }
    : hasWatering
      ? personalize.waterings.find(watering => 'isSelected' in watering)
      : undefined;

  return (
    <div className="planti-screen">
      <PlantiScreenHeader title={personalize.title} />
      <div className="planti-personalize__fields">
        <PlantiInputField
          icon={Pencil}
          placeholder={personalize.namePlaceholder}
          value={
            isInteractive
              ? name
              : nameChars === 0
                ? undefined
                : plant.nickname.slice(0, nameChars)
          }
          hasCaret={!isInteractive && isTyping}
          onChange={isInteractive ? setName : undefined}
        />
        <PlantiSelectField
          icon={MapPin}
          placeholder={personalize.placeLabel}
          options={personalize.places}
          selectedKey={chosenPlace?.key}
          isOpen={isInteractive ? isOpen : isPlaceOpen}
          onToggle={isInteractive ? () => setIsOpen(open => !open) : undefined}
          onSelect={
            isInteractive
              ? key => {
                  setPlaceKey(key);
                  setIsOpen(false);
                }
              : undefined
          }
        />
      </div>
      <section className="planti-field">
        <h2 className="planti-field__label">{personalize.lightLabel}</h2>
        <ul className="planti-icon-choice-list">
          {personalize.lights.map(light => (
            <PlantiIconChoice
              key={light.key}
              icon={LIGHT_ICONS[light.key]}
              isSelected={
                isInteractive
                  ? light.key === lightKey
                  : hasLight && 'isSelected' in light
              }
              onSelect={
                isInteractive ? () => setLightKey(light.key) : undefined
              }
            >
              {light.label}
            </PlantiIconChoice>
          ))}
        </ul>
      </section>
      <section className="planti-field">
        <h2 className="planti-field__label">{personalize.wateringLabel}</h2>
        <PlantiSelectField
          icon={Droplet}
          placeholder={personalize.wateringPlaceholder}
          options={personalize.waterings}
          selectedKey={chosenWatering?.key}
          isOpen={isInteractive ? isWateringMenuOpen : isWateringOpen}
          onToggle={
            isInteractive
              ? () => setIsWateringMenuOpen(open => !open)
              : undefined
          }
          onSelect={
            isInteractive
              ? key => {
                  setWateringKey(key);
                  setIsWateringMenuOpen(false);
                }
              : undefined
          }
        />
      </section>
      <div className="planti-screen__footer">
        <PlantiButton className={cn(isPressed && 'planti-button--pressed')}>
          {personalize.action}
        </PlantiButton>
      </div>
    </div>
  );
}
