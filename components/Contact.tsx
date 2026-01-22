import React, { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="max-w-5xl mx-auto bg-neutral-900/40 backdrop-blur-sm border border-neutral-800/50 hover:border-red-900/30 transition-colors p-8 md:p-16 rounded-2xl relative overflow-hidden shadow-2xl">
      {/* Background decoration - Static CSS version for fallback */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-sm font-mono text-red-500 tracking-widest uppercase mb-2">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's build something legendary.</h3>
          
          <p className="text-neutral-400 mb-8">
            Whether you have a question, a project proposition, or just want to say hi, 
            my inbox is always open. I'll try my best to get back to you within 24 hours.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-neutral-300 group">
              <div className="w-10 h-10 rounded bg-neutral-900/50 flex items-center justify-center text-red-500 border border-neutral-800 group-hover:border-red-900 transition-colors">
                <Mail size={20} />
              </div>
              <span>{SITE_CONFIG.email}</span>
            </div>
            <div className="flex items-center gap-4 text-neutral-300 group">
              <div className="w-10 h-10 rounded bg-neutral-900/50 flex items-center justify-center text-red-500 border border-neutral-800 group-hover:border-red-900 transition-colors">
                <MapPin size={20} />
              </div>
              <span>Remote / Delhi NCR, India</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-neutral-500">NAME</label>
              <input 
                type="text" 
                required
                disabled={formState !== 'idle'}
                className="w-full bg-neutral-950/50 border border-neutral-800 p-3 rounded text-neutral-200 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600/50 transition-colors backdrop-blur-sm disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-neutral-500">EMAIL</label>
              <input 
                type="email" 
                required
                disabled={formState !== 'idle'}
                className="w-full bg-neutral-950/50 border border-neutral-800 p-3 rounded text-neutral-200 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600/50 transition-colors backdrop-blur-sm disabled:opacity-50"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-500">SUBJECT</label>
            <input 
              type="text"
              disabled={formState !== 'idle'}
              className="w-full bg-neutral-950/50 border border-neutral-800 p-3 rounded text-neutral-200 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600/50 transition-colors backdrop-blur-sm disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-neutral-500">MESSAGE</label>
            <textarea 
              rows={4}
              required
              disabled={formState !== 'idle'}
              className="w-full bg-neutral-950/50 border border-neutral-800 p-3 rounded text-neutral-200 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600/50 transition-colors resize-none backdrop-blur-sm disabled:opacity-50"
            />
          </div>

          <button 
            type="submit"
            disabled={formState !== 'idle'}
            className={`w-full py-4 font-bold rounded transition-all flex items-center justify-center gap-2 mt-2 
              ${formState === 'success' 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white hover:bg-red-700 shadow-[0_0_15px_-3px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_-5px_rgba(220,38,38,0.6)]'
              } disabled:opacity-70 disabled:cursor-not-allowed`}
          >
            {formState === 'idle' && (
              <>Send Message <Send size={18} /></>
            )}
            {formState === 'sending' && (
              <>Sending...</>
            )}
            {formState === 'success' && (
              <>Message Sent <CheckCircle size={18} /></>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};