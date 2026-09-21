import { Card, Flex, Link, Separator, Text } from '@radix-ui/themes';
import { ExperienceProfile } from '../../lib/experience';
import { parseDate } from '../utils';
import { ExternalLinkIcon } from '@radix-ui/react-icons';

export function ExperienceCard({ experience }: { experience: ExperienceProfile }) {
  let timeRange = undefined;

  const startDate = parseDate(experience.startDate);
  const endDate = parseDate(experience.endDate);

  switch(experience.status) {
    case 'current':
      if (startDate) {;
        timeRange = `Involved since ${startDate}`;
      };
      break;
    case 'former':
      if (endDate) {
        timeRange = `Ended on ${endDate}`
      };
      break;
  };

  return (
    <Card size={"1"} className="w-full h-full">
      <Flex gap={"4"} direction={"column"} className="w-full h-full p-4">
        <Flex gap={"2"} align={"center"} justify={"between"}>
          <Text className="text-start">// {experience.type}</Text>

          <Text className="text-end">{timeRange}</Text>
        </Flex>

        <Text size={"6"} weight={"bold"}>
          {experience.title}
        </Text>

        <Separator size={"4"}/>

        <Text style={{ color: "#9873B7", }}>
          {experience.description}
        </Text>

        <Link href={`/experiences/${experience.id}`} className="cursor-pointer">
          <Flex gap={"4"} align={"center"} justify={"center"} className="rounded-2xl backdrop-blur-lg p-2">
            <Text>See Experience Details</Text>

            <ExternalLinkIcon />
          </Flex>
        </Link>
      </Flex>
    </Card>
  );
};
