
import { Flex } from '@radix-ui/themes';
import { AboutSection, ContactSection, ExperiencesSection, HeroSection, ProjectsSection, SkillsSection } from './sections';

export default function Home() {
    return (
        <Flex gap={"8"} direction={"column"} className="relative py-8">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperiencesSection />
            <ProjectsSection />
            <ContactSection />
        </Flex>
    );
}