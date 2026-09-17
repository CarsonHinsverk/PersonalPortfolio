import { Flex, Grid, Link, Separator, Text } from "@radix-ui/themes";
import { parseDate } from "../utils";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ExperienceProfile } from "@/lib/experience";

export type ExperienceSectionProps = {
  experience: ExperienceProfile;
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  let timeRange = undefined;

  const startDate = parseDate(experience.startDate);
  const releaseDate = parseDate(experience.endDate);

  switch(experience.status) {
    case 'current':
      if (startDate) {;
        timeRange = `Involved since ${startDate}.`;
      };
      break;
    case 'former':
      if (startDate && releaseDate) {
        timeRange = `Involved from ${startDate} till ${releaseDate}.`;
      };
      break;
  };

  timeRange ??= 'Period not specified.';

  return (
    <Flex
      direction={"column"} gap={"4"} align={"center"} justify={"center"}
      className="w-full h-full"
    >
      <Text size={"5"} className="w-full text-center" style={{ color: "#9873B7" }}>
        {experience.description}
      </Text>

      <Separator orientation={"horizontal"} size={"4"} />

      <Text weight={"bold"} size={"6"} className="text-center backdrop-blur-lg p-2 rounded-lg" style={{ color: "white" }}>
        {timeRange}
      </Text>

      <Link href={`/experiences/${experience.id}`} className="cursor-pointer">
        <Flex gap={"4"} align={"center"} justify={"center"} className="rounded-2xl backdrop-blur-lg p-2">
          <Text>See Experience Details</Text>

          <ExternalLinkIcon />
        </Flex>
      </Link>
    </Flex>
  );
};
