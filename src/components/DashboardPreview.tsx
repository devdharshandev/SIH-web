import React, { useState } from 'react';
import { 
  BarChart3, PieChart as PieIcon, TrendingUp, AlertCircle, ShieldCheck, 
  Layers, Filter, Calendar, MapPin, Download, RefreshCw 
} from 'lucide-react';
import { 
  ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, Tooltip, Legend 
} from 'recharts';
import { 
  DASHBOARD_STATS, INSPECTION_ACTIVITY_DATA, 
  COMPLIANCE_DISTRIBUTION_DATA, COMMON_ISSUES_DATA, CATEGORY_DATA 
} from '../data/mockData';

export const DashboardPreview: React.FC = () => {
  const [timeRange, setTimeRange] = useState('Last 5 Months');

  return (
    <section id="dashboard" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Prototype Disclaimer */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
              <BarChart3 className="w-3.5 h-3.5" />
              Administrative Intelligence
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Prototype Dashboard Preview
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Provides supervisory officers with high-level compliance trends, regional inspection activity feeds, and common label non-conformance statistics.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>PROTOTYPE DASHBOARD PREVIEW • DEMO DATA</span>
          </div>
        </div>

        {/* 4 Stat Hero Metrics */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              TOTAL INSPECTIONS
            </span>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">
              {DASHBOARD_STATS.totalInspections.toLocaleString()}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18.4% this month</span>
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-emerald-900/40 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              COMPLIANT
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
              {DASHBOARD_STATS.compliant.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400">
              78.8% of total screenings
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-amber-900/40 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              NEEDS REVIEW
            </span>
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">
              {DASHBOARD_STATS.needsReview.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400">
              15.0% flagged for check
            </div>
          </div>

          <div className="bg-slate-950 p-5 rounded-2xl border border-rose-900/40 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
              POTENTIAL ISSUES
            </span>
            <div className="text-3xl sm:text-4xl font-black text-rose-400 font-mono">
              {DASHBOARD_STATS.potentialIssues.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400">
              6.2% non-conformance rate
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Chart 1: Inspection Activity over time (Bar chart) */}
          <div className="lg:col-span-8 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                  Inspection Activity & Monthly Trends
                </h4>
                <p className="text-xs text-slate-400">
                  Volume of compliant vs. review vs. potential issues by month
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                  <Calendar className="w-3 h-3" />
                  {timeRange}
                </span>
              </div>
            </div>

            <div className="h-72 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={INSPECTION_ACTIVITY_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px', color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                  <Bar dataKey="compliant" name="Compliant" fill="#10b981" radius={[4, 4, 0, 0]} stackId="a" />
                  <Bar dataKey="needsReview" name="Needs Review" fill="#f59e0b" radius={[4, 4, 0, 0]} stackId="a" />
                  <Bar dataKey="issues" name="Potential Issues" fill="#ef4444" radius={[4, 4, 0, 0]} stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Compliance Distribution (Pie/Donut) */}
          <div className="lg:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Compliance Distribution
              </h4>
              <p className="text-xs text-slate-400">
                Aggregate screening distribution
              </p>
            </div>

            <div className="h-72 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={COMPLIANCE_DISTRIBUTION_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {COMPLIANCE_DISTRIBUTION_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px', color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 3: Common Non-Conformance Triggers */}
          <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Common Flagged Declarations
              </h4>
              <p className="text-xs text-slate-400">
                Top rule clauses identified during routine screenings
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {COMMON_ISSUES_DATA.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-slate-300">{item.issue}</span>
                    <span className="font-mono text-slate-400">{item.count} incidents</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-amber-500 h-2 rounded-full"
                      style={{ width: `${(item.count / 350) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 4: Categories Monitored */}
          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <div className="border-b border-slate-800 pb-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Monitored Commodity Sectors
              </h4>
              <p className="text-xs text-slate-400">
                Inspection volume by packaged goods category
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {CATEGORY_DATA.map((cat, idx) => (
                <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">{cat.category}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-300">{cat.percentage}%</span>
                </div>
              ))}

              <div className="p-3 bg-blue-950/30 rounded-xl border border-blue-900/40 text-[11px] text-blue-300">
                ℹ️ Fictional aggregate statistics generated for SIH 2026 Prototype preview.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
