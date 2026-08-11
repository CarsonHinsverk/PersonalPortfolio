import { Card, Flex, Heading } from "@radix-ui/themes";
import Markdown from "../Markdown";
import { aboutMDX } from "../../assets";


export default function AboutSection() {
    return (
        <Card size={"5"} variant={"classic"}>
            <Flex direction={"column"} align={"center"} justify={"between"}>
                <Heading color={"purple"}>About Me</Heading>

                <Markdown MDX={aboutMDX} />
            </Flex>
        </Card>
    )
}