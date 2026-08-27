import React from 'react';
import { 
  Network, UserCheck, Smartphone, Camera, Eye, 
  Sparkles, FileText, Scale, CheckSquare, HelpCircle, 
  Database, Lock, BarChart3, ArrowDown, ArrowRight 
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const architectureNodes = [
    { id: 1, title: 'INSPECTOR', label: 'Authorized Officer', icon: UserCheck, tier: 'User Tier' },
    { id: 2, title: 'PACKCHECK AI APPLICATION', label: 'Android Jetpack App', icon: Smartphone, tier: 'Presentation Tier' },
    { id: 3, title: 'IMAGE / LABEL', label: 'Multi-View Label Capture', icon: Camera, tier: 'Ingress Tier' },
    { id: 4, title: 'IMAGE PROCESSING', label: 'Contrast & Normalization', icon: Eye, tier: 'Preprocessing Tier' },
    { id: 5, title: 'OCR + AI', label: 'ML Kit & Gemini Reasoning', icon: Sparkles, tier: 'Intelligence Tier' },
    { id: 6, title: 'STRUCTURED INFORMATION', label: 'Parsed Entities & Units', icon: FileText, tier: 'Data Modeling Tier' },
    { id: 7, title: 'LEGAL METROLOGY RULE EVALUATOR', label: 'Rules 2011 Logic Matrix', icon: Scale, tier: 'Compliance Engine' },
    { id: 8, title: 'COMPLIANCE SCREENING', label: 'Clause Verification Score', icon: CheckSquare, tier: 'Scoring Tier' },
    { id: 9, title: 'EVIDENCE + CONFIDENCE', label: 'Bounding Boxes & % Scores', icon: HelpCircle, tier: 'Explainability Tier' },
    { id: 10, title: 'INSPECTOR VERIFICATION', label: 'Human-in-the-Loop Signoff', icon: UserCheck, tier: 'Governance Tier' },
    { id: 11, title: 'DATABASE', label: 'Room SQLite & Cloud Sync', icon: Database, tier: 'Persistence Tier' },
    { id: 12, title: 'AUDIT LOG', label: 'Tamper-Evident SHA-256', icon: Lock, tier: 'Security Tier' },
    { id: 13, title: 'REPORTS + ANALYTICS', label: 'Memos & Admin Dashboard', icon: BarChart3, tier: 'Output Tier' },
  ];

  return (
    <section id="architecture" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <Network className="w-3.5 h-3.5" />
            System Architecture
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            End-to-End Technical Architecture
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A modular, explainable, and accountable data pipeline designed for high-stakes compliance verification and seamless field operation.
          </p>
        </div>

        {/* Visual Architecture Flowchart */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                DATA & EXECUTION FLOW
              </span>
              <span className="text-xs font-mono text-slate-400">
                13-Node Complete Pipeline
              </span>
            </div>

            {/* Architecture Node Grid with sequential arrows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {architectureNodes.map((node, index) => {
                const IconComponent = node.icon;
                const isHighlight = node.title.includes('RULE EVALUATOR') || node.title.includes('VERIFICATION');
                return (
                  <div
                    key={node.id}
                    id={`arch-node-${node.id}`}
                    className={`rounded-2xl border p-4 flex flex-col justify-between transition relative ${
                      isHighlight
                        ? 'bg-blue-950/70 border-blue-500 shadow-md shadow-blue-500/20'
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold text-slate-500">
                          {node.id < 10 ? `0${node.id}` : node.id}
                        </span>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isHighlight ? 'bg-blue-600 text-white' : 'bg-slate-900 text-blue-400'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                          {node.tier}
                        </span>
                        <h4 className="text-xs font-extrabold text-white tracking-wide mt-0.5 leading-tight">
                          {node.title}
                        </h4>
                      </div>

                      <p className="text-[11px] text-slate-300">
                        {node.label}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-900 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>Node {node.id}</span>
                      {index < architectureNodes.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-cyan-400 hidden sm:block" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Architecture Explanatory Footer */}
            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-white block mb-1">Zero Blind Decision-Making:</strong>
                All AI and OCR extractions are accompanied by statistical confidence metrics and localized bounding coordinates.
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-white block mb-1">Human Sovereign Verification:</strong>
                Legal determinations are reserved exclusively for authorized officers who digitally sign inspection outputs.
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <strong className="text-white block mb-1">Tamper-Proof Audit History:</strong>
                Every change and verification is cryptographically signed and stored in a searchable audit trail for judicial defense.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
