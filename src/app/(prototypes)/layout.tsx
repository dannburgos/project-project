import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import { cn } from '@/lib/utils';
import '@/styles/prototypes.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

export const metadata: Metadata = {
  robots: { index: false, follow: false }
};

// Prototipos de los proyectos: cada uno se ve a pantalla completa, sin la
// barra, el cursor propio ni el scroll suave del portafolio. El caso de cada
// proyecto los muestra dentro de un celular, en su capítulo "Prototipo".
export default function PrototypesLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cn(geistSans.variable, 'antialiased')}>{children}</body>
    </html>
  );
}
