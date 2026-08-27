import React from 'react';
import { Scale, ExternalLink, ShieldCheck, BookOpen, AlertCircle } from 'lucide-react';
import { APP_CONFIG } from '../config';

export const LegalMetrologySection: React.FC = () => {
  const mandatoryRules = [
    { rule: 'Rule 6(1)(a)', label: 'Common or Generic Name of the Commodity' },
    { rule: 'Rule 6(1)(b) & Rule 12', label: 'Net Quantity in Standard Units of Weight/Measure' },
    { rule: 'Rule 6(1)(c)', label: 'Complete Name & Address of Manufacturer/Packer/Importer' },
    { rule: 'Rule 6(1)(d)', label: 'Month and Year of Manufacture / Packing / Import' },
    { rule: 'Rule 6(1)(e)', label: 'Maximum Retail Price (MRP) (Inclusive of all taxes)' },
    { rule: 'Rule 6(1)(e) Amendment', label: 'Unit Sale Price (USP) per g/kg/ml/l on packages' },
    { rule: 'Rule 6(1)(g)', label: 'Consumer Care Contact Details (Name, Phone, Email, Address)' },
  ];

  return (
    <section id="legal-metrology" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <Scale className="w-3.5 h-3.5" />
            Statutory Alignment
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built Around India's Legal Metrology Framework
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Packaged commodities are subject to prescribed declarations and requirements under India's Legal Metrology framework. PackCheck AI is designed to support technology-enabled inspection and compliance screening.
          </p>

          <div className="pt-2">
            <a
              href={APP_CONFIG.officialResourcesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/30 transition active:scale-95"
            >
              <BookOpen className="w-4 h-4" />
              <span>OFFICIAL LEGAL METROLOGY RESOURCES</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Declarations Grid */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Mandatory Statutory Declarations (Rules 2011)
              </h3>
              <p className="text-xs text-slate-400">
                Core clauses evaluated during the AI-assisted screening pass
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/40">
              Department of Consumer Affairs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mandatoryRules.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5"
              >
                <span className="text-[11px] font-mono font-bold text-blue-400">
                  {item.rule}
                </span>
                <p className="text-xs font-semibold text-slate-200">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Legal disclaimer note */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              Legal requirements can change. Compliance rules should be maintained as versioned configuration and verified against current official sources published in the Gazette of India.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
