import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar sticky top-0 bg-white w-full border-b-2 border-stone-200 z-40 bg-gradient-to-br from-stone-300 to-stone-50">
        <div className="max-w-screen-xl mx-auto px-8 h-full flex items-center">
          <Link
            href="/"
            className="flex-none w-auto text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-stone-800 to-stone-700 transition-shadow"
          >
            anwp
          </Link>
        </div>
      </nav>
    </header>
  );
}
