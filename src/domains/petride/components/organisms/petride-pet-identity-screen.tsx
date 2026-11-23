import { ArrowRight, Camera } from 'lucide-react';

import { PETRIDE_NEW_PET } from '../../example-pets';
import { petrideMessages } from '../../messages';
import { PetrideButton } from '../atoms/petride-button';
import { PetrideBreedField } from '../molecules/petride-breed-field';
import { PetrideSexPicker } from '../molecules/petride-sex-picker';
import { PetrideSpeciesPicker } from '../molecules/petride-species-picker';
import { PetrideStepHeader } from '../molecules/petride-step-header';
import { PetrideTextField } from '../molecules/petride-text-field';

// Paso 1 del registro: quién viaja. Foto de la cámara, nombre, perro o gato
// (filtra las razas y ajusta los íconos) y raza
export function PetridePetIdentityScreen() {
  const { steps, form } = petrideMessages;
  const pet = PETRIDE_NEW_PET;

  return (
    <div className="petride-screen">
      <PetrideStepHeader current={1} total={2} />

      <div className="petride-screen__body petride-form petride-form--identity">
        <div className="petride-step-title">
          <h1 className="petride-step-title__main">{steps.identityTitle}</h1>
        </div>
        <button type="button" className="petride-identity__photo">
          <img src={pet.photo} alt={pet.name} />
          <span className="petride-identity__camera">
            <Camera aria-hidden="true" />
            {form.photo.change}
          </span>
        </button>
        <PetrideTextField label={form.fields.name.label} value={pet.name} />
        <PetrideSpeciesPicker
          label={form.fields.species.label}
          selected={pet.species}
        />
        <PetrideSexPicker label={form.fields.sex.label} selected={pet.sex} />
        <PetrideBreedField
          label={form.fields.breed.label}
          query={steps.breedQuery}
          options={steps.breeds}
          selected={pet.breed}
          species={pet.species}
        />
      </div>

      <footer className="petride-screen__footer petride-screen__footer--raised">
        <PetrideButton isFull>
          {form.continue}
          <ArrowRight aria-hidden="true" />
        </PetrideButton>
      </footer>
    </div>
  );
}
