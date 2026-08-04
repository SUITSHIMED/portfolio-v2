import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/ui/Button";

const EMAIL = "mohamedlakhrouf@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/SUITSHIMED", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-l-216670212/",
    icon: LinkedinIcon,
  },
];

function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.open(`mailto:${EMAIL}`, "_self");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32 lg:py-44">
      {/* Ghost word */}
      <span
        aria-hidden="true"
        className="outline-text pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none text-[26vw] leading-none opacity-[0.08] sm:text-[18vw]"
      >
        Contact
      </span>

      <Container size="narrow" className="relative">
        <Reveal>
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="mono-label">05</span>
              <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
              <span className="mono-label">{t("contact.label")}</span>
            </div>

            <h2 className="h-display mt-8 text-balance">{t("contact.title")}</h2>
            <p className="lede mx-auto mt-6 max-w-md text-pretty">
              {t("contact.description")}
            </p>
          </div>
        </Reveal>

        {/* Message card */}
        <Reveal delay={0.15} y={32}>
          <div className="card mt-16 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                To
              </span>
              <span className="font-mono text-xs text-faint">
                New conversation
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3 rounded-xl border border-line bg-ink/40 px-4 py-3.5">
              <Mail size={15} className="shrink-0 text-faint" />
              <span className="flex-1 truncate font-mono text-sm text-text">
                {EMAIL}
              </span>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email"}
                className="group flex h-8 items-center gap-1.5 rounded-lg border border-line px-2.5 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:border-frost/50 hover:text-frost-bright"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-frost" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    Copy
                  </>
                )}
              </button>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-2 w-2 shrink-0 rounded-full bg-frost"
              />
              <p className="text-sm leading-6 text-muted">
                Always open to interesting projects, freelance work, and junior
                opportunities.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={`mailto:${EMAIL}`} variant="primary">
                {t("contact.email")}
                <ArrowUpRight />
              </Button>

              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-line text-sm text-muted transition-colors duration-300 hover:border-frost/50 hover:bg-frost-dim hover:text-frost-bright sm:flex-none sm:px-5"
                >
                  <Icon size={15} />
                  <span className="sm:hidden">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Contact;
