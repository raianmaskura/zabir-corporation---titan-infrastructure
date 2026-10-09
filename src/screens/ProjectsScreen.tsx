import React, { useState, useMemo } from 'react';
import { PageId } from '../components/Navbar';
import { PROJECTS_DATA, ProjectItem } from '../data';

interface ProjectsScreenProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenRfq: (discipline?: string) => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({
  onNavigate,
  onSelectProject,
  onOpenRfq
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        project.title.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q)) ||
        project.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full">
      {/* 1. PROJECTS HERO */}
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
              <span>Sovereign Civil Register &bull; Track Record</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-tight font-bold">
              Commissioned Infrastructure &amp; Active Field Deliveries
            </h1>
            <p className="mt-4 text-slate-200 font-body-lg text-lg sm:text-xl leading-relaxed">
              Explore audited civil engineering assets delivered across South Asia. Filter by discipline, examine geotechnical foundation parameters, or inspect verified taking-over certificates (TOC).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenRfq()}
              className="bg-secondary text-white px-7 py-3.5 font-label-lg font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all shadow-lg cursor-pointer rounded-xs"
            >
              Submit Tender RFQ
            </button>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="bg-surface-container-low border-b border-outline-variant/30 py-4 px-margin sticky top-20 z-20 backdrop-blur-md bg-opacity-95 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'aviation-transit', label: 'Aviation & Transit' },
              { id: 'water-sanitation', label: 'Water & Sanitation' },
              { id: 'industrial-sez', label: 'Industrial & SEZ' },
              { id: 'energy-transmission', label: 'Energy & Gas' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 font-label-caps text-xs sm:text-sm uppercase tracking-wider font-bold transition-all cursor-pointer rounded-xs ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white shadow-md ring-2 ring-secondary/50'
                    : 'bg-white text-on-surface-variant hover:text-on-surface border border-outline-variant/30 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[300px]">
            <span className="material-symbols-outlined absolute left-3 top-3 text-secondary text-xl">
              search
            </span>
            <input
              type="text"
              placeholder="Search by keyword, client, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-outline-variant/40 pl-10 pr-10 py-2.5 font-body-sm text-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary rounded-xs transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-outline hover:text-on-surface text-xs font-mono font-bold cursor-pointer"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. PROJECT GRID */}
      <section className="py-space-2xl px-margin bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Result counter */}
          <div className="flex items-center justify-between mb-6 text-sm font-mono text-outline">
            <span className="font-semibold text-slate-700">
              SHOWING {filteredProjects.length} OF {PROJECTS_DATA.length} AUDITED ASSETS
            </span>
            {selectedCategory !== 'all' && (
              <span className="text-secondary font-bold uppercase">
                FILTER: {selectedCategory.replace('-', ' ')}
              </span>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            /* Empty State */
            <div className="bg-white border border-dashed border-outline-variant/60 p-12 text-center max-w-xl mx-auto my-12 rounded-xs shadow-xs">
              <span className="material-symbols-outlined text-5xl text-outline mb-3 block">
                search_off
              </span>
              <h3 className="font-headline font-bold text-xl text-on-surface uppercase mb-2">
                No Projects Match Your Search
              </h3>
              <p className="font-body-sm text-sm text-on-surface-variant mb-6 leading-relaxed">
                Try adjusting your search criteria or clear the filters to view the complete sovereign portfolio.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="bg-primary text-white px-6 py-2.5 font-label-caps text-xs uppercase font-bold cursor-pointer hover:bg-secondary transition-colors rounded-xs shadow-sm"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-outline-variant/30 flex flex-col hover:border-secondary transition-all shadow-sm hover:shadow-xl group rounded-xs overflow-hidden"
                >
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] bg-primary overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent opacity-85" />

                    {/* Status badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-primary/90 text-secondary-fixed px-3 py-1 font-label-caps text-xs uppercase font-bold tracking-wider border border-secondary/40 backdrop-blur-sm rounded-xs shadow-xs">
                        {project.categoryLabel}
                      </span>
                      <span className="bg-white/95 text-primary px-3 py-1 font-label-caps text-xs uppercase font-bold tracking-wider border border-outline-variant/40 backdrop-blur-sm rounded-xs shadow-xs">
                        {project.status}
                      </span>
                    </div>

                    {/* Scale / Value metric */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="font-mono text-xs sm:text-sm text-white bg-primary/90 px-2.5 py-1 border-l-4 border-secondary inline-block rounded-xs">
                        {project.valueOrScale}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-label-caps text-xs text-outline uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                        <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
                        <span>{project.location}</span>
                      </div>

                      <h3 className="font-headline text-xl font-bold text-on-surface uppercase group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                        {project.title}
                      </h3>

                      <div className="font-body-sm text-sm text-secondary font-bold mt-2">
                        Client: {project.client}
                      </div>

                      <p className="font-body-sm text-on-surface-variant text-sm mt-3 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="bg-slate-100 text-slate-700 px-2.5 py-1 font-mono text-xs border border-slate-200 rounded-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Micro Specs */}
                      <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 border border-slate-200 mt-4 text-xs font-mono rounded-xs">
                        {project.specs.slice(0, 2).map((s, sIdx) => (
                          <div key={sIdx}>
                            <div className="text-slate-500 text-xs uppercase font-bold">{s.label}</div>
                            <div className="font-bold text-slate-900 text-sm truncate mt-0.5">{s.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-primary hover:text-secondary font-label-caps text-xs sm:text-sm uppercase font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <span>Inspect Dossier</span>
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </button>

                      <button
                        onClick={() => onOpenRfq(project.title)}
                        className="text-secondary hover:text-primary text-xs font-mono font-bold uppercase cursor-pointer transition-colors bg-secondary/10 px-2.5 py-1 rounded-xs"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. FOOTER BANNER FOR TECHNICAL VERIFICATION */}
      <section className="bg-primary text-white py-space-2xl px-margin border-t border-primary-container">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold uppercase">
              Need Direct Verification for Sovereign Prequalification?
            </h3>
            <p className="font-body-md text-slate-200 text-base mt-2 max-w-2xl leading-relaxed">
              Our Chief Technical Officer provides authenticated letters of engineering competence, FIDIC completion certificates, and audited balance sheets for multilateral tenders.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact-us')}
            className="bg-secondary text-white px-8 py-3.5 font-label-lg font-bold uppercase tracking-wider hover:bg-secondary/90 transition-all flex-shrink-0 cursor-pointer shadow-lg rounded-xs text-base"
          >
            Contact Sovereign Desk
          </button>
        </div>
      </section>
    </div>
  );
};
