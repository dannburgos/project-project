import { cn } from '@/lib/utils';

type SonopizzaChoiceOptionProps = {
  name: string;
  note: string;
  isOn: boolean;
};

// Opción de una elección única (el borde de la pizza…): su nombre y una nota
// debajo (lo que cuesta)
export function SonopizzaChoiceOption({
  name,
  note,
  isOn
}: SonopizzaChoiceOptionProps) {
  return (
    <span
      role="radio"
      aria-checked={isOn}
      className={cn('sp-choice', isOn && 'sp-choice--on')}
    >
      <span className="sp-choice__name">{name}</span>
      <span className="sp-choice__note">{note}</span>
    </span>
  );
}
