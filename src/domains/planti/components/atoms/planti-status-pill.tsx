import { cn } from '@/lib/utils';

type PlantiStatusPillProps = {
  tone: 'positive' | 'pending';
  children: React.ReactNode;
};

// Estado corto de un cuidado o de una planta: en verde si va bien, en
// terracota si está pendiente
export function PlantiStatusPill({ tone, children }: PlantiStatusPillProps) {
  return (
    <span
      className={cn(
        'planti-status-pill',
        tone === 'pending' && 'planti-status-pill--pending'
      )}
    >
      {children}
    </span>
  );
}
