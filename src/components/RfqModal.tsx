import React, { useState } from 'react';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDiscipline?: string;
}

export const RfqModal: React.FC<RfqModalProps> = ({ isOpen, onClose, initialDiscipline }) => {
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    discipline: initialDiscipline || 'transportation',
    inquiryType: 'tender',
    scope: '',
    agreed: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ZBR-2026-TNDR-${Math.floor(100 + Math.random() * 900)}`;
    setRefId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      discipline: 'transportation',
      inquiryType: 'tender',
      scope: '',
      agreed: false
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#001629]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white max-w-3xl w-full shadow-2xl border border-slate-200 relative my-8 rounded-xs max-h-[92vh] overflow-y-auto">
        {/* Header Bar */}
        <div className="bg-primary text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10 sticky top-0 z-20 shadow-md">
          <div className="flex flex-col pr-4">
            <span className="font-label-caps text-xs text-secondary-fixed uppercase tracking-widest font-bold">
              Procurement Ingestion Matrix &bull; Rev 2026.4
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mt-1">
              Formal RFQ &amp; Technical Inspection Request
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-xs hover:bg-white/10 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="flex flex-col gap-6 py-4 animate-in fade-in duration-300">
              <div className="bg-slate-50 p-6 border-l-4 border-secondary flex items-start gap-4 rounded-xs border border-slate-200">
                <span className="material-symbols-outlined text-secondary text-4xl">task_alt</span>
                <div className="flex flex-col gap-2">
                  <span className="font-headline text-xl font-bold text-primary">
                    Tender Dossier Transmitted Successfully
                  </span>
                  <p className="font-body-md text-base text-slate-700">
                    Your inquiry has been logged into our centralized dispatch registry under reference identifier:
                  </p>
                  <div className="my-1 inline-block bg-primary text-secondary-fixed px-5 py-2 font-mono font-bold text-xl self-start rounded-xs border border-secondary/40 shadow-xs">
                    {refId}
                  </div>
                  <p className="font-body-sm text-sm text-slate-600 leading-relaxed">
                    An assigned lead tender engineer from our Dhaka Corporate Headquarters will review the structural parameters and transmit an official response within <strong>4 business hours (BST UTC+6)</strong>.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="bg-secondary text-white font-label-lg px-8 py-3.5 hover:bg-secondary/90 transition-colors cursor-pointer rounded-xs text-sm font-bold shadow-md"
                >
                  Close &amp; Return to Portal
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <p className="font-body-md text-sm sm:text-base text-slate-600 leading-relaxed">
                Please complete this dispatch form to initiate sovereign or commercial tendering, joint-venture review, or site inspection requests. All submissions receive immediate tracking IDs.
              </p>

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs uppercase text-slate-700 font-bold">
                    Full Name &amp; Official Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Engr. Tariq Rahman, Chief Project Director"
                    className="bg-slate-50 text-slate-900 p-3 font-body-md text-sm border border-slate-300 rounded-xs focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs uppercase text-slate-700 font-bold">
                    Organization / Authority / Ministry *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Roads & Highways Dept / Asian Dev Consortium"
                    className="bg-slate-50 text-slate-900 p-3 font-body-md text-sm border border-slate-300 rounded-xs focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs uppercase text-slate-700 font-bold">
                    Official Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="official.contact@ministry.gov.bd"
                    className="bg-slate-50 text-slate-900 p-3 font-body-md text-sm border border-slate-300 rounded-xs focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs uppercase text-slate-700 font-bold">
                    Direct Phone / Mobile Hotline *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+880 1700-000000"
                    className="bg-slate-50 text-slate-900 p-3 font-body-md text-sm border border-slate-300 rounded-xs focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs uppercase text-slate-700 font-bold">
                    Engineering Discipline *
                  </label>
                  <select
                    required
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="bg-slate-50 text-slate-900 p-3 font-body-md text-sm border border-slate-300 rounded-xs focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                  >
                    <option value="transportation">Transportation, Bridges &amp; Highways</option>
                    <option value="water">Water Resources &amp; Hydrology Engineering</option>
                    <option value="energy">Energy, Grid Infrastructure &amp; Power</option>
                    <option value="environmental">Environmental Management &amp; Dredging</option>
                    <option value="urban">Urban Regional Planning &amp; Smart Zones</option>
                    <option value="general">Heavy Industrial &amp; General Civil Works</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-caps text-xs uppercase text-slate-700 font-bold">
                    Nature of Inquiry *
                  </label>
                  <select
                    required
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="bg-slate-50 text-slate-900 p-3 font-body-md text-sm border border-slate-300 rounded-xs focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary focus:outline-none transition-all"
                  >
                    <option value="tender">Tender Advisory &amp; Pre-Bid Qualification</option>
                    <option value="inspection">On-Site Diagnostic &amp; Quality Inspection</option>
                    <option value="feasibility">Feasibility &amp; Geotechnical Consultation</option>
                    <option value="emergency">Emergency Mobilization &amp; Asset Protection</option>
                  </select>
                </div>
              </div>

              {/* Scope Overview */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="font-label-caps text-xs uppercase text-slate-700 font-bold">
                    Project Scope Overview &amp; Specifications *
                  </label>
                  <span className="font-label-md text-xs text-outline">Attach tender links or summary below</span>
                </div>
                <textarea
                  required
                  rows={4}
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  placeholder="Detail estimated project value, geographic coordinate or site zone, key structural specifications, required completion schedules, and any current procurement milestones..."
                  className="bg-slate-50 text-slate-900 p-3 font-body-md text-sm border border-slate-300 rounded-xs focus:border-secondary focus:bg-white focus:ring-1 focus:ring-secondary focus:outline-none transition-all resize-y"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 bg-slate-50 p-4 border border-slate-200 rounded-xs">
                <input
                  type="checkbox"
                  id="modal-compliance"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="mt-1 h-4 w-4 text-secondary focus:ring-0 rounded-xs cursor-pointer"
                />
                <label htmlFor="modal-compliance" className="font-body-sm text-xs sm:text-sm text-slate-700 cursor-pointer leading-relaxed">
                  I confirm this inquiry corresponds to an official entity or verified infrastructure initiative, compliant with international transparency treaties and FIDIC ethical governance.
                </label>
              </div>

              {/* Submission Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-slate-600 font-label-md text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-lg text-secondary">lock</span>
                  <span>256-Bit Encrypted Procurement Channel</span>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-3 font-label-md text-slate-600 hover:text-slate-900 cursor-pointer text-sm font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-white font-label-lg px-7 py-3 hover:bg-secondary/90 transition-all group cursor-pointer text-sm font-bold rounded-xs shadow-md"
                  >
                    <span>Submit RFQ / Dispatch Request</span>
                    <span className="material-symbols-outlined text-base transition-transform duration-200 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
