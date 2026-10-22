import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Certifications, Education } from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';

export default function App() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
