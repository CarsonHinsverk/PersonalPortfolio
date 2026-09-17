import { Flex, Separator, Text } from "@radix-ui/themes";
import Carousel, { CarouselItemProps } from "../ui/carousel";
import { SkillAreas } from "../../types";

interface SkillSet {
  title: string,
  icons: CarouselItemProps[],
  direction: "left" | "right",
}

export default function SkillsSection() {
  const langIcons: CarouselItemProps[] = [
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />,
      title: "C",
      tooltip: SkillAreas.College
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />,
      title: "C++",
      tooltip: SkillAreas.College
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />,
      title: "C#",
      tooltip: SkillAreas.Work
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />,
      title: "Java",
      tooltip: SkillAreas.College
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />,
      title: "JavaScript",
      tooltip: SkillAreas.College
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />,
      title: "Python",
      tooltip: SkillAreas.Work
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />,
      title: "TypeScript",
      tooltip: SkillAreas.Project
    }
  ];

  const devIcons: CarouselItemProps[] = [
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" />,
      title: "Bash",
      tooltip: SkillAreas.College
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />,
      title: "Docker",
      tooltip: SkillAreas.College
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />,
      title: "Git",
      tooltip: SkillAreas.College
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" />,
      title: "Grafana",
      tooltip: SkillAreas.College
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" />,
      title: "PyTorch",
      tooltip: SkillAreas.Work
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />,
      title: "SQL",
      tooltip: SkillAreas.Work
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" />,
      title: "Visual Studio",
      tooltip: SkillAreas.Work
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />,
      title: "VS Code",
      tooltip: SkillAreas.Project
    }
  ];

  const webIcons: CarouselItemProps[] = [
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg" />,
      title: "Blazor",
      tooltip: SkillAreas.Work
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />,
      title: "CSS3",
      tooltip: SkillAreas.Project
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" />,
      title: ".NET Core",
      tooltip: SkillAreas.Work
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" />,
      title: "Framer Motion",
      tooltip: SkillAreas.Project
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />,
      title: "HTML5",
      tooltip: SkillAreas.Project
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" />,
      title: "NestJS",
      tooltip: SkillAreas.Project
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />,
      title: "NextJS",
      tooltip: SkillAreas.Project
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />,
      title: "React",
      tooltip: SkillAreas.Project
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidjs/solidjs-original.svg" />,
      title: "SolidJS",
      tooltip: SkillAreas.College
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />,
      title: "Tailwind CSS",
      tooltip: SkillAreas.Project
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" />,
      title: "Vue.js",
      tooltip: SkillAreas.Project
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wasm/wasm-original.svg" />,
      title: "WebAssembly",
      tooltip: SkillAreas.Work
    }
  ];

  const skillsData: SkillSet[] = [
    {
      title: "programming languages",
      icons: langIcons,
      direction: "left",
    },
    {
      title: "development tools",
      icons: devIcons,
      direction: "right",
    },
    {
      title: "web technologies",
      icons: webIcons,
      direction: "left",
    },
  ]

  return (
    <Flex direction={"column"} gap={"4"} className="w-full h-full">
      <Text size={"5"} className="w-full text-center" style={{ color: "#9873B7" }}>
        Experienced with an ever-expanding pool of tools and technologies.<br /><br />
        I possess an adaptive skill set that allows me to fit in anywhere.
      </Text>

      {skillsData.map((skillSet, index) => (
        <Flex key={index} gap={"4"}>
          <Flex direction={"column"} gap={"4"} className="w-full h-full">
            <Text weight={"bold"} size={"6"} className="text-center backdrop-blur-lg p-2 rounded-lg" style={{ color: "white" }}>
              // {skillSet.title}
            </Text>

            <Carousel icons={skillSet.icons} direction={skillSet.direction} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
