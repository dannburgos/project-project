// Contenido del caso Toyota — Beyond the Model. Todo es serializable: la
// página (servidor) se lo pasa al recorrido (cliente) como props.
//
// Versión esencial (23 nov 2026): una idea por módulo. Cada uno lleva su
// titular, una frase corta y su pieza visual. El texto completo sigue en
// .claude/knowledge/toyota/caso-de-estudio-beyond-the-model.md.

// Imagen del caso: mientras no exista `src`, se muestra una caja gris con la
// etiqueta que dice qué imagen va ahí
export type ToyotaVisual = {
  label: string;
  src?: string;
};

export type ToyotaItem = {
  title: string;
  text?: string;
};

// Cifra destacada: el número cuenta desde cero al llegar a la vista
// Un paso del recorrido de hoy
export type ToyotaJourneyStep = {
  label: string;
};

export type ToyotaStat = {
  value: number;
  label: string;
};

// Un cambio de la experiencia tradicional a la propuesta, en pocas palabras
export type ToyotaShift = {
  topic: string;
  before: string;
  after: string;
};

export type ToyotaShiftSet = {
  beforeLabel: string;
  afterLabel: string;
  items: readonly ToyotaShift[];
};

export type ToyotaFact = {
  label: string;
  value: string;
};

// Encabezado de un módulo: eyebrow, titular y bajada
export type ToyotaHead = {
  eyebrow?: string;
  // El eyebrow también pasa a rojo con el scroll
  isEyebrowAccent?: boolean;
  title: string;
  // Palabras del titular que pasan a rojo con el scroll
  accents?: readonly string[];
  lead?: string;
};

// Paso de un recorrido que se dibuja de izquierda a derecha
export type ToyotaStep = {
  label: string;
  // Explicación corta bajo el paso, para no repetirla en otro bloque
  text?: string;
  isHighlight?: boolean;
};

// Apertura de capítulo: palabra gigante entre capas y retícula sobre un fondo
// que se mueve más lento
export type ToyotaOpener = {
  number: string;
  // Rótulo corto sobre la pregunta del capítulo, por ejemplo «Capítulo 01»
  kicker: string;
  word: string;
  summary: string;
  background: ToyotaVisual;
  // La foto de fondo es vertical (más alta que la pantalla): con el scroll se
  // recorre entera, de arriba abajo, sin acercarla
  isBackgroundTall?: boolean;
  // La foto de fondo es panorámica (más ancha que la pantalla): con el scroll
  // se recorre de izquierda a derecha, sin acercarla
  isBackgroundWide?: boolean;
  window: ToyotaVisual;
};

// Tarjeta de la pila: se apila sobre la anterior con su texto al costado
export type ToyotaStackCard = {
  number: string;
  title: string;
  text: string;
};

export type ToyotaBenchmarkReference = {
  name: string;
  strength: string;
  opportunity: string;
  // De los siete criterios del análisis, los que esa referente cumple bien
  // (los de su fortaleza)
  criteria: readonly string[];
  visual: ToyotaVisual;
};

export type ToyotaTagMatrix = {
  modelsLabel: string;
  tags: readonly string[];
  models: readonly {
    name: string;
    price: string;
    tags: readonly string[];
  }[];
};

export type ToyotaLayer = {
  number: string;
  name: string;
  text: string;
  // Lo que esa capa garantiza para que la experiencia sea confiable
  guarantees: readonly string[];
};

// Una etapa del concepto, sobre los pasos del flujo que abarca
export type ToyotaFlowStage = {
  label: string;
  span: number;
  isHighlight?: boolean;
};

// Etiquetas compartidas por los capítulos
export type ToyotaLabels = {
  navigation: string;
  menu: string;
  pending: string;
  // El auto del avance: su nombre como control y la pista al pasarle el cursor
  carControl: string;
  carHint: string;
};

export type ToyotaCover = {
  title: string;
  // Un solo párrafo con lo esencial: la bajada y el reto, juntos
  intro: string;
  visual: ToyotaVisual;
  factsTitle: string;
  facts: readonly ToyotaFact[];
  scrollHint: string;
};

// 01 · Contexto: Toyota en Colombia, el problema y la oportunidad, y la
// solución (los tres pilares)
export type ToyotaOverview = {
  opener: ToyotaOpener;
  context: {
    head: ToyotaHead;
    journeyLabel: string;
    journey: readonly ToyotaJourneyStep[];
  };
  // La solución: su titular (la frase del proyecto) va sobre los pilares
  description: {
    head: ToyotaHead;
    pillarsWord: string;
    // Una sola imagen larga (vertical) para los tres pilares
    pillarsVisual: ToyotaVisual;
    pillars: readonly ToyotaStackCard[];
  };
  problem: {
    problemEyebrow: string;
    problem: string;
    opportunityEyebrow: string;
    opportunity: string;
  };
};

// 02 · Discovery: benchmark, problema y usuario, y
// el trabajo central
export type ToyotaDiscovery = {
  opener: ToyotaOpener;
  benchmark: {
    head: ToyotaHead;
    strengthLabel: string;
    opportunityLabel: string;
    references: readonly ToyotaBenchmarkReference[];
  };
  problem: {
    head: ToyotaHead;
    model: readonly ToyotaStep[];
  };
  // La persona usuaria en un solo bloque: su foto, quiénes son (segmentos con
  // su necesidad), dónde se traban (puntos de dolor, en etiquetas) y el
  // trabajo que quieren lograr (Job Statement)
  user: {
    head: ToyotaHead;
    // Foto de la persona usuaria
    visual: ToyotaVisual;
    segmentsLabel: string;
    segments: readonly ToyotaItem[];
    painsLabel: string;
    pains: readonly string[];
    jobLabel: string;
    // Cuando… quiero… para… (la palabra clave va en rojo)
    job: readonly ToyotaItem[];
  };
};

