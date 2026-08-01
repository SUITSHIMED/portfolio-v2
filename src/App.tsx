import Navbar from "@/components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;