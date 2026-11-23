// Contenido de un caso contado como recorrido: un escenario fijo donde cada
// gesto de scroll trae el siguiente módulo (en celular, todo en columna).
// Cada proyecto arma el suyo con su marca; Planti es el primero.

import type { CaseFact } from '@/content/case-study.types';

export type CaseStoryLabeledText = {
  label: string;
  text: string;
};

export type CaseStoryTextPart = {
  text: string;
  isStrong?: boolean;
};

export type CaseStoryPrototypeFlow = {
  number: string;
  title: string;
  isReady: boolean;
};

export type CaseStoryNumberedText = {
  number: string;
  title: string;
  text: string;
};

export type CaseStoryFriction = {
  number: string;
  title: string;
  question: string;
  // Qué la provoca, en una línea
  text: string;
  // Cómo la vive el perfil, con su propia voz (llega como un mensaje)
};

// Imagen de apoyo del reto; sin la foto se muestra el espacio con su etiqueta
export type CaseStoryReference = {
  label: string;
  src?: string;
};

export type CaseStoryApp = {
  name: string;
  // Ícono de la app; sin él se muestra el espacio con su nombre
  icon?: string;
  focus: string;
  strengths: readonly string[];
  gaps: readonly string[];
};

export type CaseStoryPillar = {
  number: string;
  label: string;
  question: string;
  items: readonly string[];
};

export type CaseStoryNavigationItem = {
  name: string;
  description: string;
};

// Pantalla de la lluvia del prototipo: las principales van grandes y al frente
export type CaseStoryScreen = {
  label: string;
  // Captura de la pantalla; sin ella se muestra el espacio con su etiqueta
  src?: string;
  isMain?: boolean;
};

export type CaseStory = {
  // Nombres de las secciones, en el orden del recorrido (el contador)
  sections: readonly string[];
  intro: {
    name: string;
    tagline: string;
    headline: string;
    text: string;
    facts: readonly CaseFact[];
  };
  problem: {
    headline: string;
    known: CaseStoryLabeledText;
    done: CaseStoryLabeledText;
    frictionsLabel: string;
    frictions: readonly CaseStoryFriction[];
    // Nombre de quien escribe en el chat de las fricciones
    challenge: string;
    references: readonly CaseStoryReference[];
  };
  user: {
    quote: string;
    name: string;
    details: string;
    // Foto de la persona; sin ella, el círculo queda liso
    photo?: string;
    traits: readonly CaseStoryLabeledText[];
    findingsLabel: string;
    findings: readonly CaseStoryNumberedText[];
    imageLabel: string;
    // Foto de contexto; sin ella se muestra el espacio con su etiqueta
    image?: string;
  };
  benchmark: {
    title: string;
    strengthsLabel: string;
    gapsLabel: string;
    apps: readonly CaseStoryApp[];
    findingsLabel: string;
    findings: readonly string[];
    closing: string;
  };
  designSystem: {
    title: string;
  };
  concept: {
    capabilitiesTitle: string;
    pillars: readonly CaseStoryPillar[];
    navigationTitle: string;
    navigation: readonly CaseStoryNavigationItem[];
  };
  flows: {
    title: string;
    imageLabel: string;
    // Imagen de la izquierda; sin ella se muestra el espacio con su etiqueta
    image?: string;
    items: readonly CaseStoryNumberedText[];
  };
  prototype: {
    title: string;
    src: string;
    screens: readonly CaseStoryScreen[];
    // Columna de texto junto al celular
    eyebrow: string;
    heading: string;
    headingAccent: string;
    // Párrafo con algunas frases resaltadas
    description: readonly CaseStoryTextPart[];
    soonLabel: string;
    // Un botón por flujo; solo los que ya tienen recorrido se pueden elegir
    flows: readonly CaseStoryPrototypeFlow[];
  };
};
