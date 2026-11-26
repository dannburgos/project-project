import { cn } from '@/lib/utils';

type QuboPendingProps = {
  label: string;
  note?: string;
  className?: string;
};

// Marca de lo que se completa tras las entrevistas: dice «en curso» y, si
// hay nota, explica cuándo llega
export function QuboPending({ label, note, className }: QuboPendingProps) {
  return (
    <p className={cn('qb-pending', className)}>
      <span className="qb-pending__badge">{label}</span>
      {note && <span className="qb-pending__note">{note}</span>}
    </p>
  );
}
