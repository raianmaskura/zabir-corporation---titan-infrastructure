import React, { useState } from 'react';
import { PageId } from '../components/Navbar';

interface ServicesScreenProps {
  onNavigate: (page: PageId) => void;
  onOpenRfq: (discipline?: string) => void;
  onOpenScopeModal: (discipline?: string) => void;
}

interface DisciplineDetail {
  id: string;
  code: string;
  title: string;
  icon: string;
  category: string;
  overview: string;
  deliverables: string[];
  standards: string[];
  equipment: string[];
  referenceProject: string;
}

const DISCIPLINES: DisciplineDetail[] = [
  {
    id: 'civil-structural',
    code: 'DISC-01',
    title: 'Heavy Civil & Structural Engineering',
    icon: 'architecture',
    category: 'Transportation & Aviation',
    overview: 'Full lifecycle structural design validation, dynamic loading finite-element modeling, and high-tolerance concrete mix formulation for high-load airfields, elevated transit viaducts, and bridge abutments.',
    deliverables: [
      'Nonlinear 3D finite-element stress modeling (SAP2000, ETABS, MIDAS Civil)',
      'Heavy-duty pavement joint detailing for Boeing 777-300ER & Code-F airbuses',
      'Post-tensioned tendon duct grouting inspection and laser alignment sign-off',
      'Continuous independent batch plant cement hydration thermal logging'
    ],
    standards: ['AASHTO LRFD Bridge Design', 'BS EN 1992 (Eurocode 2)', 'ICAO Annex 14 Aerodrome', 'ACI 318-19'],
    equipment: ['Ultrasonic Pulse Velocity Meters', 'Windsor Probe Penetrometers', 'Digital Rebound Hammers', 'Automated Core Drillers'],
    referenceProject: 'Dhaka Airport Terminal Expansion & Apron Hardstands'
  },
  {
    id: 'geotechnical',
    code: 'DISC-02',
    title: 'Geotechnical & Subsurface Consolidation',
    icon: 'landscape',
    category: 'Foundation & Earthworks',
    overview: 'High-precision soil characterization in deltaic silt, saturated mud, and high groundwater tables. Specializing in soft ground ground-improvement design using vertical drains and vibro-stone columns.',
    deliverables: [
      'Piezocone Penetration Testing (CPTu) with pore pressure dissipation analysis',
      'Wick drain (PVD) consolidation settlement modeling with surcharge preload',
      'Deep rotary bentonite slurry bored piling inspection down to 60+ meters',
      'Dynamic pile load testing (PDA) and Cross-Hole Sonic Logging (CSL)'
    ],
    standards: ['ASTM D5778 CPTu Standards', 'BS EN 1997 (Eurocode 7)', 'FHWA Deep Foundations GEC 10', 'ASTM D4945 High-Strain'],
    equipment: ['20-Ton Pagani CPTu Penetrometers', 'Pile Driving Analyzers (PDA)', 'Cross-Hole Sonic Loggers', 'Triaxial Consolidation Cells'],
    referenceProject: 'Dhaka Mass Transit Corridor Piling (1500mm Bored Piles)'
  },
  {
    id: 'hydrology-marine',
    code: 'DISC-03',
    title: 'Hydrology, River Training & Coastal Defense',
    icon: 'water_ec',
    category: 'Water Resources & Maritime',
    overview: 'Hydrodynamic flow simulation, bathymetric sonar mapping, and armored revetment design to safeguard riverbanks and maritime terminals against delta scour and Category-5 tidal surges.',
    deliverables: [
      '2D/3D shallow-water hydrodynamic flood routing and morphological modeling',
      'Articulated concrete block mattress revetment engineering for 4-knot currents',
      'Deep scour depth calculations around bridge piers during 100-year flood peaks',
      'Subsea multi-beam bathymetric survey review and side-scan acoustic inspection'
    ],
    standards: ['US Army Corps of Engineers (USACE) Coastal Manual', 'CIRIA Rock Manual (C683)', 'BS 6349 Maritime Structures'],
    equipment: ['Multi-Beam Echo Sounders (MBES)', 'Acoustic Doppler Current Profilers (ADCP)', 'Sub-Bottom Profilers', 'GPS RTK Hydro Buoys'],
    referenceProject: 'Karnaphuli River Basin Training & Chattogram Seawalls'
  },
  {
    id: 'urban-transit',
    code: 'DISC-04',
    title: 'Mass Transit & Corridor Engineering',
    icon: 'train',
    category: 'Corridor Mobility',
    overview: 'Turnkey construction supervision of elevated dual-track viaducts, automated depot sidings, traction power substations, and integrated intermodal passenger interchanges.',
    deliverables: [
      'Precast segmental box girder erection quality control and nocturnal launching',
      'Lead rubber bearing (LRB) seismic isolator installation and deflection testing',
      'Ballastless track slab concrete tolerance verification (±1.5mm tolerance)',
      'Subsurface station excavation diaphragm wall strutting and dewatering audits'
    ],
    standards: ['EN 50126 Railway RAMS', 'AREMA Manual for Railway Engineering', 'JICA Guideline for Rapid Transit'],
    equipment: ['Leica TS60 Robotic Total Stations', 'Digital Inclinometers', 'Continuous Rail Profile Scanners', 'Laser Track Gauges'],
    referenceProject: 'Dhaka Mass Transit Corridor Line 6 Elevated Viaducts'
  },
  {
    id: 'industrial-sez',
    code: 'DISC-05',
    title: 'Industrial SEZs & Marine Terminals',
    icon: 'precision_manufacturing',
    category: 'Logistics & Ports',
    overview: 'Master planning, marine reclamation supervision, and heavy utility grid design for export processing zones, bulk container terminals, and multi-modal logistics nodes.',
    deliverables: [
      'Deep hydraulic sand dredging and hydraulic fill compaction testing',
      'Quay wall driven tubular steel pipe pile dynamic driving analysis',
      '132kV dual-circuit primary substation electrical protection scheme review',
      'Zero-discharge industrial effluent collection and centralized WWTP layout'
    ],
    standards: ['PIANC Guidelines for Port Infrastructure', 'IEEE Standards 80/142', 'NFPA 850 Industrial Fire Protection'],
    equipment: ['Nuclear Density Gauges', 'Heavy Falling Weight Deflectometers', 'Ultrasonic Flaw Detectors', 'Thermal Imaging Drones'],
    referenceProject: 'Chattogram Special Economic Zone 1,200-Acre Master Grid'
  },
  {
    id: 'energy-scada',
    code: 'DISC-06',
    title: 'High-Pressure Energy & SCADA Telemetry',
    icon: 'bolt',
    category: 'Energy Infrastructure',
    overview: 'Quality verification of API 5L steel pipelines, horizontal directional drilling (HDD) under rivers, automated SIL-3 block valves, and centralized telemetry dispatch centers.',
    deliverables: [
      'Hydrostatic proof pressure testing up to 1500 psig with thermal compensations',
      'Automatic ultrasonic testing (AUT) and radiographic film weld defect audits',
      'Remote Telemetry Unit (RTU) redundant fiber and satellite communication links',
      'Impressed Current Cathodic Protection (ICCP) ground bed resistivity analysis'
    ],
    standards: ['ASME B31.8 Gas Transmission', 'API Standard 1104 Welding', 'IEC 61508 / 61511 Safety Systems', 'NACE SP0169 Corrosion'],
    equipment: ['High-Resolution Pipeline Calliper Pigs', 'AUT Crawlers', 'Soil Resistivity Meters', 'Optical Spectrum Analyzers'],
    referenceProject: 'National Gas Transmission 420km SCADA Telemetry Backbone'
  }
];

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onNavigate,
  onOpenRfq,
  onOpenScopeModal
}) => {
  const [selectedDisciplineId, setSelectedDisciplineId] = useState<string>('civil-structural');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const selectedDiscipline = DISCIPLINES.find((d) => d.id === selectedDisciplineId) || DISCIPLINES[0];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. SERVICES HERO */}
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
              <span>Technical Capabilities &bull; Six Engineering Disciplines</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight font-bold">
              Turnkey Consultancy, Geotechnical Audits &amp; Procurement
            </h1>
            <p className="mt-4 text-slate-200 font-body-lg text-lg sm:text-xl leading-relaxed">
              We deliver rigorous engineering supervision and independent technical verification across six core civil sectors. Every calculation is calibrated to survive extreme hydraulic gradients, alluvial subsidence, and international FIDIC standards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenRfq(selectedDiscipline.title)}
              className="bg-secondary text-white px-7 py-3.5 font-label-lg font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-lg cursor-pointer rounded-xs"
            >
              Request Field Audit
            </button>
            <button
              onClick={() => onOpenScopeModal(selectedDiscipline.title)}
              className="border border-white/30 text-white px-7 py-3.5 font-label-lg uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer rounded-xs font-semibold backdrop-blur-sm"
            >
              Interactive Scope Matrix
            </button>
          </div>
        </div>
      </section>

      {/* 2. DISCIPLINE SELECTOR TABS & DEEP DIVE */}
      <section className="py-space-3xl px-margin bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="font-label-caps text-xs sm:text-sm text-secondary uppercase tracking-widest font-bold">
              Core Technical Portfolio
            </span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold uppercase mt-1 text-on-surface">
              Select an Engineering Discipline
            </h2>
          </div>

          {/* Discipline navigation bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10 border-b border-outline-variant/30 pb-6">
            {DISCIPLINES.map((d) => {
              const isSelected = d.id === selectedDisciplineId;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDisciplineId(d.id)}
                  className={`p-4 text-left transition-all border cursor-pointer flex flex-col justify-between min-h-[120px] rounded-xs ${
                    isSelected
                      ? 'bg-primary text-white border-primary shadow-md ring-2 ring-secondary/50'
                      : 'bg-white text-on-surface border-outline-variant/30 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-secondary-fixed' : 'text-outline'}`}>
                      {d.code}
                    </span>
                    <span className={`material-symbols-outlined text-2xl ${isSelected ? 'text-secondary-fixed' : 'text-secondary'}`}>
                      {d.icon}
                    </span>
                  </div>
                  <div className={`font-headline font-bold text-xs sm:text-sm uppercase leading-snug line-clamp-2 mt-2 ${isSelected ? 'text-white' : 'text-on-surface'}`}>
                    {d.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Active Discipline Card */}
          <div className="bg-white border border-outline-variant/40 p-6 sm:p-10 shadow-md rounded-xs">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 border-b border-outline-variant/30 pb-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-secondary font-label-caps text-xs sm:text-sm uppercase mb-2 font-bold bg-secondary/10 px-3 py-1 rounded-xs">
                  <span className="material-symbols-outlined text-base">{selectedDiscipline.icon}</span>
                  <span>{selectedDiscipline.category} &bull; {selectedDiscipline.code}</span>
                </div>
                <h3 className="font-headline text-2xl md:text-4xl font-bold text-on-surface uppercase tracking-tight">
                  {selectedDiscipline.title}
                </h3>
                <p className="font-body-lg text-on-surface-variant text-base sm:text-lg mt-4 leading-relaxed">
                  {selectedDiscipline.overview}
                </p>
              </div>

              <div className="bg-slate-50 border border-outline-variant/40 p-6 lg:w-88 flex-shrink-0 rounded-xs">
                <span className="font-label-caps text-xs text-outline uppercase block mb-1 font-bold">
                  Representative Benchmark
                </span>
                <div className="font-headline font-bold text-base text-primary uppercase">
                  {selectedDiscipline.referenceProject}
                </div>
                <button
                  onClick={() => onOpenRfq(selectedDiscipline.title)}
                  className="w-full mt-4 bg-primary text-white py-3 font-label-sm font-bold uppercase tracking-wider hover:bg-secondary transition-colors cursor-pointer text-center block text-xs sm:text-sm rounded-xs shadow-sm"
                >
                  Engage Discipline Lead
                </button>
              </div>
            </div>

            {/* Grid of Deliverables, Standards, Equipment */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {/* Deliverables */}
              <div>
                <h4 className="font-headline text-sm font-bold uppercase text-on-surface flex items-center gap-2 mb-4 pb-2 border-b border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-lg">checklist</span>
                  <span>Key Technical Deliverables</span>
                </h4>
                <ul className="space-y-3">
                  {selectedDiscipline.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      <span className="text-secondary font-bold text-sm mt-0.5">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Regulatory & Code Compliance */}
              <div>
                <h4 className="font-headline text-sm font-bold uppercase text-on-surface flex items-center gap-2 mb-4 pb-2 border-b border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-lg">gavel</span>
                  <span>Design Codes &amp; Standards</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedDiscipline.standards.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 font-body-sm text-sm text-on-surface bg-slate-50 p-2.5 border border-outline-variant/20 rounded-xs">
                      <span className="material-symbols-outlined text-secondary text-base">verified</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Field Equipment */}
              <div>
                <h4 className="font-headline text-sm font-bold uppercase text-on-surface flex items-center gap-2 mb-4 pb-2 border-b border-outline-variant/30">
                  <span className="material-symbols-outlined text-secondary text-lg">precision_manufacturing</span>
                  <span>Lab &amp; Field Equipment</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedDiscipline.equipment.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 font-body-sm text-sm text-on-surface bg-slate-50 p-2.5 border border-outline-variant/20 rounded-xs">
                      <span className="material-symbols-outlined text-secondary text-base">build</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SERVICE WORKFLOW & FIDIC LIFECYCLE */}
      <section className="py-space-3xl px-margin bg-surface-container-low border-y border-outline-variant/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-space-2xl">
            <span className="font-label-caps text-xs sm:text-sm text-secondary uppercase tracking-widest font-bold">
              Standard Operating Procedure
            </span>
            <h2 className="font-headline text-3xl font-bold uppercase mt-1 text-on-surface">
              Four-Phase Project Execution Framework
            </h2>
            <p className="font-body-md text-on-surface-variant text-base mt-2">
              From geotechnical ground truth to final commercial handover, our process guarantees zero ambiguity and complete auditability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                phase: 'PHASE 01',
                title: 'Geotechnical Baseline',
                desc: 'Execution of deep boreholes, SPT/CPTu soundings, hydrological basin modeling, and initial environmental baseline risk quantification.'
              },
              {
                phase: 'PHASE 02',
                title: 'FIDIC Design Audit',
                desc: 'Independent peer review of contractor submissions, finite element stress checks, Bill of Quantities verification, and life-cycle costing.'
              },
              {
                phase: 'PHASE 03',
                title: 'Field QA & Inspection',
                desc: 'On-site mobile laboratory dispatch, continuous concrete core crush testing, ultrasonic weld inspection, and daily digital reporting logs.'
              },
              {
                phase: 'PHASE 04',
                title: 'Commissioning & Handover',
                desc: 'Full-load deflection load testing, telemetry link stress checks, Taking-Over Certificate (TOC) issuance, and statutory ministry compliance.'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-outline-variant/40 p-6 relative flex flex-col justify-between hover:border-secondary transition-all rounded-xs shadow-xs hover:shadow-md">
                <div>
                  <div className="font-mono text-xs font-bold text-secondary mb-2 bg-secondary/10 px-2 py-0.5 inline-block rounded-xs">{step.phase}</div>
                  <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center justify-between text-xs font-mono text-outline">
                  <span>ISO 9001 Protocol</span>
                  <span className="material-symbols-outlined text-base text-secondary">verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED TECHNICAL QUESTIONS */}
      <section className="py-space-3xl px-margin bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-space-2xl">
            <span className="font-label-caps text-xs sm:text-sm text-secondary uppercase tracking-widest font-bold">
              Institutional Clarifications
            </span>
            <h2 className="font-headline text-3xl font-bold uppercase mt-1 text-on-surface">
              Technical &amp; Procurement FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What contract frameworks does Zabir Corporation administer?',
                a: 'We routinely act as "The Engineer" under FIDIC Conditions of Contract including the Red Book (Construction), Yellow Book (Plant and Design-Build), and Silver Book (EPC / Turnkey). We also support national standard PWD and ADB/JICA bespoke bidding guidelines.'
              },
              {
                q: 'What is the mobilization lead-time for emergency geotechnical site diagnostics?',
                a: 'Our rapid deployment teams can mobilize truck-mounted rotary drilling rigs, CPTu penetrometers, and senior geotechnical advisors to any critical site in Bangladesh within 48 to 72 hours of receiving written authorization.'
              },
              {
                q: 'How does Zabir Corporation safeguard contractor impartiality during QA/QC?',
                a: 'Zabir Corporation operates as a strictly independent consultancy with no equity affiliations to general contractors or material suppliers. All laboratory tests are performed under dual-witness blind sampling procedures.'
              },
              {
                q: 'Can Zabir Corporation act as an Expert Witness in FIDIC Dispute Boards?',
                a: 'Yes. Our senior partners, led by Engr. Tariqul I. Zabir (FIEB, M.ASCE) and Dr. Arshad Rahman (PE, FICE), possess certified credentials to provide expert witness testimony in both national DAB proceedings and international arbitration tribunals.'
              }
            ].map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-outline-variant/30 transition-all overflow-hidden rounded-xs shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-headline font-bold text-base sm:text-lg text-on-surface uppercase">
                      {faq.q}
                    </span>
                    <span className={`material-symbols-outlined text-secondary text-2xl transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 font-body-md text-on-surface-variant text-sm sm:text-base border-t border-outline-variant/20 leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenRfq()}
              className="bg-secondary text-white px-8 py-3.5 font-label-lg font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all cursor-pointer shadow-md rounded-xs text-base"
            >
              Consult On-Duty Project Director
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
