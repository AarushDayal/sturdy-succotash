
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { BackgroundAnimation } from './components/BackgroundAnimation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-red-500/30 selection:text-red-200 overflow-x-hidden relative isolate">
      
      {/* Anime.js powered background */}
      <BackgroundAnimation />
      
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Hero Section with Cinematic Intro */}
        <section id="home" className="min-h-screen flex flex-col justify-center">
          <Hero />
        </section>
        
        <section id="about" className="py-20 md:py-32">
          <About />
        </section>
        
        <section id="skills" className="py-20 md:py-32 relative">
           {/* Divider line */}
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
          <Skills />
        </section>

        <section id="projects" className="py-20 md:py-32">
          <Projects />
        </section>

        <section id="contact" className="py-20 md:py-32 mb-20">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-red-900/20 bg-neutral-950/80 backdrop-blur-sm py-8 text-center text-neutral-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Aarush Dayal Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default App;
