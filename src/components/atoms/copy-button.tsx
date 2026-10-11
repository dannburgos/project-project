'use client';

import { Check, Copy } from 'lucide-react';

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { cn } from '@/lib/utils';

type CopyButtonProps = {
  value: string;
  label: string;
  copiedLabel: string;
};

// Botón que copia un texto. Toma el color del texto que lo rodea, así sirve
// sobre fondo claro u oscuro. El aviso "copiado" también se anuncia a lectores
// de pantalla.
export function CopyButton({ value, label, copiedLabel }: CopyButtonProps) {
  const { hasCopied, handleCopy } = useCopyToClipboard();

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => handleCopy(value)}
      className={cn('copy-button', hasCopied && 'copy-button--copied')}
    >
      {hasCopied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
      <span role="status" className="copy-button__status">
        {hasCopied ? copiedLabel : ''}
      </span>
    </button>
  );
}
