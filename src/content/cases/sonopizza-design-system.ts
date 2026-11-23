import type { SonoDesignSystem } from '@/content/sonopizza-design-system.types';

// Sistema de diseño de Sonopizza (módulo 04). Los colores son los HEX reales
// de la marca; los precios y productos son de ejemplo para mostrar los
// componentes funcionando.
export const sonopizzaDesignSystem: SonoDesignSystem = {
  number: '04',
  name: 'Sistema de diseño',
  title: 'Un sistema con sabor propio',
  lead: 'Los fundamentos de la marca, los componentes de las pantallas clave y los elementos que solo podrían ser de Sonopizza.',
  parts: {
    foundations: 'Fundamentos',
    components: 'Componentes',
    brand: 'Elementos de marca'
  },
  foundations: {
    lead: 'Color, tipografía, espacios, bordes, sombras, movimiento e íconos: la base de cada pantalla.',
    color: {
      title: 'Color',
      note: 'Tres azules para la estructura, dos naranjas para la acción y blanco hueso y gris oscuro para el contraste.',
      swatches: [
        { name: 'Navy Blue', hex: '#002B8F', role: 'Texto y estructura' },
        { name: 'Royal Blue', hex: '#0D47C9', role: 'Fondos de marca' },
        { name: 'Electric Blue', hex: '#2563EB', role: 'Enlaces y foco' },
        { name: 'Bright Orange', hex: '#FF5A00', role: 'Acción principal' },
        { name: 'Soft Orange', hex: '#FF7A1A', role: 'Acentos y degradados' },
        { name: 'Off White', hex: '#F4F4F4', role: 'Fondo de la app' },
        { name: 'Dark Gray', hex: '#1E1E1E', role: 'Superficies oscuras' }
      ]
    },
    type: {
      title: 'Tipografía',
      families: [
        {
          name: 'Bowlby One SC',
          value: 'Display',
          use: 'Titulares con carácter'
        },
        {
          name: 'DM Sans',
          value: 'Texto',
          use: 'Interfaz, precios y navegación'
        }
      ],
      steps: [
        {
          id: 'display',
          name: 'Display',
          spec: 'Bowlby One SC · 40/40',
          sample: 'Del antojo'
        },
        {
          id: 'title',
          name: 'Título',
          spec: 'Bowlby One SC · 24/26',
          sample: 'Pizzas'
        },
        {
          id: 'subtitle',
          name: 'Subtítulo',
          spec: 'DM Sans Semibold · 20/28',
          sample: 'Pepperoni clásica'
        },
        {
          id: 'body',
          name: 'Cuerpo',
          spec: 'DM Sans Regular · 16/24',
          sample: 'Salsa de tomate, mozzarella y pepperoni'
        },
        {
          id: 'price',
          name: 'Precio',
          spec: 'DM Sans Bold · 18/24',
          sample: '$36.000'
        },
        {
          id: 'label',
          name: 'Etiqueta',
          spec: 'DM Sans Semibold · 12/16 · mayúsculas',
          sample: 'Obligatorio'
        }
      ]
    },
    spacing: {
      title: 'Espaciado',
      note: 'Escala de 4 px para márgenes, separaciones y áreas táctiles.',
      valueTemplate: '{value} px',
      touchLabel: 'Área táctil mínima: 48 × 48 px',
      values: [4, 8, 12, 16, 24, 32, 48]
    },
    radius: {
      title: 'Bordes',
      tokens: [
        {
          id: 'small',
          name: 'S',
          value: '8 px',
          use: 'Etiquetas y miniaturas'
        },
        { id: 'medium', name: 'M', value: '16 px', use: 'Campos y opciones' },
        { id: 'large', name: 'L', value: '24 px', use: 'Tarjetas y hojas' },
        {
          id: 'pill',
          name: 'Píldora',
          value: '999 px',
          use: 'Botones, chips y pestañas'
        }
      ]
    },
    shadows: {
      title: 'Sombras',
      note: 'Suaves y difusas: las superficies flotan sin bordes gruesos. Los botones son planos, de un solo color, y lo elegido lleva un anillo naranja.',
      tokens: [
        {
          id: 'button',
          name: 'Botón',
          value: 'Color plano, sin sombra',
          use: 'Botones y controles'
        },
        {
          id: 'card',
          name: 'Suave',
          value: '0 · 8 · 24 · Navy 8 %',
          use: 'Tarjetas, buscador y opciones'
        },
        {
          id: 'highlight',
          name: 'Elegido',
          value: 'Anillo 2 px · Bright Orange',
          use: 'Tamaño, resultado o filtro elegido'
        },
        {
          id: 'sheet',
          name: 'Hoja',
          value: '0 · −8 · 24 · Navy 16 %',
          use: 'Hojas inferiores y carrito'
        }
      ]
    },
    motion: {
      title: 'Movimiento',
      note: 'Pasa el cursor o el foco por cada fila para verlo.',
      tokens: [
        {
          id: 'enter',
          name: 'Entrar',
          value: '300 ms · ease-out',
          use: 'Pantallas y tarjetas'
        },
        {
          id: 'pop',
          name: 'Rebote',
          value: '400 ms · back-out',
          use: 'Sellos, insignias y contador'
        },
        {
          id: 'press',
          name: 'Presionar',
          value: '120 ms · ease-in',
          use: 'Botones'
        },
        {
          id: 'slide',
          name: 'Deslizar',
          value: '250 ms · ease-in-out',
          use: 'Pestañas y hojas'
        }
      ]
    },
    icons: {
      title: 'Iconografía',
      note: 'Trazo de 2 px y puntas redondas, sobre un círculo blanco que flota con sombra suave.',
      items: [
        { id: 'home', name: 'Inicio' },
        { id: 'pizza', name: 'Menú' },
        { id: 'search', name: 'Buscar' },
        { id: 'bag', name: 'Carrito' },
        { id: 'plus', name: 'Sumar' },
        { id: 'minus', name: 'Restar' },
        { id: 'check', name: 'Listo' },
        { id: 'edit', name: 'Editar' },
        { id: 'trash', name: 'Eliminar' },
        { id: 'flame', name: 'Más pedida' },
        { id: 'clock', name: 'Tiempo' },
        { id: 'pin', name: 'Dirección' }
      ]
    }
  },
  components: {
    lead: 'Las piezas de las pantallas clave de los tres flujos, armadas con los fundamentos. Puedes usarlas.',
    buttons: {
      title: 'Botones',
      primary: 'Agregar al carrito',
      secondary: 'Ver menú',
      text: 'Editar',
      disabled: 'Elige un tamaño'
    },
    tabs: {
      title: 'Pestañas de categoría',
      items: ['Pizzas', 'Dos sabores', 'Combos', 'Bebidas']
    },
    search: {
      title: 'Buscador',
      placeholder: 'Busca tu pizza'
    },
    productCard: {
      title: 'Tarjeta de producto',
      badge: 'Más pedida',
      name: 'Pepperoni clásica',
      text: 'Salsa de tomate, mozzarella y pepperoni',
      price: 'Desde $28.000',
      addLabel: 'Agregar pepperoni clásica'
    },
    configurator: {
      title: 'Personalización',
      note: 'Tamaño, ingredientes, extras y cantidad, con el precio al día.',
      sizeTitle: 'Tamaño',
      requiredLabel: 'Obligatorio',
      sizes: [
        { name: 'Personal', detail: '4 porciones', price: 28000 },
        { name: 'Mediana', detail: '6 porciones', price: 36000 },
        { name: 'Familiar', detail: '8 porciones', price: 44000 }
      ],
      ingredientsTitle: 'Ingredientes',
      removedTemplate: 'Sin {name}',
      ingredients: ['Mozzarella', 'Pepperoni', 'Aceitunas', 'Orégano'],
      extrasTitle: 'Extras',
      optionalLabel: 'Opcional',
      extras: [
        { name: 'Doble queso', price: 4000 },
        { name: 'Borde de queso', price: 6000 },
        { name: 'Champiñones', price: 3000 }
      ],
      quantityLabel: 'Cantidad',
      decreaseLabel: 'Quitar una',
      increaseLabel: 'Sumar una',
      baseLabel: 'Base',
      extrasLabel: 'Extras',
      totalLabel: 'Total',
      addLabel: 'Agregar',
      chooseSizeLabel: 'Elige un tamaño'
    },
    cartItem: {
      title: 'Producto en el carrito',
      name: 'Pepperoni clásica',
      detail: 'Mediana · Doble queso',
      unitPrice: 40000,
      editLabel: 'Editar',
      removeLabel: 'Eliminar'
    },
    confirmation: {
      title: 'Confirmación',
      heading: '¡Pedido confirmado!',
      text: 'Tu pizza ya está en el horno.',
      time: '35 a 45 min'
    },
    navBar: {
      title: 'Barra de navegación',
      items: ['Inicio', 'Menú', 'Carrito'],
      cartCount: 2
    }
  },
  brand: {
    lead: 'Las partes de la pizza convertidas en piezas de la interfaz.',
    elements: [
      {
        id: 'pepperoni-palette',
        title: 'Paleta en pepperonis',
        text: 'Cada pepperoni es un color de la marca.'
      },
      {
        id: 'size-pizzas',
        title: 'Selector de tamaño',
        text: 'Tres pizzas que crecen: el tamaño se elige viéndolo.'
      },
      {
        id: 'ingredient-icons',
        title: 'Íconos de ingredientes',
        text: 'Porción, champiñón, aceituna y albahaca para navegación y estados.'
      },
      {
        id: 'slice-loader',
        title: 'Carga por porciones',
        text: 'El progreso se llena porción a porción.'
      },
      {
        id: 'topping-chips',
        title: 'Chips de toppings',
        text: 'Lo que se agrega, lo que se quita y los extras con su costo.'
      },
      {
        id: 'order-ticket',
        title: 'Ticket de pedido',
        text: 'El resumen del carrito como el ticket de la caja.'
      }
    ],
    sizes: ['Personal', 'Mediana', 'Familiar'],
    ingredients: [
      { id: 'slice', name: 'Porción' },
      { id: 'mushroom', name: 'Champiñón' },
      { id: 'olive', name: 'Aceituna' },
      { id: 'basil', name: 'Albahaca' }
    ],
    loaderLabel: 'Preparando tu pedido',
    toppings: [
      { name: 'Pepperoni', state: 'added' },
      { name: 'Pimentón', state: 'removed' },
      { name: 'Doble queso', state: 'extra', price: 4000 },
      { name: 'Aceitunas', state: 'added' },
      { name: 'Champiñones', state: 'extra', price: 3000 }
    ],
    ticket: {
      title: 'Tu pedido',
      lines: [
        { name: 'Pepperoni clásica · Mediana', price: 36000 },
        { name: 'Doble queso', price: 4000 },
        { name: 'Borde de queso', price: 6000 }
      ],
      totalLabel: 'Total'
    }
  }
};
