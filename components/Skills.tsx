import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono text-red-500 tracking-widest uppercase mb-2">Tech Stack</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white">Arsenal & Abilities</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between items-end mb-2">
              <span className="text-white font-medium group-hover:text-red-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-xs font-mono text-neutral-500">
                {skill.level}%
              </span>
            </div>
            
            <div className="h-2 w-full bg-neutral-900 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-900 to-red-600 rounded-full relative transform origin-left transition-transform duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              >
                {/* Glow effect on the bar end */}
                <div className="absolute right-0 top-0 h-full w-2 bg-red-400 blur-[2px]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional "More Skills" tag cloud */}
      <div className="mt-16 text-center">
        <p className="text-neutral-500 mb-4 text-sm font-mono">OTHER TECHNOLOGIES I WORK WITH</p>
        <div className="flex flex-wrap justify-center gap-3">
          {['AWS', 'GraphQL', 'Redis', 'MongoDB', 'Three.js', 'Python', 'Figma', 'Linux', 'Rust'].map(item => (
            <span key={item} className="px-3 py-1 border border-neutral-800 text-neutral-400 text-sm rounded-full hover:border-red-900 hover:text-red-500 transition-colors cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};