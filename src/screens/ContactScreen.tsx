import React, { useState } from 'react';

interface ContactScreenProps {
  onOpenRfq: (discipline?: string) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onOpenRfq }) => {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    role: '',
    email: '',
    phone: '',
    discipline: 'Heavy Civil & Structural',
    priority: 'Standard (5-7 business days)',
    scope: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ZC-SOV-${Math.floor(100000 + Math.random() * 900000)}`;
    setReceiptNumber(generatedId);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. CONTACT HERO */}
      <section className="relative w-full bg-primary text-white py-space-3xl px-margin border-b border-primary-container overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #7293b6 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-label-caps text-xs sm:text-sm uppercase text-secondary-fixed tracking-widest mb-3 bg-primary-container/80 px-3.5 py-1.5 border-l-4 border-secondary rounded-xs">
              <span>Sovereign Liaison &bull; Direct Command</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight font-bold">
              Headquarters &amp; Rapid Field Mobilization
            </h1>
            <p className="mt-4 text-slate-200 font-body-lg text-lg sm:text-xl leading-relaxed">
              Direct channels for ministerial public works departments, bilateral development agencies, international EPC consortiums, and immediate emergency structural failure response.
            </p>
          </div>

          <div className="bg-primary-container/90 border border-secondary/40 p-6 max-w-sm backdrop-blur-md rounded-xs shadow-lg">
            <div className="flex items-center gap-2 text-secondary-fixed font-mono text-xs font-bold uppercase mb-2">
              <span className="material-symbols-outlined text-lg">emergency</span>
              <span>24/7 Rapid Emergency Dispatch</span>
            </div>
            <div className="font-headline text-2xl font-bold text-white tracking-tight">
              +880 1711-000-ZABIR
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
              Immediate deployment for bridge scour alarms, embankment slope slides, and runway pavement heaving.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REGIONAL COMMAND HUBS */}
      <section className="bg-surface-container-low border-b border-outline-variant/30 py-space-2xl px-margin">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="font-label-caps text-xs sm:text-sm text-secondary uppercase tracking-widest font-bold">
              Regional Command Centers
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase mt-1 text-on-surface">
              Strategic Engineering Offices
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dhaka Central HQ */}
            <div className="bg-white border border-outline-variant/30 p-6 hover:border-secondary transition-all shadow-sm hover:shadow-md rounded-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-xs">HQ-01 CENTRAL</span>
                <span className="material-symbols-outlined text-primary text-2xl">corporate_fare</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface uppercase">
                Dhaka Corporate &amp; Technical HQ
              </h3>
              <p className="font-body-sm text-xs text-outline mt-1 font-mono">
                23°47'34.8"N 90°25'02.1"E
              </p>
              <div className="font-body-sm text-sm text-on-surface-variant mt-4 space-y-1">
                <div>Zabir Tower, Level 12-16, Road 71</div>
                <div>Gulshan-2 Diplomatic Enclave</div>
                <div>Dhaka-1212, Bangladesh</div>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/20 space-y-1 text-xs font-mono">
                <div className="text-on-surface flex items-center justify-between">
                  <span className="text-outline">TEL:</span>
                  <span className="font-bold">+880 2 988-4201 / 4202</span>
                </div>
                <div className="text-on-surface flex items-center justify-between">
                  <span className="text-outline">EMAIL:</span>
                  <span className="text-secondary font-bold">procurement@zabircorp.com</span>
                </div>
              </div>
            </div>

            {/* Chattogram Maritime Desk */}
            <div className="bg-white border border-outline-variant/30 p-6 hover:border-secondary transition-all shadow-sm hover:shadow-md rounded-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-xs">HUB-02 MARITIME</span>
                <span className="material-symbols-outlined text-primary text-2xl">anchor</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface uppercase">
                Chattogram Port &amp; Marine Desk
              </h3>
              <p className="font-body-sm text-xs text-outline mt-1 font-mono">
                22°19'48.2"N 91°48'54.0"E
              </p>
              <div className="font-body-sm text-sm text-on-surface-variant mt-4 space-y-1">
                <div>Harbor Commercial Suite 9, Strand Road</div>
                <div>Agrabad Commercial Area</div>
                <div>Chattogram-4100, Bangladesh</div>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/20 space-y-1 text-xs font-mono">
                <div className="text-on-surface flex items-center justify-between">
                  <span className="text-outline">TEL:</span>
                  <span className="font-bold">+880 31 716-902</span>
                </div>
                <div className="text-on-surface flex items-center justify-between">
                  <span className="text-outline">EMAIL:</span>
                  <span className="text-secondary font-bold">maritime@zabircorp.com</span>
                </div>
              </div>
            </div>

            {/* Khulna Southwest Desk */}
            <div className="bg-white border border-outline-variant/30 p-6 hover:border-secondary transition-all shadow-sm hover:shadow-md rounded-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-xs">HUB-03 SOUTHWEST</span>
                <span className="material-symbols-outlined text-primary text-2xl">water_ec</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface uppercase">
                Khulna Delta &amp; River Training Hub
              </h3>
              <p className="font-body-sm text-xs text-outline mt-1 font-mono">
                22°50'12.4"N 89°32'18.7"E
              </p>
              <div className="font-body-sm text-sm text-on-surface-variant mt-4 space-y-1">
                <div>Delta Geotechnical Annex, KDA Avenue</div>
                <div>Sonadanga Commercial Sector</div>
                <div>Khulna-9100, Bangladesh</div>
              </div>
              <div className="mt-4 pt-4 border-t border-outline-variant/20 space-y-1 text-xs font-mono">
                <div className="text-on-surface flex items-center justify-between">
                  <span className="text-outline">TEL:</span>
                  <span className="font-bold">+880 41 762-110</span>
                </div>
                <div className="text-on-surface flex items-center justify-between">
                  <span className="text-outline">EMAIL:</span>
                  <span className="text-secondary font-bold">hydrology@zabircorp.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PROCUREMENT FORM & PROTOCOL SPECIFICATIONS */}
      <section className="py-space-3xl px-margin bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
          {/* Left instructions */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-label-caps text-xs sm:text-sm text-secondary uppercase tracking-widest font-bold">
              Formal Protocol
            </span>
            <h2 className="font-headline text-3xl font-bold uppercase text-on-surface">
              Sovereign Procurement &amp; Tender Inquiries
            </h2>
            <p className="font-body-md text-on-surface-variant text-base leading-relaxed">
              All submissions through this encrypted portal are cataloged directly into our Engineering Directorate tracking system. A registered Chartered Engineer and Senior Procurement Director will review and acknowledge submissions within 24 business hours.
            </p>

            <div className="bg-white p-6 border border-outline-variant/30 space-y-3 rounded-xs shadow-xs">
              <h4 className="font-headline text-sm font-bold uppercase text-on-surface">
                Required Inclusions for Tender Bids:
              </h4>
              <ul className="space-y-2 text-sm font-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">&bull;</span>
                  <span>Executing Ministry or Sponsoring Multilateral Institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">&bull;</span>
                  <span>Anticipated FIDIC Contract Standard (Red / Yellow / Silver / EPC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">&bull;</span>
                  <span>Geographic coordinates or district alignment bounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">&bull;</span>
                  <span>Target commissioning milestones and funding envelope</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-primary text-white border-l-4 border-secondary flex items-start gap-3 rounded-xs shadow-xs">
              <span className="material-symbols-outlined text-secondary-fixed text-2xl mt-0.5">verified_user</span>
              <div className="text-xs sm:text-sm">
                <div className="font-bold uppercase tracking-wider font-mono text-secondary-fixed">Confidentiality Assured</div>
                <div className="text-slate-300 mt-1 leading-relaxed">
                  Pre-tender scopes and confidential design calculations are handled strictly under bilateral Non-Disclosure Agreements (NDAs).
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7 bg-white border border-outline-variant/30 p-8 lg:p-10 shadow-lg rounded-xs">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-secondary/10 text-secondary mx-auto flex items-center justify-center rounded-full border-2 border-secondary">
                  <span className="material-symbols-outlined text-4xl">task_alt</span>
                </div>
                <h3 className="font-headline text-2xl font-bold uppercase text-on-surface">
                  Transmission Authenticated
                </h3>
                <p className="font-body-md text-base text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  Your inquiry has been assigned to the Chief Technical Office under reference dossier code:
                </p>
                <div className="inline-block bg-primary text-secondary-fixed font-mono text-2xl font-bold px-6 py-2 border border-secondary/40 rounded-xs shadow-sm">
                  {receiptNumber}
                </div>
                <p className="text-xs sm:text-sm text-outline font-mono">
                  A verification confirmation has been dispatched to {formData.email}.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        org: '',
                        role: '',
                        email: '',
                        phone: '',
                        discipline: 'Heavy Civil & Structural',
                        priority: 'Standard (5-7 business days)',
                        scope: ''
                      });
                    }}
                    className="bg-primary text-white px-6 py-3 font-label-caps text-xs uppercase font-bold cursor-pointer hover:bg-secondary transition-colors rounded-xs shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Liaison Official Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Engr. K. M. Rahman"
                      className="w-full bg-slate-50 border border-slate-300 p-3 font-body-sm text-sm text-on-surface focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xs transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Designation / Official Title
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Chief Superintending Engineer"
                      className="w-full bg-slate-50 border border-slate-300 p-3 font-body-sm text-sm text-on-surface focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xs transition-all"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Organization / Ministry / Consortium *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ministry of Road Transport & Bridges"
                      className="w-full bg-slate-50 border border-slate-300 p-3 font-body-sm text-sm text-on-surface focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xs transition-all"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Direct Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="official@ministry.gov.bd"
                      className="w-full bg-slate-50 border border-slate-300 p-3 font-body-sm text-sm text-on-surface focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xs transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Contact Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+880 1711-XXXXXX"
                      className="w-full bg-slate-50 border border-slate-300 p-3 font-body-sm text-sm text-on-surface focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xs transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Engineering Discipline
                    </label>
                    <select
                      className="w-full bg-slate-50 border border-slate-300 p-3 font-body-sm text-sm text-on-surface focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xs transition-all"
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    >
                      <option>Heavy Civil &amp; Structural</option>
                      <option>Geotechnical &amp; Subsurface Consolidation</option>
                      <option>Hydrology, River Training &amp; Coastal Defense</option>
                      <option>Mass Transit &amp; Elevated Rail</option>
                      <option>Industrial SEZs &amp; Marine Terminals</option>
                      <option>High-Pressure Energy &amp; SCADA Telemetry</option>
                      <option>Emergency Rapid Mobilization / Diagnostic</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                    Project Scope, Location &amp; Inquiries *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide detailed technical parameters, estimated contract scale, statutory requirements, and target timeline..."
                    className="w-full bg-slate-50 border border-slate-300 p-3 font-body-sm text-sm text-on-surface focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xs transition-all resize-y"
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-secondary text-white py-4 font-label-lg font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center gap-2 group rounded-xs text-base"
                  >
                    <span>Transmit Encrypted Inquiry to Directorate</span>
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                      send
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
