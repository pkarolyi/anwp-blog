import { Frontmatter } from "@/validators/mdx";
import Image from "next/image";
import Link from "next/link";
import DateDisplay from "./date_display";

type PostCardProps = {
  post: { slug: string; frontmatter: Frontmatter };
};

type Variants = {
  variant: "sm" | "full";
};

function PostCardSm({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="max-w-sm w-full rounded-lg overflow-hidden bg-gradient-to-tr from-stone-50 to-stone-300 transition-shadow duration-200 hover:shadow-md">
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

function PostCardFull({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="w-full flex justify-between rounded-lg overflow-hidden bg-gradient-to-tr from-stone-50 to-stone-300 transition-shadow duration-200 hover:shadow-md">
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-xl">{post.frontmatter.title}</h2>
            <p className="mt-2">
              {post.frontmatter.summary ?? post.frontmatter.description}
            </p>
          </div>
          <div className="flex items-center gap-4">
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
        <Image
          src={post.frontmatter.coverSrc ?? "/covers/default.jpg"}
          alt="post cover image"
          width={768}
          height={400}
          className="object-cover w-[768px] h-[400px]"
        />
      </div>
    </Link>
  );
}

export default function PostCard({ post, variant }: PostCardProps & Variants) {
  switch (variant) {
    case "sm":
      return <PostCardSm post={post} />;
    case "full":
      return <PostCardFull post={post} />;
  }
}
