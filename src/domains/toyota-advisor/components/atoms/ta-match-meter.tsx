import { cn } from '@/lib/utils';

// «Cumple n de tus n prioridades» con un cuadrado por prioridad
export function TaMatchMeter({
  met,
  total,
  label,
  isCompact = false
}: {
  label: string;
  met: number;
  total: number;
  isCompact?: boolean;
}) {
  return (
    <p className={cn('ta-meter', isCompact && 'ta-meter--compact')}>
      <span className="ta-meter__squares" aria-hidden="true">
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className={cn(
              'ta-meter__square',
              index < met && 'ta-meter__square--on'
            )}
          />
        ))}
      </span>
      {label}
    </p>
  );
}
