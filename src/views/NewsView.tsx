import React, { useState } from 'react';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { NADE_NEWS_ARTICLES } from '../data/news';
import type { NewsArticle } from '../types';

export const NewsView: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const upcomingEvents = [
    {
      date: 'March 14, 2026',
      time: '09:00 AM',
      title: 'Free Community Sign Language Taster Workshop',
      location: 'Mbabane Civic Centre Hall',
      audience: 'Public & Families'
    },
    {
      date: 'April 04, 2026',
      time: '10:30 AM',
      title: 'Deaf Artisan & Organic Produce Exhibition',
      location: 'Mavuso Trade Centre, Manzini',
      audience: 'Entrepreneurs & Buyers'
    },
    {
      date: 'May 18, 2026',
      time: '08:30 AM',
      title: 'National ESL Spelling & Storytelling Championship',
      location: 'Siteki School for the Deaf Main Hall',
      audience: 'Students & Educators'
    }
  ];

  return (
    <div className="space-y-12 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
            <Newspaper className="w-3.5 h-3.5" />
            Media & Announcements
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
            NADE News, Press Releases & Events
          </h1>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
            Stay informed on our legislative advocacy, regional healthcare rollouts, community festivals, and school innovations across the Kingdom.
          </p>
        </div>
      </section>

      {/* 2. Main Grid: Articles & Events Calendar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: News Articles */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-xl font-bold text-[#0B1B3D] font-['Outfit'] pb-2 border-b border-[#E2E8F0]">
              Latest Official Dispatches
            </h2>

            <div className="space-y-6">
              {NADE_NEWS_ARTICLES.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-white rounded-3xl p-7 shadow-lg border border-[#E2E8F0] hover:shadow-2xl hover:border-[#E5A93C] transition-all cursor-pointer space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="px-2.5 py-1 bg-[#0B1B3D]/10 text-[#0B1B3D] font-mono font-bold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime} • {article.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B1B3D] font-['Outfit'] group-hover:text-[#C2410C] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#0B1B3D] group-hover:text-[#E5A93C]">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Upcoming Events Calendar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0B1B3D] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E5A93C] pb-2 border-b border-white/10">
                <Calendar className="w-4 h-4" />
                <span>Upcoming Community Calendar</span>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((evt, idx) => (
                  <div key={idx} className="p-3.5 bg-white/5 rounded-2xl border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#E5A93C] font-mono font-bold">{evt.date}</span>
                      <span className="text-neutral-400">{evt.time}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {evt.title}
                    </h4>
                    <p className="text-xs text-neutral-300">
                      📍 {evt.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Article Reader Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-labelledby="article-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border-2 border-[#E2E8F0] my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-6">
              <span className="px-3 py-1 bg-[#0B1B3D] text-[#E5A93C] rounded-full text-xs font-mono font-bold">
                {selectedArticle.category} • {selectedArticle.date}
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article modal"
                className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 id="article-modal-title" className="text-2xl sm:text-3xl font-black text-[#0B1B3D] font-['Outfit'] leading-tight">
                  {selectedArticle.title}
                </h3>
                <p className="text-xs text-neutral-500 mt-2">
                  By {selectedArticle.author} • {selectedArticle.readTime}
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#E2E8F0] flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 bg-[#0B1B3D] text-white rounded-xl font-bold text-xs"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
