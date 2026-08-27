import React from 'react';
import { ShieldCheck, Eye, UserCheck, Lock, Sliders } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      title: 'EVIDENCE-BASED',
      subtitle: 'Results can be associated with detected package information.',
      description: 'Every evaluated declaration is linked to exact bounding coordinates on the physical label, eliminating opaque black-box conclusions.',
      icon: Eye,
    },
    {
      title: 'HUMAN-IN-THE-LOOP',
      subtitle: 'Important findings remain subject to inspector verification.',
      description: 'AI serves exclusively as an assistive screening layer. The legal authority and final determination remain with the authorized officer.',
      icon: UserCheck,
    },
    {
      title: 'AUDITABLE',
      subtitle: 'Inspection activity can be recorded for traceability.',
      description: 'Digital signatures, inspector identities, device hardware hashes, and timestamps are preserved in tamper-evident logs.',
      icon: Lock,
    },
    {
      title: 'CONFIGURABLE',
      subtitle: 'Compliance checks can evolve as requirements change.',
      description: 'Rule sets and thresholds are maintained as modular, versioned data tables so legislative updates require no application redesign.',
      icon: Sliders,
    },
  ];

  return (
    <section id="trust" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Governance & Reliability
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Trust and Traceability
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Designed from the ground up to meet public sector standards of transparency, accountability, and defensible auditability.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                id={`trust-card-${pillar.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold tracking-wider text-white uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-300/90 mt-1">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 text-[10px] text-slate-500 font-mono">
                  Core Trust Pillar
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
