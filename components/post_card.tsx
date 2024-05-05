import { Frontmatter } from "@/validators/mdx";
import Image from "next/image";
import Link from "next/link";
import DateDisplay from "./date_display";
import AuthorImage from "./author_image";

type PostCardProps = {
  post: { slug: string; frontmatter: Frontmatter };
};

type PostCardSmProps = PostCardProps & {
  summary: boolean;
};

type Variants = {
  variant: "sm" | "sm-summary" | "full";
};

function PostCardSm({ post, summary }: PostCardSmProps) {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="w-full rounded-lg overflow-hidden bg-gradient-to-tr from-stone-50 to-stone-300 transition-shadow duration-200 hover:shadow-md">
        <Image
          src={post.frontmatter.coverSrc ?? "/covers/default.jpg"}
          alt="post cover image"
          width={384}
          height={200}
          className="object-cover w-full h-[200px]"
        />
        <div className="py-4 px-4">
          <h2 className="font-semibold text-lg">{post.frontmatter.title}</h2>
          {summary && (
            <>
              <hr className="h-1 mt-2 bg-gradient-to-br from-teal-400 to-emerald-300" />
              <p className="mt-4 mb-4">
                {post.frontmatter.summary ?? post.frontmatter.description}
              </p>
            </>
          )}
          <div className="mt-4 flex items-center gap-4">
            <AuthorImage
              src={post.frontmatter.author.imageSrc}
              name={post.frontmatter.author.name}
              size={32}
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
      <div className="w-full flex justify-between rounded-lg overflow-hidden bg-gradient-to-tr from-stone-100 to-stone-300 transition-shadow duration-200 hover:shadow-md">
        <div className="flex-auto lg:flex-1 p-8 flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-xl">{post.frontmatter.title}</h2>
            <hr className="h-1 mt-4 bg-gradient-to-br from-teal-400 to-emerald-300" />
            <p className="mt-8">
              {post.frontmatter.summary ?? post.frontmatter.description}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <AuthorImage
              src={post.frontmatter.author.imageSrc}
              name={post.frontmatter.author.name}
              size={32}
            />
            <DateDisplay dateStr={post.frontmatter.date} />
          </div>
        </div>
        <Image
          src={post.frontmatter.coverSrc ?? "/covers/default.jpg"}
          alt="post cover image"
          width={768}
          height={400}
          className="flex-1 lg:flex-none object-cover max-w-md lg:max-w-lg xl:max-w-2xl"
        />
      </div>
    </Link>
  );
}

export default function PostCard({ post, variant }: PostCardProps & Variants) {
  switch (variant) {
    case "sm":
      return <PostCardSm post={post} summary={false} />;
    case "sm-summary":
      return <PostCardSm post={post} summary={true} />;
    case "full":
      return <PostCardFull post={post} />;
  }
}
