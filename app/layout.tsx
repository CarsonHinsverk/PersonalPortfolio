import React, { ViewTransition } from 'react';
import { Outfit, Atkinson_Hyperlegible } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Theme } from "@radix-ui/themes";
import './globals.css';
import '@radix-ui/themes/styles.css';
import AppShell from '@/components/app-shell';

const _outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const _atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-atkinson',
  display: 'swap',
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          width: '100vw',
        }}
        className={`${_outfit.variable} ${_atkinson.variable} font-sans antialiased`}
      >
        <Theme
          appearance={"dark"}
          radius={"full"}
        >
          <AppShell>
            <ViewTransition>{children}</ViewTransition>
          </AppShell>
          <Analytics />
        </Theme>
      </body>
    </html>
  );
}
