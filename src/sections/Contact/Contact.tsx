import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "@/components/ui/Container";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="bg-zinc-950 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            {t("contact.label")}
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            {t("contact.title")}
          </h2>

          <p className="mt-6 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            {t("contact.description")}
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-5">

            <a
              href="mailto:mohamedlakhrouf@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-zinc-700 px-6 py-4 transition hover:border-blue-400"
            >
              <Mail size={20} />
              <span>{t("contact.email")}</span>
            </a>

            <a
              href="https://github.com/SUITSHIMED"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-zinc-700 px-6 py-4 transition hover:border-blue-400"
            >
              
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mohamed-l-216670212/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-zinc-700 px-6 py-4 transition hover:border-blue-400"
            >
              
              <span>LinkedIn</span>
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Contact;