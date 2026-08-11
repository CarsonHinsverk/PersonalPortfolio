import { Flex, Separator, Text, Section } from "@radix-ui/themes";

import LinkButtons from "./LinkButtons";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <Flex gap={"4"} direction={"column"} align={"center"} justify={"center"} className="w-full">
            <Flex gap={"4"} direction={"row"} align={"center"} justify={"between"}className="w-full">
                <Section size={"1"}>
                    <Text>
                        Carson Hinsverk
                    </Text>
                </Section>

                <Section size={"1"}>
                    <Navigation />
                </Section>

                <Section size={"1"}>
                    <LinkButtons />
                </Section>
            </Flex>

            <Separator orientation={"horizontal"} size={"4"} />
        </Flex>
    );
}