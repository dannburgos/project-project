import { CaseStoryImage } from '@/components/atoms/case-story-image';

type CaseStoryRespiteProps = {
  label: string;
  section: number;
};

// Respiro: una vista de solo imagen, a todo el ancho, que da aire entre
// bloques de información
export function CaseStoryRespite({ label, section }: CaseStoryRespiteProps) {
  return (
    <div
      className="story-view story-respite"
      data-view="respite"
      data-section={section}
      data-surface="dark"
    >
      <CaseStoryImage
        label={label}
        variant="leaf"
        className="story-respite__image"
        data-respite-image
      />
    </div>
  );
}
