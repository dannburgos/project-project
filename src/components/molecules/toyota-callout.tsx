import { cn } from '@/lib/utils';

type ToyotaCalloutTone = 'rule' | 'note' | 'pending';

type ToyotaCalloutProps = {
  text: string;
  label?: string;
  tone?: ToyotaCalloutTone;
  className?: string;
};

const TONE_CLASS: Record<ToyotaCalloutTone, string> = {
  rule: 'ty-callout--rule',
  note: 'ty-callout--note',
  pending: 'ty-callout--pending'
};

// Aviso del caso: una regla destacada (barra roja), una nota con su nivel de
// evidencia o un espacio por completar con evidencia real
export function ToyotaCallout({
  text,
  label,
  tone = 'note',
  className
}: ToyotaCalloutProps) {
  return (
    <aside
      className={cn('ty-callout', TONE_CLASS[tone], className)}
      data-ty-rise
    >
      {label && <p className="ty-callout__label">{label}</p>}
      <p className="ty-callout__text">{text}</p>
    </aside>
  );
}
