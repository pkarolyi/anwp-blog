import { Frontmatter } from "@/validators/mdx";
import Image from "next/image";
import DateDisplay from "./date_display";
import AuthorImage from "./author_image";

export default function PostMeta({
  frontmatter,
}: {
  frontmatter: Frontmatter;
}) {
  return (
    <a
      href={frontmatter.author.url ?? ""}
      target="_blank"
      className="!text-stone-900 hover:!text-stone-900"
    >
      <div className="flex items-center gap-4">
        <AuthorImage
          src={frontmatter.author.imageSrc}
          name={frontmatter.author.name}
          size={64}
        />
        <div>
          <p className="font-semibold">{frontmatter.author.name}</p>
          <DateDisplay dateStr={frontmatter.date} />
        </div>
      </div>
    </a>
  );
}
