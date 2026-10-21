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

export type CaseInterviewItem = {
  question: string;
  answer: string;
};

export type CaseBenchmarkApp = {
  name: string;
  features: readonly string[];
};

export type CaseGapSide = {
  label: string;
  title: string;
  text: string;
};

export type CaseScopeGroup = {
  eyebrow: string;
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
  | { type: 'statement'; text: string }
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
  // Persona simulada
  | {
      type: 'persona';
      badge: string;
      name: string;
      facts: readonly string[];
      quote: string;
      goal: string;
      frustration: string;
      needs: readonly string[];
      photoLabel: string;
    }
  // Preguntas y respuestas (simuladas o reales)
  | {
      type: 'interview';
      title: string;
      note: string;
      speaker: string;
      items: readonly CaseInterviewItem[];
    }
  // Benchmark: apps analizadas, ejes de comparación y síntesis
  | {
      type: 'benchmark';
      apps: readonly CaseBenchmarkApp[];
      axesTitle: string;
      axes: readonly string[];
      synthesisTitle: string;
      synthesis: readonly string[];
    }
  // Ciclo de pasos que vuelve a empezar
  | { type: 'cycle'; title: string; steps: readonly string[]; note?: string }
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
