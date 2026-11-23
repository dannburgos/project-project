import { HeartHandshake, PawPrint } from 'lucide-react';

import { PETRIDE_NEW_PET } from '../../example-pets';
import type { PetridePet } from '../../types/petride.types';
import { petrideMessages } from '../../messages';
import {
  getPetrideSize,
  getPetrideStage
} from '../../petride-pet-profile.util';
import {
  fillPetrideTemplate,
  formatPetrideAge
} from '../../petride-template.util';
import { PetrideButton } from '../atoms/petride-button';
import { PetrideCounterField } from '../molecules/petride-counter-field';
import { PetrideNotesField } from '../molecules/petride-notes-field';
import { PetrideSizePicker } from '../molecules/petride-size-picker';
import { PetrideStepHeader } from '../molecules/petride-step-header';
import { PetrideSwitchRow } from '../molecules/petride-switch-row';

// Paso 2 del registro: así viaja. El peso marca el tamaño y la edad, la
// etapa, así nada se pregunta dos veces. Asistencia y nota al final
export function PetridePetTravelScreen() {
  const { steps, form, common, list, review } = petrideMessages;
  const pet: PetridePet = PETRIDE_NEW_PET;
  const age = pet.age ?? 1;
  const ranges =
    pet.species === 'Gato' ? steps.sizeRanges.cat : steps.sizeRanges.dog;

  return (
    <div className="petride-screen">
      <PetrideStepHeader current={2} total={2} />

      <div className="petride-screen__body petride-form petride-form--tight">
        <div className="petride-step-title">
          <h1 className="petride-step-title__main">
            {fillPetrideTemplate(steps.travelTitle, { name: pet.name })}
          </h1>
        </div>
        <div className="petride-field">
          <span className="petride-field__label">
            {form.fields.weight.label}
          </span>
          <PetrideSizePicker
            label={form.fields.size.label}
            species={pet.species}
            selected={getPetrideSize(pet.species, pet.weight)}
            ranges={ranges}
          />
        </div>
        <PetrideCounterField
          label={form.fields.age.label}
          value={formatPetrideAge(age, list)}
          caption={getPetrideStage(age)}
          previousValue={formatPetrideAge(age - 1, list)}
          previousCaption={getPetrideStage(age - 1)}
          decreaseLabel={common.less}
          increaseLabel={common.more}
        />
        <div className="petride-switches">
          <PetrideSwitchRow
            icon={HeartHandshake}
            label={form.fields.assistance.label}
            isOn={pet.isAssistance}
          />
          <PetrideSwitchRow
            icon={PawPrint}
            label={form.fields.friendly.label}
            isOn={pet.isFriendly}
          />
        </div>
        <PetrideNotesField
          label={steps.notesLabel}
          value={pet.notes}
          placeholder={steps.notesPlaceholder}
        />
      </div>

      <footer className="petride-screen__footer petride-screen__footer--raised">
        <PetrideButton isFull>{review.title}</PetrideButton>
      </footer>
    </div>
  );
}
