import type { CaseStory } from '@/content/case-story.types';
import { plantiStory } from '@/content/cases/planti-story';

// Casos contados como recorrido, por dirección del proyecto. Los demás siguen
// con el caso por capítulos (case-studies.ts).
const caseStories: Partial<Record<string, CaseStory>> = {
  planti: plantiStory
};

export function getCaseStory(slug: string): CaseStory | undefined {
  return caseStories[slug];
}
