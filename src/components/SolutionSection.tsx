import React, { useState } from 'react';
import { Camera, FileText, Tag, CheckSquare, HelpCircle, UserCheck, FileSpreadsheet, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const workflowSteps = [
    {
      step: '01',
      title: 'SCAN',
      subtitle: 'Capture or upload package images.',
      description: 'The inspector captures single or multi-panel images (front display, back declarations, and side panels) using mobile camera or file upload.',
      techFocus: 'Multi-view image acquisition, perspective correction, brightness & contrast normalization',
      icon: Camera,
    },
    {
      step: '02',
      title: 'UNDERSTAND',
      subtitle: 'Extract relevant information from package labels.',
      description: 'Optical Character Recognition and on-device NLP extract text segments, detect bounding boxes, and parse alphanumeric values.',
      techFocus: 'ML Kit OCR, spatial text clustering, localized bounding coordinate generation',
      icon: FileText,
    },
    {
      step: '03',
      title: 'CLASSIFY',
      subtitle: 'Identify the product/category context.',
      description: 'The system determines the commodity category (e.g., packaged grains, edible oil, confectionery) to map specific rule requirements.',
      techFocus: 'Commodity taxonomy mapping, Rule 12 Schedule unit rules, exempt categories handling',
      icon: Tag,
    },
    {
      step: '04',
      title: 'CHECK',
      subtitle: 'Evaluate configured compliance checks.',
      description: 'Extracted fields are evaluated against statutory rules (Name, Net Quantity, MRP, Unit Sale Price, Mfg Date, Packer Address, Consumer Care).',
      techFocus: 'Legal Metrology Rules 2011 logic matrix, standard SI unit parser, date validity checker',
      icon: CheckSquare,
    },
    {
      step: '05',
      title: 'EXPLAIN',
      subtitle: 'Show evidence and confidence for detected findings.',
      description: 'Provides exact bounding box locations, OCR confidence scores, and rule clause references for each evaluated declaration.',
      techFocus: 'Confidence weighting (0-100%), visual crop inspection, explainable evaluation notes',
      icon: HelpCircle,
    },
    {
      step: '06',
      title: 'VERIFY',
      subtitle: 'Allow the inspector to review and verify the result.',
      description: 'The authorized inspector inspects flagged items, accepts or overrides automated findings, and adds field observations.',
      techFocus: 'Human-in-the-loop authorization, inspector override logging, digital sign-off',
      icon: UserCheck,
    },
    {
      step: '07',
      title: 'REPORT',
      subtitle: 'Save the inspection and generate structured records.',
      description: 'Saves structured inspection records to the tamper-evident log, generates formal Inspection Memos, and syncs with admin monitoring.',
      techFocus: 'Immutable audit trail, PDF/JSON inspection memo generation, regional dashboard sync',
      icon: FileSpreadsheet,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <Shield className="w-3.5 h-3.5" />
            Inspection Architecture Workflow
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From Label Scanning to Inspection Intelligence
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            PackCheck AI brings image analysis, OCR, AI-assisted information extraction and configurable compliance checks into one inspection workflow.
          </p>
        </div>

        {/* The Core Motto Banner */}
        <div className="mt-10 p-6 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 rounded-2xl border border-blue-500/30 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base font-mono font-bold tracking-wider">
            <span className="text-cyan-300">AI ASSISTS</span>
            <span className="text-slate-600 font-sans">•</span>
            <span className="text-indigo-300">EVIDENCE SUPPORTS</span>
            <span className="text-slate-600 font-sans">•</span>
            <span className="text-emerald-400">INSPECTOR DECIDES</span>
          </div>
          <p className="text-xs text-slate-400 mt-2 max-w-xl mx-auto">
            PackCheck AI does not make the final legal decision. It equips the authorized enforcement officer with structured evidence and confidence metrics.
          </p>
        </div>

        {/* 7-Step Interactive Pipeline Carousel / Steps Grid */}
        <div className="mt-12">
          {/* Step Pill Selectors for fast browsing */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin">
            {workflowSteps.map((stepItem, idx) => (
              <button
                key={stepItem.step}
                type="button"
                id={`workflow-step-btn-${stepItem.step}`}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold whitespace-nowrap transition ${
                  activeStep === idx
                    ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/30">
                  {stepItem.step}
                </span>
                <span>{stepItem.title}</span>
              </button>
            ))}
          </div>

          {/* Active Step Deep Dive Card */}
          <div className="mt-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-3xl font-black text-blue-400">
                    {workflowSteps[activeStep].step}
                  </span>
                  <div className="h-6 w-px bg-slate-700" />
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {workflowSteps[activeStep].title}
                  </h3>
                </div>

                <p className="text-base font-semibold text-blue-200">
                  {workflowSteps[activeStep].subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {workflowSteps[activeStep].description}
                </p>

                <div className="pt-3 border-t border-slate-800 space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Under-The-Hood Mechanism
                  </span>
                  <p className="text-xs font-mono text-cyan-300 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    {workflowSteps[activeStep].techFocus}
                  </p>
                </div>
              </div>

              {/* Visual Graphic Representation of the step */}
              <div className="lg:col-span-5 bg-slate-950 rounded-xl p-6 border border-slate-800 flex flex-col justify-center items-center text-center space-y-3">
                {React.createElement(workflowSteps[activeStep].icon, {
                  className: 'w-16 h-16 text-blue-400 stroke-1 p-2 bg-blue-950/60 rounded-2xl border border-blue-800/60',
                })}
                <div className="font-bold text-slate-200 text-sm">
                  Step {workflowSteps[activeStep].step}: {workflowSteps[activeStep].title}
                </div>
                <div className="text-xs text-slate-400 max-w-xs">
                  {workflowSteps[activeStep].subtitle}
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button
                    type="button"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:pointer-events-none"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={activeStep === workflowSteps.length - 1}
                    onClick={() => setActiveStep((prev) => Math.min(workflowSteps.length - 1, prev + 1))}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-30 disabled:pointer-events-none"
                  >
                    Next Step
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Full Sequence Overview Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {workflowSteps.map((stepItem, idx) => (
              <div
                key={stepItem.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-3.5 rounded-xl border text-left transition ${
                  activeStep === idx
                    ? 'bg-blue-950/40 border-blue-500'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-bold text-blue-400">{stepItem.step}</span>
                  {activeStep > idx ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : null}
                </div>
                <div className="text-xs font-bold text-white">{stepItem.title}</div>
                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">{stepItem.subtitle}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
