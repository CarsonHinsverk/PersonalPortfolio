import { Button, Flex } from "@radix-ui/themes";
import { fileTextIcon, githubLogo, linkedinLogo } from "../assets";

export default function LinkButtons() {
    return (
        <Flex gap={"2"} align={"center"} justify={"between"}>
            <a href="https://github.com/CarsonHinsverk">
                <Button variant={"classic"} color={"purple"}>
                    <img src={githubLogo} /> GitHub
                </Button>
            </a>

            <a href="https://www.linkedin.com/in/carson-hinsverk-3345093b1/">
                <Button variant={"classic"} color={"purple"}>
                    <img src={linkedinLogo} /> LinkedIn
                </Button>
            </a>

            <a href="https://docs.google.com/document/d/1ulB6rGRe-RjlFXpExGTYIBvfHqikTYnypJDUfu2z5lg/edit?usp=sharing">
                <Button variant={"classic"} color={"purple"}>
                    <img src={fileTextIcon} /> Resume
                </Button>
            </a>
        </Flex>
    );
}