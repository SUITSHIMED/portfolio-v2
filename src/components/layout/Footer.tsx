import { motion } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import { EASE } from "@/lib/motion";

function Signature() {
  return (
    <motion.svg
      width="52"
      height="28"
      viewBox="0 0 52 28"
      fill="none"
      aria-hidden="true"
      className="text-faint"
    >
      <motion.path
        d="M3 21 C 10 4, 14 4, 16 12 C 18 22, 22 4, 26 13 C 29 20, 33 20, 34 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
      />
    </motion.svg>
  );
}

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const socials = [
    { label: "GitHub", href: "https://github.com/SUITSHIMED", icon: GithubIcon },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-l-216670212/",
      icon: LinkedinIcon,
    },
    { label: "Email", href: "mailto:mohamedlakhrouf@gmail.com", icon: Mail },
  ];

  return (
    <footer className="relative border-t border-line">
      <Container size="wide">
        <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row md:py-12">
          <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-4">
            <Signature />
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-text">Mohamed Lakhrouf</p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Full Stack Mobile Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-frost/50 hover:bg-frost-dim hover:text-frost-bright"
              >
                <Icon
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 sm:flex-row">
          <p className="font-mono text-[11px] tracking-widest text-faint">
            © {year} Mohamed Lakhrouf. {t("footer.rights")}
          </p>

          <p className="font-mono text-[11px] tracking-widest text-faint">
            {t("footer.builtWith")}
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-text"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-frost/50">
              <ArrowUp
                size={12}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
