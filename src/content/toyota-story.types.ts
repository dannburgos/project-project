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
export type ToyotaStat = {
  value: number;
  label: string;
};

export type ToyotaTable = {
  columns: readonly string[];
  rows: readonly (readonly string[])[];
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
  title: string;
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

export type ToyotaMoscowSegment = {
  value: number;
  label: string;
};

export type ToyotaLayer = {
  number: string;
  name: string;
  text: string;
};

export type ToyotaResultVariant = {
  name: string;
  title: string;
  example: string;
};

// Etiquetas compartidas por los capítulos
export type ToyotaLabels = {
  navigation: string;
  menu: string;
  hypothesis: string;
  trackHint: string;
  trackProgress: string;
  pending: string;
  // El auto del avance: su nombre como control y la pista al pasarle el cursor
  carControl: string;
  carHint: string;
};

export type ToyotaCover = {
  eyebrow: string;
  title: string;
  // Un solo párrafo con lo esencial: la bajada y el reto, juntos
  intro: string;
  visual: ToyotaVisual;
  factsTitle: string;
  facts: readonly ToyotaFact[];
  scrollHint: string;
};

// 01 · Overview: descripción, tres pilares y del problema a la oportunidad
export type ToyotaOverview = {
  opener: ToyotaOpener;
  description: {
    head: ToyotaHead;
    statement: string;
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
    solutionLabel: string;
    capabilities: readonly ToyotaItem[];
    closing: string;
  };
};

// 02 · Discovery: contexto, benchmark, problema y usuario, la pregunta guía y
// el trabajo central
export type ToyotaDiscovery = {
  opener: ToyotaOpener;
  context: {
    head: ToyotaHead;
    statement: string;
    stats: readonly ToyotaStat[];
    currentLabel: string;
    currentSteps: readonly ToyotaStep[];
    proposedLabel: string;
    proposedSteps: readonly ToyotaStep[];
    quote: string;
  };
  benchmark: {
    head: ToyotaHead;
    statement: string;
    criteriaLabel: string;
    criteria: readonly string[];
    strengthLabel: string;
    opportunityLabel: string;
    references: readonly ToyotaBenchmarkReference[];
  };
  problem: {
    head: ToyotaHead;
    model: readonly ToyotaStep[];
  };
  // Para quién: los segmentos con su necesidad principal y sus dolores
  user: {
    head: ToyotaHead;
    segments: readonly ToyotaItem[];
    painsLabel: string;
    pains: readonly ToyotaItem[];
  };
  hmw: {
    eyebrow: string;
    question: string;
  };
  jobs: {
    head: ToyotaHead;
    progress: readonly ToyotaItem[];
    statementLabel: string;
    statement: readonly ToyotaItem[];
  };
};

// 03 · Strategy: propuesta de valor, objetivos, concepto, IA y datos
export type ToyotaStrategy = {
  opener: ToyotaOpener;
  value: {
    head: ToyotaHead;
    promise: string;
    shifts: ToyotaShiftSet;
    canvas: ToyotaVisual;
    fit: string;
  };
  goals: {
    head: ToyotaHead;
    table: ToyotaTable;
    note: string;
  };
  concept: {
    head: ToyotaHead;
    stagesLabel: string;
    stages: readonly ToyotaStep[];
  };
  ai: {
    head: ToyotaHead;
    layers: readonly ToyotaLayer[];
    rule: string;
    trustLabel: string;
    mechanisms: readonly string[];
    trustRule: string;
  };
};

// 04 · Product Definition: MVP, lógica de recomendación, flujo y variantes
export type ToyotaProduct = {
  opener: ToyotaOpener;
  mvp: {
    head: ToyotaHead;
    statement: string;
    total: string;
    moscow: readonly ToyotaMoscowSegment[];
    behaviorsLabel: string;
    behaviors: readonly string[];
  };
  logic: {
    head: ToyotaHead;
    statement: string;
    stats: readonly ToyotaStat[];
    matrixTitle: string;
    matrix: ToyotaTagMatrix;
    rules: readonly ToyotaItem[];
  };
  // El flujo como diagrama: el camino principal, un ciclo que vuelve atrás,
  // las salidas hacia Toyota y el resultado abierto en sus variantes. El paso
  // destacado (isHighlight) es el resultado
  flow: {
    head: ToyotaHead;
    statement: string;
    steps: readonly ToyotaStep[];
    // Ciclo: desde el paso `from` se vuelve al paso `to` (posiciones desde 0)
    loop: { label: string; text: string; from: number; to: number };
    exitsLabel: string;
    exits: readonly string[];
    resultsLabel: string;
    results: readonly ToyotaResultVariant[];
    exampleLabel: string;
    decision: string;
  };
};

// 05 · Experience Design. El prototipo y las pantallas se construyen al final;
// por ahora lleva las cajas de las pantallas y el sistema visual
export type ToyotaExperience = {
  opener: ToyotaOpener;
  design: {
    head: ToyotaHead;
    statement: string;
    screens: readonly ToyotaVisual[];
    systemLabel: string;
    decisions: readonly string[];
  };
};

// 06 · Validation & Learnings: solo con evidencia real
export type ToyotaValidation = {
  opener: ToyotaOpener;
  plan: {
    head: ToyotaHead;
    statement: string;
    criteriaLabel: string;
    criteria: readonly string[];
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
  experience: ToyotaExperience;
  validation: ToyotaValidation;
};
