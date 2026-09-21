'use client';

import { Flex, Link, Separator, Text } from "@radix-ui/themes";

export default function ContactSection() {
  const btnsData = [
    {
      label: "EMail",
      link: "https://mailto:carsonhinsverk@gmail.com",
    },
    {
      label: "GitHub",
      link: "https://github.com/CarsonHinsverk",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/carson-hinsverk-3345093b1/",
    },
    {
      label: "Resume",
      link: "https://docs.google.com/document/d/1ulB6rGRe-RjlFXpExGTYIBvfHqikTYnypJDUfu2z5lg/edit?pli=1&tab=t.0",
    },
  ];

  return (
    <Flex gap={"4"} direction={"column"} align={"center"} justify={"center"} className="w-full h-full">
      <Text size={"5"} className="w-full text-center" style={{ color: "#9873B7" }}>
        Open to internship opportunities, work, or other interesting projects!<br /><br />
        Feel free to get in touch so we can work together.
      </Text>

      <Separator orientation={"horizontal"} size={"4"} />

      <Flex gap={"2"} align={"center"} justify={"between"} className="w-full">
        {btnsData.map((data, index) => (
          <Link key={index} href={data.link}>
            <Flex direction={"column"} gap={"2"}>
              {data.label}
            </Flex>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
