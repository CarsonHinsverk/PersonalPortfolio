
import { AboutSection, ContactSection, ExperiencesSection, HeroSection, ProjectsSection, SkillsSection } from './sections';

export default function Home() {
    return (
        <main className="relative">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperiencesSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    );
}