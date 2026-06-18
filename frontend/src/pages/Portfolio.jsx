import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stack from "../components/Stack";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Background from "../components/ui/Background";

const SectionDivider = ({ label, id }) => (
  <div className="flex flex-row items-center px-4 sm:px-6 lg:ml-50 mt-12 sm:mt-16 lg:mt-20 p-3 sm:p-5 space-x-3">
    <p className="cursor-pointer text-[#27CBCB] text-sm sm:text-base shrink-0">/{label}</p>
    <div className="bg-gray-700 h-0.5 w-full lg:mr-30 rounded-lg" />
  </div>
);

const Portfolio = () => {
  return (
    <div className="relative w-full min-h-screen text-gray-300 overflow-x-hidden">
      <Background />
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-10">
        <SectionDivider label="about" />
        <About />
      </section>
      <section id="experience" className="scroll-mt-10">
        <SectionDivider label="experience" />
        <Experience />
      </section>
      <section id="stack" className="scroll-mt-10">
        <SectionDivider label="stack" />
        <Stack />
      </section>
      <section id="projects" className="scroll-mt-10">
        <SectionDivider label="projects" />
        <Projects />
      </section>
      <section id="education" className="scroll-mt-10">
        <SectionDivider label="education" />
        <Education />
      </section>
      <section id="contact" className="scroll-mt-10">
        <SectionDivider label="contact" />
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
