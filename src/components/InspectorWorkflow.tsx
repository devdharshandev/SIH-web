import React from 'react';
import { UserCheck, Camera, Cpu, Eye, CheckCheck, Save, FileSpreadsheet, ShieldAlert, ArrowRight, CornerRightDown } from 'lucide-react';

export const InspectorWorkflow: React.FC = () => {
  const workflowNodes = [
    {
      title: 'INSPECTOR',
      role: 'Authorized Officer',
      desc: 'Initiates field session at retail, wholesale or manufacturing premises.',
      icon: UserCheck,
    },
    {
      title: 'CAPTURE PRODUCT',
      role: 'Multi-View Imaging',
      desc: 'Snaps high-resolution photos of front display, back panel, and MRP tag.',
      icon: Camera,
    },
    {
      title: 'AI-ASSISTED ANALYSIS',
      role: 'OCR & Rule Engine',
      desc: 'Extracts declarations, detects bounding boxes, and scores rule compliance.',
      icon: Cpu,
    },
    {
      title: 'REVIEW EVIDENCE',
      role: 'Visual Inspection',
      desc: 'Examines flagged boxes, optical confidence bars, and standard unit checks.',
      icon: Eye,
    },
    {
      title: 'CONFIRM / REJECT / REQUEST',
      role: 'Human Decision',
      desc: 'Inspector validates automated extractions, edits discrepancies, or requests rescan.',
      icon: CheckCheck,
    },
    {
      title: 'SAVE INSPECTION',
      role: 'Audit Log Recording',
      desc: 'Digitally signs inspection findings into the immutable local and cloud log.',
      icon: Save,
    },
    {
      title: 'GENERATE REPORT',
      role: 'Notice & Analytics',
      desc: 'Produces official Inspection Memo or exportable compliance documentation.',
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section id="inspector-workflow" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
            <UserCheck className="w-3.5 h-3.5" />
            Human-in-the-Loop Governance
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Assists. The Inspector Decides.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            PackCheck AI is designed as a human-in-the-loop system. AI assists with screening and evidence extraction while the authorized inspector remains responsible for verification.
          </p>
        </div>

        {/* Visual Workflow Steps */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 relative">
            {workflowNodes.map((node, index) => {
              const IconComponent = node.icon;
              return (
                <div
                  key={node.title}
                  id={`inspector-step-${index + 1}`}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between relative hover:border-emerald-500/50 transition group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-emerald-400 transition">
                        0{index + 1}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 group-hover:text-emerald-400 group-hover:bg-emerald-950/60 transition">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-extrabold tracking-wider text-white uppercase">
                        {node.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-emerald-400 block mt-0.5">
                        {node.role}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {node.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono flex items-center justify-between">
                    <span>Phase {index + 1}</span>
                    <ArrowRight className="w-3 h-3 text-slate-600 hidden lg:block group-hover:text-emerald-400 group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operational Safeguards Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-cyan-400" />
              Inspector Override Authority
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every automated extraction can be edited, augmented with manual caliper measurements, or rejected by the officer before saving.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCheck className="w-4 h-4 text-emerald-400" />
              Digital Sign-Off
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Inspections are linked to the verified officer ID and GPS-tagged device timestamp, ensuring strict legal admissibility and chain of custody.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-indigo-400" />
              Evidence Attachment
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Original label images, high-contrast bounding box crops, and rule citation notes are automatically embedded into exportable Inspection Memos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
