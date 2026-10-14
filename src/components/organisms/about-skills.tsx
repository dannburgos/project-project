import { SkillsModule } from '@/components/molecules/skills-module';
import { siteContent } from '@/content/site';

// Skills profesionales: el módulo de skills en modo claro. Va encima y sube
// como una cortina para dejar ver, debajo, las skills como persona.
export function AboutSkills() {
  const { skills } = siteContent.about;

  return (
    <SkillsModule
      id="about-skills-title"
      lead={skills.professionalTitle}
      statement={skills.professionalStatement}
      tone="light"
      className="about-skills"
      items={skills.professional.map(group => ({
        title: group.name,
        text: group.items.join(' · ')
      }))}
    />
  );
}
