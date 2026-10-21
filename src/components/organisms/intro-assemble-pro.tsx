'use client';

import {
  BRAND_SYMBOL_PIECE_COUNT,
  BrandSymbolPiece
} from '@/components/atoms/brand-symbol';
import { useIntroAssemblePro } from '@/hooks/use-intro-assemble-pro';
import { cn } from '@/lib/utils';

type IntroAssembleProProps = {
  onDone: () => void;
};

// Tono de cada pieza, en el orden del monograma: del más claro (círculo) al
// más oscuro (D de abajo)
const PIECE_TONE_CLASSES = [
  'intro-pro__piece--amber',
  'intro-pro__piece--orange',
  'intro-pro__piece--flame',
  'intro-pro__piece--ember'
] as const;

// Entrada "1 · Ensamble del símbolo", versión pro (ver useIntroAssemblePro).
// Cada pieza va en tres capas: una se mueve en horizontal, otra en vertical y
// gira, y la de adentro lleva el desenfoque y el color; así cada pieza dibuja
// una curva; cada pieza llega en un tono de la gama. Es decorativa: los
// lectores de pantalla leen la página de debajo como siempre.
export function IntroAssemblePro({ onDone }: IntroAssembleProProps) {
  const {
    overlayRef,
    backdropRef,
    symbolRef,
    setAxisXRef,
    setAxisYRef,
    setPieceRef
  } = useIntroAssemblePro(onDone);

  return (
    <div ref={overlayRef} className="intro" aria-hidden="true">
      <div ref={backdropRef} className="intro__backdrop" />

      <div ref={symbolRef} className="intro-pro__symbol">
        {Array.from({ length: BRAND_SYMBOL_PIECE_COUNT }, (_, index) => (
          <div key={index} ref={setAxisXRef(index)} className="intro-pro__axis">
            <div ref={setAxisYRef(index)} className="intro-pro__axis">
              <div
                ref={setPieceRef(index)}
                className={cn('intro-pro__piece', PIECE_TONE_CLASSES[index])}
              >
                <BrandSymbolPiece index={index} className="size-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
