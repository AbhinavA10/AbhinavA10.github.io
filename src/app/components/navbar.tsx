import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };
  
  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: isScrolled ? 0 : -100,
        opacity: isScrolled ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-zinc-900/90 backdrop-blur-lg border-b border-zinc-800 ${
        isScrolled ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between md:justify-center gap-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-300 hover:text-orange-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900/90 backdrop-blur-md border-t border-zinc-800 p-4 mt-2">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-300 hover:text-white transition-colors text-left"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
      </div>
    </motion.nav>
  );
}
