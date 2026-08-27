import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Common questions regarding PackCheck AI architecture, compliance checking methodology, and operational governance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-12 max-w-4xl space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition"
              >
                <button
                  type="button"
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-850 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-slate-400 flex-shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 text-blue-400' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
