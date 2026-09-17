'use client';

import { Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

export default function LinkButtons() {
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

  return (
    <Flex gap={"2"} align={"center"} justify={"between"}>
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
  );
}
