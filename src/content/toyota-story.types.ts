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

export type ToyotaFact = {
  label: string;
  value: string;
};

// Encabezado de un módulo: índice, eyebrow, titular y bajada
export type ToyotaHead = {
  index?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
};

// Paso de un recorrido que se dibuja de izquierda a derecha
export type ToyotaStep = {
  label: string;
  isHighlight?: boolean;
};

// Apertura de capítulo: palabra gigante entre capas y retícula sobre un fondo
// que se mueve más lento
export type ToyotaOpener = {
  number: string;
  word: string;
  summary: string;
  sectionsLabel: string;
  sections: readonly string[];
  background: ToyotaVisual;
  window: ToyotaVisual;
};

// Tarjeta de la pila: se apila sobre la anterior con su texto al costado
export type ToyotaStackCard = {
  number: string;
  title: string;
  text: string;
  visual: ToyotaVisual;
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
  evidence: string;
  hypothesis: string;
  trackHint: string;
  trackProgress: string;
  pending: string;
};

export type ToyotaCover = {
  eyebrow: string;
  title: string;
  lead: string;
  body: string;
  visual: ToyotaVisual;
  factsTitle: string;
  facts: readonly ToyotaFact[];
  note: string;
  scrollHint: string;
};

// 01 · Overview: descripción, tres pilares y del problema a la oportunidad
export type ToyotaOverview = {
  opener: ToyotaOpener;
  description: {
    head: ToyotaHead;
    statement: string;
    pillarsWord: string;
    pillars: readonly ToyotaStackCard[];
  };
  problem: {
    problemEyebrow: string;
    problem: string;
    quote: string;
    note: string;
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
    note: string;
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
    decisionsTitle: string;
    decisions: ToyotaTable;
    note: string;
  };
  problem: {
    head: ToyotaHead;
    model: readonly ToyotaStep[];
    segmentsLabel: string;
    segments: readonly string[];
    painsLabel: string;
    pains: readonly ToyotaItem[];
    note: string;
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
    comparison: ToyotaTable;
    note: string;
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
    notLabel: string;
    not: readonly string[];
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
  data: {
    head: ToyotaHead;
    entities: readonly ToyotaStep[];
    decision: string;
    rule: string;
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
    note: string;
  };
  flow: {
    head: ToyotaHead;
    statement: string;
    steps: readonly ToyotaStep[];
    decision: string;
  };
  variants: {
    head: ToyotaHead;
    items: readonly ToyotaResultVariant[];
    exampleLabel: string;
    note: string;
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

export type ToyotaStory = {
  sections: readonly ToyotaSection[];
  labels: ToyotaLabels;
  cover: ToyotaCover;
  overview: ToyotaOverview;
  discovery: ToyotaDiscovery;
  strategy: ToyotaStrategy;
  product: ToyotaProduct;
  experience: ToyotaExperience;
  validation: ToyotaValidation;
};
