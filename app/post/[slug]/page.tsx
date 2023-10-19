import { compileMDX } from "@/lib/mdx";
import fs from "fs/promises";
import path from "path";

export async function generateStaticParams() {
  const fileNames = await fs.readdir(path.join("posts"));

  return fileNames.map((fileName) => ({ slug: fileName.split(".")[0] }));
}

export default async function RemoteMdxPage({
  params,
}: {
  params: { slug: string };
}) {
  const source = await fs.readFile(
    path.join("posts", `${params.slug}.mdx`),
    "utf-8"
  );

  const { content } = await compileMDX({ source });

  return content;
}
