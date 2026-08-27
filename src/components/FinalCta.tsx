import React from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface FinalCtaProps {
  onOpenPortal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenPortal }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-950/40 to-slate-950 text-white relative border-b border-slate-800 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          Smart India Hackathon 2026 Prototype
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Make Package Inspection Smarter
          </h2>
          
          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Move from manual label checking toward evidence-based, AI-assisted inspection.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            id="final-cta-open-portal-btn"
            onClick={onOpenPortal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition active:scale-95"
          >
            <span>OPEN INSPECTION PORTAL</span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <a
            href="#how-it-works"
            id="final-cta-explore-workflow-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700 transition"
          >
            <span>EXPLORE THE WORKFLOW</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Trust confirmation */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Legal Metrology (Packaged Commodities) Rules, 2011
          </span>
          <span>•</span>
          <span>Human-in-the-Loop Verification</span>
          <span>•</span>
          <span>Offline-First Android Architecture</span>
        </div>

      </div>
    </section>
  );
};
