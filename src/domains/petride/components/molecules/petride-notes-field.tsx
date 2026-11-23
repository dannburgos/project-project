import { petrideMessages } from '../../messages';

type PetrideNotesFieldProps = {
  label: string;
  value: string;
  placeholder: string;
};

// Espacio para escribirle al conductor, opcional
export function PetrideNotesField({
  label,
  value,
  placeholder
}: PetrideNotesFieldProps) {
  return (
    <label className="petride-field">
      <span className="petride-field__label">
        {label}
        <span className="petride-field__optional">
          {petrideMessages.common.optional}
        </span>
      </span>
      <textarea
        className="petride-field__box petride-field__box--multiline petride-notes"
        defaultValue={value}
        placeholder={placeholder}
        rows={3}
      />
    </label>
  );
}
