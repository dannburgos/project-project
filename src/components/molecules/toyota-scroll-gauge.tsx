import { cn } from '@/lib/utils';

type ToyotaScrollGaugeProps = {
  label: string;
  className?: string;
};

// Medidor en semicírculo: 13 marcas de izquierda a derecha, una mayor cada
// tres y las tres últimas en rojo (la zona alta)
const TICK_COUNT = 13;
const MAJOR_EVERY = 3;
const RED_FROM = 10;
const CENTER = 60;
const OUTER_RADIUS = 52;
const MAJOR_INNER_RADIUS = 40;
const MINOR_INNER_RADIUS = 46;

const TICKS = Array.from({ length: TICK_COUNT }, (_, index) => {
  const angle = Math.PI * (1 - index / (TICK_COUNT - 1));
  const isMajor = index % MAJOR_EVERY === 0;
  const inner = isMajor ? MAJOR_INNER_RADIUS : MINOR_INNER_RADIUS;
  const point = (radius: number) => ({
    x: Number((CENTER + radius * Math.cos(angle)).toFixed(2)),
    y: Number((CENTER - radius * Math.sin(angle)).toFixed(2))
  });
  return {
    from: point(OUTER_RADIUS),
    to: point(inner),
    isMajor,
    isRed: index >= RED_FROM
  };
});

// Indicador de scroll de la portada (referencia: el velocímetro de S-2K).
// Quieta, la aguja respira; al bajar, sube del mínimo al máximo junto con la
// captura que crece (--gauge, de 0 a 1, lo mueve el scroll) y al final el
// medidor se apaga. Es decorativo: el texto lo dice todo.
export function ToyotaScrollGauge({
  label,
  className
}: ToyotaScrollGaugeProps) {
  return (
    <div className={cn('ty-gauge', className)} aria-hidden="true" data-ty-hint>
      <svg className="ty-gauge__dial" viewBox="0 0 120 66">
        {TICKS.map(tick => (
          <line
            key={`${tick.from.x}-${tick.from.y}`}
            className={cn(
              'ty-gauge__tick',
              tick.isMajor && 'ty-gauge__tick--major',
              tick.isRed && 'ty-gauge__tick--red'
            )}
            x1={tick.from.x}
            y1={tick.from.y}
            x2={tick.to.x}
            y2={tick.to.y}
          />
        ))}
        <g className="ty-gauge__needle">
          <g className="ty-gauge__needle-idle">
            <rect
              className="ty-gauge__needle-bar"
              x="58.5"
              y="14"
              width="3"
              height="46"
            />
          </g>
        </g>
        <rect className="ty-gauge__hub" x="55" y="55" width="10" height="10" />
      </svg>
      <span className="ty-gauge__label">{label}</span>
    </div>
  );
}
