import type {
  SonopizzaCartLine,
  SonopizzaExtra,
  SonopizzaPastOrder,
  SonopizzaProduct,
  SonopizzaSauce,
  SonopizzaSizeKey,
  SonopizzaSliceCount,
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
    tag: 'Más pedida',
    isFavorite: true
  },
  {
    id: 'veggie',
    name: 'Vegetariana de la huerta',
    description:
      'Verduras frescas sobre salsa de tomate y mozzarella gratinada.',
    photo: 'veggie',
    turn: 0,
    prices: { personal: 26000, medium: 34000, family: 42000 },
    ingredients: ['tomato', 'pepper', 'mushroom', 'olive'],
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

// Porciones de cada tamaño (las mismas que dicen los textos de tamaños)
export const SONOPIZZA_SLICE_COUNT: Record<
  SonopizzaSizeKey,
  SonopizzaSliceCount
> = { personal: 4, medium: 6, family: 8 };

// Salsas: la de la receta (tomate) viene incluida. Cambiarla puede costar
export const SONOPIZZA_SAUCES: readonly SonopizzaSauce[] = [
  { id: 'tomato', name: 'Tomate', price: 0, tone: 'tomato' },
  { id: 'white', name: 'Blanca', price: 0, tone: 'white' },
  { id: 'bbq', name: 'BBQ', price: 1500, tone: 'bbq' },
  { id: 'pesto', name: 'Pesto', price: 2000, tone: 'pesto' }
];

// Extras: el borde relleno (queso, o bocadillo con queso) y las adiciones
export const SONOPIZZA_EXTRAS: readonly SonopizzaExtra[] = [
  {
    id: 'cheese-crust',
    name: 'Borde de queso',
    shortName: 'Queso',
    price: 6000,
    group: 'crust'
  },
  {
    id: 'guava-crust',
    name: 'Borde de bocadillo',
    shortName: 'Bocadillo',
    price: 6000,
    group: 'crust'
  },
  { id: 'double-cheese', name: 'Doble queso', price: 4000, group: 'addition' },
  { id: 'more-olives', name: 'Más aceitunas', price: 3000, group: 'addition' }
];

// Envío a domicilio
export const SONOPIZZA_DELIVERY = 5000;

// El carrito del recorrido: para el prototipo, una sola pizza, la vegetariana
// que se personalizó (mediana, con todos sus ingredientes y con doble queso)
export const SONOPIZZA_CART: readonly SonopizzaCartLine[] = [
  {
    id: 'line-veggie',
    productId: 'veggie',
    size: 'medium',
    quantity: 1,
    removed: [],
    extras: ['double-cheese'],
    unitPrice: 38000
  }
];

// Pedidos anteriores de ejemplo (inventados), del más reciente al más viejo. El
// último lleva dos productos
export const SONOPIZZA_PAST_ORDERS: readonly SonopizzaPastOrder[] = [
  {
    id: 'SP-2310',
    date: '15 nov · 8:12 p. m.',
    lines: [
      {
        id: 'past-veggie',
        productId: 'veggie',
        size: 'medium',
        quantity: 1,
        removed: [],
        extras: [],
        unitPrice: 34000
      }
    ]
  },
  {
    id: 'SP-2155',
    date: '7 nov · 7:40 p. m.',
    lines: [
      {
        id: 'past-pepperoni',
        productId: 'pepperoni',
        size: 'family',
        quantity: 1,
        removed: [],
        extras: [],
        unitPrice: 44000
      }
    ]
  },
  {
    id: 'SP-2040',
    date: '29 oct · 6:55 p. m.',
    lines: [
      {
        id: 'past-double-pepperoni',
        productId: 'double-pepperoni',
        size: 'medium',
        quantity: 1,
        removed: [],
        extras: [],
        unitPrice: 39000
      },
      {
        id: 'past-garden',
        productId: 'garden',
        size: 'personal',
        quantity: 1,
        removed: [],
        extras: [],
        unitPrice: 27000
      }
    ]
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

// Promos de la semana en el carrusel del Inicio (se muestra la primera)
export const SONOPIZZA_WEEK_PROMOS_TOTAL = 3;
