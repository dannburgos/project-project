'use client';

import { useCustomCursor } from '@/hooks/use-custom-cursor';

// Cursor propio en todo el sitio: un punto de 12 px y un círculo de 48 px que
// lo sigue con un leve retraso. Solo se ve con mouse; es decorativo, así que
// los lectores de pantalla lo ignoran.
export function CustomCursor() {
  const { cursorRef, dotRef, ringRef } = useCustomCursor();

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      data-visible="false"
      aria-hidden="true"
    >
      <div ref={ringRef} className="custom-cursor__ring" />
      <div ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
}
