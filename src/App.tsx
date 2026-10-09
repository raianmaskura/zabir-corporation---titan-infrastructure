import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { ProjectsScreen } from './screens/ProjectsScreen';
import { ContactScreen } from './screens/ContactScreen';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { RfqModal } from './components/RfqModal';
import { ScopeModal } from './components/ScopeModal';
import { ProjectItem, NEWS_BULLETINS } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [rfqDiscipline, setRfqDiscipline] = useState<string | undefined>(undefined);
  const [isScopeOpen, setIsScopeOpen] = useState(false);
  const [scopeDiscipline, setScopeDiscipline] = useState<string | undefined>(undefined);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; title: string; content: string }>({
    isOpen: false,
    title: '',
    content: ''
  });
  const [articleModal, setArticleModal] = useState<{
    isOpen: boolean;
    article: (typeof NEWS_BULLETINS)[0] | null;
  }>({
    isOpen: false,
    article: null
  });

  // Scroll to top on navigation
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRfq = (discipline?: string) => {
    setRfqDiscipline(discipline);
    setIsRfqOpen(true);
  };

  const handleOpenScopeModal = (discipline?: string) => {
    setScopeDiscipline(discipline);
    setIsScopeOpen(true);
  };

  const handleOpenLegalModal = (title: string, content: string) => {
    setLegalModal({ isOpen: true, title, content });
  };

  const handleOpenArticle = (article: (typeof NEWS_BULLETINS)[0]) => {
    setArticleModal({ isOpen: true, article });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface antialiased font-body">
      {/* Universal Fixed Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-20 flex flex-col">
        {currentPage === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenRfq={handleOpenRfq}
            onOpenArticle={handleOpenArticle}
          />
        )}
        {currentPage === 'about' && (
          <AboutScreen
            onNavigate={handleNavigate}
            onOpenRfq={handleOpenRfq}
          />
        )}
        {currentPage === 'services' && (
          <ServicesScreen
            onNavigate={handleNavigate}
            onOpenRfq={handleOpenRfq}
            onOpenScopeModal={handleOpenScopeModal}
          />
        )}
        {currentPage === 'projects' && (
          <ProjectsScreen
            onNavigate={handleNavigate}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenRfq={handleOpenRfq}
          />
        )}
        {currentPage === 'contact-us' && (
          <ContactScreen
            onOpenRfq={handleOpenRfq}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenRfq={(discipline) => {
          setSelectedProject(null);
          handleOpenRfq(discipline);
        }}
      />

      <RfqModal
        isOpen={isRfqOpen}
        onClose={() => setIsRfqOpen(false)}
        initialDiscipline={rfqDiscipline}
      />

      <ScopeModal
        isOpen={isScopeOpen}
        onClose={() => setIsScopeOpen(false)}
        defaultSector={scopeDiscipline}
      />

      {/* Legal & Compliance Modal */}
      {legalModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#001629]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white max-w-xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative rounded-xs">
            <button
              onClick={() => setLegalModal({ isOpen: false, title: '', content: '' })}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-2 rounded-xs hover:bg-slate-100 cursor-pointer transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <h3 className="font-headline text-2xl font-bold uppercase text-primary mb-3 pr-8">
              {legalModal.title}
            </h3>
            <div className="font-body-md text-slate-700 text-base leading-relaxed whitespace-pre-line border-t border-slate-200 pt-4 max-h-96 overflow-y-auto">
              {legalModal.content}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setLegalModal({ isOpen: false, title: '', content: '' })}
                className="bg-secondary text-white px-7 py-2.5 font-label-caps text-xs uppercase font-bold cursor-pointer hover:bg-secondary/90 transition-all rounded-xs shadow-md"
              >
                Acknowledge &amp; Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Article / Bulletin Modal */}
      {articleModal.isOpen && articleModal.article && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#001629]/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white max-w-2xl w-full border border-slate-200 shadow-2xl p-6 sm:p-8 relative rounded-xs max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setArticleModal({ isOpen: false, article: null })}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-2 rounded-xs hover:bg-slate-100 cursor-pointer transition-colors"
              aria-label="Close"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="flex items-center gap-2 mb-2 pr-8">
              <span className="bg-secondary text-white px-3 py-1 font-label-caps text-xs uppercase font-bold rounded-xs shadow-xs">
                {articleModal.article.tag}
              </span>
              <span className="text-slate-500 text-xs font-mono font-bold">{articleModal.article.date}</span>
              <span className="text-slate-500 text-xs font-mono">&bull; {articleModal.article.readTime}</span>
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase text-primary mb-4 leading-snug">
              {articleModal.article.title}
            </h3>
            <div className="font-body-md text-slate-700 text-base leading-relaxed border-t border-slate-200 pt-4 space-y-4">
              <p className="font-semibold text-slate-900 text-lg">
                {articleModal.article.excerpt}
              </p>
              <p>
                In alignment with Zabir Corporation's sovereign advisory protocols, continuous empirical monitoring data gathered from across our geotechnical field stations confirms adherence to international civil specifications and ICAO Annex 14 safety criteria.
              </p>
              <p>
                Our engineering directorate continues to publish whitepapers and empirical case studies supporting institutional capacity-building for regional water development boards, civil aviation authorities, and mass transit corridors.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500 font-semibold">
                Zabir Corp Technical Bulletin Archive
              </span>
              <button
                onClick={() => setArticleModal({ isOpen: false, article: null })}
                className="bg-secondary text-white px-6 py-2.5 font-label-caps text-xs uppercase font-bold cursor-pointer hover:bg-secondary/90 transition-colors rounded-xs shadow-md"
              >
                Close Bulletin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
