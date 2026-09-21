'use client';

import { ExperienceProfile } from "@/lib/experience";
import { Flex } from "@radix-ui/themes";
import { ExperienceCard } from "../experiences/experience-card";

type ExperiencesProps = {
  experiences: (ExperienceProfile | null)[]
}

// TODO: Add some sort of limit to the number of experiences that can be displayed on the homepage

export default function ExperiencesSection({ experiences }: ExperiencesProps) {
  const sortedExperiences = experiences.sort((a, b) => {
    if (a && b) {
      if (a.startDate > b.startDate) {
        return 1;
      };
    };

    return 0;
  });

  return (
    <Flex direction={"column"} gap={"4"} align={"center"} justify={"center"} className="w-full h-full">
      {sortedExperiences
        .filter(experience => experience != null)
        .map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))
      }
    </Flex>
  );
}
