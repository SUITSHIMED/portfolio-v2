function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center bg-zinc-950 px-6"
    >
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-blue-400">
          Hello, I'm
        </p>

        <h1 className="mb-6 font-heading text-6xl font-bold">
          Mohamed Lakhrouf
        </h1>

        <h2 className="mb-6 text-3xl text-zinc-300">
          Full Stack Mobile Developer
        </h2>

        <p className="mb-10 max-w-xl text-lg leading-8 text-zinc-400">
          I build modern mobile applications with React Native,
          TypeScript while continuously exploring new
          technologies.
        </p>

        <div className="flex gap-4">

          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 px-6 py-3 font-medium transition hover:border-white"
          >
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;