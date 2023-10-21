import fs from "fs/promises";
import matter from "gray-matter";
import { Metadata, ResolvingMetadata } from "next";
import path from "path";

import PostMeta from "@/components/post_meta";
import { compileMDX } from "@/lib/mdx";
import { frontmatterSchema } from "@/validators/mdx";

import styles from "./page.module.css";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const fileNames = await fs.readdir(path.join("posts"));

  return fileNames.map((fileName) => ({ slug: fileName.split(".")[0] }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const source = await fs.readFile(
    path.join("posts", `${params.slug}.mdx`),
    "utf-8"
  );

  const { data: frontmatter } = matter(source);

  const f = frontmatterSchema.parse(frontmatter);

  return {
    title: f.title,
    description: f.description,
    authors: [f.author],
    keywords: f.tags,
    openGraph: {
      title: f.title,
      description: f.description,
      images: f.coverSrc ? [f.coverSrc] : ["/covers/default.jpg"],
      url: `https://anwp.blog/post/${params.slug}`,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const source = await fs.readFile(
    path.join("posts", `${params.slug}.mdx`),
    "utf-8"
  );

  const { content, frontmatter } = await compileMDX({ source });

  const f = frontmatterSchema.parse(frontmatter);

  return (
    <main className="xl:flex pt-12 pb-6 px-4 xl:px-0">
      <div className="grow max-w-6xl">
        <article className={`${styles.post} max-w-4xl mx-auto`}>
          <h1>{f.title}</h1>
          <div className="block xl:hidden mt-6">
            <PostMeta frontmatter={f} />
          </div>
          {content}
        </article>
      </div>
      <div className="w-full max-w-xs hidden xl:block">
        <PostMeta frontmatter={f} />
      </div>
    </main>
  );
}
