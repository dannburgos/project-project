'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { BlurRevealText } from '@/components/atoms/blur-reveal-text';
import { HomeStat } from '@/components/molecules/home-stat';
import { journeyContent } from '@/content/journey';
import { siteContent } from '@/content/site';
import { useInView } from '@/hooks/use-in-view';

// Módulo 6 del Home: invitación a Trayectoria. Una frase y tres datos sueltos,
// contados a partir del contenido real de la línea de tiempo, sin repetirla.
export function HomeJourneyTeaser() {
  const { journeyTeaser } = siteContent.home;
  const { ref, isInView } = useInView<HTMLDivElement>(0.3);

  const { stages, firstYear } = journeyContent;
  const years = new Date().getFullYear() - firstYear;
  const companies = stages.filter(
    stage => stage.lane === 'professional'
  ).length;
  const studies = stages.filter(stage => stage.lane === 'academic').length;

  return (
    <section className="home-teaser" aria-label={journeyTeaser.action.label}>
      <div className="home-teaser__inner">
        <BlurRevealText
          as="h2"
          segments={journeyTeaser.statement}
          className="home-teaser__statement"
          step={55}
        />

        <div ref={ref} className="home-teaser__stats">
          <HomeStat
            value={years}
            label={journeyTeaser.stats.years}
            isActive={isInView}
          />
          <HomeStat
            value={companies}
            label={journeyTeaser.stats.companies}
            isActive={isInView}
            delay={150}
          />
          <HomeStat
            value={studies}
            label={journeyTeaser.stats.studies}
            isActive={isInView}
            delay={300}
          />
        </div>

        <Link
          href={journeyTeaser.action.href}
          className="button button--outline button--lg home-teaser__action"
        >
          <ArrowUpRight aria-hidden="true" />
          {journeyTeaser.action.label}
        </Link>
      </div>
    </section>
  );
}
