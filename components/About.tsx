import React from 'react';
import { SITE_CONFIG } from '../constants';
import { Code2, Cpu, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-900 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-lg overflow-hidden aspect-square md:aspect-[4/5]">
          {/* Using a specific highly styled abstract tech image or a placeholder */}
          <img 
            src="https://picsum.photos/seed/crimson/800/1000?grayscale" 
            alt="Profile" 
            className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-sm font-mono text-red-500 tracking-widest uppercase">Who I Am</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Architecting the future <br />
            <span className="text-neutral-500">one line of code at a time.</span>
          </h3>
        </div>

        <p className="text-neutral-400 leading-relaxed">
          I'm {SITE_CONFIG.name}, a {SITE_CONFIG.role} obsessed with performance, aesthetics, and clean architecture. 
          My background bridges the gap between creative design and engineering logic. I don't just build websites; 
          I build resilient digital ecosystems that scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-4 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 hover:border-red-900/50 transition-colors rounded group">
                <Code2 className="text-red-500 mb-3 group-hover:text-red-400 transition-colors" size={28} />
                <h4 className="font-bold text-white mb-1">Clean Code</h4>
                <p className="text-xs text-neutral-500">Maintainable, scalable, and typed strictly.</p>
            </div>
            <div className="p-4 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 hover:border-red-900/50 transition-colors rounded group">
                <Cpu className="text-red-500 mb-3 group-hover:text-red-400 transition-colors" size={28} />
                <h4 className="font-bold text-white mb-1">Performance</h4>
                <p className="text-xs text-neutral-500">Optimizing for sub-second latency and 60fps.</p>
            </div>
            <div className="p-4 bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 hover:border-red-900/50 transition-colors rounded group">
                <Globe className="text-red-500 mb-3 group-hover:text-red-400 transition-colors" size={28} />
                <h4 className="font-bold text-white mb-1">Global Scale</h4>
                <p className="text-xs text-neutral-500">Edge-deployed and latency optimized.</p>
            </div>
        </div>
      </div>
    </div>
  );
};