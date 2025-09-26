import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { Poppins } from "next/font/google";

import "./globals.css";
import { SidebarFooter } from "@/components/ui/sidebar";
import { MainNav } from "@/components/site/main-nav";
import { ResizeableNavbar } from "@/components/site/resizeable-appbar";
import { SiteFooter } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Rzamba Foundation",
  description:
    "Rzamba Foundation — Empowering communities through sustainable initiatives.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased scroll-smooth`}
      >
        {/* Topbar */}
        <ResizeableNavbar />

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <SiteFooter />

        {/* Optional Sidebar Footer */}
        <SidebarFooter />

        <Analytics />
      </body>
    </html>
  );
}
