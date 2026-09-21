import Section from "@/components/section";
import { parseDate } from "@/components/utils";
import { client } from "@/sanity/lib/client";
import { EXPERIENCE_BY_IDENTIFIER_QUERY_RESULT } from "@/sanity/types";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { Flex, Link, Separator, Text } from "@radix-ui/themes";
import { FaCheck, FaScrewdriverWrench } from "react-icons/fa6";
import { EXPERIENCE_BY_IDENTIFIER_QUERY } from '../../../../sanity/lib/queries/experience';
import { ExperienceProfile, mapExperience } from "@/lib/experience";

type ExperiencePageProps = {
  params: Promise<{
    identifier: string;
  }>;
};

interface TimelineDate {
  label: string;
  date: string | undefined;
};

const normalizeIdentifier = (identifier: string): string =>
  identifier.trim().toLowerCase();

const getStatusStyle = (status: string) => {
  let bg;
  let color;
  let icon;

  switch(status) {
    case "current":
      bg = "#387E31";
      color = "#e5fee0";
      icon = <FaScrewdriverWrench />
      break;
    case "former":
      bg = "#B54545";
      color = "#fee0e0";
      icon = <FaCheck />
      break;
  }

  return { bg, color, icon };
};

const formatTimeline = (experience: ExperienceProfile): TimelineDate[]  => {
  return (
    [
      {
        label: "current",
        date: parseDate(experience.startDate)
      },
      {
        label: "former",
        date: parseDate(experience.endDate)
      },
    ]
  );
};

export default async function ExperienceProfilePage({ params }: ExperiencePageProps) {
  const { identifier } = await params;

  const experienceData = await client.fetch<EXPERIENCE_BY_IDENTIFIER_QUERY_RESULT>(
      EXPERIENCE_BY_IDENTIFIER_QUERY,
      {
          identifier: normalizeIdentifier(identifier),
      }
  );

  const experience = mapExperience(experienceData as EXPERIENCE_BY_IDENTIFIER_QUERY_RESULT);

  return (
    <main className="relative w-full min-h-screen justify-items-center-safe">
      <Flex gap={"4"} align={"center"} direction={"column"} className="relative max-w-200 w-full h-full p-8">
          {experience ? (
            <>
              <Flex direction={"column"} gap={"4"}>
                <Flex align={"center"} justify={"between"} className="w-full">
                  <Text>// {experience.type}</Text>
                  <Text
                    size={"6"}
                    className="px-2 rounded-2xl"
                    style={{
                      border: "1px solid #FFCE1B",
                      color: "#FFCE1B",
                      background: "#4b3e0b"
                    }}
                  >
                    {experience.position}
                  </Text>
                </Flex>

                {(() => {
                  const { bg, color, icon } = getStatusStyle(experience.status);

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
                      <Text>{experience.status}</Text>
                      {icon}
                    </Flex>
                  );
                })()}

                <Text size={"9"}>{experience.title}</Text>

                <Separator orientation={"horizontal"} size={"4"} />

                <Text size={"5"} className="w-full" style={{ color: "#9873B7" }}>
                  {experience.description}
                </Text>
              </Flex>

              <Section heading={"Project Details"}>
                <Flex gap={"2"} direction={"row"}>
                  <Flex className="flex-1">
                    <Text size={"3"} className="w-full">
                      {experience.longDescription}
                    </Text>
                  </Flex>

                  <Separator orientation={"vertical"} size={"4"} />

                  <Flex direction={"column"} gap={"2"} style={{ width: "30%"  }}>
                    <Text size={"3"}>Timeline:</Text>

                    {formatTimeline(experience).map((timelineDate, index) => {
                      if (!timelineDate.date) return;

                      const { bg, color, icon } = getStatusStyle(timelineDate.label);

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

                    <Text size={"3"}>Associated<br />Projects:</Text>

                    {experience.projects.map((project, index) => (
                      <Link
                        key={index}
                        href={`/projects/${project}`}
                        className="flex align-center"
                      >
                        {project}
                      </Link>
                    ))}
                  </Flex>
                </Flex>
              </Section>
            </>
          ) : (
            <></>
          )}

          <Link href={`/experiences`} className="cursor-pointer">
            <Flex gap={"4"} align={"center"} justify={"center"} className="rounded-2xl p-2">
              <Text>See Other Experiences</Text>

              <ExternalLinkIcon />
            </Flex>
          </Link>
        </Flex>
    </main>
  );
}
