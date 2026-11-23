// Precio en pesos colombianos, sin decimales: 36000 → "$36.000"
export function formatPrice(value: number) {
  return `$${value.toLocaleString('es-CO')}`;
}
