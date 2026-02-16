import { Navbar } from './components/Navbar';
import { HeroSection } from './components/Hero';
import { AboutSection } from './components/About';
import { ExperienceSection } from './components/Experience';
import { ProjectsSection } from './components/Projects';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      
      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-zinc-400 mb-4">
            © 2026 Abhinav Agrahari. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
            <a href="mailto:abhiagrahari2000@gmail.com" className="hover:text-orange-500 transition-colors flex items-center gap-2">
              Email
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/abhiagrahari" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center gap-2">
              LinkedIn
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/AbhinavA10" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors flex items-center gap-2">
              GitHub
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
