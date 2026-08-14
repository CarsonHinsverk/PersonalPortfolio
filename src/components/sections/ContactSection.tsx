import { Card, Flex, Heading } from "@radix-ui/themes";
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

export default function ContactSection() {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function HandleMouseMove({ clientX, clientY, currentTarget}: React.MouseEvent<HTMLDivElement>) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <Card
            onMouseMove={HandleMouseMove}
            size={"5"}
            variant={"classic"}
            className="group relative overflow-hidden"
        >
            <motion.div
                className="absolute -inset-px rounded-[inherit] opacity-0 transition duration- group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, #c084fc, transparent 80%)`
                }}
            />

            <Flex direction={"column"} align={"center"} justify={"between"} className="relative h-full">
                <Heading color={"purple"}>Get In Contact</Heading>
            </Flex>
        </Card>
    );
}