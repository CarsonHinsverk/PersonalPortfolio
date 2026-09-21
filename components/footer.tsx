import { Flex, Text } from "@radix-ui/themes";

import { useState } from "react";

export default function Footer() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const btnsData = [
    {
      id: 0,
      label: "GitHub",
      link: "https://github.com/CarsonHinsverk"
    },
    {
      id: 1,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/carson-hinsverk-3345093b1/"
    },
    {
      id: 2,
      label: "Resume",
      link: "https://docs.google.com/document/d/1ulB6rGRe-RjlFXpExGTYIBvfHqikTYnypJDUfu2z5lg/edit?usp=sharing"
    },
  ];

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
        <Flex direction={"column"} gap={"4"} align={"center"} justify={"between"} className="w-full">
          <Text style={{ color: "black" }}>
            Portfolio website built with React, TypeScript, MDX, and Framer Motion.
          </Text>

          <Flex direction={"row"} gap={"2"} align={"center"} justify={"between"}>
            {btnsData.map((btn) => (
              <a key={btn.id} href={btn.link}>
                <Text
                  onMouseEnter={() => setHoveredId(btn.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    color: "white",
                    border: `2px solid white`,
                    backgroundColor: hoveredId === btn.id ? "#9873B7" : '#8145B5'
                  }}
                  className="px-2 rounded-2xl"
                >
                  {btn.label}
                </Text>
              </a>
            ))}
          </Flex>

          <Text style={{ color: "black" }}>
            {`© ${currentYear} Carson Hinsverk. All Rights Reserved.`}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
