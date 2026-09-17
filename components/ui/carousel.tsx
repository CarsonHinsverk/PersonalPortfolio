'use client';

import { motion } from 'framer-motion';
import { Flex, Text } from '@radix-ui/themes';
import { SkillAreas } from '../../types';
import { useState } from 'react';

export interface CarouselItemProps {
  icon: React.ReactNode;
  title: string;
  tooltip: string;
}

function CarouselItem({ icon, title, tooltip }: CarouselItemProps) {
  let bg;
  let color;

  switch(tooltip) {
    case SkillAreas.College:
      bg = "#387E31";
      color = "#e5fee0";
      break;
    case SkillAreas.Project:
      bg = "#458CB5";
      color = "#e0f4fe";
      break;
    case SkillAreas.Work:
      bg = "#B54545";
      color = "#fee0e0";
      break;
    default:
      bg = "#4EB545";
      color = "#e5fee0";
      break;
  }

  return (
    <Flex
        gap={"2"} align={"center"} justify={"between"} direction={"row"}
        className={`
            rounded-xl p-2 cursor-pointer inline-block bg-size-[100%_200%]
            bg-position-[0_0] transition-[background-position]
            duration-200 ease-in-out hover:bg-position-[0_100%]
        `}
        style={{
            border: `2px solid ${bg}`,
            backgroundImage: `linear-gradient(to top, ${bg} 50%, ${bg} 50%, #111113 50%)`,
        }}
    >
      <Flex align={"center"} justify={"center"} className="w-18 h-18 rounded-[50%] bg-white p-3">
          {icon}
      </Flex>

      <Flex gap={"2"} direction={"column"} align={"start"} justify={"between"} className="h-max">
        <Text size={"5"} className="w-full">
          {title}
        </Text>

        <Text weight={"medium"}
          className="p-1"
          style={{
            border: `1px solid ${color}`,
            borderRadius: 10,
            color: color,
            background: bg
          }}
        >
          {tooltip}
        </Text>
      </Flex>
    </Flex>
  );
}

export interface CarouselProps {
  icons: CarouselItemProps[],
  direction: 'left' | 'right'
}

export default function Carousel({ icons, direction }: CarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const slides = [...icons, ...icons];

  const startScroll = direction === 'left' ? '-50%' : '0%';
  const endScroll = direction === 'left' ? '0%' : '-50%';

  return (
    <div
        className="w-full relative overflow-hidden py-2"
        style={{
            maskImage: "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
            WebkitMaskImage: "linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
          className="w-max h-full"
          animate={{
            x: [startScroll, endScroll]
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: 'linear'
          }}
          style={{
            animationPlayState: isPaused ? 'unset' : 'running',
          }}
      >
        <Flex direction={"row"} gap={"4"}>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="shrink-0"
              style={{ width: `${100 / slides.length}` }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <CarouselItem icon={slide.icon} title={slide.title} tooltip={slide.tooltip} />
            </motion.div>
          ))}
        </Flex>
      </motion.div>
    </div>
  );
}
