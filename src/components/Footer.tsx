import React from 'react';
import { ShieldCheck, ExternalLink, Scale, Sparkles } from 'lucide-react';
import { APP_CONFIG } from '../config';

export const Footer: React.FC = () => {
  const footerNavLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#problem' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#technology' },
    { name: 'Impact', href: '#impact' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white">
                  PACKCHECK AI
                </span>
                <span className="text-[10px] text-slate-500 font-mono uppercase">
                  Compliance Intelligence
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              AI-Assisted Legal Metrology Compliance & Inspection Platform developed for technology-enabled screening of packaged commodities under Legal Metrology (Packaged Commodities) Rules, 2011.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-cyan-300 font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SIH 2026 Prototype • PS #26034</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              Navigation
            </span>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Framework Links */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              Statutory Resources
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={APP_CONFIG.officialResourcesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition inline-flex items-center gap-1"
                >
                  <span>Legal Metrology Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://consumeraffairs.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition inline-flex items-center gap-1"
                >
                  <span>Dept. of Consumer Affairs</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://sih.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition inline-flex items-center gap-1"
                >
                  <span>Smart India Hackathon 2026</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <span className="text-slate-500">Problem Statement: 26034</span>
              </li>
            </ul>
          </div>

          {/* Platform Ethos */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
              Core Principles
            </span>
            <div className="space-y-2 text-[11px] text-slate-400 font-mono">
              <div className="p-2 bg-slate-900 rounded border border-slate-800 text-blue-300">
                AI ASSISTS
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800 text-indigo-300">
                EVIDENCE SUPPORTS
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800 text-emerald-400">
                INSPECTOR DECIDES
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer Banner */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 space-y-4">
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
            <strong className="text-slate-300">Disclaimer: </strong>
            PackCheck AI is an academic prototype created for the Smart India Hackathon 2026 (Problem Statement 26034). It is not an official government service and does not claim official government endorsement. Automated screening outputs are assistive indicators and do not replace statutory determinations by authorized inspectors under the Legal Metrology Act, 2009 and Packaged Commodities Rules, 2011.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
            <span>© 2026 PackCheck AI • Smart India Hackathon 2026 Prototype (PS 26034)</span>
            <span>Built for presentation & field validation</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
