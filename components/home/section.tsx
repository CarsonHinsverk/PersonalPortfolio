'use client';

import { Flex, Text } from "@radix-ui/themes";
import { motion } from 'framer-motion';
import { useState } from "react";

export interface SectionProps {
    heading: string;
    children: React.ReactNode;
}

export default function Section({ heading, children }: SectionProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      initial={{ scale: 0.95, opacity: 0, border: '1px solid #313438' }}
      whileInView={{ scale: 1, opacity: 1, border: '1px solid #313438' }}
      whileHover={{ scale: 1, opacity: 1, border: '1px solid #8145B5' }}
      style={{ backgroundColor: '#18191B' }}
      className="w-full rounded-2xl overflow-hidden"
    >
      <Flex direction={"column"}>
        <Flex align={"center"} justify={"center"} style={{ backgroundColor: '#1F2123' }} className="w-full h-full p-4">
          <Text
            size={"9"} weight={"bold"}
            style={{ color: isHover ? '#8145B5' : 'white' }}
            className="transition-color duration-200"
          >
            {heading}
          </Text>
        </Flex>

        <Flex className="p-8">
        {children}
        </Flex>
      </Flex>
    </motion.div>
  )
}
