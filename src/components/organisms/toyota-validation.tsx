import { ToyotaCallout } from '@/components/molecules/toyota-callout';
import { ToyotaCells } from '@/components/molecules/toyota-cells';
import { ToyotaChapter } from '@/components/molecules/toyota-chapter';
import { ToyotaChips } from '@/components/molecules/toyota-chips';
import { ToyotaHead } from '@/components/molecules/toyota-head';
import { ToyotaOpener } from '@/components/molecules/toyota-opener';
import type {
  ToyotaLabels,
  ToyotaValidation as ToyotaValidationContent
} from '@/content/toyota-story.types';

type ToyotaValidationProps = {
  index: number;
  label: string;
  validation: ToyotaValidationContent;
  labels: ToyotaLabels;
};

// 06 · Validation & Learnings. Solo se completa con evidencia real: lo que
// aún no se ha medido va como un espacio por completar.
export function ToyotaValidation({
  index,
  label,
  validation,
  labels
}: ToyotaValidationProps) {
  const { plan, next, closing } = validation;

  return (
    <ToyotaChapter index={index} world="light" label={label}>
      <ToyotaOpener opener={validation.opener} />

      <div className="ty-module">
        <ToyotaHead head={plan.head} size="large" />
        <p className="ty-body ty-body--large ty-body--measure" data-ty-rise>
          {plan.statement}
        </p>
        <ToyotaChips items={plan.criteria} label={plan.criteriaLabel} />
        <h4 className="ty-subtitle">{plan.tasksLabel}</h4>
        <ToyotaCells items={plan.tasks} columns={4} />
        <ToyotaCallout
          text={plan.pending}
          label={labels.pending}
          tone="pending"
        />
      </div>

      <div className="ty-module">
        <ToyotaHead head={next.head} />
        <ToyotaChips items={next.steps} />
      </div>

      <footer className="ty-closing" data-surface="dark">
        <p className="ty-closing__title" data-ty-mask>
          {closing.title}
        </p>
        <p className="ty-closing__note">{closing.note}</p>
      </footer>
    </ToyotaChapter>
  );
}
