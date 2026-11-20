// Sistema de diseño de la app de Sonopizza (módulo 04 del caso): los
// fundamentos de la marca, los componentes que usan las pantallas clave de
// los tres flujos y, al final, los elementos de marca hechos con partes de la
// pizza. Los textos van aquí; los estilos salen de los mismos tokens.

export type SonoDsSwatch = {
  name: string;
  hex: string;
  // Para qué se usa en la interfaz
  role: string;
};

export type SonoDsTypeId =
  | 'display'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'price'
  | 'label';

export type SonoDsTypeStep = {
  id: SonoDsTypeId;
  name: string;
  spec: string;
  sample: string;
};

export type SonoDsToken = {
  name: string;
  value: string;
  use: string;
};

export type SonoDsRadiusId = 'small' | 'medium' | 'large' | 'pill';
export type SonoDsShadowId = 'button' | 'card' | 'highlight' | 'sheet';
export type SonoDsMotionId = 'enter' | 'pop' | 'press' | 'slide';

export type SonoDsRadius = SonoDsToken & { id: SonoDsRadiusId };
export type SonoDsShadow = SonoDsToken & { id: SonoDsShadowId };
export type SonoDsMotion = SonoDsToken & { id: SonoDsMotionId };

export type SonoDsIconId =
  | 'pizza'
  | 'search'
  | 'bag'
  | 'plus'
  | 'minus'
  | 'check'
  | 'clock'
  | 'pin'
  | 'edit'
  | 'trash'
  | 'flame'
  | 'home';

export type SonoDsIcon = {
  id: SonoDsIconId;
  name: string;
};

export type SonoDsSize = {
  name: string;
  detail: string;
  price: number;
};

export type SonoDsExtra = {
  name: string;
  price: number;
};

export type SonoDsBrandElementId =
  | 'pepperoni-palette'
  | 'size-pizzas'
  | 'ingredient-icons'
  | 'slice-loader'
  | 'topping-chips'
  | 'order-ticket';

export type SonoDsBrandElement = {
  id: SonoDsBrandElementId;
  title: string;
  text: string;
};

export type SonoDsIngredientId = 'slice' | 'mushroom' | 'olive' | 'basil';

export type SonoDsIngredient = {
  id: SonoDsIngredientId;
  name: string;
};

// Una etiqueta de topping: agregado, retirado o extra con su costo
export type SonoDsToppingState = 'added' | 'removed' | 'extra';

export type SonoDsTopping = {
  name: string;
  state: SonoDsToppingState;
  price?: number;
};

export type SonoDsTicketLine = {
  name: string;
  price: number;
};

export type SonoDesignSystem = {
  number: string;
  name: string;
  title: string;
  lead: string;
  // Las tres partes, en el orden del módulo
  parts: {
    foundations: string;
    components: string;
    brand: string;
  };
  foundations: {
    lead: string;
    color: {
      title: string;
      note: string;
      swatches: readonly SonoDsSwatch[];
    };
    type: {
      title: string;
      families: readonly SonoDsToken[];
      steps: readonly SonoDsTypeStep[];
    };
    spacing: {
      title: string;
      note: string;
      // Con {value}: "{value} px"
      valueTemplate: string;
      values: readonly number[];
      // Área táctil mínima de botones e íconos
      touchLabel: string;
    };
    radius: {
      title: string;
      tokens: readonly SonoDsRadius[];
    };
    shadows: {
      title: string;
      note: string;
      tokens: readonly SonoDsShadow[];
    };
    motion: {
      title: string;
      note: string;
      tokens: readonly SonoDsMotion[];
    };
    icons: {
      title: string;
      note: string;
      items: readonly SonoDsIcon[];
    };
  };
  components: {
    lead: string;
    buttons: {
      title: string;
      primary: string;
      secondary: string;
      text: string;
      disabled: string;
    };
    tabs: {
      title: string;
      items: readonly string[];
    };
    search: {
      title: string;
      placeholder: string;
    };
    productCard: {
      title: string;
      badge: string;
      name: string;
      text: string;
      price: string;
      addLabel: string;
    };
    configurator: {
      title: string;
      note: string;
      sizeTitle: string;
      requiredLabel: string;
      sizes: readonly SonoDsSize[];
      ingredientsTitle: string;
      // Con {name}: "Sin {name}" para lo que se quitó
      removedTemplate: string;
      ingredients: readonly string[];
      extrasTitle: string;
      optionalLabel: string;
      extras: readonly SonoDsExtra[];
      quantityLabel: string;
      decreaseLabel: string;
      increaseLabel: string;
      baseLabel: string;
      extrasLabel: string;
      totalLabel: string;
      addLabel: string;
      chooseSizeLabel: string;
    };
    cartItem: {
      title: string;
      name: string;
      detail: string;
      unitPrice: number;
      editLabel: string;
      removeLabel: string;
    };
    confirmation: {
      title: string;
      heading: string;
      text: string;
      time: string;
    };
    navBar: {
      title: string;
      items: readonly string[];
      cartCount: number;
    };
  };
  brand: {
    lead: string;
    elements: readonly SonoDsBrandElement[];
    sizes: readonly string[];
    ingredients: readonly SonoDsIngredient[];
    loaderLabel: string;
    toppings: readonly SonoDsTopping[];
    ticket: {
      title: string;
      lines: readonly SonoDsTicketLine[];
      totalLabel: string;
    };
  };
};
