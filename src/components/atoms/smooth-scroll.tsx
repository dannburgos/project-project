'use client';

import { usePathname } from 'next/navigation';

import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

// Scroll suave y con un leve retraso en todo el sitio. Trayectoria queda fuera:
// su línea de tiempo ya suaviza su propio movimiento y, si se sumara este, el
// retraso se duplicaría.
export function SmoothScroll() {
  const pathname = usePathname();
  useSmoothScroll(!pathname.startsWith('/journey'));
  return null;
}
