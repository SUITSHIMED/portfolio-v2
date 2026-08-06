import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BrowserMockup from "@/components/ui/BrowserMockup";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { EASE } from "@/lib/motion";

const socials = [
  { label: "GitHub", href: "https://github.com/SUITSHIMED", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-l-216670212/",
    icon: LinkedinIcon,
  },
  { label: "Email", href: "mailto:mohamedlakhrouf@gmail.com", icon: Mail },
];

function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const deviceY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const deviceRotate = useTransform(scrollYProgress, [0, 1], [0, -3]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28"
    >
      <Container size="wide" className="relative z-10 pb-10">
        {/* ── Row 1: headline + device composition ── */}
        <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-4">
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="availability-pill mb-8"
            >
              <span className="availability-dot" />
              {t("hero.availability")}
            </motion.div>

            <h1 className="display">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                >
                  Mohamed
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="outline-text block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 0.28 }}
                >
                  Lakhrouf
                </motion.span>
              </span>
            </h1>
          </div>

          {/* Device composition */}
          <motion.div
            className="col-span-12 flex justify-center lg:col-span-5 lg:justify-end"
            style={{ opacity: fade }}
          >
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.6 }}
              style={{ y: deviceY, rotate: deviceRotate }}
              className="relative pr-2 pt-6 sm:pt-8"
            >
              <div className="w-[19rem] -rotate-2 sm:w-[24rem] lg:ml-6">
                <BrowserMockup
                  src="/images/projects/portfolio/portfolio.png"
                  alt="Portfolio website preview"
                  eager
                  aspect="aspect-[946/602]"
                  url="mohamedalkhrouf.dev"
                />
              </div>

              <div className="absolute -right-2 -top-1 z-10 rotate-3 origin-top-right scale-[0.4] sm:-right-4 sm:-top-4 sm:scale-[0.44]">
                <PhoneMockup
                  src="/images/projects/speakiq/speakiq1.jpeg"
                  alt="SpeakIQ app preview"
                  eager
                />
              </div>

              <div className="card absolute -bottom-6 left-4 z-20 w-48 p-3.5 sm:left-6">
                <div className="flex items-center justify-between">
                  <span className="mono-label">{t("hero.current")}</span>
                  <span className="availability-dot" />
                </div>
                <p className="mt-2 text-sm font-medium text-text">
                  {t("hero.building")}
                </p>
                <p className="mt-0.5 font-mono text-[11px] text-faint">
                  React Native · Node.js
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Row 2: lede + CTA ── */}
        <motion.div
          className="mt-14 grid grid-cols-12 items-end gap-x-4 sm:mt-20"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.5 }}
        >
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-frost">
              {t("hero.title")}
            </p>
            <p className="lede mt-4 max-w-lg text-pretty">{t("hero.intro")}</p>
          </div>

          <div className="col-span-12 mt-8 flex flex-wrap items-center gap-3 lg:col-span-5 lg:mt-0 lg:justify-end">
            <Button href="#projects" variant="primary">
              {t("hero.cta")}
              <ArrowUpRight />
            </Button>
            <Button href="#contact" variant="ghost">
              {t("hero.getInTouch")}
            </Button>
          </div>
        </motion.div>

        {/* ── Bottom meta ── */}
        <motion.div
          className="mt-16 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <p className="mono-label hidden sm:block">
            {t("hero.based")}
          </p>

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
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>

          <a
            href="#about"
            className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-text"
          >
            {t("hero.scroll")}
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
