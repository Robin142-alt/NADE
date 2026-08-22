import React, { useState } from 'react';
import { X, Download, Printer, CheckCircle, BookOpen } from 'lucide-react';
import type { ResourceItem } from '../types';

interface ResourceViewerModalProps {
  resource: ResourceItem | null;
  onClose: () => void;
}

export const ResourceViewerModal: React.FC<ResourceViewerModalProps> = ({
  resource,
  onClose,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!resource) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 4000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-labelledby="resource-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border-2 border-[#E2E8F0] my-8 max-h-[90vh] overflow-y-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-[#0B1B3D]/10 text-[#0B1B3D] rounded-full text-xs font-bold font-mono">
              {resource.category} • {resource.format} ({resource.fileSize || '3.2 MB'})
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close document viewer"
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Title */}
        <h3 id="resource-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-['Outfit'] mb-3">
          {resource.title}
        </h3>
        <p className="text-xs text-neutral-500 mb-6">
          Published by NADE Directorate of Research & Inclusion • {resource.datePublished}
        </p>

        {/* Document Preview Box */}
        <div className="bg-[#F8F9FA] rounded-2xl p-6 border border-[#E2E8F0] space-y-4 mb-6 text-sm text-[#334155] leading-relaxed">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1B3D]">
            <BookOpen className="w-4 h-4 text-[#E5A93C]" />
            <span>Document Overview & Table of Contents</span>
          </div>

          <p className="text-base text-[#0F172A] font-medium">
            {resource.summary}
          </p>

          <div className="p-4 bg-white rounded-xl border border-[#E2E8F0] space-y-2 text-xs">
            <h5 className="font-bold text-[#0B1B3D] uppercase tracking-wide">
              Key Sections Included:
            </h5>
            <ul className="list-disc list-inside space-y-1 text-neutral-600">
              <li>Linguistic background and regional variations across Hhohho, Manzini, Lubombo, and Shiselweni</li>
              <li>Official constitutional & human rights compliance framework under UNCRPD Article 21</li>
              <li>High-resolution pictorial handshape charts & step-by-step guidance</li>
              <li>Emergency medical, judicial, and educational communication protocols</li>
              <li>Accreditation guidelines for public service interpreters</li>
            </ul>
          </div>
        </div>

        {/* Download Success Notice */}
        {downloaded && (
          <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2 animate-fadeIn">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Document downloaded successfully! Opening reader...</span>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-xs font-bold text-neutral-700 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print Brief</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-600 hover:bg-neutral-50 text-xs font-bold"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#0B1B3D] hover:bg-[#162C5B] text-[#E5A93C] rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>{resource.downloadLabel}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
