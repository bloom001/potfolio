import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Workshops from "@/components/Workshops";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkillModalProvider from "@/components/SkillModalProvider";

export default function Home() {
  return (
    <SkillModalProvider>
      {/* Connected dynamic node grid background */}
      <ParticleBackground />

      {/* Floating navigation headers */}
      <Navbar />

      {/* Content wrapper */}
      <main className="flex-grow">
        {/* Hero visual sections */}
        <Hero />

        {/* Detailed professional profile information */}
        <About />

        {/* Categorized technical capabilities */}
        <Skills />

        {/* Selected Web3 / Cybersecurity highlights */}
        <Projects />

        {/* Academic and coursework details */}
        <div id="education" className="scroll-mt-20">
          <Education />
          <Certifications />
        </div>

        {/* Milestones log */}
        <Workshops />

        {/* Form communications channels */}
        <Contact />
      </main>

      {/* Corporate disclaimer & secondary nav links */}
      <Footer />
    </SkillModalProvider>
  );
}

