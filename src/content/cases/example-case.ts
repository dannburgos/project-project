import type { CaseBlock, CaseStudy } from '@/content/case-study.types';

// Caso de ejemplo: lo usan los proyectos que aún no tienen su propio
// contenido. Muestra la estructura orientativa (contexto, problema,
// investigación, oportunidad, concepto, solución, resultado y síntesis) con
// textos y espacios de ejemplo.

const EXAMPLE_TEXT =
  'Texto de ejemplo. La profundidad de cada etapa depende de su importancia en este caso.';
const EXAMPLE_HEADING = 'Título de ejemplo de la etapa';
const EXAMPLE_SUMMARY =
  'Texto de ejemplo. Resumen breve de esta etapa del caso.';

const text: CaseBlock = { type: 'text', paragraphs: [EXAMPLE_TEXT] };
const image: CaseBlock = { type: 'image', label: 'Imagen de apoyo' };
const quote: CaseBlock = {
  type: 'quote',
  text: 'Cita de ejemplo de una persona usuaria o del equipo.',
  source: 'Fuente por definir'
};

const exampleChapter = (
  id: string,
  title: string,
  blocks: readonly CaseBlock[]
) => ({
  id,
  title,
  heading: EXAMPLE_HEADING,
  summary: EXAMPLE_SUMMARY,
  blocks
});

export const exampleCase: CaseStudy = {
  facts: [
    { label: 'Scope', value: 'Por definir' },
    { label: 'Rol', value: 'Por definir' },
    { label: 'Categoría', value: 'E-commerce · Fintech' }
  ],
  intro: [
    'Texto de ejemplo. Introducción conceptual: de qué trata el proyecto, para quién es y en qué contexto nace.',
    'Texto de ejemplo. Cuál fue el reto y desde qué enfoque se abordó, en pocas líneas.'
  ],
  mediaLabel: 'Imagen principal del proyecto',
  chapters: [
    exampleChapter('context', 'Contexto', [text, image]),
    exampleChapter('problem', 'Problema', [text, quote]),
    exampleChapter('understanding', 'Investigación', [
      text,
      { type: 'chart', label: 'Gráfica de la investigación' },
      quote
    ]),
    exampleChapter('opportunity', 'Oportunidad', [text, image]),
    exampleChapter('concept', 'Concepto', [image, text]),
    exampleChapter('solution', 'Solución', [
      text,
      { type: 'beforeAfter', before: 'Antes', after: 'Después' },
      {
        type: 'gallery',
        labels: [
          'Imagen de la galería',
          'Imagen de la galería',
          'Imagen de la galería'
        ]
      }
    ]),
    exampleChapter('result', 'Resultado', [
      {
        type: 'result',
        metrics: [
          { label: 'Métrica por definir', value: '—' },
          { label: 'Métrica por definir', value: '—' },
          { label: 'Métrica por definir', value: '—' }
        ]
      },
      text
    ]),
    {
      ...exampleChapter('synthesis', 'Síntesis', [text]),
      heading: 'Título de ejemplo del cierre',
      summary: 'Texto de ejemplo. Qué se entendió, qué se decidió y por qué.'
    }
  ]
};
