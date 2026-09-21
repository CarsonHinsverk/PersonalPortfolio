
import ProjectSection from "@/components/projects/project-section";
import Section from "@/components/section";
import { mapProject } from "@/lib/project";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { PROJECTS_QUERY_RESULT } from "@/sanity/types";
import { Flex } from "@radix-ui/themes";

export default async function ProjectsPage() {
  const projectsData = await client.fetch(PROJECTS_QUERY);

  const projects = Array.isArray(projectsData)
    ? (projectsData as PROJECTS_QUERY_RESULT).map(mapProject)
    : [];

  return (
    <main className="relative w-full min-h-screen justify-items-center-safe">
      <Flex gap={"8"} align={"center"} direction={"column"} className="relative max-w-200 w-full h-full p-8">
        {projects
          .filter(project => project != null)
          .map((project, index) => (
            <Section key={index} heading={project.title}>
              <ProjectSection project={project} />
            </Section>
          ))
        }
      </Flex>
    </main>
  );
}
