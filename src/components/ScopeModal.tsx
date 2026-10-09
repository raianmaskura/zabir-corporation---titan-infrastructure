import React, { useState } from 'react';

interface ScopeModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSector?: string;
}

export const ScopeModal: React.FC<ScopeModalProps> = ({ isOpen, onClose, defaultSector }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    organization: '',
    email: '',
    sector: defaultSector || 'transportation',
    scopeDescription: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      fullName: '',
      organization: '',
      email: '',
      sector: 'transportation',
      scopeDescription: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#001629]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-2xl shadow-2xl p-6 sm:p-8 flex flex-col gap-6 relative border border-slate-200 my-6 rounded-xs max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-slate-200 pb-4">
          <div>
            <span className="font-label-caps text-xs text-secondary uppercase tracking-wider font-bold">
              Formal Technical Submission
            </span>
            <h3 className="font-headline text-2xl text-on-surface font-bold mt-1">
              Request Scope Brief &amp; Advisory
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-900 p-2 rounded-xs hover:bg-slate-100 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col gap-6 py-4 animate-in fade-in duration-300">
            <div className="bg-slate-50 p-6 flex items-start gap-4 border-l-4 border-secondary rounded-xs border border-slate-200">
              <span className="material-symbols-outlined text-secondary text-4xl">task_alt</span>
              <div className="flex flex-col gap-1.5">
                <span className="font-headline text-xl text-primary font-bold">
                  Engineering Scope Request Registered
                </span>
                <span className="font-body-sm text-sm text-slate-700 leading-relaxed">
                  Your inquiry has been cataloged by the Zabir Technical Directorate. A designated Chief Technical Advisor will inspect project requirements and deliver preliminary Terms of Reference (ToR) within 48 hours.
                </span>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                onClick={handleReset}
                className="bg-secondary text-white font-label-md px-8 py-3 hover:bg-secondary/90 transition-colors cursor-pointer rounded-xs text-sm font-bold shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <p className="font-body-sm text-sm text-slate-600 leading-relaxed">
              Complete the technical parameters below. Our engineering directorate will review project specifications and respond within two business days.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-caps text-xs text-slate-700 uppercase font-bold">
                  Full Name &amp; Title *
                </label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="e.g. Engr. Tanvir Ahmed, Director"
                  className="bg-slate-50 p-3 font-body-sm text-sm text-on-surface border border-slate-300 rounded-xs focus:outline-none focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-caps text-xs text-slate-700 uppercase font-bold">
                  Authority / Ministry / Firm *
                </label>
                <input
                  type="text"
                  required
                  value={form.organization}
                  onChange={(e) => setForm({ ...form, organization: e.target.value })}
                  placeholder="e.g. Roads & Highways Department"
                  className="bg-slate-50 p-3 font-body-sm text-sm text-on-surface border border-slate-300 rounded-xs focus:outline-none focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-label-caps text-xs text-slate-700 uppercase font-bold">
                  Official Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@organization.gov.bd"
                  className="bg-slate-50 p-3 font-body-sm text-sm text-on-surface border border-slate-300 rounded-xs focus:outline-none focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-label-caps text-xs text-slate-700 uppercase font-bold">
                  Target Infrastructure Sector *
                </label>
                <select
                  value={form.sector}
                  onChange={(e) => setForm({ ...form, sector: e.target.value })}
                  className="bg-slate-50 p-3 font-body-sm text-sm text-on-surface border border-slate-300 rounded-xs focus:outline-none focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary transition-all"
                >
                  <option value="transportation">01. Transportation &amp; Highways</option>
                  <option value="water">02. Water Resources &amp; Sewerage</option>
                  <option value="environmental">03. Environmental &amp; Social (ESIA/RAP)</option>
                  <option value="urban">04. Urban, Regional &amp; Industrial</option>
                  <option value="energy">05. Energy &amp; Power Infrastructure</option>
                  <option value="socio-economic">06. Socio-Economic &amp; PPP Advisory</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-label-caps text-xs text-slate-700 uppercase font-bold">
                Scope Description / Key Requirements *
              </label>
              <textarea
                required
                rows={3}
                value={form.scopeDescription}
                onChange={(e) => setForm({ ...form, scopeDescription: e.target.value })}
                placeholder="Provide project location, estimated capital expenditure (CAPEX), stage of procurement, or required testing specifications..."
                className="bg-slate-50 p-3 font-body-sm text-sm text-on-surface border border-slate-300 rounded-xs focus:outline-none focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary transition-all resize-y"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={onClose}
                className="font-label-md text-sm text-slate-600 px-5 py-2.5 hover:text-slate-900 cursor-pointer font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-secondary text-white font-label-md text-sm px-7 py-3 hover:bg-secondary/90 transition-all cursor-pointer font-bold rounded-xs shadow-md"
              >
                Transmit Scope Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
