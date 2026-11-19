import { Car, Coffee, Stethoscope, Trees } from 'lucide-react';

import { cn } from '@/lib/utils';

import { PETRIDE_MAP_STREETS } from '../../example-trip';

type PetrideMapVariant = 'route' | 'driver';

type PetrideMapProps = {
  variant: PetrideMapVariant;
  // A dónde voy (tarifa): nombre del destino, hora de llegada, minutos sobre
  // la ruta y la etiqueta del punto de partida
  destination?: { name: string; arrivalLabel: string; time: string };
  routeMinutes?: { value: number; unit: string };
  originLabel?: string;
  // Desde dónde viene el conductor (asignado): la etiqueta del punto de
  // recogida
  pickupLabel?: string;
};

// Cuadras del mapa: columnas y filas separadas por calles de 14 px
const COLUMNS = [-10, 96, 202, 308];
const ROWS = [-20, 74, 168, 262, 356, 450, 544, 638, 732];
const BLOCK_WIDTH = 92;
const BLOCK_HEIGHT = 80;
// Edificios dentro de cada cuadra (x, y, ancho, alto relativos a la cuadra):
// cuatro trazados que se alternan para que la ciudad no se vea repetida
const BUILDINGS = [
  [
    [8, 8, 36, 30],
    [50, 8, 34, 30],
    [8, 44, 76, 28]
  ],
  [
    [8, 8, 76, 22],
    [8, 36, 26, 36],
    [40, 36, 44, 36]
  ],
  [
    [8, 8, 26, 64],
    [40, 8, 44, 30],
    [40, 44, 44, 28]
  ],
  [
    [8, 8, 40, 64],
    [54, 8, 30, 38],
    [54, 52, 30, 20]
  ]
];
// Parque de la 93 junto al destino: árboles, un sendero y un estanque
const PARK = { x: 308, y: 74 };
const TREES = [
  { x: 322, y: 92, r: 8 },
  { x: 344, y: 86, r: 6 },
  { x: 384, y: 96, r: 9 },
  { x: 330, y: 136, r: 7 },
  { x: 386, y: 138, r: 8 }
];
// Zonas verdes de barrio: cuadras con pasto y unos árboles en vez de edificios
const GREEN_BLOCKS = [
  { x: -10, y: 74 },
  { x: 96, y: 356 },
  { x: -10, y: 638 }
];
const GREEN_TREES = [
  { dx: 22, dy: 24, r: 9 },
  { dx: 58, dy: 30, r: 11 },
  { dx: 36, dy: 58, r: 8 },
  { dx: 72, dy: 62, r: 7 }
];
// Lugares para mascotas marcados en el mapa: en qué variante salen y dónde
const PLACES = [
  { id: 'park', kind: 'park', x: 142, y: 396, variants: ['route', 'driver'] },
  { id: 'vet', kind: 'vet', x: 36, y: 208, variants: ['route', 'driver'] },
  { id: 'cafe', kind: 'cafe', x: 354, y: 584, variants: ['route'] }
] as const;
const PLACE_ICONS = { park: Trees, vet: Stethoscope, cafe: Coffee };
const PARK_PATH = 'M308 118 C 330 104, 352 132, 376 112 S 398 110, 400 108';
// Avenida: la Calle 93, más ancha y con línea de carril
const AVENUE_Y = 255;

// A dónde voy: la ruta completa del origen al destino, con flechas de sentido
const ROUTE = 'M89 443 V349 H195 V255 H301 V161';
const ROUTE_ARROWS = [
  { x: 89, y: 396, angle: -90 },
  { x: 142, y: 349, angle: 0 },
  { x: 195, y: 302, angle: -90 },
  { x: 301, y: 208, angle: -90 }
];
// Desde dónde viene el conductor: lo que le falta para recoger (el carro va
// sobre la Calle 90, en x 248)
const DRIVER_PICKUP = 'M248 443 H89';

