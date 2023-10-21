import PostCard from "@/components/post_card";
import { frontmatterSchema } from "@/validators/mdx";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

async function getPosts() {
  const fileNames = await fs.readdir(path.join("posts"));

  const files = await Promise.all(
    fileNames.map(async (fileName) => ({
      fileName,
      content: await fs.readFile(path.join("posts", fileName), "utf-8"),
    }))
  );

  const posts = files.map((file) => {
    const { data } = matter(file.content);

    const slug = file.fileName.split(".")[0];
    const frontmatter = frontmatterSchema.parse(data);

    return {
      frontmatter,
      slug,
    };
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-6xl py-12">
      <h1 className="text-4xl font-bold ">anwp blog</h1>

      <div className="mt-16 grid grid-flow-row grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
