import { SkillsModule } from '@/components/molecules/skills-module';
import { siteContent } from '@/content/site';

// Skills como persona: el mismo módulo de skills, en modo oscuro. Queda detrás
// de las skills profesionales y aparece cuando ese módulo sube.
export function AboutPersonal() {
  const { skills } = siteContent.about;

  return (
    <SkillsModule
      id="about-personal-title"
      lead={skills.personalTitle}
      statement={skills.personalStatement}
      tone="dark"
      className="about-personal"
      items={skills.personal.map(item => ({
        title: item.word,
        text: item.text
      }))}
    />
  );
}
