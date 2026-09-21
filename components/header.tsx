import { Flex, Separator, TabNav, Text } from "@radix-ui/themes";

import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <Flex
      direction={"column"} align={"center"} justify={"center"}
      className="w-full sticky top-0 backdrop-blur-lg z-50"
    >
      <Flex
        direction={"row"} gap={"2"} align={"center"} justify={"between"}
        className="relative max-w-200 w-full h-full p-4"
      >
        <a href="/" className="cursor-pointer">
          <Text size={"5"} weight={"bold"} style={{ color: "#FFCE1B" }}>
            Carson Hinsverk
          </Text>
        </a>

        <TabNav.Root color="purple">
          <TabNav.Link href="/" active={usePathname() === "/"}>Home</TabNav.Link>
          <TabNav.Link href="/projects" active={usePathname() === "/projects"}>Projects</TabNav.Link>
          <TabNav.Link href="/experiences" active={usePathname() === "/experiences"}>Experiences</TabNav.Link>
        </TabNav.Root>
      </Flex>

      <Separator orientation={"horizontal"} size={"4"} />
    </Flex>
  );
}
