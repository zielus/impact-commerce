import { Header } from "@/components/layout";
import "@/styles/global.css.ts";
import { lightThemeClass } from "@/styles/theme.css";
import type { Metadata } from "next";
import AppProviders from "./providers";

export const metadata: Metadata = {
  title: "Impact Commerce",
  description: "Modern e-commerce application built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lightThemeClass}>
        <AppProviders>
          <Header />
          <main>{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
