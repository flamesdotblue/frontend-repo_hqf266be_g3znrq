import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import TimelineContact from './components/TimelineContact';
import { Rocket } from 'lucide-react';

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-white">
        <a href="#home" className="flex items-center gap-2 font-['Manrope'] text-lg font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-500">
            <Rocket className="h-4 w-4" />
          </span>
          <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-amber-300 bg-clip-text text-transparent">NovaTech</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#experience">Experience</a>
          <a className="rounded-full bg-white/10 px-3 py-1.5 text-white hover:bg-white/15" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Your Name — Motion, 3D, and robust engineering.
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="scroll-smooth bg-black">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <AboutSkills />
        <Projects />
        <TimelineContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
