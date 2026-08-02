import { useState, useEffect } from "react";
import { Languages, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { navigation } from "@/data/navigation";
import { supportedLanguages, type SupportedLanguage } from "@/i18n";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languageLabels: Record<SupportedLanguage, string> = {
    en: "English",
    fr: "Français",
    ar: "العربية",
    de: "Deutsch",
  };

  const currentLanguage = (i18n.language || "en") as SupportedLanguage;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-700/70 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Languages size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-11 z-50 min-w-[140px] rounded-xl border border-zinc-800 bg-zinc-950/95 p-2 shadow-xl">
          {supportedLanguages.map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => {
                void i18n.changeLanguage(language);
                setIsOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                currentLanguage === language
                  ? "bg-blue-500/15 text-blue-300"
                  : "text-zinc-300 hover:bg-zinc-800/70 hover:text-white"
              }`}
            >
              <span>{languageLabels[language]}</span>
              {currentLanguage === language && <span className="text-xs">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return activeId;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const sectionIds = navigation.map((item) => item.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-xl font-bold tracking-wide gradient-text-subtle hover:opacity-80 transition-opacity"
          aria-label="Mohamed Lakhrouf — home"
        >
          ML.
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          <ul className="flex gap-1" role="list">
            {navigation.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-lg bg-zinc-800/70"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 36 }}
                      />
                    )}
                    {t(`nav.${item.href.replace("#", "")}`)}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="ml-2 flex items-center">
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-lg border border-zinc-700/70 p-2 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-zinc-800/70 bg-zinc-950/95 backdrop-blur-xl px-4 pb-5 pt-3 md:hidden"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navigation.map((item, index) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-base transition ${
                        isActive
                          ? "text-white bg-zinc-800/60"
                          : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
                      }`}
                    >
                      {t(`nav.${item.href.replace("#", "")}`)}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;