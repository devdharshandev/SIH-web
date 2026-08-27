import React from 'react';
import { Zap, CheckCircle2, Eye, History, TrendingUp, BarChart2, Sparkles } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const impactCards = [
    {
      title: 'FASTER SCREENING',
      subtitle: 'Assist inspectors with repetitive package-label checks.',
      description: 'Automates extraction of mandatory declarations so field officers can focus on physical integrity and specialized clauses.',
      icon: Zap,
    },
    {
      title: 'CONSISTENT PROCESS',
      subtitle: 'Apply configured checks systematically.',
      description: 'Standardizes inspection procedures across all regional districts ensuring identical rule application and zero overlooked declarations.',
      icon: CheckCircle2,
    },
    {
      title: 'EVIDENCE-BASED REVIEW',
      subtitle: 'Provide supporting information for AI-assisted findings.',
      description: 'Pairs every flagged non-conformance with exact photographic crops, OCR confidence scores, and statutory rule references.',
      icon: Eye,
    },
    {
      title: 'BETTER TRACEABILITY',
      subtitle: 'Maintain structured inspection records.',
      description: 'Replaces handwritten inspection logs with tamper-evident digital records linked to officer IDs and cryptographic timestamps.',
      icon: History,
    },
    {
      title: 'SCALABLE INSPECTION',
      subtitle: 'Support larger inspection workflows.',
      description: 'Enables enforcement departments to monitor higher volumes of retail packages, e-commerce fulfillment hubs, and warehouses.',
      icon: TrendingUp,
    },
    {
      title: 'DATA-DRIVEN MONITORING',
      subtitle: 'Use historical inspection information for analytics.',
      description: 'Aggregates historical inspection data into regional compliance heatmaps to identify systemic labeling issues.',
      icon: BarChart2,
    },
  ];

  return (
    <section id="impact" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Field & Departmental Value
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why PackCheck AI Matters
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Delivering practical operational improvements for field officers, supervisory leadership, and consumer transparency without exaggerated claims.
          </p>
        </div>

        {/* 6 Impact Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.title}
                id={`impact-card-${card.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold tracking-wider text-white uppercase">
                      {card.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-300/90 mt-1">
                      {card.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 text-[10px] text-slate-500 font-mono">
                  Impact Vector Verified
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
