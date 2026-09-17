'use client';

import { Flex, Separator, Text } from "@radix-ui/themes";

import { About } from "@/public";
import Markdown from "../ui/markdown";

export default function AboutSection() {
  return (
    <Flex direction={"column"} gap={"4"} className="w-full h-full">
      <Text size={"5"} className="w-full text-center" style={{ color: "#9873B7" }}>
        Hi, my name is Carson: CS Student
      </Text>

      <Separator orientation={"horizontal"} size={"4"} />

      <Markdown MDX={About} />
    </Flex>
  );
}
