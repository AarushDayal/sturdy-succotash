import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-sm font-mono text-red-500 tracking-widest uppercase mb-2">Selected Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h3>
        </div>
        <a href="#" className="text-neutral-500 hover:text-red-500 text-sm font-mono border-b border-neutral-800 hover:border-red-500 pb-1 transition-colors">
          VIEW ALL REPOSITORIES
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div key={project.id} className="group relative bg-neutral-950/40 backdrop-blur-md border border-neutral-800 hover:border-red-900/50 transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_-10px_rgba(220,38,38,0.1)]">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-300" />
              
              {/* Overlay Icons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <a href={project.github} className="p-2 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-red-600 transition-colors">
                  <Github size={18} />
                </a>
                <a href={project.link} className="p-2 bg-black/70 backdrop-blur-sm text-white rounded-full hover:bg-red-600 transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                {project.title}
              </h4>
              <p className="text-neutral-400 text-sm mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono px-2 py-1 bg-neutral-900/50 border border-neutral-800 rounded text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};