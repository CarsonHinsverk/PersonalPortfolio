import { Flex } from "@radix-ui/themes";
import Links from "./LinkButtons";


export default function Header() {
    return (
        <Flex align={"center"} justify={"between"} className="w-full p-8">
            <Links />
        </Flex>
    );
}