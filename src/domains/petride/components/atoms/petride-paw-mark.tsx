// Huella rellena: cuatro dedos y la almohadilla. Toma el color del texto
export function PetridePawMark() {
  return (
    <svg className="petride-paw-mark" viewBox="0 0 24 24" aria-hidden="true">
      <ellipse
        cx="5.5"
        cy="10"
        rx="2.2"
        ry="2.7"
        transform="rotate(-20 5.5 10)"
      />
      <ellipse cx="9.6" cy="5.6" rx="2.3" ry="2.9" />
      <ellipse cx="14.4" cy="5.6" rx="2.3" ry="2.9" />
      <ellipse
        cx="18.5"
        cy="10"
        rx="2.2"
        ry="2.7"
        transform="rotate(20 18.5 10)"
      />
      <path d="M12 11.2c-2.6 0-5.6 3.4-5.6 6.1 0 1.9 1.4 2.9 3 2.9 1 0 1.7-.5 2.6-.5s1.6.5 2.6.5c1.6 0 3-1 3-2.9 0-2.7-3-6.1-5.6-6.1Z" />
    </svg>
  );
}
