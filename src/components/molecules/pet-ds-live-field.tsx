'use client';

import { CircleAlert, CircleCheck } from 'lucide-react';

import type { PetDesignSystem } from '@/content/pet-design-system.types';
import { usePetNameField } from '@/hooks/use-pet-name-field';
import { fillTemplate } from '@/lib/case-story/fill-template.util';
import { cn } from '@/lib/utils';

type PetDsLiveFieldProps = {
  fields: PetDesignSystem['components']['fields'];
};

// Campo de prueba: valida el nombre al guardar, se sacude si falta y confirma
// con un check cuando queda guardado
export function PetDsLiveField({ fields }: PetDsLiveFieldProps) {
  const { field, onSubmit, errors, savedName, shakeCount } = usePetNameField({
    requiredMessage: fields.requiredMessage,
    tooLongMessage: fields.tooLongMessage,
    maxLength: fields.maxLength
  });
  const error = errors.name?.message;

  return (
    <form className="pet-ds__live-field" onSubmit={onSubmit} noValidate>
      <span className="pet-ds__subtitle">{fields.tryTitle}</span>
      <div className="pet-ds__live-row">
        <label
          key={shakeCount}
          className={cn(
            'pet-ds__field',
            error && 'pet-ds__field--error',
            error && shakeCount > 0 && 'is-shaking',
            savedName && 'pet-ds__field--filled'
          )}
        >
          <span className="pet-ds__field-label">{fields.label}</span>
          <input
            className="pet-ds__field-box pet-ds__field-input"
            placeholder={fields.placeholder}
            autoComplete="off"
            aria-invalid={Boolean(error)}
            {...field}
          />
          <span
            className={cn(
              'pet-ds__field-message',
              savedName && 'pet-ds__field-message--success'
            )}
            aria-live="polite"
          >
            {error && <CircleAlert aria-hidden="true" />}
            {savedName && <CircleCheck aria-hidden="true" />}
            {error ??
              (savedName
                ? fillTemplate(fields.savedMessage, { name: savedName })
                : fields.helper)}
          </span>
        </label>
        <button
          type="submit"
          className="pet-ds__button pet-ds__button--primary pet-ds__live-submit"
        >
          {fields.submitLabel}
        </button>
      </div>
    </form>
  );
}
