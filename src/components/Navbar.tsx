import React, { useState } from 'react';

export type PageId = 'home' | 'about' | 'services' | 'projects' | 'contact-us';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenRfq: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenRfq }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f9f9ff]/95 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,22,41,0.06)] border-b border-black/8 transition-all">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 text-left cursor-pointer group"
          aria-label="Zabir Corporation Home"
        >
          <div className="h-10 w-10 rounded-sm bg-primary flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform">
            <img
              alt="Zabir Corporation Brand Logo"
              className="h-full w-auto object-contain brightness-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Vbds0_V9xgFrAN6RnnOPjo6rNtcEkQEf9beyXzTze01WfE3G5Ryc_W-mFuu7q3q_yietfvmZnHDlvJqhIskDbMuhgI-U7HxXCGS6RJAn0BZi3B9PNfWIc3LoL9d2Tw0f88UVb579M_SjwtnPjQIWzAX3W8GIAlknIR0c_fic4xM6duK9RpYnzi9ex14VuodofYP-5QfvfLa3flL7DYWIBmrVARaoEuIIpZgtu2Zjr4BfqYr9Se777cZyE"
              onError={(e) => {
                // Graceful fallback to branded geometric emblem
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-headline font-bold text-xl sm:text-2xl text-primary tracking-tight">
              ZABIR
            </span>
            <span className="font-headline text-[11px] sm:text-xs text-secondary tracking-[0.2em] font-bold uppercase -mt-0.5">
              CORPORATION
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-label-lg px-4 py-2 rounded-sm text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'text-primary bg-primary/8 font-bold border-b-2 border-secondary shadow-xs'
                    : 'text-on-surface-variant hover:text-primary hover:bg-black/4'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Direct Desk Hotline */}
          <a
            className="hidden xl:flex items-center gap-2.5 text-right group py-1 px-2.5 rounded-sm hover:bg-black/3 transition-colors"
            href="tel:+8801922348015"
          >
            <span className="material-symbols-outlined text-secondary text-2xl group-hover:scale-110 transition-transform">
              support_agent
            </span>
            <div className="flex flex-col text-left">
              <span className="font-label-caps text-[11px] text-outline uppercase tracking-wider font-bold">
                Direct Desk
              </span>
              <span className="font-label-lg text-primary text-sm font-bold group-hover:text-secondary transition-colors">
                +880 1922-348015
              </span>
            </div>
          </a>

          {/* Primary RFQ Trigger */}
          <button
            onClick={onOpenRfq}
            className="inline-flex items-center gap-2 bg-secondary text-white font-label-lg text-sm sm:text-base px-5 py-2.5 rounded-sm shadow-md hover:bg-secondary/90 hover:shadow-lg transition-all group cursor-pointer font-bold tracking-wide"
          >
            <span>Enquire / RFQ</span>
            <span className="material-symbols-outlined text-lg transition-transform duration-200 group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>

          {/* User profile avatar / portal */}
          <button
            onClick={onOpenRfq}
            title="Sovereign Client Portal Access"
            className="w-10 h-10 rounded-sm bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-primary-container shadow-xs transition-colors"
            aria-label="Client Portal"
          >
            <span className="material-symbols-outlined text-xl">shield_person</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            className="lg:hidden p-2 text-primary hover:text-secondary focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-outline-variant/30 px-margin py-4 shadow-xl flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-left font-label-lg text-base py-3 px-4 rounded-sm transition-colors cursor-pointer ${
                  isActive
                    ? 'text-primary font-bold bg-surface-container border-l-4 border-secondary'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-black/3'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 mt-2 border-t border-outline-variant/20 flex flex-col gap-3">
            <a
              href="tel:+8801922348015"
              className="flex items-center gap-2 py-2 px-4 text-primary font-bold text-sm bg-surface-container-low rounded-sm"
            >
              <span className="material-symbols-outlined text-secondary text-xl">call</span>
              <span>Direct Desk: +880 1922-348015</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRfq();
              }}
              className="w-full bg-secondary text-white py-3 px-4 font-label-lg text-center font-bold text-sm uppercase tracking-wider rounded-sm shadow-md cursor-pointer hover:bg-secondary/90"
            >
              Open RFQ Inquiry Form
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
