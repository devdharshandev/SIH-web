import React from 'react';
import { Smartphone, Laptop, Users, ShieldCheck, ArrowRight } from 'lucide-react';

interface UserTypesSectionProps {
  onOpenPortal: (role?: 'inspector' | 'admin' | 'citizen') => void;
}

export const UserTypesSection: React.FC<UserTypesSectionProps> = ({ onOpenPortal }) => {
  const personas = [
    {
      role: 'inspector' as const,
      title: 'INSPECTOR',
      subtitle: 'Field Enforcement Officers',
      description: 'Scan products, review AI-assisted findings and record inspections.',
      capabilities: [
        'Multi-view image capture via mobile device',
        'Real-time OCR extraction & bounding box inspection',
        'Confidence score evaluation & clause mapping',
        'Human override, manual annotation & digital signing',
        'Inspection memo & seizure notice generation',
      ],
      icon: Smartphone,
      accent: 'blue',
      btnText: 'Launch Field Mode',
    },
    {
      role: 'admin' as const,
      title: 'ADMINISTRATOR',
      subtitle: 'Supervisory & Department Heads',
      description: 'Monitor inspection activity, rules, analytics and audit records.',
      capabilities: [
        'State & district inspection volume dashboards',
        'Legal Metrology Rules 2011 versioned rule configuration',
        'Tamper-evident audit log query & export',
        'Inspector deployment & jurisdiction management',
        'Batch non-conformance heatmaps & trends',
      ],
      icon: Laptop,
      accent: 'indigo',
      btnText: 'Launch Admin Suite',
    },
    {
      role: 'citizen' as const,
      title: 'CITIZEN / CONSUMER',
      subtitle: 'Consumer Awareness & Transparency',
      description: 'Access simplified product/compliance information where supported.',
      capabilities: [
        'Scan retail packages to verify maximum retail price (MRP)',
        'Check Unit Sale Price (USP) per 100g/ml for price transparency',
        'Verify legitimate manufacturer/packer contact details',
        'Access consumer grievance & helpline numbers directly',
        'Submit packaging compliance inquiries for official review',
      ],
      icon: Users,
      accent: 'emerald',
      btnText: 'Launch Citizen View',
    },
  ];

  return (
    <section id="user-types" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <Users className="w-3.5 h-3.5" />
            Role-Based Workflows
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for Every Stage of Inspection
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            PackCheck AI supports specialized interfaces tailored for field officers, central administrators, and everyday consumers.
          </p>
        </div>

        {/* 3 Persona Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona) => {
            const IconComponent = persona.icon;
            return (
              <div
                key={persona.title}
                id={`persona-card-${persona.role}`}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-slate-700 transition"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase font-bold text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      Persona
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold tracking-wider text-white uppercase">
                      {persona.title}
                    </h3>
                    <span className="text-xs font-semibold text-blue-300 block mt-0.5">
                      {persona.subtitle}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-medium">
                    {persona.description}
                  </p>

                  <div className="pt-2 border-t border-slate-800/80 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Interface Capabilities
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {persona.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => onOpenPortal(persona.role)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <span>{persona.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
