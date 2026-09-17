import { Card, Flex, Inset, Link, Text } from "@radix-ui/themes";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ProjectProfile } from "@/lib/project";

export interface ProjectCardProps {
  project: ProjectProfile
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card size={"1"} className="h-full">
      <Flex direction={"column"} gap={"3"}>
        <Inset
            clip="padding-box"
            side="top"
            className="h-40"
            style={{
                backgroundImage: `
                    radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%),
                    url(${project.img})
                `
            }}
        >
          <Flex direction={"column"} align={"start"} justify={"between"} className="p-4 h-full">
            <Flex direction={"row"} align={"center"} justify={"between"} className="w-full">
              <Text className="backdrop-blur-lg p-1 rounded-lg">
                // {project.type}
              </Text>

              <Link href={`/projects/${project.id}`} size={"4"} className="cursor-pointer">
                <div className="rounded-[50%] backdrop-blur-lg p-2">
                  <ExternalLinkIcon />
                </div>
              </Link>
            </Flex>

            <Text
              weight={"bold"}
              className="text-3xl"
            >
              {project.title}
            </Text>
          </Flex>
        </Inset>

        <Text style={{ color: "#9873B7", }}>
          {project.blurb}
        </Text>

        <Flex gap={"2"} wrap={"wrap"}>
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
      </Flex>
    </Card>
  );
}
