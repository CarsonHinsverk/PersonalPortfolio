import { ProjectProfile } from "@/lib/project"
import { Flex, Grid, Link, Separator, Text } from "@radix-ui/themes";
import { parseDate } from "../utils";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export type ProjectSectionProps = {
  project: ProjectProfile;
}

export default function ProjectSection({ project }: ProjectSectionProps) {
  let timeRange = undefined;

  const startDate = parseDate(project.startDate);
  const releaseDate = parseDate(project.releaseDate);
  const depDate = parseDate(project.deprecationDate)

  switch(project.stage) {
    case 'dev':
      if (startDate) {;
        timeRange = `In development since ${startDate}`;
      };
      break;
    case 'released':
      if (startDate && releaseDate) {
        timeRange = `Developed from ${startDate} through ${releaseDate}`
      };
      break;
    case 'deprecated':
      if (depDate) {
        timeRange = `Unsupported since ${depDate}`;
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
        {project.description}
      </Text>

      <Separator orientation={"horizontal"} size={"4"} />

      <Text weight={"bold"} size={"6"} className="text-center backdrop-blur-lg p-2 rounded-lg" style={{ color: "white" }}>
        {timeRange}
      </Text>

      <Flex gap={"2"} align={"center"} justify={"center"} wrap={"wrap"}>
        {project.techStack.map((tech, index) => (
          <div
            key={index}
            className="px-2 rounded-2xl"
            style={{
              border: "1px solid #FFCE1B",
              color: "#FFCE1B",
              background: "#4b3e0b"
            }}
          >
            {tech}
          </div>
        ))}
      </Flex>

      <Link href={`/projects/${project.id}`} className="cursor-pointer">
        <Flex gap={"4"} align={"center"} justify={"center"} className="rounded-2xl backdrop-blur-lg p-2">
          <Text>See Project Details</Text>

          <ExternalLinkIcon />
        </Flex>
      </Link>
    </Flex>
  );
};
