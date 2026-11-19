// Contenido del caso de Sonopizza, contado como recorrido por pasos. Cada
// módulo sigue el orden del documento maestro del proyecto.

export type SonoTextPart = {
  text: string;
  isStrong?: boolean;
};

export type SonoLabeledText = {
  title: string;
  text: string;
};

export type SonoFlow = {
  number: string;
  title: string;
  steps: readonly string[];
  goal: string;
  map: SonoFlowMap;
};

// Diagrama de un flujo sobre un lienzo de 1400 × 520. Cada pantalla y cada
// camino tiene un orden: el diagrama crece en ese orden, así las ramas que
// comparten orden salen a la vez
export type SonoFlowNodeKind = 'start' | 'step' | 'decision' | 'alt' | 'end';

export type SonoFlowNode = {
  label: string;
  detail?: string;
  kind: SonoFlowNodeKind;
  x: number;
  y: number;
  order: number;
};

export type SonoFlowEdge = {
  path: string;
  isAlt?: boolean;
  order: number;
  label?: string;
  labelX?: number;
  labelY?: number;
};

export type SonoFlowMap = {
  nodes: readonly SonoFlowNode[];
  edges: readonly SonoFlowEdge[];
};

export type SonoSwatch = {
  name: string;
  hex: string;
};

export type SonoTypeface = {
  name: string;
  role: string;
  sample: string;
};

export type SonopizzaStory = {
  // Nombres de las secciones, para la navegación con cuadrados
  sections: readonly string[];
  cover: {
    eyebrow: string;
    wordmark: readonly string[];
    tagline: string;
    facts: readonly SonoLabeledText[];
    disclaimer: string;
    photoLabel: string;
    mascotAlt: string;
  };
  challenge: {
    number: string;
    name: string;
    title: string;
    context: SonoLabeledText;
    opportunity: SonoLabeledText;
    challengeLabel: string;
    challenge: string;
    goal: SonoLabeledText;
    scopeTitle: string;
    scope: readonly string[];
  };
  audit: {
    number: string;
    name: string;
    title: string;
    // Cinco capturas: la primera es la principal (la del centro)
    captures: readonly string[];
    dimensions: readonly SonoLabeledText[];
    note: string;
  };
  benchmark: {
    title: string;
    lead: string;
    captureLabel: string;
    dimensionsTitle: string;
    dimensions: readonly string[];
    takeawayTitle: string;
    // Lo que falta por documentar se muestra con este texto
    pending: string;
    apps: readonly SonoBenchmarkApp[];
    note: string;
  };
  synthesis: {
    title: string;
    opportunities: readonly SonoLabeledText[];
    direction: string;
  };
  concept: {
    number: string;
    name: string;
    verticalTitle: string;
    title: string;
    text: string;
    principlesTitle: string;
    principles: readonly string[];
    synthesis: readonly string[];
    photoLabel: string;
    // Espacio para una imagen del concepto, junto al texto
    imageLabel: string;
  };
  persona: {
    subtitle: string;
    name: string;
    portraitLabel: string;
    facts: readonly SonoLabeledText[];
    context: readonly SonoTextPart[];
  };
  journey: {
    subtitle: string;
    title: string;
    // Nombre de cada fila de las tarjetas: acción, piensa, fricción y
    // oportunidad
    rowLabels: {
      action: string;
      thought: string;
      friction: string;
      opportunity: string;
    };
    stages: readonly SonoJourneyStage[];
  };
  architecture: {
    title: string;
    root: string;
    legend: {
      nav: string;
      step: string;
      flow: string;
    };
    sections: readonly SonoSiteNode[];
    navigation: string;
  };
  flows: {
    title: string;
    items: readonly SonoFlow[];
    note: string;
  };
  visual: {
    number: string;
    name: string;
    title: string;
    personality: readonly string[];
    paletteTitle: string;
    palette: readonly SonoSwatch[];
    paletteNote: string;
    typeTitle: string;
    typefaces: readonly SonoTypeface[];
    brandTitle: string;
    logoLabel: string;
    mascotText: string;
    photographyTitle: string;
    photography: readonly string[];
    // Elementos de marca hechos con partes de la pizza (por diseñar)
    elements: {
      title: string;
      lead: string;
      pending: string;
      items: readonly SonoLabeledText[];
    };
    // Lo que tendría el sistema de diseño de Sonopizza (por construir)
    system: {
      title: string;
      lead: string;
      pending: string;
      groups: readonly SonoListGroup[];
    };
  };
  // 05 · El producto en acción: una escena por flujo (referencia:
  // motionin.design/gallery/marathon)
  product: {
    number: string;
    name: string;
    stepLabel: string;
    scenes: readonly SonoProductScene[];
  };
};

export type SonoProductScene = {
  // Número y nombre del flujo (los mismos de flows.items)
  number: string;
  title: string;
  text: string;
  screenLabel: string;
  chips: readonly SonoLabeledText[];
};

// Un referente del benchmark: lo que se observó en cada dimensión (en el
// mismo orden de dimensions) y lo que se toma de él. Vacío = por completar.
export type SonoBenchmarkApp = {
  name: string;
  observations: readonly string[];
  takeaway: string;
};

// Una etapa del journey. Las acciones salen de los flujos; las fricciones,
// de la auditoría, y las oportunidades, de la síntesis y la arquitectura
export type SonoJourneyStage = {
  name: string;
  action: string;
  thought: string;
  friction: string;
  opportunity: string;
};

// Una pantalla del sitemap: de la navegación principal, un paso del flujo
// de compra o el final del recorrido
export type SonoSiteNodeKind = 'nav' | 'step' | 'end';

export type SonoSiteNode = {
  title: string;
  kind: SonoSiteNodeKind;
  items: readonly string[];
};

export type SonoListGroup = {
  title: string;
  items: readonly string[];
};
