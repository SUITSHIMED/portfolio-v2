import Container from "@/components/ui/Container";

function About() {
  return (
    <section
      id="about"
      className="bg-zinc-900 py-20 sm:py-24 lg:py-32"
    >
      <Container>

        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl">About Me</h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Get to know me a little better.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div className="space-y-6 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">

            <p>
              I'm Mohamed Lakhrouf, a Full Stack Mobile Developer passionate
              about building modern mobile and web applications using
              React Native and the JavaScript ecosystem.
            </p>

            <p>
              I enjoy learning new technologies, solving real-world problems,
              and transforming ideas into useful products. Every project I
              build is an opportunity to improve my skills and create better
              user experiences.
            </p>

            <p>
              I'm currently looking for opportunities where I can grow as a
              developer, collaborate with talented teams, and contribute to
              meaningful projects.
            </p>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">

            <h3 className="mb-8 text-xl font-semibold sm:text-2xl">
              Quick Facts
            </h3>

            <div className="space-y-5">

              <div className="flex flex-col gap-2 border-b border-zinc-800 pb-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-zinc-500">Location</span>
                <span>Morocco</span>
              </div>

              <div className="flex flex-col gap-2 border-b border-zinc-800 pb-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-zinc-500">Role</span>
                <span>Full Stack Mobile Developer</span>
              </div>

              <div className="flex flex-col gap-2 border-b border-zinc-800 pb-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-zinc-500">Main Stack</span>
                <span>React Native</span>
              </div>

              <div className="flex flex-col gap-2 border-b border-zinc-800 pb-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-zinc-500">Languages</span>
                <span>Arabic • English • French</span>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-zinc-500">Status</span>
                <span className="text-green-400">
                  Available
                </span>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default About;