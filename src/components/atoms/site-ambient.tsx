'use client';

import { useGlassGlow } from '@/hooks/use-glass-glow';

// Fondo del sitio (referencia: armor-bd.com): degradados naranja, rojo y
// negro que se mueven lento, con grano encima. El CSS lo muestra solo fuera
// de Work y de los casos, que son el universo de cada proyecto. Además
// activa el brillo de las superficies de vidrio. Es decorativo.
export function SiteAmbient() {
  useGlassGlow();

  return (
    <div className="site-ambient" aria-hidden="true">
      <span className="site-ambient__mesh" />
      <span className="site-ambient__grain" />
    </div>
  );
}
