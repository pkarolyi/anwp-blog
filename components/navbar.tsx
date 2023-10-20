import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar sticky top-0 bg-white w-full border-b-2 border-stone-200 z-40 bg-gradient-to-r from-cyan-100 to-blue-100 to-80">
        <div className="max-w-screen-xl mx-auto px-8 h-full flex items-center">
          <Link
            href="/"
            className="flex-none w-auto text-xl font-bold text-stone-900 hover:text-stone-900"
          >
            anwp
          </Link>
        </div>
      </nav>
    </header>
  );
}
