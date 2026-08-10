import { Flex, Section, Separator, Text } from "@radix-ui/themes";
import LinkButtons from "./LinkButtons";

export default function Footer() {
    return (
        <Flex direction={"column"} className="w-full px-8">
            <Section size={"1"}>
                <Flex direction={"row"} align={"center"} justify={"between"}>
                    <Text>
                        Portfolio website built with  React, TypeScript, MDX, and clsx.
                    </Text>

                    <LinkButtons />
                </Flex>
            </Section>

            <Separator orientation={"horizontal"} size={"4"} />

            <Section size={"1"}>
                <Flex direction={"row"} align={"center"} justify={"between"}>
                    <Text>
                        © 2026 Carson Hinsverk. All Rights Reserved.
                    </Text>

                    <a href="/">
                        <Text>
                            Return To Top
                        </Text>
                    </a>
                </Flex>
            </Section>
        </Flex>
    );
}