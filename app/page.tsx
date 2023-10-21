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

  posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-6xl py-12">
      <PostCard post={posts[0]} variant="full" />
      {posts.length > 1 && (
        <>
          <h2 className="mt-8 text-3xl font-semibold">recent posts</h2>
          <div className="mt-4 grid grid-flow-row grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <PostCard key={post.slug} post={post} variant="sm" />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
