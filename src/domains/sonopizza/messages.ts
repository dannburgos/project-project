// Textos del prototipo de Sonopizza (pantallas clave de los tres flujos). Los
// textos con {llaves} son plantillas: se llenan con fillTemplate
export const sonopizzaMessages = {
  meta: {
    boardTitle: 'Sonopizza · Pantallas clave'
  },
  board: {
    eyebrow: 'Prototipo · Sonopizza',
    title: 'Pantallas clave',
    hint: 'Las pantallas que cambian la experiencia en los tres flujos, una al lado de la otra.',
    stateLabel: 'Estado',
    groups: {
      flowOne: 'Flujo 01 · Descubrir',
      flowTwo: 'Flujo 02 · Elegir y agregar',
      flowThree: 'Flujo 03 · Revisar y confirmar'
    },
    frames: {
      home: {
        title: 'Inicio',
        note: 'Lo más pedido a la vista al abrir: la pizza protagonista y un solo botón para pedirla.'
      },
      menu: {
        title: 'Menú',
        note: 'Buscador con filtros que se despliegan, favoritos y tarjetas parejas con el precio desde.'
      },
      notifications: {
        title: 'Notificaciones',
        note: 'La campana del inicio abre sus avisos: el pedido, las promos y las novedades, con lo nuevo marcado.'
      },
      product: {
        title: 'Elige tu pizza',
        note: 'La pizza como la vendemos, con el tamaño ya elegido. Al desplazar, la hoja sube sobre la pizza y deja ver lo opcional: salsa, qué quitamos y extras. El total de abajo se actualiza con cada elección.'
      },
      cart: {
        title: 'Carrito',
        note: 'Cada producto con su detalle, el cupón a la mano y un resumen de compra con subtotal, domicilio y total, sin sorpresas.'
      },
      checkout: {
        title: 'Checkout',
        note: 'El último paso: dónde, cuándo y cómo pagas, con el total siempre a la vista y un solo botón para confirmar.'
      },
      confirmed: {
        title: 'Pedido confirmado',
        note: 'Una confirmación clara: número, tiempo estimado y en qué va el pedido.'
      },
      tracking: {
        title: 'Seguimiento del pedido',
        note: 'El destino de «Seguir mi pedido», un rato después de confirmar: cuánto falta en grande, la pizza como reloj, el código de entrega y el repartidor en camino, sin mapa.'
      },
      orders: {
        title: 'Mis pedidos',
        note: 'El pedido en curso arriba y los anteriores abajo, cada uno con un botón para pedirlo de nuevo con un toque.'
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
  slices: {
    personal: '4 porciones',
    medium: '6 porciones',
    family: '8 porciones'
  },
  ingredients: {
    tomato: 'Tomate',
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
    addTemplate: 'Agregar {name}',
    favoriteAdd: 'Guardar en favoritos',
    favoriteRemove: 'Quitar de favoritos'
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
    promoPositionTemplate: 'Promo {current} de {total}',
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
    searchPlaceholder: 'Busca una pizza o un ingrediente',
    filterLabel: 'Filtrar',
    countTemplate: '{count} pizzas',
    sortedLabel: 'Más pedidas primero',
    filters: {
      title: 'Filtros',
      sortTitle: 'Ordenar por',
      sort: ['Más pedidas', 'Menor precio', 'Nuevas'],
      preferences: ['Vegetariana', 'Con carne', 'Picante'],
      ingredientsTitle: 'Ingredientes',
      sizeTitle: 'Tamaño',
      applyTemplate: 'Ver {count} pizzas'
    }
  },
  product: {
    favoriteLabel: 'Guardar en favoritos',
    rating: '4,8',
    ratingCount: '(2,1 mil)',
    time: '25-35 min',
    sizeTitle: 'Elige tu pizza',
    sizeSub: 'Tal como la vendemos',
    customizeTitle: 'Personalízala',
    sauceTitle: 'Salsa',
    sauceIncluded: 'Incluida',
    sauceFree: 'Sin costo',
    removeTitle: '¿Quitamos algo?',
    removeHint: 'Elige para cada ingrediente',
    withIngredient: 'Con',
    withoutIngredient: 'Sin',
    removedTemplate: 'Sin {name}',
    extrasTitle: 'Extras',
    crustTitle: 'Borde',
    crustNone: 'Normal',
    crustIncluded: 'Incluido',
    additionsTitle: 'Adiciones',
    totalLabel: 'Total',
    addToCart: 'Agregar al carrito'
  },
  cart: {
    title: 'Tu pedido',
    addMore: 'Agregar algo más',
    couponLabel: '¿Tienes un cupón?',
    couponPlaceholder: 'Ingresa tu cupón',
    couponApply: 'Aplicar',
    summaryTitle: 'Resumen de compra',
    subtotalLabel: 'Subtotal',
    deliveryLabel: 'Domicilio',
    totalLabel: 'Total',
    continueTemplate: 'Continuar {total}'
  },
  checkout: {
    title: 'Checkout',
    orderTitle: 'Tu pedido',
    deliveryTitle: 'Entrega',
    deliveryFeeLabel: 'Domicilio',
    deliverTo: 'Entregar en',
    address: 'Cra. 7 #63-44, Chapinero',
    change: 'Cambiar',
    whenTitle: 'Cuándo',
    asap: 'Lo antes posible',
    schedule: 'Programar',
    scheduleNote: 'Elige la hora',
    payTitle: 'Pago',
    paySub: 'Al recibir',
    cash: 'Efectivo',
    card: 'Datáfono',
    totalLabel: 'Total',
    confirm: 'Confirmar pedido'
  },
  notifications: {
    title: 'Notificaciones',
    todayLabel: 'Hoy',
    earlierLabel: 'Antes',
    markRead: 'Marcar como leídas',
    today: [
      {
        kind: 'order',
        title: 'Tu pedido va en camino',
        text: 'Carlos llega en 12 min. Ten listo el código de entrega para recibirlo.',
        time: 'Ahora',
        isNew: true
      },
      {
        kind: 'promo',
        title: 'Los martes son de 2x1',
        text: 'Dos pizzas medianas por el precio de una. Aprovecha la promo de la semana.',
        time: 'Hace 2 h',
        isNew: true
      }
    ],
    earlier: [
      {
        kind: 'order',
        title: 'Pedido entregado',
        text: '¿Te gustó? Puedes pedirlo de nuevo con un toque desde Mis pedidos.',
        time: 'Ayer',
        isNew: false
      },
      {
        kind: 'news',
        title: 'Llegó la Vegetariana',
        text: 'Verduras frescas sobre salsa de tomate y mozzarella.',
        time: 'Hace 3 días',
        isNew: false
      },
      {
        kind: 'promo',
        title: 'Tu cupón está por vencer',
        text: 'Te queda un cupón de bienvenida. Úsalo esta semana.',
        time: 'Hace 5 días',
        isNew: false
      },
      {
        kind: 'order',
        title: 'Califica tu último pedido',
        text: 'Cuéntanos qué tal estuvo tu pizza. Te toma menos de un minuto responder.',
        time: 'Hace 1 semana',
        isNew: false
      }
    ]
  },
  tracking: {
    title: 'Seguimiento',
    close: 'Cerrar',
    etaLabel: 'Tu pizza llega en',
    minutes: '12 min',
    arrivalTemplate: 'a las {time}',
    arrival: '8:20 p. m.',
    codeLabel: 'Código de entrega',
    code: ['4', '8', '2', '7'],
    codeHint: 'Díselo al repartidor al recibir',
    courierTitle: 'Carlos ya va en camino',
    courierSub: 'A 1,2 km de tu casa',
    help: 'Necesito ayuda con mi pedido'
  },
  orders: {
    title: 'Mis pedidos',
    activeTitle: 'En curso',
    pastTitle: 'Anteriores',
    follow: 'Seguir pedido',
    delivered: 'Entregado',
    reorder: 'Pedir de nuevo',
    moreTemplate: '+{count} más'
  },
  confirmed: {
    title: '¡Pedido confirmado!',
    orderTemplate: 'Pedido #{number}',
    orderNumber: 'SP-2481',
    etaLabel: 'Llega en',
    eta: '35-45 min',
    steps: ['Recibido', 'En el horno', 'En camino', 'Entregado'],
    summaryTemplate: '{count} productos · {total} · Pagas al recibir',
    summaryOneTemplate: '1 producto · {total} · Pagas al recibir',
    track: 'Seguir mi pedido',
    home: 'Volver al inicio'
  }
} as const;
