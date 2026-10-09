import React from 'react';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenLegalModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegalModal }) => {
  return (
    <footer className="w-full bg-primary text-white pt-space-3xl pb-space-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-2xl">
          {/* Col 1: Brand & Emergency Hotline */}
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-secondary text-white flex items-center justify-center font-headline font-bold text-lg rounded-xs">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-xl font-bold tracking-tight text-white">
                  ZABIR CORP
                </span>
                <span className="font-label-caps text-xs text-secondary-fixed tracking-widest uppercase">
                  Titan Infrastructure
                </span>
              </div>
            </div>
            <p className="font-body-sm text-sm text-slate-300 leading-relaxed">
              Tier-one engineering, sovereign procurement, and heavy infrastructure delivery across South Asia. Engineered precision for national, civil, and industrial developments.
            </p>
            <div className="flex flex-col gap-1 pt-2">
              <span className="font-label-caps text-xs text-secondary-fixed uppercase tracking-wider font-bold">
                Emergency Technical Hotline
              </span>
              <a
                className="font-headline text-lg sm:text-xl text-white hover:text-secondary-fixed transition-colors font-bold inline-flex items-center gap-2"
                href="tel:+8801922348015"
              >
                <span className="material-symbols-outlined text-secondary-fixed text-lg">call</span>
                <span>+880 1922-348015</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-space-md">
            <span className="font-label-caps text-xs text-secondary-fixed tracking-wider uppercase font-bold">
              Organization Navigation
            </span>
            <nav className="flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left font-body-sm text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-secondary text-sm">chevron_right</span>
                <span>About Organization</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left font-body-sm text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-secondary text-sm">chevron_right</span>
                <span>Services &amp; Capabilities</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left font-body-sm text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-secondary text-sm">chevron_right</span>
                <span>Infrastructure Projects</span>
              </button>
              <button
                onClick={() => {
                  onOpenLegalModal(
                    'Careers & Engineering Talent',
                    'Zabir Corporation is continually scouting top-tier chartered structural engineers, hydrological modellers, and FIDIC-certified project superintending managers. Inquiries and CV dossiers may be dispatched directly to talent@zabircorporation.com.'
                  );
                }}
                className="text-left font-body-sm text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-secondary text-sm">chevron_right</span>
                <span>Careers &amp; Engineering Talent</span>
              </button>
              <button
                onClick={() => {
                  onOpenLegalModal(
                    'Sustainability Governance',
                    'Our corporate sustainability charter mandates full compliance with World Bank Environmental and Social Framework (ESF), strict carbon-offset auditing for deep concrete viaducts, and local community upskilling quotas exceeding 80% on all sovereign civil projects.'
                  );
                }}
                className="text-left font-body-sm text-sm text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-secondary text-sm">chevron_right</span>
                <span>Sustainability Governance</span>
              </button>
            </nav>
          </div>

          {/* Col 3: Core Sectors */}
          <div className="flex flex-col gap-space-md">
            <span className="font-label-caps text-xs text-secondary-fixed tracking-wider uppercase font-bold">
              Engineering Disciplines
            </span>
            <ul className="flex flex-col gap-2.5 font-body-sm text-sm text-slate-300">
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-secondary text-sm">arrow_right</span>
                  <span>Transportation &amp; Bridges</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-secondary text-sm">arrow_right</span>
                  <span>Water Resources &amp; Hydrology</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-secondary text-sm">arrow_right</span>
                  <span>Energy &amp; Power Infrastructure</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-secondary text-sm">arrow_right</span>
                  <span>Urban Regional Masterplanning</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-secondary text-sm">arrow_right</span>
                  <span>Environmental &amp; Social Management</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Dhaka Headquarters */}
          <div className="flex flex-col gap-space-md">
            <span className="font-label-caps text-xs text-secondary-fixed tracking-wider uppercase font-bold">
              Dhaka Headquarters
            </span>
            <div className="flex flex-col gap-1.5 font-body-sm text-sm text-slate-300">
              <p className="font-semibold text-white">Corporate Tower, Level 12-16</p>
              <p>Sector 04, Uttara, Dhaka-1230</p>
              <p className="pt-1 text-slate-300">Email: info@zabircorp.com</p>
              <p className="text-slate-300">Hotline: +880 1922-348015</p>
            </div>
            <div className="mt-2 p-3 bg-primary-container border border-white/10 rounded-xs">
              <span className="font-label-caps text-xs text-secondary-fixed block font-bold">
                ISO 9001:2015 &amp; ISO 14001 Certified
              </span>
              <span className="text-xs text-slate-300 mt-0.5 block">
                FIDIC Sovereign Registry Compliant
              </span>
            </div>
          </div>
        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-space-lg border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-space-md text-sm">
          <span className="font-body-sm text-slate-400 text-sm">
            &copy; 2026 Zabir Corporation. All Rights Reserved. Sovereign Civil Engineering &amp; Procurement.
          </span>
          <div className="flex flex-wrap gap-space-lg font-label-md text-sm text-slate-300">
            <button
              onClick={() =>
                onOpenLegalModal(
                  'Privacy Policy',
                  'Zabir Corporation enforces strict confidentiality for all electronic procurement transmissions, bidding dossiers, and government technical inspection records in compliance with international data custody standards.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() =>
                onOpenLegalModal(
                  'Terms of Service',
                  'All digital tender submissions and technical feasibility calculations provided via this portal are subject to standard FIDIC conditions and formal engineering contracts executed with Zabir Corporation.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() =>
                onOpenLegalModal(
                  'Procurement Compliance',
                  'Zabir Corporation mandates zero-tolerance anti-bribery governance under international transparency treaties. Direct reports can be filed with the Independent Board Audit Committee via compliance@zabircorporation.com.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              Procurement Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
