import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';

type TaOptionTileProps = {
  label: string;
  letter: string;
  icon?: string;
  isSelected: boolean;
  isDisabled?: boolean;
  isMultiple?: boolean;
  // Etiqueta que suma al elegirla (se asoma al pasar el cursor)
  scoreHint?: string;
  onSelect: () => void;
};

// Una respuesta de la asesoría: grande, con su icono, su tecla de atajo y la
// marca de elegida (cuadrado para una, casilla para varias)
export function TaOptionTile({
  label,
  letter,
  icon,
  isSelected,
  isDisabled = false,
  isMultiple = false,
  scoreHint,
  onSelect
}: TaOptionTileProps) {
  return (
    <button
      type="button"
      className={cn(
        'ta-tile',
        isSelected && 'ta-tile--on',
        isDisabled && 'ta-tile--off'
      )}
      role={isMultiple ? 'checkbox' : 'radio'}
      aria-checked={isSelected}
      aria-disabled={isDisabled}
      onClick={isDisabled ? undefined : onSelect}
    >
      {icon && (
        <span className="ta-tile__icon">
          <ToyotaIcon name={icon} className="size-6" />
        </span>
      )}
      <span className="ta-tile__body">
        <span className="ta-tile__label">{label}</span>
        {scoreHint && <span className="ta-tile__hint">{scoreHint}</span>}
      </span>
      <kbd className="ta-tile__key">{letter}</kbd>
      <span
        className={cn('ta-tile__mark', isMultiple && 'ta-tile__mark--box')}
        aria-hidden="true"
      >
        <ToyotaIcon name="check" className="ta-tile__check" />
      </span>
    </button>
  );
}
