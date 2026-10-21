import type { CaseStudy } from '@/content/case-study.types';
import { exampleCase } from '@/content/cases/example-case';
import { plantiCase } from '@/content/cases/planti';

// Casos con contenido propio, por dirección del proyecto. Los demás usan el
// caso de ejemplo.
const caseStudies: Partial<Record<string, CaseStudy>> = {
  planti: plantiCase
};

export function getCaseStudy(slug: string): CaseStudy {
  return caseStudies[slug] ?? exampleCase;
}
