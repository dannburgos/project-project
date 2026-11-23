// Dibujo plano de un carro visto de lado, en el gris del carro asignado y con
// la luz delantera lima de la marca
export function PetrideCarArt() {
  return (
    <svg className="petride-car-art" viewBox="0 0 120 52" aria-hidden="true">
      <path
        className="petride-car-art__body"
        d="M8 34 C8 27 13 24 20 23 L34 21 L46 10 C49 7 53 6 57 6 H82 C87 6 91 8 94 12 L102 22 C109 23 114 27 114 33 V38 C114 41 112 42 109 42 H11 C9 42 8 40 8 38 Z"
      />
      <path
        className="petride-car-art__glass"
        d="M40 21 L50 12 C52 10 54 10 57 10 H66 V21 Z M70 10 H82 C85 10 88 12 90 14 L97 21 H70 Z"
      />
      <circle className="petride-car-art__wheel" cx="30" cy="42" r="9" />
      <circle className="petride-car-art__hub" cx="30" cy="42" r="3.5" />
      <circle className="petride-car-art__wheel" cx="92" cy="42" r="9" />
      <circle className="petride-car-art__hub" cx="92" cy="42" r="3.5" />
      <rect
        className="petride-car-art__light"
        x="106"
        y="27"
        width="7"
        height="4"
        rx="2"
      />
    </svg>
  );
}
