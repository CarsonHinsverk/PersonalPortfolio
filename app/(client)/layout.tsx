import React from "react";
import '@/app/globals.css';
import { Metadata } from "next/types";

// export const metadata: Metadata = {
//   title: 'Carson Hinsverk | CHinsDev',
//   description: 'Hello. My name is Carson, a computer science student at the University of Minnesota. Come see what I do.',
//   keywords: [
//     'computer science', 'university of minnesota', 'app developers club',
//     'software developer', 'minneapolis', 'web development', 'student'
//   ],
//   openGraph: {
//     type: "website",
//     // TODO: Add URL to openGraph
//     title: "Carson Hinsverk | CHinsDev",
//     description: "Come meet Carson, a computer science student at the University of Minnesota.",
//   },
//   // TODO: Add Icons to Metadata
//   icons: {
//     icon: [
//       {
//         url: '',
//         media: '',
//       },
//       {
//         url: '',
//         media: '',
//       },
//       {
//         url: '',
//         media: '',
//       },
//     ],
//     apple: '',
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
    </>
  )
}
