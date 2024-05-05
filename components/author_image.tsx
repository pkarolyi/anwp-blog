import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function AuthorImage({
  src,
  name,
  size,
}: {
  src: string | StaticImport;
  name: string;
  size: number;
}) {
  return (
    <Image
      src={src}
      alt={`Image of ${name}`}
      width={size}
      height={size}
      className="rounded-full border-2 border-emerald-300"
    />
  );
}
