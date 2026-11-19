import { Minus, Plus } from 'lucide-react';

type PetrideCounterFieldProps = {
  label: string;
  hint?: string;
  value: string;
  unit?: string;
  caption?: string;
  // Valor anterior: en el caso, el contador arranca aquí y sube al valor
  // actual con el toque en +. En el tablero no se ve
  previousValue?: string;
  previousCaption?: string;
  decreaseLabel: string;
  increaseLabel: string;
};

// Número grande con menos y más: peso o edad. Debajo puede ir lo que se
// calcula a partir de él, como la etapa
export function PetrideCounterField({
  label,
  hint,
  value,
  unit,
  caption,
  previousValue,
  previousCaption,
  decreaseLabel,
  increaseLabel
}: PetrideCounterFieldProps) {
  return (
    <div className="petride-field">
      <span className="petride-field__label">
        {label}
        {hint && <span className="petride-field__optional">{hint}</span>}
      </span>
      <span className="petride-counter">
        <button
          type="button"
          className="petride-counter__step"
          aria-label={decreaseLabel}
        >
          <Minus aria-hidden="true" />
        </button>
        <span className="petride-counter__value">
          <span className="petride-counter__number">
            {value}
            {unit && <span className="petride-counter__unit">{unit}</span>}
          </span>
          {caption && (
            <span className="petride-counter__caption">{caption}</span>
          )}
          {previousValue && (
            <span className="petride-counter__previous" aria-hidden="true">
              <span className="petride-counter__number">{previousValue}</span>
              {previousCaption && (
                <span className="petride-counter__caption">
                  {previousCaption}
                </span>
              )}
            </span>
          )}
        </span>
        <button
          type="button"
          className="petride-counter__step petride-counter__step--plus"
          aria-label={increaseLabel}
        >
          <Plus aria-hidden="true" />
        </button>
      </span>
    </div>
  );
}
