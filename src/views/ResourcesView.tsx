import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Eye, 
  ArrowRight
} from 'lucide-react';
import { NADE_RESOURCES } from '../data/resources';
import type { ResourceItem } from '../types';
import { ResourceViewerModal } from '../components/ResourceViewerModal';
import { BrandLogo } from '../components/BrandLogo';

export const ResourcesView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeResource, setActiveResource] = useState<ResourceItem | null>(null);

  const categories = [
    'All',
    'Sign Language',
    'Education',
    'Health',
    'Rights & Policy',
    'Employment',
    'Reports',
    'Training'
  ];

  const filteredResources = NADE_RESOURCES.filter((res) => {
    const matchesCat = selectedCategory === 'All' || res.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = 
      res.title.toLowerCase().includes(q) ||
      res.summary.toLowerCase().includes(q) ||
      res.category.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-12 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
              <BookOpen className="w-3.5 h-3.5" />
              Knowledge & Toolkits
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
              NADE Resource & Publications Library
            </h1>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
              Download and read official ESL handbooks, clinical visual communication cards, bilingual teacher pedagogies, and legislative policy memoranda.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <BrandLogo variant="hero-crest" withGlow={true} />
          </div>
        </div>
      </section>

      {/* 2. Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-lg border border-[#E2E8F0] space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resource titles, clinical guides, policy reports..."
              aria-label="Search resources"
              className="w-full pl-12 pr-4 py-3 bg-[#F8F9FA] border border-neutral-300 rounded-2xl text-sm focus:outline-none focus:border-[#0B1B3D]"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0B1B3D] text-[#E5A93C] shadow-sm ring-1 ring-[#0B1B3D]'
                    : 'bg-[#F8F9FA] text-[#475569] hover:bg-[#E2E8F0] border border-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              onClick={() => setActiveResource(res)}
              className="group bg-white rounded-3xl p-7 shadow-md border border-[#E2E8F0] hover:shadow-2xl hover:border-[#E5A93C] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B1B3D]/10 text-[#0B1B3D] px-2.5 py-1 rounded-full">
                    {res.category} • {res.format}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {res.fileSize}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1B3D] font-['Outfit'] group-hover:text-[#C2410C] transition-colors leading-snug">
                  {res.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {res.summary}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#0B1B3D] group-hover:text-[#E5A93C]">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>Preview & Read</span>
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Modal for Document Preview & Download */}
      <ResourceViewerModal
        resource={activeResource}
        onClose={() => setActiveResource(null)}
      />
    </div>
  );
};
