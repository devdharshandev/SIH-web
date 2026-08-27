import React from 'react';
import { 
  Code2, Smartphone, Sparkles, Scan, Eye, Scale, 
  Database, Lock, Bell, Cloud, Cpu, Layers 
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const technologies = [
    {
      name: 'Kotlin & Android Runtime',
      category: 'Mobile Application Framework',
      description: 'Native Android core providing high-performance camera pipeline, multi-threading, and low-latency image processing.',
      status: 'Active / Implemented',
      icon: Code2,
    },
    {
      name: 'Jetpack Compose UI',
      category: 'Declarative Modern UI',
      description: 'Reactive, modular UI components enabling fluid bounding box annotations, responsive inspectors, and clean dark/light themes.',
      status: 'Active / Implemented',
      icon: Smartphone,
    },
    {
      name: 'Google Gemini AI',
      category: 'Multimodal Intelligence',
      description: 'Contextual AI assistance for label understanding, multilingual translation, standard unit normalization, and complex layout reasoning.',
      status: 'Active / Implemented',
      icon: Sparkles,
    },
    {
      name: 'On-Device Optical Character Recognition (OCR)',
      category: 'Computer Vision & Text Extraction',
      description: 'On-device ML Kit text recognition for zero-latency label parsing, character segmentation, and bounding box coordinate calculation.',
      status: 'Active / Implemented',
      icon: Scan,
    },
    {
      name: 'Computer Vision Preprocessing',
      category: 'Image Pipeline',
      description: 'Adaptive thresholding, perspective correction, reflection suppression, and contrast enhancement for difficult shiny packaging.',
      status: 'Active / Implemented',
      icon: Eye,
    },
    {
      name: 'Legal Metrology Rule Evaluator',
      category: 'Deterministic Rule Engine',
      description: 'Configurable logic matrix enforcing Legal Metrology (Packaged Commodities) Rules, 2011 clauses and USP amendment mandates.',
      status: 'Active / Implemented',
      icon: Scale,
    },
    {
      name: 'Room Local Database (Offline-First)',
      category: 'Local Data Persistence',
      description: 'Robust offline storage ensuring field inspectors can scan, annotate, and log inspections in remote areas without internet connectivity.',
      status: 'Active / Implemented',
      icon: Database,
    },
    {
      name: 'Immutable Audit Logging Engine',
      category: 'Security & Integrity',
      description: 'Tamper-evident audit subsystem logging digital signatures, device metadata, inspector IDs, and SHA-256 evidence hashes.',
      status: 'Active / Implemented',
      icon: Lock,
    },
    {
      name: 'Real-Time Notification System',
      category: 'Alert Dispatch',
      description: 'System alerts for recurring batch non-conformances, inspection sync statuses, and statutory rule configuration updates.',
      status: 'Active / Implemented',
      icon: Bell,
    },
    {
      name: 'Central Sync & RESTful Cloud API',
      category: 'Enterprise Integration',
      description: 'Scalable backend synchronization connecting field inspection devices to central departmental servers and state dashboards.',
      status: 'Active / Implemented',
      icon: Cloud,
    },
    {
      name: 'Federated Automated Rule Sync',
      category: 'Advanced Governance',
      description: 'Dynamic cloud-to-device rule catalog updates allowing instant deployment of new gazette notifications without app re-installation.',
      status: 'Future / Planned',
      icon: Layers,
    },
  ];

  return (
    <section id="technology" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <Cpu className="w-3.5 h-3.5" />
            Engineering & System Stack
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Powered by Modern Technology
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Built with modern native Android, high-accuracy computer vision, explainable AI assistance, and offline-first database architecture.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const IconComponent = tech.icon;
            const isPlanned = tech.status.includes('Planned');
            return (
              <div
                key={tech.name}
                id={`tech-card-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isPlanned
                        ? 'bg-amber-950/80 text-amber-300 border border-amber-800/40'
                        : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/40'
                    }`}>
                      {tech.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider block">
                      {tech.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {tech.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-900 text-[10px] text-slate-500 font-mono">
                  Stack Verified
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
