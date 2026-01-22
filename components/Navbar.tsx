import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Hexagon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-neutral-950/60 backdrop-blur-xl border-red-900/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-2xl font-bold font-sans tracking-tighter group">
          <Hexagon className="text-red-600 fill-red-900/20 group-hover:rotate-90 transition-transform duration-500" size={32} strokeWidth={1.5} />
          <span className="text-white">Aarush<span className="text-red-600">.DEV</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-mono uppercase tracking-widest text-neutral-400 hover:text-red-500 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-red-600/10 hover:bg-red-600 text-red-500 hover:text-white border border-red-600/50 rounded font-mono text-sm transition-all duration-300 backdrop-blur-sm">
            HIRE ME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-200 hover:text-red-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-xl border-b border-red-900/30 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-mono text-neutral-300 hover:text-red-500 hover:pl-2 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};