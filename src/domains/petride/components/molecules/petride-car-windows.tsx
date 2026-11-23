import { Plus } from 'lucide-react';

import { cn } from '@/lib/utils';

import { petrideMessages } from '../../messages';
import type { PetridePet } from '../../types/petride.types';

type PetrideCarWindowsProps = {
  pets: readonly PetridePet[];
  capacity: number;
};

// Ventanas del carro, de atrás hacia adelante: cada una es un puesto
const WINDOWS = ['back', 'middle', 'front'] as const;

// Carro ilustrado de lado: cada mascota del viaje se asoma por una ventana y
// los puestos libres quedan punteados en lima. Lo usan Elegir mascotas y el
// resumen de la tarifa, para que se reconozca que es el mismo viaje
export function PetrideCarWindows({ pets, capacity }: PetrideCarWindowsProps) {
  const { tripPets } = petrideMessages;

  return (
    <span className="petride-capacity-car__art" aria-hidden="true">
      <svg className="petride-capacity-car__svg" viewBox="0 0 184 84">
        <defs>
          <linearGradient id="petride-car-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" className="petride-capacity-car__stop-top" />
            <stop offset="0.55" className="petride-capacity-car__stop-mid" />
            <stop offset="1" className="petride-capacity-car__stop-low" />
          </linearGradient>
        </defs>

        {/* Líneas de velocidad y sombra en el piso */}
        <path
          className="petride-capacity-car__speed"
          d="M4 22 H20 M10 29 H24 M2 36 H16"
        />
        <ellipse
          className="petride-capacity-car__shadow"
          cx="94"
          cy="77"
          rx="84"
          ry="3.5"
        />

        {/* Parrilla del techo */}
        <path
          className="petride-capacity-car__rack"
          d="M58 6.5 H116 M62 6.5 V10 M112 6.5 V10"
        />

        {/* Carrocería con su degradado, la parte baja más oscura y el
            brillo del techo */}
        <path
          className="petride-capacity-car__body"
          d="M8 60 V52 C8 47 11 44 16 43 L38 41 L40 17 C41 12.5 44 10 49 10 H127 C131 10 134 11.5 136.5 14.5 L154 38 L168 40 C174 41 178 45 178 51 V60 C178 63 176 65 173 65 H13 C10 65 8 63 8 60 Z"
        />
        <path
          className="petride-capacity-car__lower"
          d="M9 53 H177 V60 C177 62.5 175.5 64 173 64 H13 C10.5 64 9 62.5 9 60 Z"
        />
        <path className="petride-capacity-car__roof-shine" d="M50 11.6 H126" />
        <path className="petride-capacity-car__belt" d="M40 45 H160" />

        {/* Marco oscuro de las ventanas (las fotos van encima) */}
        <path
          className="petride-capacity-car__frame"
          d="M41 42 L43 17 C43.5 13.5 46 12 49 12 H128 C131 12 133 13 134.5 15.5 L151 42 Z"
        />

        {/* Puertas, manijas, espejo y calcomanía de huella */}
        <path
          className="petride-capacity-car__seam"
          d="M80 44 V62 M118 44 V62 M152 42 C150 50 150 56 152 63"
        />
        <rect
          className="petride-capacity-car__handle"
          x="66"
          y="47.5"
          width="9"
          height="2.5"
          rx="1.25"
        />
        <rect
          className="petride-capacity-car__handle"
          x="104"
          y="47.5"
          width="9"
          height="2.5"
          rx="1.25"
        />
        <path
          className="petride-capacity-car__mirror"
          d="M147 33 H154 C156 33 157 34.5 156.5 36.5 L156 38 H149 Z"
        />
        <g className="petride-capacity-car__decal">
          <ellipse cx="98" cy="57.5" rx="3.4" ry="2.7" />
          <circle cx="94.2" cy="54" r="1.25" />
          <circle cx="96.8" cy="52.2" r="1.25" />
          <circle cx="99.8" cy="52.2" r="1.25" />
          <circle cx="102.2" cy="54" r="1.25" />
        </g>

        {/* Luces y parachoques */}
        <path
          className="petride-capacity-car__beam"
          d="M178 46 L184 41 V55 L178 50 Z"
        />
        <path
          className="petride-capacity-car__headlight"
          d="M169 43 L176 44.5 C177.5 45 178 46.5 177.5 48 H170 C168.8 48 168.3 46.8 168.6 45.6 Z"
        />
        <rect
          className="petride-capacity-car__taillight"
          x="8"
          y="46"
          width="3.5"
          height="5"
          rx="1.5"
        />
        <path
          className="petride-capacity-car__bumper"
          d="M166 57 H178 V60 C178 62.5 176.5 64 174 64 H166 Z M8 57 H18 V64 H12 C9.5 64 8 62.5 8 60 Z"
        />

        {/* Ruedas: arco, llanta con rayos y brillo */}
        {[46, 144].map(x => (
          <g key={x}>
            <circle
              className="petride-capacity-car__arch"
              cx={x}
              cy="64"
              r="15"
            />
            <circle
              className="petride-capacity-car__tire"
              cx={x}
              cy="64"
              r="12"
            />
            <circle
              className="petride-capacity-car__rim"
              cx={x}
              cy="64"
              r="7.5"
            />
            <path
              className="petride-capacity-car__spokes"
              d={`M${x} 57.5 V70.5 M${x - 6.5} 64 H${x + 6.5} M${x - 4.6} 59.4 L${x + 4.6} 68.6 M${x + 4.6} 59.4 L${x - 4.6} 68.6`}
            />
            <circle
              className="petride-capacity-car__hub"
              cx={x}
              cy="64"
              r="2.5"
            />
            <path
              className="petride-capacity-car__tire-shine"
              d={`M${x - 8} 58 A10 10 0 0 1 ${x + 2} 54.2`}
            />
          </g>
        ))}

        {/* Camino */}
        <path className="petride-capacity-car__road" d="M0 82 H184" />
      </svg>
      {WINDOWS.slice(0, capacity).map((window, index) => {
        const pet = pets[index];
        return (
          <span
            key={window}
            className={cn(
              'petride-capacity-car__window',
              `petride-capacity-car__window--${window}`,
              !pet && 'petride-capacity-car__window--free'
            )}
          >
            {pet ? (
              <img src={pet.photo} alt="" />
            ) : (
              <Plus aria-label={tripPets.freeSlot} />
            )}
          </span>
        );
      })}
    </span>
  );
}
