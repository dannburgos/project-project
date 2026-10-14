import { AboutBanner } from '@/components/organisms/about-banner';
import { AboutCv } from '@/components/organisms/about-cv';
import { AboutPersonal } from '@/components/organisms/about-personal';
import { AboutSkills } from '@/components/organisms/about-skills';
import { AboutTools } from '@/components/organisms/about-tools';
import { ClosingContact } from '@/components/organisms/closing-contact';
import { PageCurtain } from '@/components/organisms/page-curtain';

// About: 1 Banner grande (su información se define después) ·
// 2 Herramientas que domino (tira de logos) · 3 Resumen de CV · 4 Skills
// profesionales, que sube como cortina y deja ver · 5 Skills como persona ·
// 6 Cierre de contacto.
export default function AboutPage() {
  return (
    <div className="about-page">
      <PageCurtain variant="flush">
        <AboutBanner />
        <AboutTools />
        <AboutCv />
        <div className="about-skills-reveal">
          <AboutSkills />
          <AboutPersonal />
        </div>
      </PageCurtain>

      <ClosingContact />
    </div>
  );
}
