import type { CaseStudy } from '@/content/case-study.types';
import { exampleCase } from '@/content/cases/example-case';

// Casos por capítulos con contenido propio, por dirección del proyecto. Los
// demás usan el caso de ejemplo. Planti se cuenta como recorrido
// (case-stories.ts).
const caseStudies: Partial<Record<string, CaseStudy>> = {};

export function getCaseStudy(slug: string): CaseStudy {
  return caseStudies[slug] ?? exampleCase;
}
