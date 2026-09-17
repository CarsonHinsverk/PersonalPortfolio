import { Flex, Separator, Text } from "@radix-ui/themes";
import LinkButtons from "./link-buttons";

export default function Footer() {
  const currentYear: string = new Date().getFullYear().toString();

  return (
    <Flex
      justify={"center"}
      style={{
        backgroundColor: "#FFCE1B",
        color: "black"
      }}
      className="relative w-full"
    >
      <Flex
        gap={"4"} direction={"column"} align={"center"} justify={"center"}
        className="relative max-w-200 w-full h-full p-4"
      >
        <Flex direction={"row"} align={"center"} justify={"between"} className="w-full">
          <Text style={{ color: "black" }}>
            Portfolio website built with React, TypeScript, MDX, and Framer Motion.
          </Text>

          <LinkButtons />
        </Flex>

        <Separator orientation={"horizontal"} size={"4"} />

        <Text style={{ color: "black" }} className="w-full text-start">
          {`© ${currentYear} Carson Hinsverk. All Rights Reserved.`}
        </Text>
      </Flex>
    </Flex>
  );
}
