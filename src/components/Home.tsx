
import { Card, Flex } from '@radix-ui/themes';
import { AboutSection, ContactSection, ExperiencesSection, HeroSection, ProjectsSection, SkillsSection } from './sections';
import { useMotionValue } from 'framer-motion';

export default function Home() {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function HandleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent<HTMLDivElement>) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Flex
            onMouseMove={HandleMouseMove}
            gap={"8"}
            direction={"column"}
            className="relative py-8"
        >
            <Card>
                <HeroSection />
            </Card>
            <AboutSection />
            <SkillsSection />
            <ExperiencesSection />
            <ProjectsSection />
            <ContactSection />
        </Flex>
    );
}