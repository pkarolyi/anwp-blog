import { Frontmatter } from "@/validators/mdx";
import Image from "next/image";
import DateDisplay from "./date_display";

export default function PostMeta({
  frontmatter,
}: {
  frontmatter: Frontmatter;
}) {
  return (
    <>
      <a href={frontmatter.author.url ?? ""} target="_blank">
        <div className="flex items-center gap-4">
          <Image
            src={frontmatter.author.imageSrc}
            alt={`Image of ${frontmatter.author.name}`}
            width={64}
            height={64}
            className="rounded-full h-[64px] border-2 border-stone-200"
          />
          <div>
            <p className="font-semibold">{frontmatter.author.name}</p>
            <DateDisplay dateStr={frontmatter.date} />
          </div>
        </div>
      </a>
    </>
  );
}
