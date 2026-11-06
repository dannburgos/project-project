import { cn } from '@/lib/utils';

type SonoPlaceholderProps = {
  label: string;
  className?: string;
  // Posición en la fila de capturas de la auditoría (0 = centro)
  'data-audit-slot'?: number;
};

// Espacio marcado para una imagen que todavía no llega (capturas, fotos o el
// logotipo): lleva su etiqueta para saber qué va ahí
export function SonoPlaceholder({
  label,
  className,
  'data-audit-slot': auditSlot
}: SonoPlaceholderProps) {
  return (
    <div
      className={cn('sono-placeholder', className)}
      role="img"
      aria-label={label}
      data-audit-slot={auditSlot}
    >
      <span className="sono-placeholder__label">{label}</span>
    </div>
  );
}
