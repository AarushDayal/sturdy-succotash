import React, { useState, useEffect } from 'react';
import { Terminal, Database, ArrowRight, Download, Code2, Server, Globe, Cpu } from 'lucide-react';
import { SITE_CONFIG, SKILLS } from '../constants';

// --- CONFIGURATION MAPPING ---
const CONFIG = {
  name: SITE_CONFIG.name,
  role: SITE_CONFIG.role,
  subtext: SITE_CONFIG.bio,
  chips: SKILLS.slice(0, 8).map(s => ({
    name: s.name,
    type: s.category === 'frontend' ? 'web' : s.category === 'backend' ? 'db' : s.category === 'tools' ? 'ops' : 'ml'
  }))
};

// --- SUB-COMPONENTS ---

interface TechChipProps {
  text: string;
  type: string;
  index: number;
  visible: boolean;
}

const TechChip: React.FC<TechChipProps> = ({ text, type, index, visible }) => {
  const colors: Record<string, string> = {
    web: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    ml: "bg-red-500/10 text-red-300 border-red-500/30",
    db: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    ops: "bg-purple-500/10 text-purple-300 border-purple-500/30",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-mono border ${colors[type] || colors.web} backdrop-blur-sm transition-all duration-500 ease-out transform`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        transitionDelay: `${index * 100}ms`
      }}
    >
      {text}
    </span>
  );
};

// 2. The 3D Reactor Component
const Reactor3D = ({ stage }: { stage: number }) => {
  // Stage 1: Core appears
  // Stage 2: Rings expand and start spinning
  // Stage 3: Holograms projection
  
  const isActive = stage >= 2;

  return (
    <div
      className={`relative w-80 h-80 preserve-3d transition-all duration-1000 ease-out ${isActive ? 'animate-float' : ''}`}
      style={{
        transform: stage >= 1 
          ? 'scale(1) rotateX(10deg)' 
          : 'scale(0.5) rotateX(0deg)',
        opacity: stage >= 1 ? 1 : 0,
      }}
    >
      {/* --- REACTOR CORE --- */}
      <div className="absolute inset-0 flex items-center justify-center preserve-3d">
        
        {/* The Singularity (Center Sphere) */}
        <div 
          className={`w-24 h-24 rounded-full relative z-10 transition-all duration-1000 ${isActive ? 'shadow-[0_0_50px_rgba(220,38,38,0.6)]' : 'shadow-none'}`}
          style={{
            background: 'radial-gradient(circle at 30% 30%, #ff4d4d, #990000, #1a0000)',
          }}
        >
          {/* Inner pulse */}
          <div className={`absolute inset-0 bg-red-500 rounded-full blur-xl opacity-50 ${isActive ? 'animate-pulse' : ''}`}></div>
        </div>

        {/* --- GYROSCOPIC RINGS --- */}
        
        {/* Ring 1 (Vertical Spin) */}
        <div 
          className={`absolute w-64 h-64 border-[1px] border-neutral-700 rounded-full preserve-3d transition-all duration-1000 delay-100 border-t-red-600 border-b-red-900/50 ${isActive ? 'animate-spin-y opacity-100' : 'scale-50 opacity-0'}`}
        >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_10px_red]"></div>
        </div>

        {/* Ring 2 (Horizontal Spin) */}
        <div 
          className={`absolute w-52 h-52 border-[2px] border-neutral-800 rounded-full preserve-3d transition-all duration-1000 delay-200 border-l-red-500 border-r-neutral-700 ${isActive ? 'animate-spin-x opacity-100' : 'scale-50 opacity-0'}`}
        >
           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-1 bg-red-400"></div>
        </div>

        {/* Ring 3 (Z-Axis Spin - Tilted) */}
        <div 
          className={`absolute w-72 h-72 border-[1px] border-neutral-800/50 rounded-full preserve-3d transition-all duration-1000 delay-300 border-dashed border-red-900/30 ${isActive ? 'animate-spin-slow opacity-100' : 'scale-50 opacity-0'}`}
        ></div>

      </div>

      {/* --- HOLOGRAPHIC PROJECTIONS --- */}
      <div className="absolute inset-0 pointer-events-none preserve-3d">
         
         {/* Card 1: System Status */}
         <div 
            className={`absolute right-0 top-10 bg-neutral-900/80 border-l-2 border-red-500 p-3 rounded-r backdrop-blur-md shadow-[0_0_20px_-5px_rgba(220,38,38,0.2)] text-[10px] font-mono text-red-100 transition-all duration-700 delay-500 ease-out`}
            style={{
                opacity: stage >= 3 ? 1 : 0,
                transform: stage >= 3 ? 'translateX(60px) translateZ(40px)' : 'translateX(20px) translateZ(0px) scale(0.8)'
            }}
         >
            <div className="flex items-center gap-2 mb-2 text-red-400 border-b border-red-900/30 pb-1"><Cpu size={12} /> <span className="font-bold">Manipal University Jaipur</span></div>
            <div className="space-y-1 opacity-90">
                <div className="flex justify-between gap-4"><span className="text-neutral-500">2nd Year</span> <span className="text-red-400">IT</span></div>
                <div className="flex justify-between gap-4"><span className="text-neutral-500">CGPA</span> <span className="text-red-400">8.4</span></div>
            </div>
         </div>

         {/* Card 2: Neural Net */}
         <div 
            className={`absolute left-0 bottom-10 bg-neutral-900/80 border-r-2 border-blue-500 p-3 rounded-l backdrop-blur-md shadow-[0_0_20px_-5px_rgba(59,130,246,0.2)] text-[10px] font-mono text-blue-100 transition-all duration-700 delay-700 ease-out text-right`}
            style={{
                opacity: stage >= 3 ? 1 : 0,
                transform: stage >= 3 ? 'translateX(-60px) translateZ(20px)' : 'translateX(-20px) translateZ(0px) scale(0.8)'
            }}
         >
            <div className="flex items-center gap-2 mb-2 text-blue-400 border-b border-blue-900/30 pb-1 justify-end"><span className="font-bold">Aarush Dayal</span> <Database size={12} /></div>
            <div className="text-xs font-bold text-white mb-1">Full Stack ML Engineer </div>
            <div className="flex gap-1 justify-end">
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-100"></span>
                <span className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-200"></span>
            </div>
         </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 0: Init
    // 1: Text type start + Core appears
    // 2: Reactor active (rings spin)
    // 3: Holograms appear
    // 4: Chips & Buttons
    const timeline = [
        { t: 500, s: 1 }, 
        { t: 1500, s: 2 }, 
        { t: 3000, s: 3 }, 
        { t: 4500, s: 4 }, 
    ];

    const timeouts = timeline.map(({ t, s }) => {
        return setTimeout(() => setStage(s), t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20 lg:pt-0">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Typing Intro */}
            <div className="h-6 font-mono text-red-500 text-sm flex items-center justify-center lg:justify-start gap-2">
                <Terminal size={14} />
                <span 
                    className={`transition-opacity duration-500 ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}
                >
                    &gt; initializing_core... <span className="animate-cursor">_</span>
                </span>
            </div>

            {/* Main Headlines */}
            <div className="overflow-hidden">
                <h1 
                    className={`text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2 transition-transform duration-1000 ease-out`}
                    style={{ transform: stage >= 1 ? 'translateY(0)' : 'translateY(100px)', opacity: stage >= 1 ? 1 : 0 }}
                >
                    {CONFIG.name}
                </h1>
                <h2 
                    className={`text-2xl lg:text-3xl font-medium text-neutral-400 transition-all duration-700 delay-500`}
                    style={{ transform: stage >= 1 ? 'translateX(0)' : 'translateX(-20px)', opacity: stage >= 1 ? 1 : 0 }}
                >
                    {CONFIG.role}
                </h2>
            </div>

            <p 
                className={`text-neutral-400 max-w-md mx-auto lg:mx-0 leading-relaxed transition-opacity duration-700 delay-200`}
                style={{ opacity: stage >= 2 ? 1 : 0 }}
            >
                {CONFIG.subtext}
            </p>

            {/* Tech Chips (Stage 4) */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-4 min-h-[60px]">
                {CONFIG.chips.map((chip, idx) => (
                    <TechChip 
                        key={chip.name} 
                        text={chip.name} 
                        type={chip.type} 
                        index={idx} 
                        visible={stage >= 4} 
                    />
                ))}
            </div>

            {/* CTA Buttons */}
            <div 
                className={`pt-8 flex gap-4 justify-center lg:justify-start transition-all duration-700 delay-1000`}
                style={{ opacity: stage >= 4 ? 1 : 0, transform: stage >= 4 ? 'translateY(0)' : 'translateY(20px)' }}
            >
                <a href="#projects" className="bg-red-600 text-white px-6 py-3 rounded-sm font-bold flex items-center gap-2 hover:bg-red-700 transition-colors shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)]">
                    View Projects <ArrowRight size={18} />
                </a>
                <a href="#contact" className="border border-neutral-700 text-neutral-300 px-6 py-3 rounded-sm font-medium flex items-center gap-2 hover:bg-neutral-800 hover:text-red-500 hover:border-red-600/50 transition-colors">
                    <Download size={18} /> Resume
                </a>
            </div>
        </div>

        {/* RIGHT COLUMN: The 3D Animation */}
        <div className="flex justify-center items-center h-[400px] lg:h-[600px] perspective-1000 order-1 lg:order-2">
            <Reactor3D stage={stage} />
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[2000ms]`}
        style={{ opacity: stage >= 4 ? 1 : 0 }}
      >
        <span className="text-xs uppercase tracking-widest font-mono">Scroll</span>
        <div 
            className="w-1 h-12 bg-neutral-800 rounded-full overflow-hidden"
        >
            <div className="w-full h-1/2 bg-red-600 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] translate-y-0"></div>
        </div>
      </div>

    </div>
  );
};
