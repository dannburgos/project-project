// Anillo de 160 × 160 con un arco continuo que se llena a medida que pasa el
// tiempo. Con el radio de 70, el contorno mide 2π · 70
const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

type SonopizzaCountdownRingProps = {
  // Cuánto del tiempo ya pasó, de 0 a 1
  progress: number;
  children: React.ReactNode;
};

// Reloj de cuenta regresiva con la pizza en el centro: el arco azul es el
// tiempo que ya pasó y lo gris, el que falta. Es decorativo: el tiempo que
// falta también va escrito
export function SonopizzaCountdownRing({
  progress,
  children
}: SonopizzaCountdownRingProps) {
  const filled = CIRCUMFERENCE * Math.min(Math.max(progress, 0), 1);

  return (
    <div className="sp-ring">
      <svg viewBox="0 0 160 160" className="sp-ring__svg" aria-hidden="true">
        <circle className="sp-ring__track" cx="80" cy="80" r={RADIUS} />
        <circle
          className="sp-ring__progress"
          cx="80"
          cy="80"
          r={RADIUS}
          strokeDasharray={`${filled.toFixed(2)} ${CIRCUMFERENCE.toFixed(2)}`}
          transform="rotate(-90 80 80)"
        />
      </svg>
      <div className="sp-ring__center">{children}</div>
    </div>
  );
}
