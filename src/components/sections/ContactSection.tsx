import { Card, Flex, Heading } from "@radix-ui/themes";

export default function ContactSection() {
    return (
        <Card size={"5"} variant={"classic"}>
            <Flex direction={"column"} align={"center"} justify={"between"}>
                <Heading color={"purple"}>Get In Contact</Heading>
            </Flex>
        </Card>
    );
}