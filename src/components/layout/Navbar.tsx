import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, Check } from "lucide-react";
import { navigation } from "@/data/navigation";
import { supportedLanguages, type SupportedLanguage } from "@/i18n";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { EASE } from "@/lib/motion";

const languageLabels: Record<SupportedLanguage, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
  de: "Deutsch",
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = (i18n.language || "en").slice(0, 2) as SupportedLanguage;

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:text-text"
      >
        {current}
        <span
          className={`inline-block transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
            <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: EASE }}
            className="absolute right-0 top-full z-50 pt-3"
          >
            <div className="min-w-[150px] overflow-hidden rounded-xl border border-line bg-over p-1 shadow-2xl shadow-black/60">
              {supportedLanguages.map((language) => {
                const active = current === language;
                return (
                  <button
                    key={language}
                    type="button"
                    onClick={() => {
                      void i18n.changeLanguage(language);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      active
                        ? "bg-frost-dim text-frost-bright"
                        : "text-muted hover:bg-surface hover:text-text"
                    }`}
                  >
                    <span>{languageLabels[language]}</span>
                    {active && <Check size={13} />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { direction, y } = useScrollDirection(12);
  const sectionIds = navigation.map((item) => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  const scrolled = y > 24;
  const hidden = direction === "down" && scrolled && !menuOpen;

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top scroll progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-frost/60 to-violet/50"
        style={{
          scaleX: useScrollProgress(),
        }}
        aria-hidden="true"
      />

      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={false}
        animate={{
          y: hidden ? "-150%" : "0%",
          opacity: hidden ? 0 : 1,
        }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <div className="mx-auto max-w-[76rem] px-3 sm:px-5 pt-3 sm:pt-4">
          <div
            className={`flex h-14 items-center justify-between rounded-full border px-3 pl-4 transition-colors duration-500 ${
              scrolled
                ? "border-line bg-ink/70 backdrop-blur-xl shadow-[0_12px_40px_-16px_rgba(0,0,0,0.8)]"
                : "border-line/60 bg-surface/40 backdrop-blur-md"
            }`}
          >
            {/* Monogram */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMenuOpen(false);
              }}
              className="group flex items-center gap-2.5"
              aria-label="Back to top"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-raised font-mono text-[11px] font-medium tracking-tight text-text transition-all duration-300 group-hover:border-frost/50 group-hover:text-frost-bright">
                ML
              </span>
              <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:block">
                Lakhrouf
              </span>
            </a>

            {/* Desktop links */}
            <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
              {navigation.map((item) => {
                const id = item.href.replace("#", "");
                const active = activeSection === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNav(item.href)}
                    className="relative px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 hover:text-text"
                    style={{ color: active ? "var(--color-text)" : "var(--color-muted)" }}
                    aria-current={active ? "true" : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-surface"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    {t(`nav.${id}`)}
                    <span
                      className="absolute left-1/2 -bottom-0.5 h-px w-0 -translate-x-1/2 bg-frost/70 transition-all duration-300"
                      style={{ width: active ? "55%" : "0%" }}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              <a
                href="#contact"
                onClick={() => handleNav("#contact")}
                className="btn btn-sm btn-primary hidden sm:inline-flex"
              >
                {t("nav.contact")}
                <ArrowUpRight />
              </a>

              {/* Mobile toggle */}
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-line md:hidden"
              >
                <motion.span
                  animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 3 : 0 }}
                  className="h-px w-4 bg-text"
                />
                <motion.span
                  animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -2 : 0 }}
                  className="h-px w-4 bg-text"
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-ink/95 backdrop-blur-2xl md:hidden"
          >
            <nav
              className="flex flex-1 flex-col justify-center px-8"
              aria-label="Mobile navigation"
            >
              <div className="space-y-2">
                {navigation.map((item, i) => {
                  const id = item.href.replace("#", "");
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => handleNav(item.href)}
                      initial={{ opacity: 0, y: 32 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ delay: 0.06 * i, duration: 0.5, ease: EASE }}
                      className="group flex items-baseline gap-4 py-2.5"
                    >
                      <span className="font-mono text-xs text-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-4xl font-medium tracking-tight text-text transition-colors duration-300 group-hover:text-frost-bright">
                        {t(`nav.${id}`)}
                      </span>
                      <ArrowUpRight
                        className="opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                        size={20}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: EASE }}
              className="border-t border-line px-8 py-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <LanguageSwitcher />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-faint">
                    {new Date().getFullYear()}
                  </span>
                </div>
                <a
                  href="mailto:mohamedlakhrouf@gmail.com"
                  className="font-mono text-xs text-muted hover:text-text"
                >
                  mohamedlakhrouf@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/**
 * Scroll progress derived from window scroll, updated via rAF on the
 * scroll event. Returns a value suitable for the progress bar scaleX.
 */
function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return progress;
}

export default Navbar;
