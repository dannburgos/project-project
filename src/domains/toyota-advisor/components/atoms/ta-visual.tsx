import { cn } from '@/lib/utils';

type TaVisualProps = {
  label: string;
  // Sobre fondo oscuro, la card es gris oscuro
  tone?: 'light' | 'dark';
  className?: string;
};

// Lugar de un recurso visual (foto, silueta, render): una card gris con un
// rótulo que dice qué va ahí
export function TaVisual({ label, tone = 'light', className }: TaVisualProps) {
  return (
    <div
      className={cn(
        'ta-visual',
        tone === 'dark' && 'ta-visual--dark',
        className
      )}
      role="img"
      aria-label={label}
    >
      <span className="ta-visual__label">{label}</span>
    </div>
  );
}