// Mapa ilustrado de la ciudad, pensado para mascotas: cuadras con edificios,
// zonas verdes, parques, veterinarias y cafés marcados, una avenida, calles
// con nombre y el Parque de la 93 con árboles y estanque. Cuenta dos historias:
// en la tarifa, la ruta completa hacia el destino; con el conductor asignado,
// el camino que trae el carro hasta el punto de recogida y, en sombra, el
// viaje que sigue después
export function PetrideMap({
  variant,
  destination,
  routeMinutes,
  originLabel,
  pickupLabel
}: PetrideMapProps) {
  const isDriver = variant === 'driver';

  return (
    <div className="petride-map" data-variant={variant} aria-hidden="true">
      <div className="petride-map__layer">
        <svg className="petride-map__svg" viewBox="0 0 390 844">
          <rect
            className="petride-map__avenue"
            x="-10"
            y={AVENUE_Y - 11}
            width="410"
            height="22"
          />
          {ROWS.flatMap((y, row) =>
            COLUMNS.map((x, column) => {
              const isPark = x === PARK.x && y === PARK.y;
              const isGreen = GREEN_BLOCKS.some(
                block => block.x === x && block.y === y
              );
              const pattern = BUILDINGS[(column * 3 + row) % BUILDINGS.length];
              return (
                <g key={`${x}-${y}`}>
                  <rect
                    className={
                      isPark || isGreen
                        ? 'petride-map__park'
                        : 'petride-map__block'
                    }
                    x={x}
                    y={y}
                    width={BLOCK_WIDTH}
                    height={BLOCK_HEIGHT}
                    rx={12}
                  />
                  {isGreen &&
                    GREEN_TREES.map(tree => (
                      <circle
                        key={`${tree.dx}-${tree.dy}`}
                        className="petride-map__tree"
                        cx={x + tree.dx}
                        cy={y + tree.dy}
                        r={tree.r}
                      />
                    ))}
                  {!isPark &&
                    !isGreen &&
                    pattern.map(([bx, by, bw, bh]) => (
                      <rect
                        key={`${bx}-${by}`}
                        className="petride-map__building"
                        x={x + bx}
                        y={y + by}
                        width={bw}
                        height={bh}
                        rx={5}
                      />
                    ))}
                </g>
              );
            })
          )}

          <path className="petride-map__park-path" d={PARK_PATH} />
          <ellipse
            className="petride-map__pond"
            cx="364"
            cy="128"
            rx="14"
            ry="8"
          />
          {TREES.map(tree => (
            <g key={`${tree.x}-${tree.y}`}>
              <circle
                className="petride-map__tree-shadow"
                cx={tree.x + 2}
                cy={tree.y + 3}
                r={tree.r}
              />
              <circle
                className="petride-map__tree"
                cx={tree.x}
                cy={tree.y}
                r={tree.r}
              />
            </g>
          ))}

          <path className="petride-map__lane" d={`M-10 ${AVENUE_Y} H400`} />
          {PETRIDE_MAP_STREETS.map(street => (
            <text
              key={street.name}
              className="petride-map__street"
              x={street.x}
              y={street.y}
              transform={
                street.isVertical
                  ? `rotate(-90 ${street.x} ${street.y})`
                  : undefined
              }
            >
              {street.name}
            </text>
          ))}

          {isDriver ? (
            <>
              <path className="petride-map__ghost" d={ROUTE} />
              <path className="petride-map__route-casing" d={DRIVER_PICKUP} />
              <path className="petride-map__route" d={DRIVER_PICKUP} />
            </>
          ) : (
            <>
              <path className="petride-map__route-shadow" d={ROUTE} />
              <path className="petride-map__route-casing" d={ROUTE} />
              <path className="petride-map__route" d={ROUTE} />
              {ROUTE_ARROWS.map(arrow => (
                <path
                  key={`${arrow.x}-${arrow.y}`}
                  className="petride-map__arrow"
                  d="M-3 -4 L2 0 L-3 4"
                  transform={`translate(${arrow.x} ${arrow.y}) rotate(${arrow.angle})`}
                />
              ))}
            </>
          )}
        </svg>

        {PLACES.filter(place =>
          (place.variants as readonly string[]).includes(variant)
        ).map(place => {
          const Icon = PLACE_ICONS[place.kind];
          return (
            <span
              key={place.id}
              className={cn(
                'petride-map__place',
                `petride-map__place--${place.id}`
              )}
            >
              <Icon />
            </span>
          );
        })}

        {/* Destino: halo lima y pin; con el conductor queda en segundo plano */}
        <span className="petride-map__halo" />
        <span className="petride-map__pin" />

        {/* Origen: "Tú" en la tarifa; punto de recogida con ondas al llegar el
            conductor */}
        {isDriver && (
          <>
            <span className="petride-map__wave petride-map__wave--outer" />
            <span className="petride-map__wave petride-map__wave--inner" />
          </>
        )}
        <span className="petride-map__origin" />
        {originLabel && (
          <span className="petride-map__tag petride-map__tag--origin">
            {originLabel}
          </span>
        )}
        {pickupLabel && (
          <span className="petride-map__tag petride-map__tag--pickup">
            {pickupLabel}
          </span>
        )}

        {destination && (
          <span className="petride-map__callout">
            <strong className="petride-map__callout-name">
              {destination.name}
            </strong>
            <span className="petride-map__callout-time">
              <span className="petride-map__callout-label">
                {destination.arrivalLabel}
              </span>
              {destination.time}
            </span>
          </span>
        )}
        {routeMinutes && (
          <span className="petride-map__minutes">
            <strong>{routeMinutes.value}</strong>
            {routeMinutes.unit}
          </span>
        )}

        {isDriver && (
          <span className="petride-map__car petride-map__car--driver">
            <Car />
          </span>
        )}
      </div>
    </div>
  );
}
