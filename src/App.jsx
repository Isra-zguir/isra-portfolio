import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Main application layout with all required sections.
export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-sand text-ink">
      <div className="pointer-events-none absolute inset-0 bg-glow"></div>
      <div className="pointer-events-none absolute inset-0 bg-glow-secondary"></div>

      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
