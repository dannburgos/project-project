import { cn } from '@/lib/utils';

type QuboStepsProps = {
  steps: readonly string[];
  isLoop?: boolean;
  className?: string;
};

// Recorrido de pasos con flecha entre cada uno. Con `isLoop`, el último vuelve
// al primero (el ciclo del negocio).
export function QuboSteps({ steps, isLoop, className }: QuboStepsProps) {
  return (
    <ol className={cn('qb-steps', isLoop && 'qb-steps--loop', className)}>
      {steps.map((step, index) => (
        <li key={step} className="qb-steps__item">
          <span className="qb-steps__number" aria-hidden="true">
            {index + 1}
          </span>
          <span className="qb-steps__label">{step}</span>
        </li>
      ))}
    </ol>
  );
}
