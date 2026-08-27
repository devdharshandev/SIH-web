import React from 'react';
import { 
  Scan, FileText, Cpu, Scale, HelpCircle, ShieldAlert, 
  UserCheck, Activity, BarChart3, Lock, Bell, FileSpreadsheet, Users 
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'SMART PRODUCT SCANNING',
      description: 'Scan or upload packaged commodity images.',
      detail: 'Multi-view image capture engine supporting front principal display, back ingredient/packer panels, and side seals.',
      icon: Scan,
    },
    {
      title: 'OCR & LABEL EXTRACTION',
      description: 'Extract useful information from package labels.',
      detail: 'Local and cloud optical character recognition parses product names, net quantity units, MRP, dates, and addresses.',
      icon: FileText,
    },
    {
      title: 'AI-ASSISTED ANALYSIS',
      description: 'Use AI to assist with interpreting package information.',
      detail: 'Context-aware intelligence normalizes metric notations, identifies multilingual text, and flags missing declarations.',
      icon: Cpu,
    },
    {
      title: 'LEGAL METROLOGY RULE EVALUATION',
      description: 'Evaluate extracted information against configured compliance checks.',
      detail: 'Automated screening against Legal Metrology (Packaged Commodities) Rules, 2011 clauses and recent USP amendments.',
      icon: Scale,
    },
    {
      title: 'EVIDENCE-BASED RESULTS',
      description: 'Show what information was detected and why a check produced a result.',
      detail: 'Bounding box pixel coordinates and rule cross-references ensure every finding is backed by physical photographic proof.',
      icon: HelpCircle,
    },
    {
      title: 'CONFIDENCE-AWARE ANALYSIS',
      description: 'Display confidence and identify uncertain results.',
      detail: 'Statistical confidence scoring (0-100%) separates reliable readings from blurred packaging needing inspector visual review.',
      icon: ShieldAlert,
    },
    {
      title: 'INSPECTOR VERIFICATION',
      description: 'Allow human review of AI-assisted findings.',
      detail: 'Empowers authorized enforcement officers to verify, annotate, edit, or override any automated label extraction.',
      icon: UserCheck,
    },
    {
      title: 'INSPECTION FEED',
      description: 'Display inspection records and activity.',
      detail: 'Real-time chronological feed of field inspection logs, verification status, and district activity streams.',
      icon: Activity,
    },
    {
      title: 'ADMIN DASHBOARD',
      description: 'Provide inspection statistics and monitoring.',
      detail: 'Macro-level compliance metrics, regional breakdown, category distribution, and officer productivity tracking.',
      icon: BarChart3,
    },
    {
      title: 'AUDIT LOG',
      description: 'Maintain traceability of inspection actions.',
      detail: 'Cryptographically hashed, tamper-resistant event logs capturing exact timestamps, inspector IDs, and digital signatures.',
      icon: Lock,
    },
    {
      title: 'NOTIFICATIONS',
      description: 'Surface relevant inspection events.',
      detail: 'Instant alerts for recurring batch non-conformances, urgent compliance advisory updates, and review escalations.',
      icon: Bell,
    },
    {
      title: 'SEIZURE NOTICE & MEMO WORKFLOW',
      description: 'Support the existing seizure-notice workflow.',
      detail: 'Generates standardized Inspection Memos, compounding notices, and statutory seizure documentation with photo attachments.',
      icon: FileSpreadsheet,
    },
    {
      title: 'CITIZEN / CONSUMER VIEW',
      description: 'Provide a simplified interface for consumers/citizens.',
      detail: 'Enables consumers to verify MRP, Unit Sale Price, and mandatory manufacturer details for retail transparency.',
      icon: Users,
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <Scale className="w-3.5 h-3.5" />
            Comprehensive Capabilities
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything an Inspector Needs
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Built specifically to solve field inspection bottlenecks while maintaining strict statutory alignment and evidentiary rigor.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                id={`feature-card-${item.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="bg-slate-950/80 hover:bg-slate-850 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 transition duration-200 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-xs font-extrabold tracking-wider text-white uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-300/90 mt-1">
                      {item.description}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                  <span>PackCheck AI Platform Feature</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
