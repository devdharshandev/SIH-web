import React from 'react';
import { History, ShieldCheck, CheckCircle2, AlertTriangle, XCircle, Clock, Hash, Lock, Search } from 'lucide-react';
import { SAMPLE_HISTORY_RECORDS, AUDIT_TRAIL_LOGS } from '../data/mockData';

export const InspectionHistory: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <History className="w-3.5 h-3.5" />
            Traceability & Continuous Auditing
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Inspection History & Audit Trail
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Historical records help inspectors review previous inspection activity, identify recurring batch discrepancies, and maintain tamper-evident legal records.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: SKU Historical Timeline (ABC Premium Rice Case) */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Product History Profile
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  ABC Premium Rice
                </h3>
              </div>

              <div className="text-right">
                <span className="text-xs text-slate-400 block">Total Inspections</span>
                <span className="text-2xl font-black text-blue-400 font-mono">4</span>
              </div>
            </div>

            {/* Timeline Cards */}
            <div className="space-y-3 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {SAMPLE_HISTORY_RECORDS.map((record) => (
                <div 
                  key={record.id}
                  className="relative flex items-start gap-4 pl-8 group"
                >
                  {/* Timeline dot */}
                  <span className={`absolute left-2 top-3 w-3.5 h-3.5 rounded-full border-2 border-slate-900 transition ${
                    record.status === 'COMPLIANT'
                      ? 'bg-emerald-400'
                      : record.status === 'NEEDS REVIEW'
                      ? 'bg-amber-400'
                      : 'bg-rose-400'
                  }`} />

                  {/* Record Box */}
                  <div className="flex-1 bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">
                          {record.inspectionDate}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          {record.batchNumber}
                        </span>
                      </div>

                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        record.status === 'COMPLIANT'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : record.status === 'NEEDS REVIEW'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-rose-950 text-rose-300 border border-rose-800'
                      }`}>
                        {record.score}% • {record.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-900">
                      <span>Inspector ID: <strong className="text-slate-300">{record.inspectorId}</strong></span>
                      <span>Jurisdiction: <strong className="text-slate-300">{record.district}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 italic text-center">
              Historical records help inspectors review previous inspection activity.
            </p>
          </div>

          {/* Column 2: Cryptographic Audit Trail */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Immutable Audit Log
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  Chain-of-Custody Records
                </h3>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/40">
                <Lock className="w-3.5 h-3.5" />
                Tamper-Resistant
              </span>
            </div>

            <p className="text-xs text-slate-300">
              Every action—from raw image capture to automated rule evaluation and final officer sign-off—is committed to an immutable log with cryptographic digest hashes.
            </p>

            {/* Audit Logs list */}
            <div className="space-y-3">
              {AUDIT_TRAIL_LOGS.map((log, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 font-mono text-xs"
                >
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Clock className="w-3 h-3" />
                      {log.time}
                    </span>
                    <span className="text-slate-500 font-bold">{log.hash}</span>
                  </div>

                  <div className="font-bold text-slate-200 text-xs">
                    {log.action}
                  </div>

                  <div className="text-[11px] text-slate-400 space-y-0.5">
                    <div>Actor: <span className="text-slate-300">{log.inspector}</span></div>
                    <div>Target: <span className="text-slate-300">{log.target}</span></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-blue-950/40 rounded-xl border border-blue-900/40 text-xs text-blue-200 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Audit records support official legal proceedings and internal accountability.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
