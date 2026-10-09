import React from 'react';
import { PageId } from '../components/Navbar';
import { LEADERSHIP_DATA } from '../data';

interface AboutScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: (discipline?: string) => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onOpenRfq }) => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO HEADER */}
      <section className="relative w-full bg-primary text-white py-space-3xl px-margin border-b border-primary-container overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #7293b6 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-space-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-label-caps text-xs sm:text-sm uppercase text-secondary-fixed tracking-widest mb-3 bg-primary-container/80 px-3 py-1.5 border-l-4 border-secondary rounded-xs">
              <span>Corporate Profile &bull; Est. 1994</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight font-bold">
              Engineered for Permanence. Built for Sovereignty.
            </h1>
            <p className="mt-4 text-slate-200 font-body-lg text-lg sm:text-xl leading-relaxed">
              Zabir Corporation is South Asia's tier-one civil engineering consultancy, turnkey technical advisor, and heavy procurement operator. We steward critical national transit, maritime, water, and industrial corridors through deep geotechnical precision and unwavering regulatory adherence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenRfq()}
              className="bg-secondary text-white px-7 py-3.5 font-label-lg font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-lg cursor-pointer rounded-xs"
            >
              Consult Leadership
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="border border-white/30 text-white px-7 py-3.5 font-label-lg uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer rounded-xs font-semibold backdrop-blur-sm"
            >
              View Track Record
            </button>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL METRICS */}
      <section className="bg-surface-container-low border-b border-outline-variant/30 py-space-xl px-margin">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border-l-4 border-primary pl-4 bg-white p-5 shadow-xs rounded-xs">
            <div className="font-headline text-4xl lg:text-5xl font-black text-primary tracking-tight">32+</div>
            <div className="font-label-caps text-xs sm:text-sm text-on-surface-variant uppercase mt-1.5 font-bold">Years Sovereign Service</div>
            <div className="font-body-sm text-sm text-outline mt-1">Continuous national project execution</div>
          </div>
          <div className="border-l-4 border-secondary pl-4 bg-white p-5 shadow-xs rounded-xs">
            <div className="font-headline text-4xl lg:text-5xl font-black text-secondary tracking-tight">$2.4B+</div>
            <div className="font-label-caps text-xs sm:text-sm text-on-surface-variant uppercase mt-1.5 font-bold">Delivered Asset Value</div>
            <div className="font-body-sm text-sm text-outline mt-1">Supervised FIDIC contract value</div>
          </div>
          <div className="border-l-4 border-primary pl-4 bg-white p-5 shadow-xs rounded-xs">
            <div className="font-headline text-4xl lg:text-5xl font-black text-primary tracking-tight">140+</div>
            <div className="font-label-caps text-xs sm:text-sm text-on-surface-variant uppercase mt-1.5 font-bold">Licensed Engineers</div>
            <div className="font-body-sm text-sm text-outline mt-1">Chartered &amp; registered specialists</div>
          </div>
          <div className="border-l-4 border-secondary pl-4 bg-white p-5 shadow-xs rounded-xs">
            <div className="font-headline text-4xl lg:text-5xl font-black text-secondary tracking-tight">4.8M</div>
            <div className="font-label-caps text-xs sm:text-sm text-on-surface-variant uppercase mt-1.5 font-bold">Safe Man-Hours</div>
            <div className="font-body-sm text-sm text-outline mt-1">Zero Lost-Time Incident standard</div>
          </div>
        </div>
      </section>

      {/* 3. CORPORATE HERITAGE & PILLARS */}
      <section className="py-space-3xl px-margin bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              <span className="font-label-caps text-sm text-secondary uppercase tracking-widest font-bold">
                Core Engineering Creed
              </span>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface tracking-tight uppercase leading-snug">
              Transforming Alluvial Delta Geology Into Unshakeable Realities
            </h2>
            <p className="font-body-md text-on-surface-variant text-base leading-relaxed">
              Operating in one of the most hydrodynamically challenging alluvial deltas on Earth, Zabir Corporation was founded on the conviction that no infrastructure project can compromise on geological subsoil analysis, concrete durability chemistry, and rigorous lifecycle modeling.
            </p>
            <p className="font-body-md text-on-surface-variant text-base leading-relaxed">
              Over three decades, our engineering advisory teams have bridged ministerial public works departments, multinational development banks (World Bank, ADB, JICA), and premier EPC joint ventures to build high-capacity civil works that outlast standard design lifespans.
            </p>

            <div className="pt-3 border-t border-outline-variant/30 grid grid-cols-2 gap-3 font-body-sm">
              <div className="flex items-center gap-2 text-on-surface font-medium text-sm">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                <span>FIDIC Rainbow Master</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface font-medium text-sm">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                <span>BIM Level 2 Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface font-medium text-sm">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                <span>ISO 9001 / 14001 / 45001</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface font-medium text-sm">
                <span className="material-symbols-outlined text-secondary text-xl">check_circle</span>
                <span>Independent QA Lab</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow rounded-xs">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-4 rounded-xs">
                <span className="material-symbols-outlined text-2xl">architecture</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-2">
                Empirical Geotechnics
              </h3>
              <p className="font-body-sm text-on-surface-variant text-sm leading-relaxed">
                We reject speculative ground models. Every foundation design is anchored in deep geotechnical rotary drilling, continuous piezocone penetration testing (CPTu), and hydrostatic pore pressure instrumentation.
              </p>
            </div>

            <div className="bg-white p-6 border-t-4 border-secondary shadow-sm hover:shadow-md transition-shadow rounded-xs">
              <div className="w-12 h-12 bg-secondary/10 text-secondary flex items-center justify-center mb-4 rounded-xs">
                <span className="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-2">
                Zero-Defect Quality Assurance
              </h3>
              <p className="font-body-sm text-on-surface-variant text-sm leading-relaxed">
                Operating independent site laboratories, our QA inspectors test aggregate gradations, ultrasonic pulse velocity, core compression, and welding radiographic imaging without contractor interference.
              </p>
            </div>

            <div className="bg-white p-6 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow rounded-xs">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center mb-4 rounded-xs">
                <span className="material-symbols-outlined text-2xl">water_ec</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-2">
                Monsoon Resilience
              </h3>
              <p className="font-body-sm text-on-surface-variant text-sm leading-relaxed">
                Our hydrological hydrometric models compute 100-year storm surges, hydrodynamic river scour depths, and tidal bore harmonics to prevent catastrophic washouts along critical highway and railway embankments.
              </p>
            </div>

            <div className="bg-white p-6 border-t-4 border-secondary shadow-sm hover:shadow-md transition-shadow rounded-xs">
              <div className="w-12 h-12 bg-secondary/10 text-secondary flex items-center justify-center mb-4 rounded-xs">
                <span className="material-symbols-outlined text-2xl">policy</span>
              </div>
              <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-2">
                Sovereign Integrity
              </h3>
              <p className="font-body-sm text-on-surface-variant text-sm leading-relaxed">
                Full transparency in procurement bidding, tender evaluation, FIDIC claim adjudications, and contract dispute resolutions under international commercial arbitration standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE LEADERSHIP DIRECTORY */}
      <section className="py-space-3xl px-margin bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-2xl">
            <div>
              <div className="font-label-caps text-xs sm:text-sm text-secondary uppercase tracking-widest mb-2 font-bold">
                Governance &bull; Technical Authority
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-tight">
                Executive Leadership
              </h2>
            </div>
            <p className="font-body-md text-on-surface-variant text-base max-w-lg mt-3 md:mt-0 leading-relaxed">
              Guided by distinguished fellows of civil engineering, academic researchers, and sovereign procurement advisors with decades of field-proven mega-project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_DATA.map((exec, idx) => (
              <div
                key={idx}
                className="bg-white border border-outline-variant/30 flex flex-col hover:border-secondary transition-all shadow-sm hover:shadow-lg group rounded-xs overflow-hidden"
              >
                <div className="relative aspect-[4/3] bg-primary overflow-hidden">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="bg-primary/90 text-secondary-fixed px-3 py-1 font-label-caps text-xs uppercase tracking-wider border border-secondary/40 font-bold backdrop-blur-sm">
                      {exec.credentials}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight uppercase group-hover:text-secondary transition-colors">
                      {exec.name}
                    </h3>
                    <div className="font-label-md text-sm font-bold text-secondary uppercase tracking-wider mt-1">
                      {exec.title}
                    </div>
                    <div className="font-body-sm text-xs text-outline mt-1 font-mono">
                      {exec.education}
                    </div>

                    <p className="font-body-sm text-on-surface-variant text-sm mt-3 leading-relaxed">
                      {exec.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-label-caps text-xs text-outline uppercase tracking-wider font-bold">
                      Zabir Board Member
                    </span>
                    <button
                      onClick={() => onOpenRfq(exec.title)}
                      className="text-secondary hover:text-primary flex items-center gap-1 font-label-sm text-xs sm:text-sm uppercase font-bold cursor-pointer transition-colors"
                    >
                      <span>Direct Contact</span>
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HISTORICAL TIMELINE */}
      <section className="py-space-3xl px-margin bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-space-2xl">
            <div className="font-label-caps text-xs sm:text-sm text-secondary uppercase tracking-widest mb-2 font-bold">
              Chronology of Heavy Civil Progress
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-tight">
              Three Decades of Nation-Building
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2 text-base">
              From our origins as a specialized soil mechanics lab to managing multi-billion dollar aviation, transit, and maritime hubs.
            </p>
          </div>

          <div className="relative border-l-4 border-secondary/30 ml-4 md:ml-32 space-y-8">
            {[
              {
                year: '1994',
                title: 'Foundation as Geotechnical Consultancy',
                desc: 'Established in Dhaka as a specialized subsurface testing firm equipped with advanced triaxial shear test apparatus and Dutch cone penetration rigs.'
              },
              {
                year: '2004',
                title: 'First Sovereign Highway Bridge Supervision',
                desc: 'Awarded engineering supervision contract for 1.8km pre-stressed concrete box girder river bridge over the Meghna tributary.'
              },
              {
                year: '2012',
                title: 'Expansion into Rail & Urban Mass Transit',
                desc: 'Consortium partnership delivering independent design review and bored pile testing for regional rapid transit and inter-district trunk rail lines.'
              },
              {
                year: '2019',
                title: 'Triple ISO Quality & Safety Certification',
                desc: 'Attained simultaneous accreditation for ISO 9001 (Quality), ISO 14001 (Environment), and ISO 45001 (Occupational Safety) across all active operations.'
              },
              {
                year: '2023',
                title: 'Aviation Apron & Marine SEZ Super-Contracts',
                desc: 'Mobilized engineering inspection commands for Dhaka Airport Phase III and the 1,200-acre Chattogram Coastal Industrial Economic Zone.'
              },
              {
                year: '2026',
                title: 'Automated SCADA & High-Pressure Energy Grid',
                desc: 'Commissioning 420km SIL-3 certified national gas telemetry monitoring network safeguarding regional energy supply lines.'
              }
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Dot */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-white border-4 border-secondary group-hover:border-primary group-hover:bg-secondary transition-all rounded-full shadow-xs" />

                {/* Content */}
                <div className="bg-white p-5 border border-outline-variant/30 rounded-xs shadow-xs hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-1">
                    <span className="font-headline text-2xl font-black text-secondary tracking-tight">
                      {milestone.year}
                    </span>
                    <h3 className="font-headline text-lg font-bold text-on-surface uppercase">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="font-body-sm text-on-surface-variant text-sm mt-1 leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPLIANCE & CERTIFICATIONS ACCREDITATION */}
      <section className="bg-primary text-white py-space-2xl px-margin border-t border-primary-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="font-label-caps text-xs sm:text-sm text-secondary-fixed uppercase tracking-widest font-bold">
              Institutional Standard
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase mt-1">
              Accredited Quality &amp; Governance
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-primary-container/80 p-5 border border-white/10 rounded-xs shadow-sm">
              <div className="font-mono text-secondary-fixed text-base font-bold">ISO 9001:2015</div>
              <div className="font-body-sm text-sm text-slate-200 mt-1">Quality Management System</div>
              <div className="font-label-caps text-xs text-slate-300 mt-2 uppercase font-semibold">Audited Annually</div>
            </div>
            <div className="bg-primary-container/80 p-5 border border-white/10 rounded-xs shadow-sm">
              <div className="font-mono text-secondary-fixed text-base font-bold">ISO 14001:2015</div>
              <div className="font-body-sm text-sm text-slate-200 mt-1">Environmental Management</div>
              <div className="font-label-caps text-xs text-slate-300 mt-2 uppercase font-semibold">Zero Spill Standard</div>
            </div>
            <div className="bg-primary-container/80 p-5 border border-white/10 rounded-xs shadow-sm">
              <div className="font-mono text-secondary-fixed text-base font-bold">ISO 45001:2018</div>
              <div className="font-body-sm text-sm text-slate-200 mt-1">Occupational Health & Safety</div>
              <div className="font-label-caps text-xs text-slate-300 mt-2 uppercase font-semibold">Zero Fatality Record</div>
            </div>
            <div className="bg-primary-container/80 p-5 border border-white/10 rounded-xs shadow-sm">
              <div className="font-mono text-secondary-fixed text-base font-bold">FIDIC CERTIFIED</div>
              <div className="font-body-sm text-sm text-slate-200 mt-1">Contract Administration</div>
              <div className="font-label-caps text-xs text-slate-300 mt-2 uppercase font-semibold">Red / Silver / Yellow</div>
            </div>
          </div>

          {/* Banner bottom */}
          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenRfq()}
              className="bg-secondary text-white px-8 py-3.5 font-label-lg font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-lg cursor-pointer rounded-xs text-base"
            >
              Initiate Corporate Partnership Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
