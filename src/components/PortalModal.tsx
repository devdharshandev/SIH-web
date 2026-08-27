import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Shield, Smartphone, Laptop, Settings2, X, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: 'inspector' | 'admin' | 'citizen';
}

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose, defaultRole = 'inspector' }) => {
  const [selectedRole, setSelectedRole] = useState<'inspector' | 'admin' | 'citizen'>(defaultRole);
  const [customUrl, setCustomUrl] = useState(APP_CONFIG.appUrl);
  const [showConfig, setShowConfig] = useState(false);

  if (!isOpen) return null;

  const handleLaunch = () => {
    window.open(customUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="portal-modal-card" 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white p-6 relative">
          <button 
            id="modal-close-btn"
            onClick={onClose}
            aria-label="Close portal dialog"
            className="absolute top-4 right-4 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2 border border-blue-400/20">
            <Shield className="w-3.5 h-3.5 text-blue-300" />
            Inspection Portal Access
          </div>
          
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Launch PackCheck AI Platform
          </h3>
          <p className="text-blue-200 text-sm mt-1">
            Access the active inspection suite for field inspectors, regional admins, and public inquiry.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Role Switcher */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select Access Persona
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                id="portal-role-inspector"
                onClick={() => setSelectedRole('inspector')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition ${
                  selectedRole === 'inspector'
                    ? 'border-blue-600 bg-blue-50/80 text-blue-900 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Smartphone className={`w-5 h-5 mb-1 ${selectedRole === 'inspector' ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="text-xs font-bold">Field Inspector</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Label Scanning</span>
              </button>

              <button
                type="button"
                id="portal-role-admin"
                onClick={() => setSelectedRole('admin')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition ${
                  selectedRole === 'admin'
                    ? 'border-blue-600 bg-blue-50/80 text-blue-900 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Laptop className={`w-5 h-5 mb-1 ${selectedRole === 'admin' ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="text-xs font-bold">Admin Portal</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Rules & Audits</span>
              </button>

              <button
                type="button"
                id="portal-role-citizen"
                onClick={() => setSelectedRole('citizen')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition ${
                  selectedRole === 'citizen'
                    ? 'border-blue-600 bg-blue-50/80 text-blue-900 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                }`}
              >
                <CheckCircle2 className={`w-5 h-5 mb-1 ${selectedRole === 'citizen' ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="text-xs font-bold">Citizen View</span>
                <span className="text-[10px] text-slate-400 mt-0.5">Price & Net Qty</span>
              </button>
            </div>
          </div>

          {/* Configured Target URL */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between text-xs font-medium text-slate-600 mb-1.5">
              <span>Target Application Endpoint</span>
              <button 
                type="button"
                onClick={() => setShowConfig(!showConfig)}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold"
              >
                <Settings2 className="w-3.5 h-3.5" />
                {showConfig ? 'Hide Config' : 'Configure URL'}
              </button>
            </div>

            {showConfig ? (
              <div className="mt-2 space-y-2">
                <input 
                  type="text" 
                  value={customUrl} 
                  onChange={(e) => setCustomUrl(e.target.value)}
                  placeholder="https://your-packcheck-app.example" 
                  className="w-full text-xs font-mono px-3 py-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-[11px] text-slate-500">
                  Configured globally via <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">VITE_APP_URL</code>. Defaults to <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800">http://localhost:3000</code>.
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <code className="text-xs font-mono text-slate-700 truncate max-w-[320px]">
                  {customUrl}
                </code>
                <span className="inline-flex items-center text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  Connected
                </span>
              </div>
            )}
          </div>

          {/* Persona Permissions summary */}
          <div className="text-xs text-slate-600 bg-blue-50/50 p-3 rounded-lg border border-blue-100 space-y-1">
            <div className="font-semibold text-blue-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              {selectedRole === 'inspector' && 'Field Mode: OCR scanner, Legal Metrology rule check, photo evidence capture'}
              {selectedRole === 'admin' && 'Admin Mode: District statistics, rule versioning, inspection audit trail'}
              {selectedRole === 'citizen' && 'Citizen Mode: Verify MRP, Unit Sale Price, and package declarations'}
            </div>
            <p className="text-slate-500 text-[11px]">
              Prototype environment for Smart India Hackathon 2026 (Problem Statement 26034).
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              id="portal-modal-launch-btn"
              onClick={handleLaunch}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold shadow-md shadow-blue-700/20 transition active:scale-[0.98]"
            >
              Open Inspection Suite
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                const demoElem = document.getElementById('demo-section');
                if (demoElem) demoElem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition"
            >
              Try Web Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
