import { Flex, Separator, Text, TabNav } from "@radix-ui/themes";

import LinkButtons from "./link-buttons";

import { usePathname } from "next/navigation";

export default function Header() {
  const tabsList = {
    Home: "/",
    Projects: "/projects",
    Experiences: "/experiences",
  };

  return (
    <Flex
      direction={"column"} align={"center"} justify={"center"}
      className="w-full sticky top-0 backdrop-blur-lg z-50"
    >
      <Flex
        direction={"row"} align={"center"} justify={"between"}
        className="relative max-w-200 w-full h-full p-4"
      >
        <a href="/" className="cursor-pointer">
          <Text size={"6"} weight={"bold"} style={{ color: "#FFCE1B" }}>
            Carson Hinsverk
          </Text>
        </a>

        <TabNav.Root color={"purple"}>
          {Object.entries(tabsList).map(([key, value]) => (
            <TabNav.Link key={key} href={value} active={usePathname() === value}>
              {key}
            </TabNav.Link>
          ))}
        </TabNav.Root>

        <LinkButtons />
      </Flex>

      <Separator orientation={"horizontal"} size={"4"} />
    </Flex>
  );
}
