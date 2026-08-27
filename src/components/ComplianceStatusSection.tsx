import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, ShieldCheck } from 'lucide-react';

export const ComplianceStatusSection: React.FC = () => {
  const statusCards = [
    {
      status: 'COMPLIANT',
      color: 'emerald',
      bgClass: 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300',
      badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      icon: CheckCircle2,
      quote: 'Configured checks passed based on the information detected by the system.',
      details: [
        'All 7 mandatory declarations present on principal display panel',
        'Standard metric units used according to Rule 12 specifications',
        'MRP includes all taxes and Unit Sale Price is correctly declared',
        'High OCR extraction confidence across all detected segments',
      ],
      inspectorRole: 'Proceeds with routine confirmation and saves digital inspection log.',
    },
    {
      status: 'NEEDS REVIEW',
      color: 'amber',
      bgClass: 'bg-amber-950/30 border-amber-500/40 text-amber-300',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      icon: AlertTriangle,
      quote: 'Information is uncertain or requires inspector verification.',
      details: [
        'Text partially obscured by package creases, glare, or low print contrast',
        'Confidence score below the automated verification threshold',
        'Ambiguous date format or complex importer/packer declaration structure',
        'System provides bounding box coordinates for inspector visual inspection',
      ],
      inspectorRole: 'Inspects the physical packaging or captures a clearer angled photograph.',
    },
    {
      status: 'POTENTIAL ISSUE',
      color: 'rose',
      bgClass: 'bg-rose-950/30 border-rose-500/40 text-rose-300',
      badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      icon: XCircle,
      quote: 'A configured check may have failed and requires verification.',
      details: [
        'Mandatory declaration appears absent from all scanned package panels',
        'Unit Sale Price missing on qualifying packages over 100g/100ml',
        'Manufacturer address lacks street, city, or postal PIN code',
        'Evidence compiled into structured Inspection Memo for official review',
      ],
      inspectorRole: 'Verifies physical evidence and initiates formal statutory inspection protocol.',
    },
  ];

  return (
    <section id="compliance-status" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            Standardized Status Taxonomy
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent Compliance Statuses
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            PackCheck AI categorizes screening findings into three clear, responsible tiers. Automated checks support screening while legal authority remains strictly with the authorized inspector.
          </p>
        </div>

        {/* 3 Status Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {statusCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.status}
                id={`status-card-${card.status.toLowerCase().replace(' ', '-')}`}
                className={`rounded-2xl border p-6 flex flex-col justify-between space-y-6 ${card.bgClass} shadow-lg`}
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold border ${card.badgeClass}`}>
                      <IconComponent className="w-4 h-4" />
                      {card.status}
                    </span>
                  </div>

                  {/* Core Definition Quote */}
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                    <p className="text-xs font-semibold text-slate-200 leading-relaxed">
                      "{card.quote}"
                    </p>
                  </div>

                  {/* Evaluation Criteria Checklist */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Common Triggers
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {card.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-slate-500 mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inspector Role Footnote */}
                <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
                  <strong className="text-slate-300 block mb-0.5">Inspector Action:</strong>
                  {card.inspectorRole}
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical Legal Distinction Banner */}
        <div className="mt-10 p-4 bg-slate-950 rounded-xl border border-slate-800 text-center text-xs text-slate-400">
          <p>
            ⚖️ <strong>Legal Clarity:</strong> PackCheck AI produces system-generated screening findings. The platform never states that "AI has legally declared a product illegal" or that "AI guarantees legal compliance." All statutory determinations are made by the authorized inspector.
          </p>
        </div>

      </div>
    </section>
  );
};
