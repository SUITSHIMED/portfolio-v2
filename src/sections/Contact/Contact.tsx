import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Build Something Great
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            I'm currently looking for junior opportunities, freelance projects,
            and collaborations. If you have an idea or an opportunity, I'd love
            to hear from you.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="mailto:mohamedlakhrouf@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-zinc-700 px-6 py-4 transition hover:border-blue-400"
            >
              <Mail size={20} />
              <span>Email Me</span>
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