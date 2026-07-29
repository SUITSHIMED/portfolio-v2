import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

        <a
          href="#hero"
          className="font-heading text-2xl font-bold tracking-wide"
        >
          ML.
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-lg border border-zinc-700 p-2 text-zinc-200 transition hover:border-white hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className="hidden gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950/95 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-base text-zinc-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;