// Salto entre secciones del escenario de Sonopizza (desde el submenú o el
// contador)
export type StepJump = {
  // Sección a la que se salta y si va hacia adelante en el recorrido
  section: number;
  isForward: boolean;
  // Deja el escenario en la sección nueva; se llama cuando la pantalla está
  // tapada
  swap: () => void;
};

// Tramo de la línea de tiempo (en segundos) en el que el escenario puede
// quedarse quieto: una escena entera, o una pantalla del abanico
export type TimeRange = {
  start: number;
  end: number;
};
