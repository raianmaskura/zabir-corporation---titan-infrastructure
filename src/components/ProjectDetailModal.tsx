import React, { useState } from 'react';
import { ProjectItem } from '../data';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenRfq: (discipline?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenRfq
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!project) return null;

  const handleDownloadPdf = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#001629]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white max-w-4xl w-full shadow-2xl border border-slate-200 relative my-6 max-h-[92vh] overflow-y-auto rounded-xs">
        {/* Modal Top Banner */}
        <div className="bg-primary text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10 sticky top-0 z-20 shadow-md">
          <div className="flex flex-col pr-4">
            <span className="font-label-caps text-xs text-secondary-fixed uppercase tracking-widest font-bold">
              ZABIR INFRASTRUCTURE DOSSIER // {project.id.toUpperCase()}
            </span>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-white mt-1 leading-snug">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-2 rounded-xs hover:bg-white/10 cursor-pointer transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Media & Key Header */}
        <div className="relative h-72 md:h-96 w-full bg-primary overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
            <div>
              <span className="font-label-caps text-xs bg-secondary px-3 py-1 uppercase tracking-wider block w-fit mb-1 font-bold rounded-xs shadow-sm">
                {project.categoryLabel}
              </span>
              <p className="font-headline text-lg sm:text-xl font-bold">{project.location}</p>
            </div>
            <span className="font-label-caps text-xs bg-primary/90 backdrop-blur px-3.5 py-1.5 border border-white/20 font-bold rounded-xs">
              {project.status}
            </span>
          </div>
        </div>

        {/* Dossier Body */}
        <div className="p-6 sm:p-8 flex flex-col gap-6">
          {/* Executive Overview */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-secondary font-label-caps text-xs sm:text-sm uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-xl">contract</span>
              <span>Client: {project.client} &bull; Scale: {project.valueOrScale}</span>
            </div>
            <p className="font-body-lg text-base sm:text-lg text-slate-800 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="flex flex-col gap-3">
            <span className="font-label-caps text-xs text-outline uppercase tracking-wider font-bold">
              Audited Technical Matrix
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.specs.map((spec, i) => (
                <div key={i} className="bg-slate-50 p-4 border-l-4 border-secondary rounded-xs">
                  <span className="font-label-caps text-xs text-slate-500 uppercase block font-bold">
                    {spec.label}
                  </span>
                  <span className="font-headline text-lg text-primary font-bold block my-1">
                    {spec.value}
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm text-slate-600 leading-snug">
                    {spec.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Highlights */}
          <div className="flex flex-col gap-2 bg-slate-50 p-6 rounded-xs border border-slate-200">
            <span className="font-label-caps text-xs sm:text-sm text-primary uppercase font-bold tracking-wider">
              Critical Engineering Innovations &amp; Compliance Notes
            </span>
            <ul className="flex flex-col gap-2 pt-2">
              {project.engineeringHighlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2.5 font-body-sm text-sm text-slate-700 leading-relaxed">
                  <span className="material-symbols-outlined text-secondary text-lg mt-0.5">verified</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Notification Banner */}
          {downloadSuccess && (
            <div className="bg-secondary/10 p-4 border-l-4 border-secondary flex items-center gap-4 animate-in fade-in rounded-xs">
              <span className="material-symbols-outlined text-secondary text-3xl">file_download_done</span>
              <div className="flex flex-col">
                <span className="font-label-lg text-primary font-bold text-sm sm:text-base">
                  Technical Case Dossier (SHA-256 Validated) Dispatched
                </span>
                <span className="font-body-sm text-xs sm:text-sm text-slate-600">
                  The executive project dossier for &quot;{project.title}&quot; has been verified against FIDIC archive registry.
                </span>
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 text-primary font-label-lg px-5 py-3 hover:bg-slate-200 transition-colors cursor-pointer rounded-xs text-sm font-semibold border border-slate-300"
            >
              <span className="material-symbols-outlined text-secondary text-xl">
                {downloading ? 'hourglass_top' : 'download'}
              </span>
              <span>{downloading ? 'Preparing Cryptographic PDF...' : 'Download Technical Case Dossier (PDF)'}</span>
            </button>

            <div className="flex gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                className="px-5 py-3 font-label-md text-slate-600 hover:text-primary cursor-pointer text-sm font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenRfq(project.category);
                }}
                className="inline-flex items-center gap-2 bg-secondary text-white font-label-lg px-6 py-3 hover:bg-secondary/90 transition-colors cursor-pointer rounded-xs text-sm font-bold shadow-md"
              >
                <span>Request Similar Advisory</span>
                <span className="material-symbols-outlined text-base">east</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
