// Textos del prototipo de Sonopizza (pantallas clave de los tres flujos). Los
// textos con {llaves} son plantillas: se llenan con fillTemplate
export const sonopizzaMessages = {
  meta: {
    boardTitle: 'Sonopizza · Pantallas clave'
  },
  board: {
    eyebrow: 'Prototipo · Sonopizza',
    title: 'Pantallas clave',
    hint: 'Las pantallas que cambian la experiencia en los tres flujos, una al lado de la otra. Las marcadas como estado son variaciones de la pantalla anterior.',
    stateLabel: 'Estado',
    groups: {
      flowOne: 'Flujo 01 · Descubrir y elegir',
      flowTwo: 'Flujo 02 · Personalizar y agregar',
      flowThree: 'Flujo 03 · Revisar y confirmar'
    },
    frames: {
      home: {
        title: 'Inicio',
        note: 'Lo más pedido a la vista al abrir: la pizza protagonista y un solo botón para pedirla.'
      },
      menu: {
        title: 'Menú por categorías',
        note: 'Categorías claras y el tamaño se elige desde la tarjeta, con el precio al día.'
      },
      search: {
        title: 'Menú · búsqueda',
        note: 'Resultados mientras escribe, con la coincidencia resaltada y búsqueda por ingrediente.'
      },
      detail: {
        title: 'Detalle de producto',
        note: 'La foto manda: ingredientes, tamaños y precio en un vistazo antes de decidir.'
      },
      custom: {
        title: 'Personalización',
        note: 'Lo obligatorio marcado, el tamaño se ve en la pizza y el total cambia con cada elección.'
      },
      missingSize: {
        title: 'Falta el tamaño',
        note: 'Si intenta agregar sin tamaño, la app señala qué falta y cómo seguir.'
      },
      added: {
        title: 'Agregado al carrito',
        note: 'Confirma lo que se agregó y deja elegir: ir al carrito o seguir explorando.'
      },
      cart: {
        title: 'Carrito',
        note: 'Cada producto con su detalle y un ticket con productos, domicilio y total, sin sorpresas.'
      },
      undo: {
        title: 'Eliminar y deshacer',
        note: 'Quitar es un toque y deshacer también: cinco segundos para arrepentirse.'
      },
      confirmed: {
        title: 'Pedido confirmado',
        note: 'Una confirmación clara: número, tiempo estimado y en qué va el pedido.'
      },
      emptyCart: {
        title: 'Carrito vacío',
        note: 'Sin productos, la pantalla invita a volver al menú con lo más pedido a un toque.'
      }
    }
  },
  device: {
    time: '9:41'
  },
  nav: {
    label: 'Navegación principal',
    home: 'Inicio',
    menu: 'Menú',
    cart: 'Carrito'
  },
  sizes: {
    personal: 'Personal',
    medium: 'Mediana',
    family: 'Familiar'
  },
  sizeShort: {
    personal: 'P',
    medium: 'M',
    family: 'F'
  },
  slices: {
    personal: '4 porciones',
    medium: '6 porciones',
    family: '8 porciones'
  },
  ingredients: {
    tomato: 'Tomate',
    onion: 'Cebolla',
    pepper: 'Pimentón',
    mushroom: 'Champiñón',
    olive: 'Aceituna',
    cheese: 'Mozzarella',
    pepperoni: 'Pepperoni'
  },
  common: {
    back: 'Volver',
    from: 'Desde',
    decrease: 'Quitar una',
    increase: 'Sumar una',
    edit: 'Editar',
    remove: 'Eliminar',
    addTemplate: 'Agregar {name}'
  },
  home: {
    deliverTo: 'Entregar en',
    address: 'Chapinero, Bogotá',
    notificationsLabel: 'Notificaciones',
    title: '¿Qué se te antoja hoy?',
    searchPlaceholder: 'Busca una pizza o un ingrediente',
    filterLabel: 'Filtrar',
    categoriesLabel: 'Categorías del menú',
    categories: ['Pizzas', 'Dos sabores', 'Combos', 'Bebidas'],
    heroWord: 'Pepperoni',
    heroCta: 'Pedir ahora',
    promosTitle: 'Promos de la semana',
    seeAll: 'Ver todas',
    promo: {
      day: 'Los martes',
      title: '2 pizzas medianas',
      burst: '2x1',
      regularPriceLabel: 'Antes',
      savingsTemplate: 'Ahorras {amount}'
    }
  },
  menu: {
    title: 'Menú',
    searchLabel: 'Buscar en el menú',
    tabs: ['Pizzas', 'Dos sabores', 'Combos', 'Bebidas'],
    countTemplate: '{count} pizzas',
    sortLabel: 'Más pedidas',
    sizeLabel: 'Tamaño'
  },
  search: {
    query: 'vege',
    placeholder: 'Busca tu pizza o un ingrediente',
    cancel: 'Cancelar',
    clearLabel: 'Borrar la búsqueda',
    resultsTemplate: '{count} resultados para “{query}”',
    byIngredient: 'Buscar por ingrediente',
    keyboard: ['qwertyuiop', 'asdfghjklñ', 'zxcvbnm'],
    space: 'espacio',
    searchKey: 'buscar'
  },
  detail: {
    favoriteLabel: 'Guardar en favoritos',
    poster: 'Veggie',
    rating: '4,8',
    ratingCount: '(2,1 mil)',
    time: '25-35 min',
    ingredientsTitle: 'Ingredientes',
    sizesTitle: 'Tamaños',
    cta: 'Personalizar'
  },
  custom: {
    title: 'Personaliza tu pizza',
    sizeTitle: 'Tamaño',
    required: 'Obligatorio',
    done: 'Listo',
    missing: 'Elige uno',
    missingHint: 'Elige un tamaño para ver el precio y agregar.',
    ingredientsTitle: 'Ingredientes',
    ingredientsHint: 'Toca para quitar',
    removedTemplate: 'Sin {name}',
    extrasTitle: 'Extras',
    optional: 'Opcional',
    baseLabel: 'Base',
    extrasLabel: 'Extras',
    addTemplate: 'Agregar · {price}',
    chooseSize: 'Elige un tamaño',
    emptyPrice: 'El precio depende del tamaño'
  },
  added: {
    title: '¡Al carrito!',
    lineTemplate: '{name} · {size}',
    cartTemplate: 'Tu carrito: {count} productos · {total}',
    goCart: 'Ir al carrito',
    keepExploring: 'Seguir explorando',
    pairTitle: '¿La acompañas?'
  },
  cart: {
    title: 'Tu pedido',
    countTemplate: '{count} productos',
    countOne: '1 producto',
    deliverTo: 'Entregar en',
    address: 'Cra. 7 #63-44, Chapinero',
    change: 'Cambiar',
    ticketTitle: 'Resumen',
    productsLabel: 'Productos',
    deliveryLabel: 'Domicilio',
    totalLabel: 'Total',
    payNote: 'Pagas al recibir',
    confirmTemplate: 'Confirmar pedido · {total}',
    undoTemplate: 'Quitaste {name}',
    undo: 'Deshacer'
  },
  confirmed: {
    title: '¡Pedido confirmado!',
    orderTemplate: 'Pedido #{number}',
    orderNumber: 'SP-2481',
    etaLabel: 'Llega en',
    eta: '35-45 min',
    steps: ['Recibido', 'En el horno', 'En camino', 'Entregado'],
    summaryTemplate: '{count} productos · {total} · Pagas al recibir',
    track: 'Seguir mi pedido',
    home: 'Volver al inicio'
  },
  emptyCart: {
    title: 'Tu carrito tiene hambre',
    text: 'Todavía no agregas nada. Empieza por lo más pedido.',
    cta: 'Ver el menú',
    suggestionsTitle: 'Lo más pedido'
  }
} as const;
