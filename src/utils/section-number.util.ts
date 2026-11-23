// Número de una sección del caso con dos cifras (00, 01…), como se muestra en
// los submenús y contadores
export function formatSectionNumber(index: number, firstNumber = 0) {
  return String(index + firstNumber).padStart(2, '0');
}
