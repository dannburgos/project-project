// Contenido de un caso de estudio. Cada proyecto arma el suyo: su ficha, su
// introducción y sus propios capítulos (entre 1 y 10), cada uno con los
// bloques que necesite.

export type CaseFact = {
  label: string;
  value: string;
};

// Tarjeta corta: una fricción, un pilar, una decisión, un paso...
export type CaseCard = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export type CaseListItem = {
  title: string;
  text?: string;
};

// Hallazgo: qué se encontró y de qué preguntas sale
export type CaseFinding = {
  title: string;
  text: string;
  source: string;
};

// Una app del benchmark y sus palabras clave
export type CaseBenchmarkApp = {
  name: string;
  keywords: readonly string[];
};

export type CaseGapSide = {
  label: string;
  title: string;
  text?: string;
};

export type CaseScopeGroup = {
  eyebrow: string;
  // Pilar al que pertenece el grupo (opcional), junto al número
  label?: string;
  title: string;
  items: readonly string[];
};

export type CaseNavigationSection = {
  name: string;
  description: string;
  children: readonly string[];
};

export type CaseFlowScreen = {
  title: string;
  description: string;
};

export type CaseMetric = {
  label: string;
  value: string;
};

// Cómo se acomoda un bloque en la grilla del capítulo: ancho (todo, mitad, un
// tercio o dos tercios; en celular siempre todo) y fondo de su tarjeta
// (plano o con un degradado sutil del color de acento)
export type CaseBlockSpan = 'full' | 'half' | 'third' | 'twoThirds';
export type CaseBlockTone = 'flat' | 'tint';

export type CaseBlockLayout = {
  span?: CaseBlockSpan;
  tone?: CaseBlockTone;
};

export type CaseBlockContent =
  // Párrafos de texto corrido
  | { type: 'text'; paragraphs: readonly string[] }
  // Frase grande que resume una idea; aparece palabra por palabra
  // (con un subtítulo opcional debajo)
  | { type: 'statement'; text: string; subtitle?: string }
  // Tarjetas en grilla
  | { type: 'cards'; title?: string; items: readonly CaseCard[] }
  // La brecha: lo que se sabe frente a lo que se hace, con el problema
  // completo detrás de un botón en el medio
  | {
      type: 'gap';
      headline: string;
      lead: string;
      known: CaseGapSide;
      done: CaseGapSide;
      gapLabel: string;
      detailLabel: string;
      detail: string;
    }
  // Recorrido: tarjetas que se encienden una a una con el scroll
  | { type: 'sequence'; title: string; items: readonly CaseCard[] }
  // Lista con título
  | { type: 'list'; title: string; items: readonly CaseListItem[] }
  // Aclaración discreta (por ejemplo, una nota metodológica)
  | { type: 'note'; label: string; text: string }
  // Perfil de usuario resumido en grilla: quién es, su frase, sus rasgos y
  // los hallazgos que salen de sus respuestas
  | {
      type: 'profile';
      name: string;
      facts: string;
      // Objetos que giran alrededor del avatar (por ejemplo, sus plantas) y
      // cómo se nombran para lectores de pantalla
      orbitCount: number;
      orbitLabel: string;
      quote: string;
      traits: readonly CaseFact[];
      findingsTitle: string;
      findings: readonly CaseFinding[];
    }
  // Benchmark: una fila de apps con sus palabras clave
  | { type: 'benchmark'; apps: readonly CaseBenchmarkApp[] }
  // Alcance de una versión: lo que entra y lo que queda fuera
  | {
      type: 'scope';
      groups: readonly CaseScopeGroup[];
      outTitle: string;
      out: readonly string[];
    }
  // Mapa de navegación de un producto
  | {
      type: 'navigation';
      title: string;
      sections: readonly CaseNavigationSection[];
    }
  // Flujo de usuario: objetivo, recorrido en pasos y pantallas
  | {
      type: 'flow';
      number: string;
      title: string;
      goal: string;
      steps: readonly string[];
      screens: readonly CaseFlowScreen[];
      notes?: readonly string[];
    }
  // Prototipo interactivo del proyecto (ruta /prototypes/<proyecto>)
  | { type: 'prototype'; src: string; title: string }
  // Espacios de ejemplo, para los proyectos que aún no tienen contenido
  | { type: 'image'; label: string }
  | { type: 'chart'; label: string }
  | { type: 'quote'; text: string; source: string }
  | { type: 'beforeAfter'; before: string; after: string }
  | { type: 'gallery'; labels: readonly string[] }
  | { type: 'result'; metrics: readonly CaseMetric[] };

export type CaseBlock = CaseBlockContent & CaseBlockLayout;

export type CaseChapter = {
  id: string;
  // Nombre corto del capítulo en el menú lateral
  title: string;
  // Título y resumen que se abren en el menú cuando se está leyendo
  heading: string;
  summary: string;
  blocks: readonly CaseBlock[];
};

export type CaseStudy = {
  facts: readonly CaseFact[];
  // Frase protagonista de la introducción (opcional): va grande, al lado del
  // texto de apoyo
  headline?: string;
  intro: readonly string[];
  mediaLabel: string;
  chapters: readonly CaseChapter[];
};
