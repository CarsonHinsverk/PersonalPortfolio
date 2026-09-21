import Section from "@/components/section";
import { parseDate } from "@/components/utils";
import { mapProject, ProjectProfile } from "@/lib/project";
import { client } from "@/sanity/lib/client";
import { PROJECT_BY_IDENTIFIER_QUERY } from "@/sanity/lib/queries";
import { PROJECT_BY_IDENTIFIER_QUERY_RESULT } from "@/sanity/types";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Flex, Link, Separator, Text } from "@radix-ui/themes";
import { AlertTriangleIcon } from "lucide-react";
import { FaCheck, FaScrewdriverWrench } from "react-icons/fa6";

type ProjectPageProps = {
  params: Promise<{
    identifier: string;
  }>;
};

interface TimelineDate {
  label: string;
  date: string | undefined;
};

interface LinkItem {
  type: string;
  link: string | undefined;
};

const normalizeIdentifier = (identifier: string): string =>
  identifier.trim().toLowerCase();

const getStageStyle = (stage: string) => {
  let bg;
  let color;
  let icon;

  switch(stage) {
    case "dev":
      bg = "#458CB5";
      color = "#e0f4fe";
      icon = <FaScrewdriverWrench />
      break;
    case "released":
      bg = "#387E31";
      color = "#e5fee0";
      icon = <FaCheck />
      break;
    case "deprecated":
      bg = "#B54545";
      color = "#fee0e0";
      icon = <AlertTriangleIcon />
      break;
  }

  return { bg, color, icon };
};

const formatTimeline = (project: ProjectProfile): TimelineDate[]  => {
  return (
    [
      {
        label: "dev",
        date: parseDate(project.startDate)
      },
      {
        label: "released",
        date: parseDate(project.releaseDate)
      },
      {
        label: "deprecated",
        date: parseDate(project.deprecationDate)
      },
    ]
  );
};

const formatLinks = (project: ProjectProfile): LinkItem[] => [
  {
    type: "Web",
    link: project.links.web,
  },
  {
    type: "Android",
    link: project.links.android,
  },
  {
    type: "iOS",
    link: project.links.ios,
  },
  {
    type: "Other",
    link: project.links.other,
  },
];

export default async function ProjectProfilePage({ params }: ProjectPageProps) {
  const { identifier } = await params;

  const projectData = await client.fetch<PROJECT_BY_IDENTIFIER_QUERY_RESULT>(
      PROJECT_BY_IDENTIFIER_QUERY,
      {
          identifier: normalizeIdentifier(identifier),
      }
  );

  const project = mapProject(projectData as PROJECT_BY_IDENTIFIER_QUERY_RESULT);

  return (
    <main className="relative w-full min-h-screen justify-items-center-safe">
      <Flex gap={"4"} align={"center"} direction={"column"} className="relative max-w-200 w-full h-full p-8">
          {project ? (
            <>
              <Flex direction={"column"} gap={"4"}>
                <Flex gap={"4"} align={"center"} justify={"between"} className="w-full">
                  <Text>// {project.type}</Text>

                  {project.github ? (
                    <Link href={project.github}>
                      <Flex gap={"2"} align={"center"}>
                        <Text size={"6"}>GitHub</Text>
                        <GitHubLogoIcon />
                      </Flex>
                    </Link>
                  ) : (
                    <Flex gap={"2"} align={"center"} style={{ color: "#B54545" }}>
                      <Text size={"6"} className="text-end">GitHub Unavailable</Text>
                      <GitHubLogoIcon />
                    </Flex>
                  )}
                </Flex>

                {(() => {
                  const { bg, color, icon } = getStageStyle(project.stage);

                  return (
                    <Flex
                      gap={"2"} align={"center"}
                      style={{
                        width: "fit-content",
                        border: `1px solid ${color}`,
                        color: color,
                        background: bg
                      }}
                      className="px-2 rounded-2xl"
                    >
                      <Text>{project.stage}</Text>
                      {icon}
                    </Flex>
                  );
                })()}

                <Text size={"9"}>{project.title}</Text>

                <Separator orientation={"horizontal"} size={"4"} />

                <Text size={"5"} className="w-full" style={{ color: "#9873B7" }}>
                  {project.description}
                </Text>

                <Flex gap={"2"} wrap={"wrap"}>
                  {project.techStack.map((tech, index) => (
                    <Text
                      key={index}
                      className="px-2 rounded-2xl"
                      style={{
                        border: "1px solid #FFCE1B",
                        color: "#FFCE1B",
                        background: "#4b3e0b"
                      }}
                    >
                      {tech}
                    </Text>
                  ))}
                </Flex>
              </Flex>

              <Section heading={"Project Details"}>
                <Flex gap={"2"} direction={"row"}>
                  <Flex className="flex-1">
                    <Text size={"3"} className="w-full">
                      {project.longDescription}
                    </Text>
                  </Flex>

                  <Separator orientation={"vertical"} size={"4"} />

                  <Flex direction={"column"} gap={"2"} style={{ width: "30%" }}>
                    <Text size={"3"}>Timeline:</Text>

                    {formatTimeline(project).map((timelineDate, index) => {
                      if (!timelineDate.date) return;

                      const { bg, color, icon } = getStageStyle(timelineDate.label);

                      return (
                        <Flex gap={"2"} direction={"column"} key={index}>
                          <Flex gap={"2"} align={"center"}>
                            {icon}
                            <Text weight={"medium"}>{timelineDate.label}</Text>
                          </Flex>

                          <Text
                            className="px-2 rounded-2xl"
                            style={{
                              border: `1px solid ${color}`,
                              color: color,
                              background: bg
                            }}
                          >
                            {parseDate(timelineDate.date)}
                          </Text>
                        </Flex>
                      );
                    })}

                    <Separator orientation={"horizontal"} size={"4"} />

                    <Text size={"3"}>Links:</Text>

                    {(() => {
                      const notNullLinks = formatLinks(project).filter(linkItem => linkItem.link);

                      return notNullLinks.length > 0
                        ? notNullLinks.map((linkItem, index) => (
                            <Link key={index} href={linkItem.link}>{linkItem.type}</Link>
                          ))
                        : <Text>None</Text>
                    })()}

                    <Separator orientation={"horizontal"} size={"4"} />

                    {
                    // TODO: Check first whether there's an associated experience
                    }

                    <Text size={"3"}>Associated<br />Experience:</Text>

                    <Link
                      href={`/experiences/${project.experience}`}
                      className="flex align-center"
                    >
                      {project.experience}
                    </Link>
                  </Flex>
                </Flex>
              </Section>
            </>
          ) : (
            <></>
          )}

          <Link href={`/projects`} className="cursor-pointer">
            <Flex gap={"4"} align={"center"} justify={"center"} className="rounded-2xl p-2">
              <Text>See Other Projects</Text>

              <ExternalLinkIcon />
            </Flex>
          </Link>
        </Flex>
    </main>
  );
}
