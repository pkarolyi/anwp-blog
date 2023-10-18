import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANWP Blog",
  description:
    "The blog. The blog of ANWP, the blog specifically written by ANWP. ANWP Blog. That blog?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