// 03 · Strategy: propuesta de valor, trazabilidad de objetivos e IA
export type ToyotaStrategy = {
  opener: ToyotaOpener;
  value: {
    promise: string;
    shifts: ToyotaShiftSet;
    canvas: ToyotaVisual;
  };
  ai: {
    head: ToyotaHead;
    layers: readonly ToyotaLayer[];
  };
};

// 04 · Producto: MVP, lógica de recomendación, flujo (con sus variantes) y el
// prototipo con su sistema visual
export type ToyotaProduct = {
  opener: ToyotaOpener;
  mvp: {
    behaviorsLabel: string;
    behaviors: readonly string[];
  };
  logic: {
    head: ToyotaHead;
    statement: string;
    stats: readonly ToyotaStat[];
    matrixTitle: string;
    matrix: ToyotaTagMatrix;
  };
  // El flujo como diagrama: el camino principal, un ciclo que vuelve atrás,
  // las salidas hacia Toyota y el resultado abierto en sus variantes. El paso
  // destacado (isHighlight) es el resultado
  flow: {
    head: ToyotaHead;
    statement: string;
    // Las seis etapas del concepto, sobre los pasos que abarca cada una
    stagesLabel: string;
    stages: readonly ToyotaFlowStage[];
    steps: readonly ToyotaStep[];
    // Ciclo: desde el paso `from` se vuelve al paso `to` (posiciones desde 0)
    loop: { label: string; text: string; from: number; to: number };
    exitsLabel: string;
    exits: readonly string[];
    decision: string;
  };
  // El sistema de diseño del prototipo
  design: {
    head: ToyotaHead;
    system: ToyotaDesignSystem;
  };
};

// Sistema de diseño interactivo: un índice de fundamentos y esenciales y una
// ficha por elemento (valores, qué usar y qué evitar). Al elegir un elemento
// en el índice, su ficha reemplaza a la anterior.
export type ToyotaDesignSpec = {
  label: string;
  value: string;
  // Color que se muestra junto al valor (para los colores de la marca)
  swatch?: string;
};

export type ToyotaDesignItem = {
  id: string;
  group: 'foundation' | 'essential';
  number: string;
  name: string;
  summary: string;
  specs: readonly ToyotaDesignSpec[];
  use: string;
  avoid: string;
};

// Textos de las muestras vivas del sistema (lo que se ve en cada hoja)
export type ToyotaDesignSample = {
  type: { fieldLabel: string; placeholder: string; text: string };
  grid: {
    marginLabel: string;
    columnLabel: string;
    contentLabel: string;
    spacingLabel: string;
    spacing: readonly number[];
    cornersLabel: string;
    squareLabel: string;
    roundedLabel: string;
  };
  shape: {
    squareLabel: string;
    arrowLabel: string;
    tagLabel: string;
    crossLabel: string;
    tag: string;
  };
  motion: {
    replay: string;
    curveLabel: string;
    cards: readonly string[];
    buttonLabel: string;
    buttonText: string;
  };
  access: {
    pairs: readonly { name: string; fg: string; bg: string }[];
    ratioLabel: string;
    focusLabel: string;
    touchLabel: string;
    focusText: string;
  };
  button: {
    variants: readonly string[];
    states: readonly string[];
    text: string;
    link: string;
  };
  chip: {
    stateLabels: readonly string[];
    options: readonly string[];
    groupLabel: string;
    tagLabel: string;
    tag: string;
  };
  question: {
    step: string;
    title: string;
    options: readonly string[];
    primary: string;
    secondary: string;
    progressTotal: number;
    progressCurrent: number;
  };
  cards: readonly { tag: string; model: string; price: string }[];
  reasons: readonly string[];
  compare: {
    models: readonly string[];
    counterLabel: string;
    button: string;
    hint: string;
  };
  legal: { content: string; text: string };
};

export type ToyotaDesignSystem = {
  foundationsLabel: string;
  essentialsLabel: string;
  // Nombre del índice, para el lector de pantalla
  indexLabel: string;
  labels: {
    use: string;
    avoid: string;
    copy: string;
    copied: string;
  };
  sample: ToyotaDesignSample;
  note: string;
  items: readonly ToyotaDesignItem[];
};

// 05 · Validation: solo con evidencia real
export type ToyotaValidation = {
  opener: ToyotaOpener;
  plan: {
    head: ToyotaHead;
    statement: string;
    tasksLabel: string;
    tasks: readonly string[];
    pending: string;
  };
  next: {
    head: ToyotaHead;
    steps: readonly string[];
  };
  closing: {
    title: string;
    note: string;
  };
};

// Capítulo en el menú: número del caso y nombre (en inglés, como pide el caso)
export type ToyotaSection = {
  number: string;
  name: string;
};

// El auto que recorre la línea de avance del índice: la carrocería y una
// llanta (la misma para las dos ruedas), con fondo transparente
export type ToyotaProgressCar = {
  body: string;
  wheel: string;
};

export type ToyotaStory = {
  sections: readonly ToyotaSection[];
  labels: ToyotaLabels;
  progressCar: ToyotaProgressCar;
  cover: ToyotaCover;
  overview: ToyotaOverview;
  discovery: ToyotaDiscovery;
  strategy: ToyotaStrategy;
  product: ToyotaProduct;
  validation: ToyotaValidation;
};
