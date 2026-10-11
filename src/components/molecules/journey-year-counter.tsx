import { journeyContent } from '@/content/journey';
import { cn } from '@/lib/utils';

type JourneyYearCounterProps = {
  // Año a mostrar. Durante la entrada lleva decimales y los dígitos giran de
  // forma continua; después es un año entero y el cambio se anima.
  value: number;
  // Primer año que puede mostrar (la entrada cuenta desde antes).
  fromYear?: number;
  // Con la entrada terminada, cada cambio de año rueda con una transición.
  isLive: boolean;
};

const PLACES = [1000, 100, 10, 1] as const;

// Posición de una columna como en un odómetro: el último dígito gira de forma
// continua y cada columna avanza solo mientras la de su derecha pasa del 9 al 0.
function getColumnPosition(value: number, place: number) {
  const carry = Math.max(0, (value % place) - (place - 1));
  return Math.floor(value / place) + carry;
}

// Año a modo de contador mecánico: cada dígito es una columna que rueda.
export function JourneyYearCounter({
  value,
  fromYear = journeyContent.firstYear,
  isLive
}: JourneyYearCounterProps) {
  const { lastYear } = journeyContent;

  return (
    <span className={cn('journey-counter', isLive && 'journey-counter--live')}>
      {PLACES.map(place => {
        const first = Math.floor(fromYear / place);
        const last = Math.floor(lastYear / place);
        const position = getColumnPosition(value, place) - first;
        const cells = Array.from({ length: last - first + 1 }, (_, index) =>
          String((first + index) % 10)
        );

        return (
          <span key={place} className="journey-counter__column">
            <span
              className="journey-counter__strip"
              style={{ transform: `translateY(${-position}em)` }}
            >
              {cells.map((digit, index) => (
                <span key={index} className="journey-counter__cell">
                  {digit}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
