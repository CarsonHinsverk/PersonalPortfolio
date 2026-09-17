'use client';

import { Flex, Grid, Link, Separator, Text } from "@radix-ui/themes";
import { ProjectCard } from '../projects/project-card';
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ProjectProfile } from "@/lib/project";

export type ProjectsProps = {
  projects: (ProjectProfile | null)[],
}

export default function ProjectsSection({ projects }: ProjectsProps) {
  return (
    <Flex direction={"column"} gap={"8"}>
      <Text size={"5"} className="w-full text-center" style={{ color: "#9873B7" }}>
        Constantly exploring new fields of Computer Science and Software Engineering through unique projects.
        <br /><br />
        Check out my <Link href="https://github.com/CarsonHinsverk">GitHub</Link> or click the links below for a more detailed look at any specific project.
      </Text>

      <Separator orientation={"horizontal"} size={"4"} />

      <Grid columns={"2"} gap={"4"} rows={"2"} className="w-full h-full">
        {projects
          .filter(project => project != null)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </Grid>

      <Link href="/projects" className="cursor-pointer">
        <Flex gap={"4"} align={"center"} justify={"center"} className="rounded-2xl backdrop-blur-lg p-2">
          <Text>See All Projects</Text>

          <ExternalLinkIcon />
        </Flex>
      </Link>
    </Flex>
  );
}
