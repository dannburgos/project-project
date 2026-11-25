import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';
import { toyotaAdvisorMessages as copy } from '../../messages';
import type { ToyotaQuestionPart } from '../../types/toyota-advisor.types';

type TaConfigRowProps = {
  part: ToyotaQuestionPart;
  index: number;
  selected: readonly string[];
  onToggle: (optionId: string) => void;
};

// Puestos que dibuja cada respuesta de «personas»
const SEATS: Readonly<Record<string, number>> = { two: 2, five: 5, seven: 7 };

// Una fila de «¿Cómo te imaginas tu carro?»: su nombre a la izquierda y las
// opciones como un selector segmentado. Las personas se dibujan como puestos
export function TaConfigRow({
  part,
  index,
  selected,
  onToggle
}: TaConfigRowProps) {
  const isAnswered = selected.length > 0;

  return (
    <div className={cn('ta-config', isAnswered && 'ta-config--done')}>
      <div className="ta-config__head">
        <span className="ta-config__index">
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="ta-config__label">{part.label}</p>
        {part.isOptional && (
          <span className="ta-config__optional">{copy.advisor.optional}</span>
        )}
      </div>
      <div
        className="ta-config__options"
        role="radiogroup"
        aria-label={part.label}
      >
        {part.options.map(option => {
          const isOn = selected.includes(option.id);
          const seats = SEATS[option.id];
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={isOn}
              className={cn(
                'ta-config__option',
                isOn && 'ta-config__option--on',
                option.isUnsure && 'ta-config__option--soft'
              )}
              onClick={() => onToggle(option.id)}
            >
              {seats !== undefined && (
                <span className="ta-config__seats" aria-hidden="true">
                  {Array.from({ length: seats }, (_, seat) => (
                    <span key={seat} />
                  ))}
                </span>
              )}
              {option.icon && (
                <ToyotaIcon name={option.icon} className="size-6" />
              )}
              <span>{option.label}</span>
              {option.tag && (
                <span className="ta-config__score">
                  +1 {copy.tags[option.tag]}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
