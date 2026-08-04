import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import TechMarquee from "./sections/Marquee/TechMarquee";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/layout/Footer";
import Atmosphere from "./components/common/Atmosphere";
import AtmosphereNoise from "./components/common/AtmosphereNoise";

const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <>
      <Atmosphere />
      <AtmosphereNoise />

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/:slug"
          element={
            <Suspense
              fallback={
                <div className="flex min-h-screen items-center justify-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-faint">
                    Loading…
                  </span>
                </div>
              }
            >
              <ProjectDetail />
            </Suspense>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
