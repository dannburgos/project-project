import type { Metadata } from 'next';
import {
  Bowlby_One_SC as bowlbyOneSc,
  DM_Sans as dmSansFont,
  Figtree as figtreeFont,
  Geist,
  Outfit,
  Poppins
} from 'next/font/google';

import { cn } from '@/lib/utils';
import '@/styles/prototypes.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

// Tipografía de Planti (UI Kit)
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
});

// Tipografía de PetRide (sistema de diseño de la app)
const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800']
});

// Tipografías de Sonopizza (sistema de diseño de la app): Bowlby One SC para
// los titulares y DM Sans para la interfaz
const bowlbyOne = bowlbyOneSc({
  variable: '--font-sono-display',
  subsets: ['latin'],
  weight: '400'
});

const dmSans = dmSansFont({
  variable: '--font-sono-text',
  subsets: ['latin'],
  weight: ['400', '600', '700', '900']
});

// Tipografía del prototipo de Toyota: Figtree mientras no haya acceso a
// Toyota Type (decisión B.11 del caso)
const figtree = figtreeFont({
  variable: '--font-toyota',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900']
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
      <body
        className={cn(
          geistSans.variable,
          poppins.variable,
          outfit.variable,
          bowlbyOne.variable,
          dmSans.variable,
          figtree.variable,
          'antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
