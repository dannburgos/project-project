import { BlurRevealText } from '@/components/atoms/blur-reveal-text';

type CaseStatementProps = {
  text: string;
};

// Frase grande que resume una idea del caso: aparece palabra por palabra al
// llegar a ella
export function CaseStatement({ text }: CaseStatementProps) {
  return (
    <BlurRevealText
      as="p"
      className="case-statement"
      segments={[{ text, isKey: true }]}
    />
  );
}
