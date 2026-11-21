import { Bike, ChefHat, House, ReceiptText } from 'lucide-react';

// Ícono de cada paso del pedido, en orden: recibido, en el horno, en camino y
// entregado
export const SONOPIZZA_ORDER_STEP_ICONS = [
  ReceiptText,
  ChefHat,
  Bike,
  House
] as const;

// Paso en el que va el pedido del recorrido (0 = recibido): ya lo recibimos y
// está en el horno
export const SONOPIZZA_ORDER_CURRENT_STEP = 1;

// Paso en el que va el pedido un rato después, cuando se le hace seguimiento:
// ya salió y va en camino
export const SONOPIZZA_TRACKING_STEP = 2;
