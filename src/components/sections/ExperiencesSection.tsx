import { Card, Flex, Heading } from "@radix-ui/themes";

export default function ExperiencesSection() {
    return (
        <Card size={"5"} variant={"classic"}>
            <Flex direction={"column"} align={"center"} justify={"between"}>
                <Heading color={"purple"}>Experiences</Heading>
            </Flex>
        </Card>
    );
}