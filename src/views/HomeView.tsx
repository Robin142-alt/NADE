import React from 'react';
import { 
  Hand, 
  BookOpen, 
  Video, 
  HeartHandshake, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  ChevronRight,
  Award,
  CheckCircle2,
  Play
} from 'lucide-react';
import type { PageRoute } from '../types';
import { NADE_PROGRAMMES } from '../data/programmes';
import { ESL_DICTIONARY } from '../data/dictionary';
import { VIDEO_HUB_ITEMS } from '../data/hub';
import { COMMUNITY_STORIES } from '../data/stories';
import { InteractiveEswatiniMap } from '../components/InteractiveEswatiniMap';
import { FingerspellingLiveTool } from '../components/FingerspellingLiveTool';
import { BrandLogo } from '../components/BrandLogo';

interface HomeViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenInterpreterModal: () => void;
  onSelectSignItem?: (signId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenInterpreterModal,
}) => {
  const featuredSign = ESL_DICTIONARY[0]; // Sawubona
  const recentHubVideo = VIDEO_HUB_ITEMS[0];
  const featuredStory = COMMUNITY_STORIES[0];

  return (
    <div className="space-y-16 sm:space-y-24 relative overflow-hidden">
      {/* 🌟 Soft Ambient Logo Watermark Background for Entire Home Page */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
        {/* Upper Soft Logo Watermark (Behind Stats & Live Finger Spelling Tool) */}
        <div className="absolute top-[480px] -right-20 w-[550px] h-[550px] sm:w-[850px] sm:h-[850px] opacity-[0.04] blur-[0.5px] transform rotate-12">
          <img 
            src="/nade-logo.png" 
            alt="" 
            className="w-full h-full object-contain filter contrast-125 grayscale" 
          />
        </div>

        {/* Center Grand Majestic Watermark (Behind Programmes & Map) */}
        <div className="absolute top-[1250px] -left-28 w-[650px] h-[650px] sm:w-[950px] sm:h-[950px] opacity-[0.035] transform -rotate-12">
          <div className="absolute inset-0 bg-[#E5A93C]/10 rounded-full blur-3xl -z-10" />
          <img 
            src="/nade-logo.png" 
            alt="" 
            className="w-full h-full object-contain filter contrast-150 brightness-105" 
          />
        </div>

        {/* Lower Soft Logo Watermark (Behind Video Hub & Community Stories) */}
        <div className="absolute top-[2100px] right-10 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] opacity-[0.03] blur-[1px] transform rotate-6">
          <img 
            src="/nade-logo.png" 
            alt="" 
            className="w-full h-full object-contain filter grayscale" 
          />
        </div>

        {/* Soft Ambient Royal Navy & Gold Glows */}
        <div className="absolute top-[600px] left-10 w-96 h-96 bg-[#0B1B3D]/5 rounded-full blur-3xl" />
        <div className="absolute top-[1600px] right-10 w-96 h-96 bg-[#E5A93C]/5 rounded-full blur-3xl" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1B3D] via-[#0F234D] to-[#0B1B3D] text-white pt-12 pb-20 lg:py-24 border-b-4 border-[#E5A93C] z-10">
        {/* Background linework mesh */}
        <div className="absolute inset-0 opacity-15 hand-pattern-bg pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C2410C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Hero Text & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* National Badge with mini seal */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-[#E5A93C]/50 backdrop-blur-md shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                  Kingdom of Eswatini • Siyakwemukela
                </span>
                <span className="text-white/40">|</span>
                <span className="text-xs text-neutral-300 font-medium">Est. 1993</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Outfit'] tracking-tight leading-[1.1] text-white">
                Every Hand Has a <span className="text-[#E5A93C] underline decoration-[#C2410C]/50 decoration-wavy">Voice</span>.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-2xl font-light">
                The National Association of the Deaf Eswatini (NADE) is the official apex organisation uniting and empowering Deaf, Deafblind, and hard-of-hearing Swazis. Championing Eswatini Sign Language recognition, bilingual education, healthcare equity, and human rights.
              </p>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('sign-language')}
                  className="px-6 py-3.5 bg-[#E5A93C] hover:bg-[#F3C465] text-[#0B1B3D] rounded-2xl font-black text-sm shadow-xl shadow-[#E5A93C]/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore ESL Dictionary</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenInterpreterModal}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-2xl font-bold text-sm backdrop-blur-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <HeartHandshake className="w-4 h-4 text-[#E5A93C]" />
                  <span>Book an Interpreter</span>
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="px-5 py-3.5 text-neutral-300 hover:text-[#E5A93C] font-bold text-sm transition-colors flex items-center gap-1.5"
                >
                  <span>About NADE Heritage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#047857]" />
                  <span>National Disability Federation (FODSWA)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E5A93C]" />
                  <span>WFD International Affiliate</span>
                </div>
              </div>
            </div>

            {/* Right Col: Official Crest Spotlight & Interactive Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Grand Emblem Spotlight */}
              <div className="bg-gradient-to-b from-white/15 via-white/5 to-[#060F24]/80 border-2 border-[#E5A93C]/40 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
                {/* Background Watermark */}
                <BrandLogo variant="watermark" className="absolute -right-8 -bottom-8 w-56 h-56" />

                {/* Crest Display */}
                <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                  <BrandLogo variant="hero-crest" withGlow={true} />
                  
                  <div className="text-center sm:text-left space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#E5A93C] text-[10px] font-black uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3" />
                      Apex National Body
                    </div>
                    <h3 className="text-xl font-black text-white font-['Outfit']">
                      National Association of the Deaf Eswatini
                    </h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Official custodian of Eswatini Sign Language (ESL) research, advocacy, and community empowerment.
                    </p>
                  </div>
                </div>

                {/* Sign of the Day Mini Widget */}
                <div className="pt-4 border-t border-white/15 relative z-10">
                  <div className="flex items-center justify-between bg-[#060F24]/90 rounded-2xl p-4 border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-gradient-to-tr from-[#E5A93C] to-[#C2410C] rounded-xl flex items-center justify-center text-[#0B1B3D] shadow-md flex-shrink-0">
                        <Hand className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#E5A93C]">Sign of the Day</span>
                          <span className="text-[10px] text-neutral-400">• {featuredSign.category}</span>
                        </div>
                        <h4 className="text-base font-black text-white font-['Outfit']">{featuredSign.word} ("{featuredSign.siswatiWord}")</h4>
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate('sign-language')}
                      className="px-3.5 py-2 bg-[#E5A93C] hover:bg-[#F3C465] text-[#0B1B3D] rounded-xl font-extrabold text-xs transition-transform hover:scale-105 flex-shrink-0"
                    >
                      Learn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT STATS TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 text-center shadow-lg border border-[#E2E8F0] space-y-1 hover:border-[#E5A93C] transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-[#0B1B3D] font-['Outfit'] block">
              12,000+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">
              Deaf & HOH Swazis Represented
            </span>
          </div>

          <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 text-center shadow-lg border border-[#E2E8F0] space-y-1 hover:border-[#E5A93C] transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-[#0B1B3D] font-['Outfit'] block">
              4 Regions
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">
              Hhohho, Manzini, Lubombo, Shiselweni
            </span>
          </div>

          <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 text-center shadow-lg border border-[#E2E8F0] space-y-1 hover:border-[#E5A93C] transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-[#0B1B3D] font-['Outfit'] block">
              2,500+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">
              Documented ESL Signs
            </span>
          </div>

          <div className="bg-white/95 backdrop-blur-xs rounded-3xl p-6 text-center shadow-lg border border-[#E2E8F0] space-y-1 hover:border-[#E5A93C] transition-colors">
            <span className="text-3xl sm:text-4xl font-black text-[#0B1B3D] font-['Outfit'] block">
              45+
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#475569]">
              Accredited Interpreters Roster
            </span>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE FINGER SPELLING TOOL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FingerspellingLiveTool />
      </section>

      {/* 4. STRATEGIC PILLARS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C2410C]">
            Strategic Focus Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B3D] font-['Outfit']">
            Our Core Programmes
          </h2>
          <p className="text-sm text-[#475569]">
            Targeted interventions advancing equality, education, health, and economic independence for Deaf citizens in Eswatini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NADE_PROGRAMMES.slice(0, 6).map((prog) => (
            <div
              key={prog.id}
              onClick={() => onNavigate('work')}
              className="group bg-white/95 backdrop-blur-xs rounded-3xl p-7 shadow-lg border border-[#E2E8F0] hover:shadow-2xl hover:border-[#E5A93C] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D] text-[#E5A93C] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Hand className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B1B3D] font-['Outfit'] group-hover:text-[#C2410C] transition-colors">
                  {prog.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                  {prog.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#0B1B3D] group-hover:text-[#E5A93C]">
                <span>Read Full Brief</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE ESWATINI GEOGRAPHIC MAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <InteractiveEswatiniMap />
      </section>

      {/* 6. ACCESSIBLE VIDEO HUB TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#060F24] rounded-3xl p-8 lg:p-12 text-white border-2 border-[#162C5B] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C]/20 border border-[#E5A93C]/40 rounded-full text-xs font-bold text-[#E5A93C]">
                <Video className="w-3.5 h-3.5" />
                Accessible Media Hub
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit']">
                Eswatini Sign Language Broadcasts & Transcripts
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Watch parliamentary briefings, health tutorials, and cultural documentaries with synchronized interactive transcripts, picture-in-picture sign language presenters, and closed captions.
              </p>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                <span className="text-xs font-bold text-[#E5A93C] block uppercase">Latest Featured Episode:</span>
                <p className="text-sm font-semibold text-white">
                  {recentHubVideo.title}
                </p>
              </div>
              <button
                onClick={() => onNavigate('hub')}
                className="px-6 py-3 bg-[#E5A93C] hover:bg-[#F3C465] text-[#0B1B3D] font-black rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-transform active:scale-95"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Watch In Accessible Hub</span>
              </button>
            </div>

            <div className="lg:col-span-5 bg-black/40 rounded-2xl p-6 border border-white/10 text-center space-y-3">
              <div className="w-16 h-16 bg-[#0B1B3D] text-[#E5A93C] rounded-full flex items-center justify-center mx-auto border-2 border-[#E5A93C]">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <span className="text-xs font-mono font-bold text-neutral-400 block">
                Duration: {recentHubVideo.duration} • Category: {recentHubVideo.category}
              </span>
              <p className="text-xs text-neutral-300 italic">
                Presented by: {recentHubVideo.presenter}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY VOICE & SOLIDARITY SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#0B1B3D] to-[#162C5B] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E5A93C]">
                Community Voices • {featuredStory.location}
              </span>
              <blockquote className="text-xl sm:text-2xl font-bold font-['Outfit'] italic text-neutral-100">
                {featuredStory.quote}
              </blockquote>
              <div>
                <strong className="text-white block text-base font-bold">
                  {featuredStory.name}
                </strong>
                <span className="text-xs text-[#E5A93C] font-semibold">
                  {featuredStory.role}
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex justify-end">
              <button
                onClick={() => onNavigate('get-involved')}
                className="w-full sm:w-auto px-6 py-4 bg-[#E5A93C] hover:bg-[#F3C465] text-[#0B1B3D] rounded-2xl font-black text-sm shadow-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <Users className="w-4 h-4" />
                <span>Join NADE Movement</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
