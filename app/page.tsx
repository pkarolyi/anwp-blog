import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

async function getPosts() {
  const fileNames = await fs.readdir(path.join("posts"));

  const files = await Promise.all(
    fileNames.map(async (fileName) => ({
      fileName,
      content: await fs.readFile(path.join("posts", fileName), "utf-8"),
    }))
  );

  const posts = files.map((file) => {
    const { data: frontMatter } = matter(file.content);

    const slug = file.fileName.split(".")[0];

    return {
      frontMatter,
      slug,
    };
  });

  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <div className="mx-auto max-w-7xl">
        <h1 className="text-6xl font-bold ">ANWP Blog</h1>
      </div>
    </main>
  );
}
