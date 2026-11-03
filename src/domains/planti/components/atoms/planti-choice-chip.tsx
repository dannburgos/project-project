import { cn } from '@/lib/utils';

type PlantiChoiceChipProps = {
  isSelected?: boolean;
  children: React.ReactNode;
};

// Una opción entre varias (dónde vive, cuánta luz recibe): la elegida va en
// verde Hoja
export function PlantiChoiceChip({
  isSelected = false,
  children
}: PlantiChoiceChipProps) {
  return (
    <li
      className={cn(
        'planti-choice-chip',
        isSelected && 'planti-choice-chip--selected'
      )}
      aria-current={isSelected ? 'true' : undefined}
    >
      {children}
    </li>
  );
}
