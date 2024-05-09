import { TurtleIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-16 w-full z-40 bg-gradient-to-br from-teal-500 to-emerald-500">
      <nav className="px-8 lg:px-0 max-w-4xl xl:max-w-6xl mx-auto h-full flex items-center">
        <Link href="/" className="flex items-center gap-2 text-stone-800">
          <TurtleIcon />
          <span className="text-2xl font-bold">anwp</span>
        </Link>
      </nav>
    </header>
  );
}
