// Prototipo de la app de Sonopizza: pantallas clave de los tres flujos

// Foto de producto (vista cenital, fondo transparente)
export type SonopizzaPhoto = 'pepperoni' | 'veggie';

export type SonopizzaTurn = 0 | 1 | 2 | 3;

// Ilustración de cada categoría en los accesos del inicio
export type SonopizzaCategoryArt = 'slice' | 'half' | 'combo' | 'drink';

export type SonopizzaSizeKey = 'personal' | 'medium' | 'family';

// Porciones en que viene partida la pizza de cada tamaño
export type SonopizzaSliceCount = 4 | 6 | 8;

export type SonopizzaIngredientKey =
  | 'tomato'
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
  // Guardada en favoritos
  isFavorite?: boolean;
};

// Extra de una pizza: el borde (se elige uno) o una adición (se pueden sumar
// varias)
export type SonopizzaExtra = {
  id: string;
  name: string;
  // Nombre corto para las opciones de borde ("Queso", "Bocadillo")
  shortName?: string;
  price: number;
  group: 'crust' | 'addition';
};

// Salsa de la pizza: la de la receta viene incluida; cambiarla puede costar
export type SonopizzaSauce = {
  id: string;
  name: string;
  price: number;
  tone: 'tomato' | 'white' | 'bbq' | 'pesto';
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

// Lo que eligió en "Elige tu pizza"
export type SonopizzaOrderChoice = {
  size: SonopizzaSizeKey;
  sauceId: string;
  // Ids del borde y de las adiciones elegidas
  extraIds: readonly string[];
  removed: readonly SonopizzaIngredientKey[];
};

// Promo de la semana del Inicio: la pizza de la foto, el precio normal, lo que
// se paga y lo que se ahorra
export type SonopizzaWeekPromo = {
  photo: SonopizzaPhoto;
  regularPrice: number;
  price: number;
  savings: number;
};

// Tipo de aviso de la bandeja de notificaciones: cambia su ícono y su color
export type SonopizzaNotificationKind = 'order' | 'promo' | 'news';

// Un pedido anterior: cuándo fue y qué llevaba, para poder pedirlo de nuevo
export type SonopizzaPastOrder = {
  id: string;
  // Fecha y hora ya escritas para mostrar
  date: string;
  lines: readonly SonopizzaCartLine[];
};
