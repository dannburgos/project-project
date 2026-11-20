import type {
  SonopizzaCartLine,
  SonopizzaExtra,
  SonopizzaProduct,
  SonopizzaWeekPromo
} from './types/sonopizza.types';

// Datos de ejemplo del prototipo (precios en pesos colombianos). No hay
// pedidos reales: sirven para mostrar las pantallas con contenido creíble.

export const SONOPIZZA_PRODUCTS: readonly SonopizzaProduct[] = [
  {
    id: 'pepperoni',
    name: 'Pepperoni artesanal',
    description: 'Salsa de tomate, mozzarella y pepperoni crocante.',
    photo: 'pepperoni',
    turn: 0,
    prices: { personal: 28000, medium: 36000, family: 44000 },
    ingredients: ['tomato', 'cheese', 'pepperoni'],
    tag: 'Más pedida'
  },
  {
    id: 'veggie',
    name: 'Vegetariana de la huerta',
    description:
      'Tomate, cebolla morada, pimentón, champiñones y aceitunas negras.',
    photo: 'veggie',
    turn: 0,
    prices: { personal: 26000, medium: 34000, family: 42000 },
    ingredients: ['tomato', 'onion', 'pepper', 'mushroom', 'olive'],
    tag: 'Nueva'
  },
  {
    id: 'double-pepperoni',
    name: 'Doble pepperoni',
    description: 'El doble de pepperoni sobre mozzarella gratinada.',
    photo: 'pepperoni',
    turn: 2,
    prices: { personal: 30000, medium: 39000, family: 48000 },
    ingredients: ['tomato', 'cheese', 'pepperoni']
  },
  {
    id: 'garden',
    name: 'Mediterránea',
    description: 'Pimentón asado, champiñones, aceitunas y orégano.',
    photo: 'veggie',
    turn: 1,
    prices: { personal: 27000, medium: 35000, family: 43000 },
    ingredients: ['pepper', 'mushroom', 'olive', 'cheese'],
    tag: 'Vegetariana'
  }
];

export const SONOPIZZA_EXTRAS: readonly SonopizzaExtra[] = [
  { id: 'double-cheese', name: 'Doble queso', price: 4000 },
  { id: 'cheese-crust', name: 'Borde de queso', price: 6000 },
  { id: 'more-olives', name: 'Más aceitunas', price: 3000 }
];

// Para acompañar, en la hoja de "agregado al carrito"
export const SONOPIZZA_SIDES: readonly SonopizzaExtra[] = [
  { id: 'soda', name: 'Gaseosa 1,5 L', price: 6000 },
  { id: 'garlic-bread', name: 'Palitos de ajo', price: 9000 }
];

// Envío a domicilio
export const SONOPIZZA_DELIVERY = 5000;

// El carrito del recorrido: la vegetariana que se personalizó y dos
// pepperoni personales
export const SONOPIZZA_CART: readonly SonopizzaCartLine[] = [
  {
    id: 'line-veggie',
    productId: 'veggie',
    size: 'medium',
    quantity: 1,
    removed: ['onion'],
    extras: ['double-cheese'],
    unitPrice: 38000
  },
  {
    id: 'line-pepperoni',
    productId: 'pepperoni',
    size: 'personal',
    quantity: 2,
    removed: [],
    extras: [],
    unitPrice: 28000
  }
];

export function findSonopizzaProduct(id: string) {
  return SONOPIZZA_PRODUCTS.find(product => product.id === id);
}

// 2x1 de los martes en medianas: dos vegetarianas medianas por el precio de una
export const SONOPIZZA_WEEK_PROMO: SonopizzaWeekPromo = {
  photo: 'veggie',
  regularPrice: 68000,
  price: 34000,
  savings: 34000
};
