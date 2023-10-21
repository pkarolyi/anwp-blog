import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anwp.blog"),
  title: {
    template: "%s | anwp",
    default: "anwp",
  },
  description:
    "The blog. The blog of anwp, the blog specifically written by anwp, anwp blog. That blog?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-stone-900 bg-white antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
