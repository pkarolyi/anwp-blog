import PostCard from "@/components/post_card";
import { frontmatterSchema } from "@/validators/mdx";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

async function getPosts() {
  const fileNames = await fs.readdir(path.join("posts"));

  const postFileNames = fileNames.filter((fileName) =>
    fileName.endsWith(".mdx")
  );

  const files = await Promise.all(
    postFileNames.map(async (fileName) => ({
      fileName,
      content: await fs.readFile(path.join("posts", fileName), "utf-8"),
    }))
  );

  const posts = files
    .map((file) => ({
      slug: file.fileName.split(".")[0],
      frontmatter: frontmatterSchema.parse(matter(file.content).data),
    }))
    .filter(({ frontmatter }) => new Date(frontmatter.date) < new Date())
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <div className="block lg:hidden">
        <PostCard post={posts[0]} variant="sm-summary" />
      </div>
      <div className="hidden lg:block">
        <PostCard post={posts[0]} variant="full" />
      </div>
      {posts.length > 1 && (
        <>
          <h2 className="mt-16 text-3xl font-semibold">recent posts</h2>
          <div className="mt-4 grid grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {posts.slice(1).map((post) => (
              <PostCard key={post.slug} post={post} variant="sm" />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
