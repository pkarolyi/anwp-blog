import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        className={`${inter.className} text-stone-900 bg-stone-50 antialiased`}
      >
        <Navbar />
        <main className="mx-auto max-w-6xl py-12 px-4 xl:px-0">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
