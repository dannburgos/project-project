// Contenido del caso de Sonopizza, contado como recorrido por pasos. Cada
// módulo sigue el orden del documento maestro del proyecto.

import type { SonoDesignSystem } from '@/content/sonopizza-design-system.types';

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
// camino tiene su orden dentro del flujo (las ramas comparten orden)
export type SonoFlowNodeKind = 'start' | 'step' | 'decision' | 'alt' | 'end';

export type SonoFlowNode = {
  label: string;
  detail?: string;
  kind: SonoFlowNodeKind;
  // Centro y ancho de la pantalla en el lienzo (las píldoras de inicio y fin
  // son más angostas, así queda aire para las flechas)
  x: number;
  y: number;
  width: number;
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

// Imagen con su texto alternativo
export type SonoImage = {
  src: string;
  alt: string;
};

export type SonopizzaStory = {
  // Nombres de las secciones, para la navegación con cuadrados
  sections: readonly string[];
  cover: {
    wordmark: readonly string[];
    tagline: string;
    facts: readonly SonoLabeledText[];
    photoLabel: string;
    mascotAlt: string;
  };
  challenge: {
    number: string;
    name: string;
    // El titular, una línea por elemento
    titleLines: readonly string[];
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
    // Capturas de la app actual en el orden de la fila; la última es la que
    // queda junto a los hallazgos
    captures: readonly SonoImage[];
    dimensions: readonly SonoLabeledText[];
  };
  // Benchmark y hallazgos en tres slides que se pasan con clic: cada una
  // compara un par de aspectos en las tres marcas y cierra con su hallazgo
  benchmark: {
    eyebrow: string;
    // Nombre de los botones de las slides (para lectores de pantalla)
    navLabel: string;
    previousLabel: string;
    nextLabel: string;
    signals: Record<SonoBenchmarkSignal, string>;
    takeLabel: string;
    findingLabel: string;
    forSonopizzaLabel: string;
    paletteLabel: string;
    // Marcas en el orden de las tarjetas de cada slide
    brands: readonly SonoBenchmarkBrand[];
    slides: readonly SonoBenchmarkSlide[];
  };
  persona: {
    subtitle: string;
    // Quién es y para qué sirve: el usuario de estudio, ficticio
    title: string;
    note: string;
    name: string;
    portrait: SonoImage;
    facts: readonly SonoLabeledText[];
    context: readonly SonoTextPart[];
  };
  journey: {
    subtitle: string;
    title: string;
    // Nombre de cada fila de las tarjetas: piensa, fricción y oportunidad
    rowLabels: {
      thought: string;
      friction: string;
      opportunity: string;
    };
    stages: readonly SonoJourneyStage[];
  };
  architecture: {
    title: string;
    root: string;
    sections: readonly SonoSiteNode[];
  };
  // Flujos principales: uno a la vista y los demás con las flechas
  flows: {
    title: string;
    navLabel: string;
    previousLabel: string;
    nextLabel: string;
    items: readonly SonoFlow[];
  };
  // 04 · Sistema de diseño: fundamentos, componentes y elementos de marca
  designSystem: SonoDesignSystem;
  // 05 · El producto en acción: una escena por pantalla del prototipo
  // (referencia: motionin.design/gallery/marathon)
  product: {
    number: string;
    name: string;
    scenes: readonly SonoProductScene[];
  };
};

// Una pantalla del prototipo, tal como se ve dentro del teléfono de su escena
export type SonoProductScreen = {
  // Nombre de la imagen (/sonopizza/screens/{key}.webp)
  key: string;
  // Número y nombre que lleva en el tablero
  step: string;
  label: string;
};

// Una escena por pantalla: su titular, qué hace, las etiquetas de lo que
// resuelve y la pantalla. El fondo toma el color del flujo al que pertenece
export type SonoProductScene = {
  number: string;
  title: string;
  text: string;
  // 0 azul oscuro, 1 azul claro y 2 naranja (los colores de los tres flujos)
  tone: 0 | 1 | 2;
  screen: SonoProductScreen;
  chips: readonly SonoLabeledText[];
};

// Logo de una marca del benchmark
export type SonoBenchmarkLogo = {
  src: string;
  // El logo ya es una tarjeta con su propio fondo (Papa John's): llena el
  // cuadro y lleva un borde blanco en vez del fondo claro
  isCard?: boolean;
};

export type SonoBenchmarkBrand = {
  name: string;
  logo: SonoBenchmarkLogo;
};

// Cómo le va a la marca en un aspecto
export type SonoBenchmarkSignal = 'strength' | 'friction' | 'neutral';

// Ícono de cada observación (el componente lo traduce a un ícono de lucide)
export type SonoBenchmarkIcon =
  | 'layout-list'
  | 'image'
  | 'flame'
  | 'id-card'
  | 'search'
  | 'ruler'
  | 'store'
  | 'lock'
  | 'list-checks'
  | 'receipt'
  | 'chevrons-up-down'
  | 'map-pin'
  | 'camera'
  | 'shapes'
  | 'layout-grid';

export type SonoBenchmarkRow = {
  icon: SonoBenchmarkIcon;
  text: string;
  signal: SonoBenchmarkSignal;
};

// Tarjeta de una marca en una slide: sus observaciones (en el orden de
// rowLabels) y, en la slide visual, su paleta
export type SonoBenchmarkCard = {
  palette?: readonly string[];
  rows: readonly SonoBenchmarkRow[];
};

export type SonoBenchmarkSlide = {
  aspects: string;
  title: string;
  // Nombre de cada fila de las tarjetas
  rowLabels: readonly string[];
  // Una tarjeta por marca, en el orden de brands
  cards: readonly SonoBenchmarkCard[];
  // Marca de la que se toma la idea (índice en brands)
  takenFrom: number;
  finding: string;
  decision: string;
};

// Una etapa del journey. Las fricciones salen de la auditoría y las
// oportunidades, de los hallazgos y la arquitectura. Textos cortos y de largo
// parecido para que las tarjetas midan igual
export type SonoJourneyStage = {
  name: string;
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
