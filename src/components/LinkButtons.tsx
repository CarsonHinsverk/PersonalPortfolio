import { Button, Flex } from "@radix-ui/themes";
import { fileTextIcon, githubLogo, linkedinLogo } from "../assets";

import "../index.css";

export default function LinkButtons() {
    return (
        <Flex gap={"2"} align={"center"} justify={"between"}>
            <Button variant={"outline"}>
                <img src={githubLogo} /> GitHub
            </Button>

            <Button variant={"outline"}>
                <img src={linkedinLogo} /> LinkedIn
            </Button>

            <Button variant={"outline"}>
                <img src={fileTextIcon} /> Resume
            </Button>
        </Flex>
    );
}