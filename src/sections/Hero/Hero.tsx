import Container from "@/components/ui/Container";
import { techStack } from "@/data/techStack";


function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 pt-20 sm:pt-0"
    >
      <Container>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Available for opportunities
          </span>

          <h1 className="mt-8 font-heading text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Mohamed
            <br />
            Lakhrouf
          </h1>

          <h2 className="mt-6 text-xl text-zinc-300 sm:text-2xl md:text-3xl">
            Full Stack Mobile Developer
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I build fast, scalable mobile applications using React Native,
            TypeScript, and modern web technologies.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-700 bg-zinc-900/80 px-3 py-1 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-7 py-4 font-medium transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-7 py-4 transition hover:border-white"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;