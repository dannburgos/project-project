import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type PlantiButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'light';
};

// Botón de Planti: el principal va en verde Hoja; el secundario, con borde
// fino; el claro, para usarlo sobre una foto
export function PlantiButton({
  variant = 'primary',
  className,
  ...props
}: PlantiButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'planti-button',
        variant === 'secondary' && 'planti-button--secondary',
        variant === 'light' && 'planti-button--light',
        className
      )}
      {...props}
    />
  );
}
