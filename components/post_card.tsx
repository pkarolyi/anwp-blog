import { Frontmatter } from "@/validators/mdx";
import Image from "next/image";
import Link from "next/link";
import DateDisplay from "./date_display";

export default function PostCard({
  post,
}: {
  post: { slug: string; frontmatter: Frontmatter };
}) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="max-w-sm w-full rounded-lg overflow-hidden bg-gradient-to-tr from-stone-50 to-stone-300">
        <Image
          src={post.frontmatter.coverSrc ?? "/covers/default.jpg"}
          alt="post cover image"
          width={384}
          height={200}
          className="object-cover w-[384px] h-[200px]"
        />
        <div className="py-4 px-4">
          <h2 className="font-semibold text-lg">{post.frontmatter.title}</h2>
          <div className="mt-2 flex items-center gap-4">
            <Image
              src={post.frontmatter.author.imageSrc}
              alt={post.frontmatter.author.name}
              width={32}
              height={32}
              className="rounded-full h-[32px] border-2 border-stone-200"
            />
            <DateDisplay dateStr={post.frontmatter.date} />
          </div>
        </div>
      </div>
    </Link>
  );
}
