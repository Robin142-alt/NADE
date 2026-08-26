import React, { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Quote, 
  ArrowRight
} from 'lucide-react';
import { COMMUNITY_STORIES } from '../data/stories';
import type { StoryItem, PageRoute } from '../types';
import { BrandLogo } from '../components/BrandLogo';

interface StoriesViewProps {
  onNavigate?: (route: PageRoute) => void;
}

export const StoriesView: React.FC<StoriesViewProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStory, setActiveStory] = useState<StoryItem | null>(null);

  const categories = [
    'All',
    'Deaf Leaders',
    'Students',
    'Entrepreneurs',
    'Advocates',
    'Athletes',
    'Community Champions'
  ];

  const filteredStories = COMMUNITY_STORIES.filter(
    (s) => selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <div className="space-y-12 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
              <Heart className="w-3.5 h-3.5" />
              Voices of Resilience
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
              Stories from the Swazi Deaf Community
            </h1>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
              Meet the leaders, students, organic farmers, code instructors, and athletes shaping an inclusive Kingdom of Eswatini with their hands and hearts.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <BrandLogo variant="hero-crest" withGlow={true} />
          </div>
        </div>
      </section>

      {/* 2. Categories filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0B1B3D] text-[#E5A93C] shadow-md ring-1 ring-[#0B1B3D]'
                  : 'bg-white text-[#475569] hover:bg-[#F8F9FA] border border-[#E2E8F0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              onClick={() => setActiveStory(story)}
              className="group bg-white rounded-3xl p-7 shadow-lg border border-[#E2E8F0] hover:shadow-2xl hover:border-[#E5A93C] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B1B3D]/10 text-[#0B1B3D] px-2.5 py-1 rounded-full">
                    {story.category}
                  </span>
                  <span className="text-xs text-[#C2410C] font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {story.location.split(',')[0]}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-[#0B1B3D] font-['Outfit'] group-hover:text-[#C2410C] transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#E5A93C]">
                    {story.role}
                  </p>
                </div>

                {/* Quote */}
                <div className="p-3.5 bg-[#F8F9FA] rounded-2xl border-l-4 border-[#0B1B3D] italic text-xs text-[#334155] leading-relaxed">
                  {story.quote}
                </div>

                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {story.story}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#0B1B3D] group-hover:text-[#E5A93C]">
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Story Detail Modal */}
      {activeStory && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-labelledby="story-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-2 border-[#E2E8F0] my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-6">
              <span className="px-3 py-1 bg-[#0B1B3D] text-[#E5A93C] rounded-full text-xs font-mono font-bold">
                {activeStory.category} • {activeStory.location}
              </span>
              <button
                onClick={() => setActiveStory(null)}
                aria-label="Close story modal"
                className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 id="story-modal-title" className="text-2xl sm:text-3xl font-black text-[#0B1B3D] font-['Outfit']">
                  {activeStory.name}
                </h3>
                <p className="text-sm font-semibold text-[#C2410C] mt-1">
                  {activeStory.role}
                </p>
              </div>

              <div className="p-4 bg-[#0B1B3D] text-white rounded-2xl border border-white/10 space-y-2">
                <Quote className="w-5 h-5 text-[#E5A93C]" />
                <p className="text-sm font-medium italic text-neutral-100">
                  {activeStory.quote}
                </p>
              </div>

              <div className="space-y-3 text-sm text-[#334155] leading-relaxed">
                <p>{activeStory.story}</p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex justify-end">
                <button
                  onClick={() => setActiveStory(null)}
                  className="px-6 py-2.5 bg-[#0B1B3D] text-white rounded-xl font-bold text-xs"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
