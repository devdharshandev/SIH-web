import React from 'react';
import { Eye, TrendingUp, Layers, History, AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const challengeCards = [
    {
      number: '01',
      title: 'MANUAL INSPECTION',
      description: 'Package information must be reviewed carefully during inspection.',
      detail: 'Inspectors must visually verify at least 7 distinct statutory declarations across multiple packaging panels, verifying unit formats, date codes, and address structures.',
      icon: Eye,
    },
    {
      number: '02',
      title: 'HIGH VOLUME',
      description: 'Large numbers of products make manual screening difficult to scale.',
      detail: 'With thousands of FMCG SKUs, retail outlets, and fast-moving warehouses, conducting thorough line-item checks on all packaging without assistive tools creates operational bottlenecks.',
      icon: TrendingUp,
    },
    {
      number: '03',
      title: 'INFORMATION COMPLEXITY',
      description: 'Different products and situations may require different applicable checks.',
      detail: 'Commodity categories (food vs non-food, imported vs domestic, standard vs non-standard weights, retail vs wholesale) trigger distinct clauses under the Legal Metrology Rules.',
      icon: Layers,
    },
    {
      number: '04',
      title: 'LIMITED TRACEABILITY',
      description: 'Inspection findings require structured evidence, records and history.',
      detail: 'Manual notes and fragmented photos make it challenging to maintain defensible audit trails, historical batch comparisons, and standardized legal notice preparation.',
      icon: History,
    },
  ];

  return (
    <section id="problem" className="py-20 bg-slate-900 text-slate-100 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/20">
            <AlertCircle className="w-3.5 h-3.5" />
            Field Inspection Context
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Challenge
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Manual inspection of packaged commodities requires checking multiple declarations and package details. As inspection volume grows, reviewing labels, recording findings and maintaining inspection history can become time-consuming.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challengeCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.number}
                id={`challenge-card-${card.number}`}
                className="group relative bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/70 hover:border-blue-500/50 rounded-2xl p-6 transition duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Card Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-slate-500 group-hover:text-blue-400 transition">
                      {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/40 transition">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Core Description */}
                  <div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-300/90 mt-1">
                      {card.description}
                    </p>
                  </div>

                  {/* Detailed explanation */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex items-center text-[11px] text-slate-500 font-medium">
                  <span>Legal Metrology (Packaged Commodities)</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Framing callout */}
        <div className="mt-12 p-5 bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 rounded-2xl border border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wide">
              The Need for Structured Inspection Intelligence
            </h4>
            <p className="text-xs text-slate-300">
              Moving from ad-hoc manual note-taking to verifiable, automated label screening with clear audit logs.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 text-blue-300 border border-blue-500/30 text-xs font-bold whitespace-nowrap">
            <span>Human-in-the-Loop Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
};
