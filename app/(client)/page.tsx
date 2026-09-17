import { Flex } from '@radix-ui/themes';

import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import SkillsSection from '@/components/home/skills-section';
import ExperiencesSection from '@/components/home/experiences-section';
import ContactSection from '@/components/home/contact-section';
import Section from '@/components/home/section';

import { client } from '@/sanity/lib/client';
import { EXPERIENCES_QUERY, PROJECTS_QUERY } from '@/sanity/lib/queries';
import { EXPERIENCES_QUERY_RESULT, PROJECTS_QUERY_RESULT } from '@/sanity/types';
import { mapExperience } from '@/lib/experience';
import { mapProject } from '@/lib/project';
import ProjectsSection from '@/components/home/projects-section';

export default async function Home() {
  const [projectsData, experiencesData] = await Promise.all([
    client.fetch(PROJECTS_QUERY),
    client.fetch(EXPERIENCES_QUERY)
  ]);

  const experiences = Array.isArray(experiencesData)
    ? (experiencesData as EXPERIENCES_QUERY_RESULT).map(mapExperience)
    : [];

  const projects = Array.isArray(projectsData)
    ? (projectsData as PROJECTS_QUERY_RESULT).map(mapProject)
    : [];

  return (
    <main className="relative w-full justify-items-center-safe">
      <Flex gap={"8"} align={"center"} direction={"column"} className="relative max-w-200 w-full h-full p-8">
        <HeroSection />
        <Section heading={"About Me"}>
          <AboutSection />
        </Section>
        <Section heading={"Skills"}>
          <SkillsSection />
        </Section>
        <Section heading={"Experiences"}>
          <ExperiencesSection experiences={experiences}/>
        </Section>
        <Section heading={"Projects"}>
          <ProjectsSection projects={projects} />
        </Section>
        <Section heading={"Get In Contact"}>
          <ContactSection />
        </Section>
      </Flex>
    </main>
  );
}
