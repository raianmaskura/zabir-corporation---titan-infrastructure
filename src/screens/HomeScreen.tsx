import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { PROJECTS_DATA, NEWS_BULLETINS, ProjectItem } from '../data';

interface HomeScreenProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenRfq: (discipline?: string) => void;
  onOpenArticle: (article: typeof NEWS_BULLETINS[0]) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectProject,
  onOpenRfq,
  onOpenArticle
}) => {
  const [projectFilter, setProjectFilter] = useState<'all' | 'mega' | 'water' | 'energy'>('all');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    org: '',
    discipline: 'Transportation & Highways',
    scope: ''
  });

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  // Filter project cards
  const airportProject = PROJECTS_DATA.find((p) => p.id === 'dac-exp-ph3') || PROJECTS_DATA[0];
  const metroProject = PROJECTS_DATA.find((p) => p.id === 'mrt-line-6') || PROJECTS_DATA[1];
  const sezProject = PROJECTS_DATA.find((p) => p.id === 'chattogram-sez') || PROJECTS_DATA[2];
  const sewerageProject = PROJECTS_DATA.find((p) => p.id === 'cwasa-sewerage') || PROJECTS_DATA[3];
  const scadaProject = PROJECTS_DATA.find((p) => p.id === 'gas-scada') || PROJECTS_DATA[4];

  const filteredCards = [
    { item: sezProject, category: 'mega' },
    { item: sewerageProject, category: 'water' },
    { item: scadaProject, category: 'energy' }
  ].filter((c) => projectFilter === 'all' || c.category === projectFilter);

  return (
    <div className="flex flex-col w-full">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative w-full bg-primary overflow-hidden text-white">
        {/* Atmospheric Blueprint Grid Layer */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #7293b6 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Hero Backdrop Imagery with Engineering Scrim */}
        <div className="relative w-full min-h-[660px] lg:min-h-[760px] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-35"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCEh2ckgkyQQMDgWdNZPOidcPzmhbnacO3Roi3vrPR2aPqTpQ7gnkptnkZS4bqeN80VRENf-D7D96O4nhdRvrctcvU5g-2-vQNcX4Je4VuphoAY8-AhGGzzRuYd1TSkveC-tUbgG_vo2QAFNWf1Y6-WhLbKnxSVNWLW5HX-DNxEQFnfYjOCi5IEME-0jIvr6qT6mbe0_SGI-Y7Oydnb1NVWY4OWvijfpJ-aecsBD_m4VLoFjuizIiTj8g')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60" />

          {/* Main Hero Content */}
          <div className="relative max-w-7xl mx-auto px-margin w-full py-space-3xl z-10">
            <div className="max-w-3xl flex flex-col gap-space-lg">
              {/* Sub-badge */}
              <div className="inline-flex items-center gap-2.5 bg-primary-container px-3.5 py-1.5 self-start border-l-4 border-secondary shadow-sm">
                <span className="w-2.5 h-2.5 bg-secondary-container rounded-full animate-pulse" />
                <span className="font-label-caps text-xs sm:text-sm text-secondary-fixed tracking-widest uppercase font-bold">
                  Sovereign Engineering &amp; Titan Infrastructure
                </span>
              </div>

              {/* Main Architectural Display Heading */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.08] font-bold">
                Precision engineering, <span className="text-secondary-container">built on trust.</span>
              </h1>

              {/* Executive Subtitle */}
              <p className="font-body-lg text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
                Delivering sovereign civil megaprojects, urban transit networks, and heavy industrial infrastructure across Bangladesh and South Asia. Precision engineered from geotechnical feasibility to structural commissioning.
              </p>

              {/* High Impact CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('featured-projects');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 bg-secondary text-white font-label-lg text-base px-7 py-3.5 shadow-lg hover:bg-secondary/90 hover:shadow-xl transition-all group cursor-pointer font-bold rounded-xs"
                >
                  <span>Explore Our Projects</span>
                  <span className="material-symbols-outlined text-xl transition-transform duration-200 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
                <button
                  onClick={() => onOpenRfq()}
                  className="inline-flex items-center gap-2.5 bg-white/10 text-white font-label-lg text-base px-6 py-3.5 shadow-sm border border-white/30 hover:bg-white/20 transition-all cursor-pointer font-semibold rounded-xs backdrop-blur-sm"
                >
                  <span className="material-symbols-outlined text-xl text-secondary-fixed">assignment</span>
                  <span>Request Inspection / RFQ</span>
                </button>
              </div>

              {/* Emergency Mobilization Callout Banner */}
              <div className="mt-2 inline-flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-4 py-2.5 self-start border border-white/15 rounded-xs">
                <span className="material-symbols-outlined text-secondary-container text-2xl animate-pulse">
                  crisis_alert
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  <span className="font-label-caps text-xs text-secondary-fixed uppercase font-bold">
                    Emergency Technical Desk:
                  </span>
                  <a
                    className="font-label-lg text-base text-white font-bold hover:text-secondary-fixed transition-colors"
                    href="tel:+8801922348015"
                  >
                    +880 1922-348015{' '}
                    <span className="font-body-sm text-xs text-slate-300 font-normal">
                      (24/7 Rapid Mobilization)
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker / Key Sovereign Factoids Band */}
        <div className="relative w-full bg-primary-container/95 shadow-xl border-t border-white/10">
          <div className="max-w-7xl mx-auto px-margin py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-1 pl-4 bg-primary/40 p-4 border-l-4 border-secondary rounded-xs">
                <span className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">150+</span>
                <span className="font-label-caps text-xs sm:text-sm text-secondary-fixed uppercase font-semibold">
                  Megaproject Milestones
                </span>
                <span className="text-xs text-slate-300">Delivered across South Asia</span>
              </div>
              <div className="flex flex-col gap-1 pl-4 bg-primary/40 p-4 border-l-4 border-secondary rounded-xs">
                <span className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">500+</span>
                <span className="font-label-caps text-xs sm:text-sm text-secondary-fixed uppercase font-semibold">
                  Multi-Discipline Engineers
                </span>
                <span className="text-xs text-slate-300">Chartered &amp; registered specialists</span>
              </div>
              <div className="flex flex-col gap-1 pl-4 bg-primary/40 p-4 border-l-4 border-secondary rounded-xs">
                <span className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">ISO 9001</span>
                <span className="font-label-caps text-xs sm:text-sm text-secondary-fixed uppercase font-semibold">
                  Quality &amp; Safety Certified
                </span>
                <span className="text-xs text-slate-300">ISO 14001 &amp; ISO 45001 compliant</span>
              </div>
              <div className="flex flex-col gap-1 pl-4 bg-primary/40 p-4 border-l-4 border-secondary rounded-xs">
                <span className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">32+</span>
                <span className="font-label-caps text-xs sm:text-sm text-secondary-fixed uppercase font-semibold">
                  Years of Proven Rigor
                </span>
                <span className="text-xs text-slate-300">Established in 1994</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE CORPORATE OVERVIEW */}
      <section className="w-full bg-surface py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex items-center gap-3 pb-6">
            <span className="w-10 h-1 bg-secondary rounded-full" />
            <span className="font-label-caps text-sm text-secondary tracking-widest uppercase font-bold">
              About Zabir Corporation
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
            {/* Left Editorial Column */}
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <h2 className="font-headline text-3xl sm:text-4xl text-primary font-bold tracking-tight">
                Building Excellence. Delivering Quality. Earning Sovereign Trust.
              </h2>
              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed">
                At Zabir Corporation, we operate at the critical intersection of sovereign infrastructure strategy and relentless on-site execution. Serving government ministries, multilateral funding institutions, and international industrial consortiums, we provide full-lifecycle technical advisory and engineering supervision.
              </p>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                From the deep geotechnical analysis required for riverine bridge viaducts to the specialized hydraulic engineering of municipal wastewater networks, our practice is anchored in institutional certitude. We do not simply design structures; we anchor national economic longevity.
              </p>

              {/* Core Capability Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-surface-container-low shadow-sm border-l-4 border-secondary rounded-xs">
                  <span className="font-label-caps text-xs sm:text-sm text-secondary uppercase block mb-1 font-bold">
                    Standard of Integrity
                  </span>
                  <p className="font-body-sm text-sm text-on-surface font-medium leading-relaxed">
                    Bilateral compliance with FIDIC, JICA, and World Bank environmental frameworks.
                  </p>
                </div>
                <div className="p-4 bg-surface-container-low shadow-sm border-l-4 border-secondary rounded-xs">
                  <span className="font-label-caps text-xs sm:text-sm text-secondary uppercase block mb-1 font-bold">
                    Asset Continuity
                  </span>
                  <p className="font-body-sm text-sm text-on-surface font-medium leading-relaxed">
                    Life-cycle asset integrity monitoring, predictive stress simulation, and retrofitting.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 font-label-lg text-base text-secondary font-bold hover:text-primary transition-colors group cursor-pointer"
                >
                  <span>Read Our Full Corporate Charter</span>
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Right Visual Mosaic Column */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="relative w-full h-[400px] overflow-hidden shadow-xl rounded-xs">
                <img
                  className="w-full h-full object-cover"
                  alt="Senior civil engineers on active site"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjzLOCA8D5h2IUGmw2Lfw9uAQThMyWEOA3LQYRagSJZpFDyHfROj2B8HlgDDZb4lc3phhHRFc0zz9HDJuCDro69iSRPnwc36AD2WLHWvN88W7DH2DMIgMRYWJk8UQ_VE0lKcSIQa9zuilK3zNZWHntyxppb_9SgLQrYDDKnsTqHLn51hnquBICpOY6ebNXpJgXAVI3YjF78c1Lhq-rj4syGDbWN5fdhtPAyiDoTHbQ_FG7Nxfj6Z4Vuw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/95 text-white p-6 shadow-xl border-t-4 border-secondary">
                  <p className="font-headline text-base sm:text-lg italic leading-relaxed">
                    &ldquo;We bridge technical rigor with operational execution to transform complex infrastructure blueprints into reality.&rdquo;
                  </p>
                  <span className="font-label-caps text-xs text-secondary-fixed block mt-2 uppercase tracking-wider font-bold">
                    Executive Directorate of Engineering &bull; Zabir Corporation
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="h-44 bg-surface-container overflow-hidden rounded-xs shadow-sm">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Laboratory concrete core testing"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI6eRp98uMlI3_c8MViUVnPU54j8cNGXH8YHXBhVjLz1Q0rEehqR_GNKrktP6rm5n8YaMAKHkX0EVNLyyBCp0rHKUaQStIMszYJrA0z7edDerXsAEv-OvoHUUG0k09HhB35EAKDGjxzWB5FnptpIulkT_JdHV7k7R8DxgV3ecw_URT1Nv9rg38AfScTo9QkOJCbzELDicMV1KQ_crHiKxDdvstaPyU1MRy-4aeLaTGnXmNBphnMfVEmw"
                  />
                </div>
                <div className="h-44 bg-surface-container overflow-hidden rounded-xs shadow-sm">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    alt="Civil engineering surveyor total station theodolite"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZFmDgsAh9CJG2wf1W23KbezLGkYL3z_eUC2ctliccyRqc0SXbmBggZewk8hNVUhS76SM-Z09dEbQ7QHh3XcWHj6tTRMkaQebL4sXPYQlL82rSrqtkHZLEdlBVeJ7hzyPn7U1m3fEJbBfJ95XMNq19W_t0T9hCGDijuQ0HsJgah4tGB_TgYA2oqpgq3APJw1ePX8J31AzD2beU5E38YHkDhKBRgrXKPlx4b5UHp8yxtyXqho1txbRzZA"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERT SPECTRUM OF SERVICES */}
      <section className="w-full bg-surface-container-low py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-2xl">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-10 h-1 bg-secondary rounded-full" />
                <span className="font-label-caps text-sm text-secondary tracking-widest uppercase font-bold">
                  Field of Services
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-primary font-bold tracking-tight">
                Comprehensive Engineering Capabilities
              </h2>
            </div>
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 font-label-lg text-base text-secondary font-bold hover:text-primary transition-colors group cursor-pointer"
            >
              <span>Explore All Engineering Sectors</span>
              <span className="material-symbols-outlined text-xl transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 01 */}
            <div
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-xs"
            >
              <div className="relative h-52 w-full overflow-hidden bg-primary">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Transportation & Highways"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn3VBZ1cFyeSRdFt1mH3irHssUx8OUhSkUCUCtUlQDuenQ1phAWNkXGwaVWnraW1IsyR5T44SlicTU5aGvxPXC5lYwNTm1EGCSEdkzzP-N_fDxhQJcTyh1QXlvK2u19kfYXwt1h8G8W35p8jJQI3zpbAnnFPCUu59DNXT_gP3CNoDP1iQvJX6qajdzyYJ_xp96TfYavkT_sp-0E2CMayCne12ch07_M5i1kLcmtXi_oTPW5CJ0TYuHug"
                />
                <span className="absolute top-3 left-3 font-label-caps text-xs bg-primary text-white px-3 py-1 font-bold shadow-md">
                  01 / TRANSPORT
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline text-xl text-primary font-bold mb-2 group-hover:text-secondary transition-colors">
                    Transportation &amp; Highways
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    A full range of consulting services from hydrological investigation and geometric alignment to structural bridge design, toll system integration, and FIDIC-certified construction supervision.
                  </p>
                </div>
                <div className="pt-6 mt-4 flex items-center justify-between text-secondary border-t border-slate-100">
                  <span className="font-label-caps text-xs uppercase tracking-wider font-bold">
                    Explore Sector
                  </span>
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service 02 */}
            <div
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-xs"
            >
              <div className="relative h-52 w-full overflow-hidden bg-primary">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Water Resources & Sewerage"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBth33ikwf10pDxOUdnNi9fzrlp1BI8vDceExAkQVt0Juo0WumhEi0yUM_5qGINeJV2Fg_Pqb4Q4vWHEgk3ubjFVRL9jaKGL84056tcTDszDNxTeoQEtVO7JlI7MZenzwdx2cEZMsmYKNgmAcGrhqT66iTTDJguvuj4bgtNCqvj_Iim9sWH1PLog0mPow4zq19oHmywSFv-pDDH2slAkTWy54lD78gLBCaKQHQ-h24rw9ATBD5FfeK8Xw"
                />
                <span className="absolute top-3 left-3 font-label-caps text-xs bg-primary text-white px-3 py-1 font-bold shadow-md">
                  02 / WATER
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline text-xl text-primary font-bold mb-2 group-hover:text-secondary transition-colors">
                    Water Resources &amp; Sewerage
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    Proper utilization of water resources delivering community vitality: specialized municipal drainage master plans, sewerage treatment plants, hydraulic modeling, and flood mitigation channels.
                  </p>
                </div>
                <div className="pt-6 mt-4 flex items-center justify-between text-secondary border-t border-slate-100">
                  <span className="font-label-caps text-xs uppercase tracking-wider font-bold">
                    Explore Sector
                  </span>
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service 03 */}
            <div
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-xs"
            >
              <div className="relative h-52 w-full overflow-hidden bg-primary">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Environmental & Social Management"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEE9A5F0n1-fANlAYEkUFnPPYo8yUxhEQOh6_8m88bRQc3Qv5xkTMswgYKcnesQePtwgSTdopP66JzdjIzjhSRA3lbKE0AEgwrm5Wx4GXx9Rr8TvZRZbu7BFIwFsKOGzqMhftjiZG64rYJr477A2DMlsG7V0ZzvYN6VTNRKhi-TMl6eYRbbbSVhrpsYLf0k4ZOxRZrbcdveJ3Px_sTlIRhfEY32nDuJEw4bG4aE60xH2ZKc6oBXgfRew"
                />
                <span className="absolute top-3 left-3 font-label-caps text-xs bg-primary text-white px-3 py-1 font-bold shadow-md">
                  03 / ESG &amp; EIA
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline text-xl text-primary font-bold mb-2 group-hover:text-secondary transition-colors">
                    Environmental &amp; Social Management
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    Rigorous EIA &amp; ESIA impact assessments, biodiversity preservation charters, resettlement frameworks, and lifecycle carbon audit compliance meeting sovereign ministry mandates.
                  </p>
                </div>
                <div className="pt-6 mt-4 flex items-center justify-between text-secondary border-t border-slate-100">
                  <span className="font-label-caps text-xs uppercase tracking-wider font-bold">
                    Explore Sector
                  </span>
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service 04 */}
            <div
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-xs"
            >
              <div className="relative h-52 w-full overflow-hidden bg-primary">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Urban & Industrial Masterplanning"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXAtAJaV3djqF0lmIP9ipn56GvkAg2uN_JaCTsDWrjO5s8YDfVrqBHauSwHGnVAYVP6UPDkZnDkm9w23TD877uYnEnzfitG9pgfKlHH9hKuf8p7tLV9GgnScIScTNw0M0deCTPgZMHD-VgUObC1FQ-fq_Zq8oQUBzlWIuB2XGSLIFkQBJXTXjzGufkesAAO7E_lVSO8QI3EGGyKooD4DwXSGz1ZnAiRK089GM47ZTf-F3YanBIZzlWww"
                />
                <span className="absolute top-3 left-3 font-label-caps text-xs bg-primary text-white px-3 py-1 font-bold shadow-md">
                  04 / REGIONAL
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline text-xl text-primary font-bold mb-2 group-hover:text-secondary transition-colors">
                    Urban &amp; Industrial Masterplanning
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    Zoning masterplans for Special Economic Zones (SEZ), port logistics corridors, automated dry ports, and integrated industrial manufacturing ecosystems with resilient utilities.
                  </p>
                </div>
                <div className="pt-6 mt-4 flex items-center justify-between text-secondary border-t border-slate-100">
                  <span className="font-label-caps text-xs uppercase tracking-wider font-bold">
                    Explore Sector
                  </span>
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service 05 */}
            <div
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-xs"
            >
              <div className="relative h-52 w-full overflow-hidden bg-primary">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Energy & Power Infrastructure"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKpijGv7X602U7BklLWesEnD3HU44i14Akq5e2dlZawai0WQrl4f5v9oyBwzqgEgCZWQMh_pQQgwherOEy1EVBsQv3f06EjcNf8pR81g0EJhYGwdm7hDffs0KI9xntR9aDT_uQJ4xTL9nJLNkvvRwXTl_zcP0Qt0u_dHVcwM-GCrFKHoGv-SsQUMDxQeWx3lmxGiO_MHTnnS628etUXnNf407OQcKhKrXidIUridx1bvRpk71NM1TlFg"
                />
                <span className="absolute top-3 left-3 font-label-caps text-xs bg-primary text-white px-3 py-1 font-bold shadow-md">
                  05 / ENERGY
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline text-xl text-primary font-bold mb-2 group-hover:text-secondary transition-colors">
                    Energy &amp; Power Infrastructure
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    Gas transmission pipelines, high-pressure LNG regasification facilities, high-voltage substation switchyards, and solar-wind hybrid grid balancing engineering at utility scale.
                  </p>
                </div>
                <div className="pt-6 mt-4 flex items-center justify-between text-secondary border-t border-slate-100">
                  <span className="font-label-caps text-xs uppercase tracking-wider font-bold">
                    Explore Sector
                  </span>
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service 06 */}
            <div
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer rounded-xs"
            >
              <div className="relative h-52 w-full overflow-hidden bg-primary">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Social & Economic Advisory"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmF6MpSVtoTlC1r4NgMe6kmmIdxTMpnmxFBHYqz5tuCxT3DR93MZNT9tbwKTdsh4q3oRpZWw2nKQdAAqaMS6mkJQjQCaeegWwVRvPGo6VTFZ13Dwyoj9h6mi3oOnDaJHGG_oi6zXVERQOOozYDjILL8hp_W0sOyv8YsEnOPG4Urc_BnYwcW491kDlNWoCwHK8BuTab-izaLcGtyAZk3IT2u4Yp1qa6_azPbZAY-C-Za3FCzJXAgMZisQ"
                />
                <span className="absolute top-3 left-3 font-label-caps text-xs bg-primary text-white px-3 py-1 font-bold shadow-md">
                  06 / ADVISORY
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-headline text-xl text-primary font-bold mb-2 group-hover:text-secondary transition-colors">
                    Social &amp; Economic Advisory
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    Public-private partnership (PPP) financial modeling, bilateral project appraisal, sovereign policy consulting, and multilateral procurement compliance management.
                  </p>
                </div>
                <div className="pt-6 mt-4 flex items-center justify-between text-secondary border-t border-slate-100">
                  <span className="font-label-caps text-xs uppercase tracking-wider font-bold">
                    Explore Sector
                  </span>
                  <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1">
                    east
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LANDMARK PROJECTS SHOWCASE */}
      <section className="w-full bg-surface py-space-3xl" id="featured-projects">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-xl">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-10 h-1 bg-secondary rounded-full" />
                <span className="font-label-caps text-sm text-secondary tracking-widest uppercase font-bold">
                  Verified Portfolio
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-primary font-bold tracking-tight">
                Landmark Infrastructure Projects
              </h2>
            </div>

            {/* Filter Tabs Component */}
            <div className="flex flex-wrap items-center gap-2 bg-surface-container p-1.5 self-start rounded-xs border border-outline-variant/30">
              {[
                { id: 'all', label: 'All Works' },
                { id: 'mega', label: 'Mega Infrastructure' },
                { id: 'water', label: 'Water & Sanitation' },
                { id: 'energy', label: 'Energy Grid' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setProjectFilter(tab.id as any)}
                  className={`font-label-caps text-xs sm:text-sm px-4 py-2 cursor-pointer transition-all rounded-xs font-bold uppercase tracking-wider ${
                    projectFilter === tab.id
                      ? 'bg-primary text-white shadow-md'
                      : 'text-on-surface-variant hover:text-primary hover:bg-black/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetrical Featured Bento Card */}
          {(projectFilter === 'all' || projectFilter === 'mega') && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
              {/* Primary Hero Case Card (Spans 8 cols) */}
              <div
                onClick={() => onSelectProject(airportProject)}
                className="lg:col-span-8 bg-primary text-white flex flex-col justify-between relative overflow-hidden shadow-xl group cursor-pointer rounded-xs border border-white/10"
              >
                <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    alt={airportProject.title}
                    src={airportProject.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-secondary text-white font-label-caps text-xs sm:text-sm px-4 py-1.5 uppercase font-bold shadow-md">
                    Civil Aviation Infrastructure
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-secondary-fixed font-label-caps text-xs sm:text-sm font-semibold">
                    <span>LOCATION: DHAKA, BANGLADESH</span>
                    <span>&bull;</span>
                    <span>SCOPE: DESIGN SUPERVISION &amp; QC</span>
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl text-white font-bold leading-snug">
                    {airportProject.title}
                  </h3>
                  <p className="font-body-md text-base text-slate-200 max-w-2xl leading-relaxed">
                    Supervision of terminal apron foundations, multi-tier passenger baggage logistics channels, and structural taxiway paving designed for next-generation widebody commercial aircraft.
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-white/10">
                    <span className="font-label-lg text-base text-secondary-fixed font-bold group-hover:text-white transition-colors inline-flex items-center gap-2">
                      <span>Access Full Project Dossier</span>
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </span>
                    <span className="font-label-caps text-xs text-secondary-container bg-primary-container px-3 py-1 font-mono font-bold border border-secondary-container/30">
                      PHASE III ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Secondary Side Card (Spans 4 cols) */}
              <div
                onClick={() => onSelectProject(metroProject)}
                className="lg:col-span-4 bg-white border border-outline-variant/30 flex flex-col justify-between shadow-md hover:shadow-xl transition-all group cursor-pointer rounded-xs"
              >
                <div className="relative h-64 w-full overflow-hidden bg-primary">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={metroProject.title}
                    src={metroProject.image}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white font-label-caps text-xs px-3 py-1 uppercase font-bold shadow-md">
                    Rapid Transit
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="font-label-caps text-xs text-secondary block mb-1 uppercase font-bold">
                      Metropolitan Transport Axis
                    </span>
                    <h3 className="font-headline text-xl text-primary font-bold mb-2">
                      {metroProject.title}
                    </h3>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                      Elevated viaduct stress modeling, deep foundation pile-cap monitoring, and automated passenger platform integration across critical urban transit axes.
                    </p>
                  </div>
                  <div className="pt-4 mt-4 flex items-center justify-between text-secondary border-t border-slate-100">
                    <span className="font-label-caps text-xs font-bold uppercase">View Technical Audit</span>
                    <span className="material-symbols-outlined text-lg">east</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3-Column Regular Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map(({ item }) => (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className="bg-white border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group cursor-pointer rounded-xs"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={item.title}
                    src={item.image}
                  />
                  <span className="absolute top-3 left-3 bg-primary text-white font-label-caps text-xs px-3 py-1 uppercase font-bold shadow-md">
                    {item.categoryLabel}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-headline text-xl text-primary mb-2 font-bold group-hover:text-secondary transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 flex items-center justify-between text-secondary font-label-caps text-xs font-bold uppercase border-t border-slate-100">
                    <span>View Case Study</span>
                    <span className="material-symbols-outlined text-lg">east</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SUSTAINABILITY, ESG & GOVERNANCE */}
      <section className="w-full bg-primary text-white py-space-3xl relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-margin z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-2xl">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-10 h-1 bg-secondary-container rounded-full" />
                <span className="font-label-caps text-sm text-secondary-fixed tracking-widest uppercase font-bold">
                  Institutional Responsibility
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-white font-bold tracking-tight">
                Eco-conscious engineering for lasting change
              </h2>
            </div>
            <p className="font-body-sm text-base text-slate-300 max-w-md leading-relaxed">
              Aligning heavy industrial construction and public infrastructure with stringent global environmental standards and transparent governance protocols.
            </p>
          </div>

          {/* 3 ESG Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* E */}
            <div className="p-8 bg-primary-container shadow-lg flex flex-col justify-between border-t-4 border-secondary-container rounded-xs">
              <div>
                <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6 shadow-sm border border-white/10">
                  <span className="font-headline text-2xl text-secondary-container font-bold">E</span>
                </div>
                <span className="font-label-caps text-xs text-secondary-fixed tracking-wider uppercase block mb-1 font-bold">
                  Environmental Stewardship
                </span>
                <h3 className="font-headline text-xl text-white font-bold mb-3">
                  Low-Carbon &amp; Resilient Design
                </h3>
                <p className="font-body-sm text-sm text-slate-200 leading-relaxed">
                  We mandate low-carbon pozzolanic cement mixes, implement localized wetland restoration buffers, and engineer hydrological modeling calibrated for 100-year extreme monsoon flood events.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-label-caps text-xs text-secondary-fixed hover:text-white transition-colors flex items-center gap-1.5 uppercase font-bold cursor-pointer"
                >
                  <span>Read Environmental Protocols</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* S */}
            <div className="p-8 bg-primary-container shadow-lg flex flex-col justify-between border-t-4 border-secondary-container rounded-xs">
              <div>
                <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6 shadow-sm border border-white/10">
                  <span className="font-headline text-2xl text-secondary-container font-bold">S</span>
                </div>
                <span className="font-label-caps text-xs text-secondary-fixed tracking-wider uppercase block mb-1 font-bold">
                  Social Accountability
                </span>
                <h3 className="font-headline text-xl text-white font-bold mb-3">
                  Zero-Harm &amp; Local Workforce
                </h3>
                <p className="font-body-sm text-sm text-slate-200 leading-relaxed">
                  Every jobsite enforces zero-compromise OSHA-standard occupational safety. Over 82% of technical personnel and field logistics coordinators are recruited and upskilled from native communities.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-label-caps text-xs text-secondary-fixed hover:text-white transition-colors flex items-center gap-1.5 uppercase font-bold cursor-pointer"
                >
                  <span>View Safety Performance Stats</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* G */}
            <div className="p-8 bg-primary-container shadow-lg flex flex-col justify-between border-t-4 border-secondary-container rounded-xs">
              <div>
                <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6 shadow-sm border border-white/10">
                  <span className="font-headline text-2xl text-secondary-container font-bold">G</span>
                </div>
                <span className="font-label-caps text-xs text-secondary-fixed tracking-wider uppercase block mb-1 font-bold">
                  Governance &amp; Integrity
                </span>
                <h3 className="font-headline text-xl text-white font-bold mb-3">
                  Anti-Corruption &amp; Traceability
                </h3>
                <p className="font-body-sm text-sm text-slate-200 leading-relaxed">
                  Unbending procurement integrity. Transparent electronic tendering, third-party material batch validation, and strict adherence to sovereign anti-corruption compliance matrices.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onNavigate('contact-us');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-label-caps text-xs text-secondary-fixed hover:text-white transition-colors flex items-center gap-1.5 uppercase font-bold cursor-pointer"
                >
                  <span>Review Compliance Charter</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VALUE PROPOSITION / WHY CHOOSE ZABIR */}
      <section className="w-full bg-surface py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex items-center gap-3 pb-2">
            <span className="w-10 h-1 bg-secondary rounded-full" />
            <span className="font-label-caps text-sm text-secondary tracking-widest uppercase font-bold">
              The Zabir Advantage
            </span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl text-primary font-bold tracking-tight pb-space-2xl">
            Why Sovereign &amp; Industrial Leaders Partner with Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-surface-container-low shadow-sm flex flex-col gap-3 border-t-4 border-secondary rounded-xs">
              <span className="material-symbols-outlined text-secondary text-4xl">account_balance</span>
              <h3 className="font-headline text-lg text-primary font-bold">Proven PPP Execution</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Decades of interfacing between private EPC contractors, ministerial oversight bodies, and sovereign financial lenders.
              </p>
            </div>
            <div className="p-6 bg-surface-container-low shadow-sm flex flex-col gap-3 border-t-4 border-secondary rounded-xs">
              <span className="material-symbols-outlined text-secondary text-4xl">architecture</span>
              <h3 className="font-headline text-lg text-primary font-bold">Multi-Discipline Depth</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                In-house structural, hydrological, mechanical, geodetic, and environmental engineers working under unified technical standards.
              </p>
            </div>
            <div className="p-6 bg-surface-container-low shadow-sm flex flex-col gap-3 border-t-4 border-secondary rounded-xs">
              <span className="material-symbols-outlined text-secondary text-4xl">emergency</span>
              <h3 className="font-headline text-lg text-primary font-bold">Rapid Mobilization (24/7)</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Dedicated emergency diagnostic and emergency repair desks providing rapid site assessments within 12 hours nationwide.
              </p>
            </div>
            <div className="p-6 bg-surface-container-low shadow-sm flex flex-col gap-3 border-t-4 border-secondary rounded-xs">
              <span className="material-symbols-outlined text-secondary text-4xl">verified</span>
              <h3 className="font-headline text-lg text-primary font-bold">Zero-Defect Quality Control</h3>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Rigorous material certification, non-destructive testing, and digital laser verification for millimeter structural tolerance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EDITORIAL PRESS RELEASES & TECHNICAL BULLETINS */}
      <section className="w-full bg-surface-container-low py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex items-center justify-between pb-space-xl">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-10 h-1 bg-secondary rounded-full" />
                <span className="font-label-caps text-sm text-secondary tracking-widest uppercase font-bold">
                  Corporate Intelligence
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl text-primary font-bold tracking-tight">
                News &amp; Technical Bulletins
              </h2>
            </div>
            <button
              onClick={() => onOpenArticle(NEWS_BULLETINS[0])}
              className="hidden sm:inline-flex items-center gap-2 font-label-lg text-base text-secondary font-bold hover:text-primary transition-colors cursor-pointer"
            >
              <span>All Bulletins</span>
              <span className="material-symbols-outlined text-xl">east</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NEWS_BULLETINS.map((article, i) => (
              <article
                key={i}
                onClick={() => onOpenArticle(article)}
                className="bg-white border border-outline-variant/30 p-6 shadow-sm flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-all rounded-xs"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-outline">
                    <span className="font-label-caps text-xs uppercase text-secondary font-bold bg-secondary/10 px-2.5 py-0.5 rounded-xs">
                      {article.tag}
                    </span>
                    <span className="font-label-md text-xs text-outline font-mono">{article.date}</span>
                  </div>
                  <h3 className="font-headline text-xl text-primary group-hover:text-secondary transition-colors font-bold leading-snug">
                    {article.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 flex items-center gap-2 text-secondary font-label-caps text-xs uppercase font-bold border-t border-slate-100">
                  <span>Read Article</span>
                  <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HIGH-CONVICTION EXECUTIVE RFQ / INSPECTION DESK */}
      <section className="w-full bg-primary text-white py-space-3xl relative overflow-hidden" id="rfq-section">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
            {/* Left Prompt Column */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 bg-secondary/20 px-3.5 py-1.5 self-start border border-secondary/40 rounded-xs">
                <span className="w-2.5 h-2.5 bg-secondary-fixed rounded-full" />
                <span className="font-label-caps text-xs text-secondary-fixed uppercase tracking-widest font-bold">
                  Rapid Technical Mobilization
                </span>
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-tight">
                Ready to engineer the future of your infrastructure project?
              </h2>
              <p className="font-body-lg text-lg text-slate-200 leading-relaxed">
                Whether preparing a national sovereign tender, requesting an urgent emergency structural diagnostic, or commissioning a masterplan feasibility audit, our engineering board responds with prompt technical clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-2">
                <div className="flex flex-col gap-1 p-4 bg-white/5 border border-white/10 rounded-xs">
                  <span className="font-label-caps text-xs text-secondary-fixed uppercase font-bold">
                    Executive Technical Direct
                  </span>
                  <a
                    className="font-headline text-xl text-white font-bold hover:text-secondary-fixed transition-colors"
                    href="tel:+8801922348015"
                  >
                    +880 1922-348015
                  </a>
                  <span className="font-body-sm text-xs text-slate-300">
                    Available 24/7 for On-Site Mobilization
                  </span>
                </div>
                <div className="flex flex-col gap-1 p-4 bg-white/5 border border-white/10 rounded-xs">
                  <span className="font-label-caps text-xs text-secondary-fixed uppercase font-bold">
                    Dhaka Headquarters
                  </span>
                  <span className="font-body-md text-sm text-white font-semibold">
                    Sector 04, Uttara, Dhaka 1230
                  </span>
                  <span className="font-body-sm text-xs text-slate-300">
                    info@zabircorp.com
                  </span>
                </div>
              </div>
            </div>

            {/* Right RFQ Interactive Form Card */}
            <div className="lg:col-span-5 bg-white p-8 text-on-surface shadow-2xl border border-slate-200 rounded-xs">
              <div className="flex flex-col gap-1 mb-6">
                <h3 className="font-headline text-2xl text-primary font-bold">
                  Initiate RFQ or Inspection
                </h3>
                <p className="font-body-sm text-sm text-on-surface-variant">
                  Submit initial specifications for prompt partner appraisal.
                </p>
              </div>

              {inquirySubmitted ? (
                <div className="bg-surface-container-high p-6 flex flex-col gap-3 border-l-4 border-secondary animate-in fade-in rounded-xs">
                  <div className="flex items-center gap-2 text-secondary font-bold">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                    <span className="text-lg">Inquiry Registered</span>
                  </div>
                  <p className="font-body-sm text-sm text-on-surface leading-relaxed">
                    Thank you. Zabir Engineering Directorate has received your transmission for <strong>{inquiryData.discipline}</strong>. Reference assigned: <strong className="font-mono text-primary">ZBR-2026-INQ-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryData({ name: '', org: '', discipline: 'Transportation & Highways', scope: '' });
                    }}
                    className="mt-3 bg-primary text-white py-2.5 px-5 text-xs uppercase font-bold self-start cursor-pointer hover:bg-secondary transition-colors rounded-xs shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleQuickInquiry}>
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Full Name &amp; Title *
                    </label>
                    <input
                      className="w-full bg-slate-50 text-slate-900 p-3 font-body-sm text-sm rounded-xs border border-slate-300 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      placeholder="e.g. Chief Engineer Rahman"
                      required
                      type="text"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Official Organization / Authority *
                    </label>
                    <input
                      className="w-full bg-slate-50 text-slate-900 p-3 font-body-sm text-sm rounded-xs border border-slate-300 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      placeholder="e.g. Ministry / EPC Contractor"
                      required
                      type="text"
                      value={inquiryData.org}
                      onChange={(e) => setInquiryData({ ...inquiryData, org: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Engineering Discipline
                    </label>
                    <select
                      className="w-full bg-slate-50 text-slate-900 p-3 font-body-sm text-sm rounded-xs border border-slate-300 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      value={inquiryData.discipline}
                      onChange={(e) => setInquiryData({ ...inquiryData, discipline: e.target.value })}
                    >
                      <option>Transportation &amp; Highways</option>
                      <option>Water Resources &amp; Sewerage</option>
                      <option>Urban &amp; Industrial Masterplanning</option>
                      <option>Energy &amp; Gas Infrastructure</option>
                      <option>Emergency Rapid Mobilization / Diagnostic</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-caps text-xs uppercase text-slate-700 mb-1.5 font-bold">
                      Scope Overview *
                    </label>
                    <textarea
                      className="w-full bg-slate-50 text-slate-900 p-3 font-body-sm text-sm rounded-xs border border-slate-300 focus:outline-none focus:bg-white focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-y"
                      placeholder="Brief technical scope, location, and desired timeline..."
                      rows={3}
                      required
                      value={inquiryData.scope}
                      onChange={(e) => setInquiryData({ ...inquiryData, scope: e.target.value })}
                    />
                  </div>
                  <button
                    className="w-full bg-secondary text-white py-3.5 font-label-lg hover:bg-secondary/90 transition-all font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer rounded-xs text-base tracking-wide"
                    type="submit"
                  >
                    <span>Transmit Project Inquiries</span>
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
