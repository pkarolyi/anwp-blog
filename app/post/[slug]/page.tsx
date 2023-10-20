import fs from "fs/promises";
import path from "path";

import PostMeta from "@/components/post_meta";
import { compileMDX } from "@/lib/mdx";
import { frontmatterSchema } from "@/validators/mdx";

import styles from "./page.module.css";

export async function generateStaticParams() {
  const fileNames = await fs.readdir(path.join("posts"));

  return fileNames.map((fileName) => ({ slug: fileName.split(".")[0] }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const source = await fs.readFile(
    path.join("posts", `${params.slug}.mdx`),
    "utf-8"
  );

  const { content, frontmatter } = await compileMDX({ source });

  const f = frontmatterSchema.parse(frontmatter);

  return (
    <main className="flex pt-12 pb-6">
      <div className="grow max-w-6xl">
        <article className={`${styles.post} max-w-4xl mx-auto`}>
          <h1>{f.title}</h1>
          {content}
        </article>
      </div>
      <div className="w-full max-w-xs">
        <PostMeta frontmatter={f} />
      </div>
    </main>
  );
}
