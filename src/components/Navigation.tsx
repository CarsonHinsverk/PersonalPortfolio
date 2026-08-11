import { Tabs } from "@radix-ui/themes";


export default function Navigation() {
    return (
        <Tabs.Root>
            <Tabs.List color={"purple"}>
                <Tabs.Trigger value="about">About</Tabs.Trigger>
                <Tabs.Trigger value="skills">Skills</Tabs.Trigger>
                <Tabs.Trigger value="experiences">Experiences</Tabs.Trigger>
                <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
                <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
    );
}