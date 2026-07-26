import { navigation } from "@/data/navigation";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md z-50">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

        <a
          href="#hero"
          className="font-heading text-2xl font-bold tracking-wide"
        >
          ML.
        </a>

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
    </header>
  );
}

export default Navbar;