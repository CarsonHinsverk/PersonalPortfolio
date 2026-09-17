
import ExperienceSection from "@/components/experiences/experience-section";
import Section from "@/components/home/section";

import { mapExperience } from "@/lib/experience";
import { client } from "@/sanity/lib/client";
import { EXPERIENCES_QUERY } from "@/sanity/lib/queries";
import { EXPERIENCES_QUERY_RESULT } from "@/sanity/types";
import { Flex } from "@radix-ui/themes";

export default async function ExperiencesPage() {
  const experiencesData = await client.fetch(EXPERIENCES_QUERY);

  const experiences = Array.isArray(experiencesData)
    ? (experiencesData as EXPERIENCES_QUERY_RESULT).map(mapExperience)
    : [];

  return (
    <main className="relative w-full justify-items-center-safe">
      <Flex gap={"8"} align={"center"} direction={"column"} className="relative max-w-200 w-full h-full p-8">
        {experiences
          .filter(experience => experience != null)
          .map((experience, index) => (
            <Section key={index} heading={experience.title}>
              <ExperienceSection experience={experience} />
            </Section>
          ))
        }
      </Flex>
    </main>
  );
}
