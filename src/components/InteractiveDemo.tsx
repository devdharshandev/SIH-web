import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, AlertTriangle, XCircle, Eye, ShieldCheck, 
  RotateCcw, Sliders, FileText, Check, HelpCircle, ArrowRight, CornerDownRight, 
  Download, Printer, Info
} from 'lucide-react';
import { DEMO_SCENARIOS } from '../data/mockData';
import { DemoScenario, ExtractedField } from '../types';

export const InteractiveDemo: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);
  const [activeFieldDetail, setActiveFieldDetail] = useState<ExtractedField | null>(null);
  const [inspectorVerdict, setInspectorVerdict] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [memoGenerated, setMemoGenerated] = useState<boolean>(false);

  const currentScenario: DemoScenario = DEMO_SCENARIOS[selectedScenarioIndex];

  const handleScenarioChange = (index: number) => {
    setIsSimulating(true);
    setSelectedScenarioIndex(index);
    setActiveFieldDetail(null);
    setInspectorVerdict(null);
    setMemoGenerated(false);
    setTimeout(() => {
      setIsSimulating(false);
    }, 350);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'COMPLIANT':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            COMPLIANT
          </span>
        );
      case 'NEEDS REVIEW':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            NEEDS REVIEW
          </span>
        );
      case 'POTENTIAL ISSUE':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-rose-500/20 text-rose-300 border border-rose-500/40">
            <XCircle className="w-3.5 h-3.5 text-rose-400" />
            POTENTIAL ISSUE
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="demo-section" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Prototype Simulator
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              See PackCheck AI in Action
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300">
              Test how the AI-assisted pipeline extracts label text, cross-references Legal Metrology Rules, and provides verifiable evidence for inspector decision.
            </p>
          </div>

          {/* Demo Data disclaimer pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-400 font-mono">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>DEMO DATA • Standalone Mode</span>
          </div>
        </div>

        {/* 3 Scenario Switcher Tabs */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {DEMO_SCENARIOS.map((scenario, idx) => (
            <button
              key={scenario.id}
              type="button"
              id={`demo-scenario-tab-${scenario.id}`}
              onClick={() => handleScenarioChange(idx)}
              className={`p-4 rounded-xl border text-left transition flex flex-col justify-between ${
                selectedScenarioIndex === idx
                  ? 'bg-slate-800 border-blue-500 ring-2 ring-blue-500/20 shadow-lg'
                  : 'bg-slate-950/60 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    {scenario.title.split(':')[0]}
                  </span>
                  {getStatusBadge(scenario.status)}
                </div>
                <h4 className="text-sm font-bold text-white">
                  {scenario.productName}
                </h4>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {scenario.category}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Compliance Score:</span>
                <span className={`font-mono font-bold ${
                  scenario.score >= 90 ? 'text-emerald-400' : scenario.score >= 70 ? 'text-amber-400' : 'text-rose-400'
                }`}>
                  {scenario.score} / 100
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Main Interactive Demo Simulator Area */}
        <div className={`mt-8 bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-2xl relative transition-opacity duration-200 ${
          isSimulating ? 'opacity-50' : 'opacity-100'
        }`}>
          
          {/* Top Bar: Pipeline Sequence Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-bold">PIPELINE:</span>
              <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-slate-300">Image</span>
              <span>→</span>
              <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-cyan-300">OCR</span>
              <span>→</span>
              <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-indigo-300">Fields</span>
              <span>→</span>
              <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-amber-300">Rule Checks</span>
              <span>→</span>
              <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800 text-emerald-400">Verdict</span>
            </div>

            <div className="text-xs text-slate-400">
              Inspection Target: <span className="text-white font-bold">{currentScenario.productName}</span>
            </div>
          </div>

          {/* Core Simulator Grid: 2 Columns */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column (5 cols): Visual Package with OCR Overlays & Evidence Bounding Boxes */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Visual Evidence & Label Bounding
                </span>
                <span className="text-[11px] font-mono text-cyan-400">
                  Interactive Crop Mode
                </span>
              </div>

              {/* Fictional Product Label Mockup with clickable bounding boxes */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 rounded-xl border-2 border-slate-700 p-5 flex flex-col justify-between overflow-hidden shadow-inner select-none">
                
                {/* Simulated scan line animation */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-75 animate-pulse pointer-events-none" />

                {/* Simulated packaging brand area */}
                <div className="relative z-10 p-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-xs">
                  <div className="text-xs font-black tracking-widest text-slate-300 uppercase">
                    {currentScenario.productName.split(' ')[0]} PACKAGING CO.
                  </div>
                  <div className="text-lg font-extrabold text-white mt-1">
                    {currentScenario.productName}
                  </div>
                  <div className="text-[10px] text-cyan-300">
                    Category: {currentScenario.category}
                  </div>
                </div>

                {/* Simulated Mandatory Declarations Panel on packaging */}
                <div className="relative z-10 p-3.5 bg-slate-900/90 rounded-lg border border-slate-700/80 space-y-2 text-xs">
                  <div className="text-[10px] font-mono font-bold text-slate-400 border-b border-slate-800 pb-1 flex justify-between">
                    <span>MANDATORY DECLARATIONS PANEL</span>
                    <span className="text-emerald-400">Rule 6(1)</span>
                  </div>

                  {/* Render the clickable bounding items */}
                  <div className="space-y-1.5">
                    {currentScenario.extractedFields.map((field, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveFieldDetail(field)}
                        className={`p-1.5 rounded cursor-pointer transition text-[11px] flex items-center justify-between border ${
                          activeFieldDetail?.label === field.label
                            ? 'bg-blue-600/30 border-blue-400 text-white ring-1 ring-blue-400'
                            : field.status === 'passed'
                            ? 'bg-emerald-950/40 border-emerald-800/40 text-slate-200 hover:bg-emerald-900/30'
                            : field.status === 'review'
                            ? 'bg-amber-950/40 border-amber-800/40 text-amber-200 hover:bg-amber-900/30'
                            : 'bg-rose-950/40 border-rose-800/40 text-rose-200 hover:bg-rose-900/30'
                        }`}
                      >
                        <div className="truncate max-w-[190px]">
                          <span className="font-semibold text-slate-400">{field.label.split('/')[0]}: </span>
                          <span>{field.value}</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold ml-1 flex-shrink-0">
                          {field.confidence}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer of simulated packaging */}
                <div className="relative z-10 text-center text-[10px] text-slate-500 font-mono">
                  Click any declaration to inspect bounding box & rule clause
                </div>
              </div>

              {/* Evidence Note below image */}
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300">
                <span className="font-bold text-slate-400 block mb-1">OCR Analysis Summary:</span>
                <p className="text-slate-300">{currentScenario.evidenceNotes}</p>
              </div>
            </div>

            {/* Right Column (7 cols): Extracted Information, Rules & Compliance Assessment */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Compliance Score Ribbon */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    COMPLIANCE SCREENING RESULT
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-white">
                      {currentScenario.score}
                    </span>
                    <span className="text-sm text-slate-400">/ 100</span>
                    <span className="text-xs text-slate-500 ml-2">
                      (System screening metric)
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end">
                  <span className="text-[11px] uppercase font-bold text-slate-400 mb-1">
                    SYSTEM STATUS
                  </span>
                  {getStatusBadge(currentScenario.status)}
                </div>
              </div>

              {/* Extracted Fields Table */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    EXTRACTED INFORMATION & RULE VERIFICATION
                  </h4>
                  <span className="text-[11px] text-slate-500">
                    {currentScenario.extractedFields.length} statutory checks
                  </span>
                </div>

                <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {currentScenario.extractedFields.map((field, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveFieldDetail(field)}
                      className={`p-3 rounded-xl border cursor-pointer transition ${
                        activeFieldDetail?.label === field.label
                          ? 'bg-blue-900/30 border-blue-500 shadow-md'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-0.5 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-white">
                              {field.label}
                            </span>
                            {field.ruleReference && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                                {field.ruleReference}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-300 font-medium">
                            {field.value}
                          </p>
                          {field.notes && (
                            <p className="text-[11px] text-amber-300/90 pt-0.5">
                              ⚠️ {field.notes}
                            </p>
                          )}
                        </div>

                        <div className="text-right flex-shrink-0">
                          <span className={`inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                            field.confidence >= 90
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                              : field.confidence >= 70
                              ? 'bg-amber-950 text-amber-300 border border-amber-800'
                              : 'bg-rose-950 text-rose-300 border border-rose-800'
                          }`}>
                            {field.confidence}% Conf.
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Field Deep Dive Drawer (if active) */}
              {activeFieldDetail && (
                <div className="p-4 bg-blue-950/40 rounded-xl border border-blue-500/40 space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      Inspecting: {activeFieldDetail.label}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveFieldDetail(null)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                    <div>
                      <span className="text-slate-400 block">Extracted String:</span>
                      <span className="font-semibold text-white">{activeFieldDetail.value}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Applicable Clause:</span>
                      <span className="font-mono text-cyan-300">{activeFieldDetail.ruleReference || 'Legal Metrology Rules 2011'}</span>
                    </div>
                  </div>
                  {activeFieldDetail.notes && (
                    <div className="text-xs text-amber-300 bg-amber-950/60 p-2 rounded border border-amber-800/60 mt-1">
                      {activeFieldDetail.notes}
                    </div>
                  )}
                </div>
              )}

              {/* Inspector Action Recommended & Verification Module */}
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Human-in-the-Loop Verification
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Inspector Action
                  </span>
                </div>

                <p className="text-xs text-slate-300">
                  <strong className="text-slate-200">Recommendation: </strong>
                  {currentScenario.inspectorActionRecommended}
                </p>

                {/* Interactive Verification Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setInspectorVerdict('APPROVED')}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      inspectorVerdict === 'APPROVED'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-emerald-950/60 text-emerald-300 hover:bg-emerald-900/80 border border-emerald-700/50'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                    Verify & Approve
                  </button>

                  <button
                    type="button"
                    onClick={() => setInspectorVerdict('FLAGGED_FOR_HEARING')}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      inspectorVerdict === 'FLAGGED_FOR_HEARING'
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-rose-950/60 text-rose-300 hover:bg-rose-900/80 border border-rose-700/50'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Flag for Hearing
                  </button>

                  <button
                    type="button"
                    onClick={() => setInspectorVerdict('REQUEST_RESCAN')}
                    className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                      inspectorVerdict === 'REQUEST_RESCAN'
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-amber-950/60 text-amber-300 hover:bg-amber-900/80 border border-amber-700/50'
                    }`}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Request Re-Scan
                  </button>

                  <button
                    type="button"
                    onClick={() => setMemoGenerated(true)}
                    className="px-3.5 py-2 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white ml-auto flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Generate Memo
                  </button>
                </div>

                {/* Verdict Feedback */}
                {inspectorVerdict && (
                  <div className="text-xs p-2.5 rounded-lg bg-slate-950 border border-slate-700 font-mono text-cyan-300 flex items-center justify-between">
                    <span>Inspector Verdict: <strong>{inspectorVerdict}</strong></span>
                    <span className="text-[10px] text-slate-400">Timestamp: 2026-08-27 IST</span>
                  </div>
                )}

                {/* Generated Memo Notification */}
                {memoGenerated && (
                  <div className="text-xs p-3 rounded-lg bg-blue-950/90 border border-blue-500 text-blue-200 space-y-1 animate-in fade-in duration-150">
                    <div className="font-bold flex items-center justify-between text-white">
                      <span>Inspection Memo Generated: #{currentScenario.id.toUpperCase()}-2026</span>
                      <span className="text-[10px] bg-blue-500 px-1.5 py-0.5 rounded text-white font-mono">PDF Ready</span>
                    </div>
                    <p className="text-[11px] text-blue-300">
                      Structured findings for {currentScenario.productName} recorded into tamper-evident audit history with rule evaluations.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Bottom disclaimer */}
          <div className="mt-8 pt-4 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-500 italic">
              Demo result based on sample data. PackCheck AI assists inspection workflow while the authorized inspector remains responsible for verification.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
