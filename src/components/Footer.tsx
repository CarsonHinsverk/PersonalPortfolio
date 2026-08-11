import { Button, Flex, Section, Separator, Text } from "@radix-ui/themes";
import LinkButtons from "./LinkButtons";

export default function Footer() {
    return (
        <Flex direction={"column"} className="w-full">
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
                        <Button variant={"ghost"} color={"gray"}>
                            <Text weight={"medium"}
                                className="inline-block bg-linear-to-r from-purple-600 from-50%
                                via-purple-600 via-50% to-slate-800 to-50% bg-size-[200%_100%]
                                bg-clip-text text-transparent bg-position-[100%_0] transition-[background-position]
                                duration-500 ease-in-out hover:bg-position-[0_0] cursor-pointer"
                            >
                                Return to Top
                            </Text>
                        </Button>
                    </a>
                </Flex>
            </Section>
        </Flex>
    );
}