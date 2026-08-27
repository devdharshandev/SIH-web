import React, { useState } from 'react';
import { Eye, ShieldAlert, CheckCircle2, AlertTriangle, ArrowRight, CornerDownRight, ZoomIn, Layers, FileCheck } from 'lucide-react';

export const EvidenceSection: React.FC = () => {
  const [showEvidenceDetail, setShowEvidenceDetail] = useState(false);

  return (
    <section id="evidence" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
            <Eye className="w-3.5 h-3.5" />
            Transparent & Explainable AI
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI That Shows Its Evidence
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            PackCheck AI is designed to provide more than a simple pass/fail result. The system can present detected information, confidence and supporting evidence so that an inspector can review the result.
          </p>
        </div>

        {/* Evidence Visual Sequence Diagram */}
        <div className="mt-12 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-4">
            Evidence Pipeline Sequence
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
              <span className="text-xs font-mono font-bold text-blue-400">01</span>
              <span className="text-xs font-bold text-slate-200 uppercase">PACKAGE IMAGE</span>
              <span className="text-[10px] text-slate-400">High-res multi-view</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400">02</span>
              <span className="text-xs font-bold text-slate-200 uppercase">DETECTED REGION</span>
              <span className="text-[10px] text-slate-400">Spatial coordinates</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
              <span className="text-xs font-mono font-bold text-indigo-400">03</span>
              <span className="text-xs font-bold text-slate-200 uppercase">EXTRACTED INFO</span>
              <span className="text-[10px] text-slate-400">Parsed strings & units</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
              <span className="text-xs font-mono font-bold text-amber-400">04</span>
              <span className="text-xs font-bold text-slate-200 uppercase">COMPLIANCE CHECK</span>
              <span className="text-[10px] text-slate-400">Rules 2011 logic</span>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col items-center justify-center space-y-2">
              <span className="text-xs font-mono font-bold text-cyan-400">05</span>
              <span className="text-xs font-bold text-slate-200 uppercase">CONFIDENCE</span>
              <span className="text-[10px] text-slate-400">Statistical reliability</span>
            </div>

            <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-600/40 flex flex-col items-center justify-center space-y-2">
              <span className="text-xs font-mono font-bold text-emerald-400">06</span>
              <span className="text-xs font-bold text-white uppercase">INSPECTOR REVIEW</span>
              <span className="text-[10px] text-blue-200">Human determination</span>
            </div>
          </div>
        </div>

        {/* Concrete Example Showcase Card */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Example Card */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  CASE STUDY: UNCERTAIN REGION
                </span>
                <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  SAMPLE RECORD
                </span>
              </div>

              {/* Potential Issue Card as requested */}
              <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                    POTENTIAL ISSUE
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Rule 6(1)(g)
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">
                    Consumer-care information
                  </h4>
                  <p className="text-xs text-amber-200/90 font-medium">
                    Not reliably detected
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                  <span className="text-slate-400">Confidence Score:</span>
                  <span className="font-mono font-bold text-amber-400">67%</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">System Screening:</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    NEEDS INSPECTOR REVIEW
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowEvidenceDetail(!showEvidenceDetail)}
                    className="w-full py-2 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                    {showEvidenceDetail ? 'HIDE EVIDENCE CROP' : 'VIEW EVIDENCE'}
                  </button>
                </div>
              </div>

              {/* Expandable Evidence Detail Box */}
              {showEvidenceDetail && (
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3 animate-in fade-in duration-150">
                  <div className="text-xs font-bold text-slate-300 flex items-center justify-between">
                    <span>Optical Bounding Box Crop</span>
                    <span className="font-mono text-[10px] text-cyan-400">[x: 180, y: 440, w: 220, h: 60]</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 font-mono text-[11px] text-slate-300 space-y-1">
                    <div>Raw OCR Token: <span className="text-amber-300">"customercare@... [noise: 0x88]"</span></div>
                    <div>Reason for Review: <span className="text-slate-400">Packaging fold reflection reduces character legibility below 75% threshold.</span></div>
                  </div>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-400 italic">
              Notice: PackCheck AI flags this for human inspection rather than claiming a definitive legal violation.
            </p>
          </div>

          {/* Right Explanatory Pillars */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  Bounding Box Evidence Localization
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every extracted declaration is indexed with physical bounding box pixel coordinates, allowing the inspector to tap any finding and immediately inspect the exact cropped label segment.
                </p>
              </div>

              <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-emerald-400" />
                  Statutory Rule Mapping
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The system maps findings directly to clauses under Legal Metrology Rules, 2011 (such as Rule 6 for mandatory declarations, Rule 12 for standard quantity units, and amended Unit Sale Price clauses).
                </p>
              </div>

              <div className="p-5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  Confidence-Aware Thresholds
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Instead of producing false positives, low-confidence results (e.g. from blurred text or creased plastic) are surfaced transparently with a "Needs Review" status for field verification.
                </p>
              </div>
            </div>

            <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-900/40 text-xs text-blue-200">
              💡 <strong>Human Governance:</strong> Authorized inspectors can override any automated extraction, attach manual annotations, and record verified physical dimensions.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
