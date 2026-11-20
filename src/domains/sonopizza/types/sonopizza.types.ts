// Prototipo de la app de Sonopizza: pantallas clave de los tres flujos

// Foto de producto (vista cenital, fondo transparente)
export type SonopizzaPhoto = 'pepperoni' | 'veggie';

export type SonopizzaTurn = 0 | 1 | 2 | 3;

export type SonopizzaSizeKey = 'personal' | 'medium' | 'family';

export type SonopizzaIngredientKey =
  | 'tomato'
  | 'onion'
  | 'pepper'
  | 'mushroom'
  | 'olive'
  | 'cheese'
  | 'pepperoni';

export type SonopizzaProduct = {
  id: string;
  name: string;
  description: string;
  photo: SonopizzaPhoto;
  // Giro de la foto en cuartos de vuelta, para que dos productos con la
  // misma foto no se vean iguales
  turn: SonopizzaTurn;
  prices: Record<SonopizzaSizeKey, number>;
  ingredients: readonly SonopizzaIngredientKey[];
  // Etiqueta opcional: "Más pedida", "Nueva"…
  tag?: string;
};

export type SonopizzaExtra = {
  id: string;
  name: string;
  price: number;
};

export type SonopizzaCartLine = {
  id: string;
  productId: string;
  size: SonopizzaSizeKey;
  quantity: number;
  // Lo que se quitó y los extras, ya con nombre para mostrar
  removed: readonly SonopizzaIngredientKey[];
  extras: readonly string[];
  // Precio de una unidad con sus extras
  unitPrice: number;
};

export type SonopizzaNavKey = 'home' | 'menu' | 'cart';

export type SonopizzaMenuVariant = 'browse' | 'search';
export type SonopizzaCustomVariant = 'ready' | 'missingSize';
export type SonopizzaCartVariant = 'full' | 'undo';

// Promo de la semana del Inicio: la pizza de la foto, el precio normal, lo que
// se paga y lo que se ahorra
export type SonopizzaWeekPromo = {
  photo: SonopizzaPhoto;
  regularPrice: number;
  price: number;
  savings: number;
};
