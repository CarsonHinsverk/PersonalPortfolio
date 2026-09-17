"use client";

import { usePathname } from "next/navigation";
import { ReactLenis } from "lenis/react";
import Header from "./header";
import Footer from "./footer";
import RetroGrid from "./retro-grid";
import { Flex } from "@radix-ui/themes";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname?.startsWith("/studio")) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root style={{ width: '100vw', height: '100vh' }}
      className="absolute overflow-hidden"
    >
      <Flex direction={"column"} className="bg-linear-to-t from-[#8145B5] from-50% via-[#8145B5] via-50% to-[#9873B7] to-100%">
        <Header />
        <RetroGrid />
        {children}
        <Footer />
      </Flex>
    </ReactLenis>
  )
}
