import Container from "@/components/ui/Container";

const experiences = [
  {
    year: "2026",
    title: "Full Stack Mobile Developer",
    company: "Personal Projects",
    description:
      "Designed and developed full-stack mobile applications from concept to deployment using React Native, Expo, Node.js, Express, and PostgreSQL. Focused on authentication, API integration, state management, and responsive user experiences.",
    skills: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Docker",
    ],
  },

  {
    year: "Sep 2025 - Jan 2026",
    title: "Full Stack Mobile Development Training",
    company: "Simplon Maghreb",
    description:
      "Completed an intensive full-stack mobile development program covering modern JavaScript development, React Native, backend development with Node.js and Express, relational databases with PostgreSQL, Git, Agile collaboration, and mobile application architecture through practical projects.",
    skills: [
      "React Native",
      "JavaScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Git",
    ],
  },

  {
    year: "2025",
    title: "Frontend Self-Learning",
    company: "Independent Learning",
    description:
      "Built a solid foundation in frontend development by learning HTML, CSS, JavaScript, React, responsive design, Git, and modern development workflows through personal practice before joining the mobile development program.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "Responsive Design",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-black py-20 sm:py-24 lg:py-32"
    >
      <Container>

        <div className="mb-12 sm:mb-16 lg:mb-20">

          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Experience & Education
          </h2>

          <p className="mt-5 max-w-2xl text-sm text-zinc-400 sm:text-base">
            My transition into full-stack mobile development through
            continuous learning and real-world projects.
          </p>

        </div>

        <div className="space-y-8">

          {experiences.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8"
            >

              <span className="text-blue-400 font-semibold">
                {item.year}
              </span>

              <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                {item.title}
              </h3>

              <p className="text-zinc-500 mt-1">
                {item.company}
              </p>

              <p className="mt-6 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {item.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-zinc-700 px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Experience;