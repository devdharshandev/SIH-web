import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Scan, FileSearch, Scale, ChevronRight } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface HeroProps {
  onStartInspection: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartInspection }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* SIH 2026 Prototype Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>SMART INDIA HACKATHON 2026 PROTOTYPE</span>
              <span className="text-slate-500">•</span>
              <span className="text-blue-200">PS #26034</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Smarter Package Inspection <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                with AI
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              PackCheck AI assists inspectors in scanning packaged commodities, extracting label information, evaluating applicable compliance checks, and generating evidence-based inspection results.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                id="hero-start-inspection-btn"
                onClick={onStartInspection}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition active:scale-[0.98] group"
              >
                <span>START INSPECTION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#how-it-works"
                id="hero-see-how-it-works-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700 transition"
              >
                <span>SEE HOW IT WORKS</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust and Ethos Statement */}
            <div className="pt-3 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>AI-assisted screening • Human verification • Evidence-based inspection</span>
            </div>

            {/* Quick stats ribbon */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-lg">
              <div className="space-y-0.5">
                <span className="text-xs text-slate-400">Rules Covered</span>
                <p className="text-sm sm:text-base font-bold text-white">Legal Metrology 2011</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs text-slate-400">Core Engine</span>
                <p className="text-sm sm:text-base font-bold text-cyan-300">OCR + AI Assist</p>
              </div>
              <div className="space-y-0.5">
                <span className="text-xs text-slate-400">Inspection Model</span>
                <p className="text-sm sm:text-base font-bold text-emerald-400">Human-in-the-Loop</p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Visualization Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative gradient glow behind the card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-30 blur-xl group-hover:opacity-100 transition" />

              {/* Main Card Container */}
              <div className="relative bg-slate-900/90 border border-slate-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-md space-y-4">
                
                {/* Header of the visualization */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Live Inspection Pipeline
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                    STAGE: ACTIVE
                  </span>
                </div>

                {/* Pipeline visual sequence */}
                <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800 text-[11px] text-slate-300 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 uppercase">
                    <span>Pipeline Sequence</span>
                    <span className="text-cyan-400">5-Step Screening</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1 text-center font-semibold text-[10px]">
                    <div className="bg-slate-800/90 text-blue-300 p-1.5 rounded border border-slate-700">
                      PRODUCT IMAGE
                    </div>
                    <div className="bg-slate-800/90 text-cyan-300 p-1.5 rounded border border-slate-700">
                      AI + OCR
                    </div>
                    <div className="bg-slate-800/90 text-indigo-300 p-1.5 rounded border border-slate-700">
                      EXTRACTED INFO
                    </div>
                    <div className="bg-slate-800/90 text-amber-300 p-1.5 rounded border border-slate-700">
                      RULE ENGINE
                    </div>
                    <div className="bg-emerald-950/80 text-emerald-300 p-1.5 rounded border border-emerald-700/60">
                      RESULT
                    </div>
                  </div>
                </div>

                {/* Fictional Product Label Preview with OCR Bounding Boxes */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-slate-700 overflow-hidden">
                  
                  {/* Subtle simulated scanning grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Simulated Packaging Graphic */}
                    <div className="w-24 h-28 rounded-lg bg-gradient-to-b from-amber-700/30 to-amber-900/40 border border-amber-500/30 p-2 flex flex-col justify-between flex-shrink-0 shadow-inner">
                      <div className="text-[10px] font-extrabold text-amber-200 tracking-tight leading-tight">
                        ABC FOODS
                      </div>
                      <div className="my-auto text-center">
                        <div className="text-xs font-bold text-white">Premium</div>
                        <div className="text-[10px] text-amber-300">Basmati Rice</div>
                      </div>
                      <div className="flex justify-between items-end text-[9px] text-amber-200">
                        <span>5 kg</span>
                        <span>₹450</span>
                      </div>
                    </div>

                    {/* Extracted Label Fields */}
                    <div className="flex-1 space-y-1.5 text-xs">
                      <div className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
                        <span>Detected Declarations</span>
                        <span className="text-[10px] text-emerald-400 font-mono">OCR: 98%</span>
                      </div>

                      <div className="space-y-1 text-[11px]">
                        <div className="flex items-center justify-between bg-slate-900/80 px-2 py-1 rounded border border-slate-700/50">
                          <span className="text-slate-400">Product Name:</span>
                          <span className="font-semibold text-slate-200">ABC Premium Rice</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900/80 px-2 py-1 rounded border border-slate-700/50">
                          <span className="text-slate-400">Net Quantity:</span>
                          <span className="font-semibold text-emerald-400">5 kg (Metric Units)</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900/80 px-2 py-1 rounded border border-slate-700/50">
                          <span className="text-slate-400">MRP:</span>
                          <span className="font-semibold text-slate-200">₹450.00 (Incl. Taxes)</span>
                        </div>
                        <div className="flex items-center justify-between bg-slate-900/80 px-2 py-1 rounded border border-slate-700/50">
                          <span className="text-slate-400">Manufacturer:</span>
                          <span className="font-semibold text-slate-200">ABC Foods Pvt Ltd</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Compliance Result Card */}
                <div className="bg-slate-950 rounded-xl p-4 border border-emerald-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        COMPLIANCE SCREENING
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-2xl font-extrabold text-white">94</span>
                        <span className="text-xs text-slate-400">/ 100</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                        STATUS
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-extrabold bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-500/40">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        COMPLIANT
                      </span>
                    </div>
                  </div>

                  {/* Checklist of passed declarations */}
                  <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300 pt-1 border-t border-slate-800">
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Product Information</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Net Quantity</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>MRP</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Manufacturer Details</span>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-[10px] text-slate-500 text-center italic">
                  Demo visualization. Final verification remains with the authorized inspector.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
