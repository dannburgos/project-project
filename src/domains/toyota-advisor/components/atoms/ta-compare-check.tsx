import { ToyotaIcon } from '@/components/atoms/toyota-icon';
import { cn } from '@/lib/utils';

// Casilla «Comparar»
export function TaCompareCheck({
  label,
  isOn,
  isDisabled,
  onToggle
}: {
  label: string;
  isOn: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={isOn}
      aria-disabled={isDisabled}
      className={cn(
        'ta-check',
        isOn && 'ta-check--on',
        isDisabled && 'ta-check--off'
      )}
      onClick={isDisabled ? undefined : onToggle}
    >
      <span className="ta-check__box" aria-hidden="true">
        <ToyotaIcon name="check" className="size-3" />
      </span>
      {label}
    </button>
  );
}
