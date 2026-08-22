import React, { useState } from 'react';
import { 
  Languages, 
  GraduationCap, 
  HeartPulse, 
  Briefcase, 
  Scale, 
  Trophy, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  CalendarCheck
} from 'lucide-react';
import { NADE_PROGRAMMES } from '../data/programmes';
import type { PageRoute } from '../types';

interface ProgrammesViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenInterpreterModal: () => void;
}

export const ProgrammesView: React.FC<ProgrammesViewProps> = ({
  onNavigate,
  onOpenInterpreterModal,
}) => {
  const [selectedProgrammeId, setSelectedProgrammeId] = useState<string>(NADE_PROGRAMMES[0].id);

  const activeProg = NADE_PROGRAMMES.find((p) => p.id === selectedProgrammeId) || NADE_PROGRAMMES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Languages': return <Languages className="w-6 h-6" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Scale': return <Scale className="w-6 h-6" />;
      case 'Trophy': return <Trophy className="w-6 h-6" />;
      default: return <Languages className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#0F234D] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
            <Sparkles className="w-3.5 h-3.5" />
            Our Strategic Work
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
            NADE National Strategic Pillars
          </h1>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
            Six comprehensive focus areas driving structural reform, linguistic preservation, early education, healthcare equity, and economic empowerment across the Kingdom of Eswatini.
          </p>
        </div>
      </section>

      {/* 2. Interactive Pillar Explorer (Tabs & Detail Pane) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Pillar Selectors */}
          <div className="lg:col-span-4 space-y-2.5">
            {NADE_PROGRAMMES.map((prog) => {
              const isSelected = prog.id === selectedProgrammeId;
              return (
                <button
                  key={prog.id}
                  onClick={() => setSelectedProgrammeId(prog.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all flex items-start gap-3.5 border ${
                    isSelected
                      ? 'bg-[#0B1B3D] text-white border-[#E5A93C] shadow-lg ring-2 ring-[#0B1B3D]'
                      : 'bg-white text-[#0B1B3D] border-[#E2E8F0] hover:bg-[#F8F9FA]'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    isSelected ? 'bg-[#E5A93C] text-[#0B1B3D]' : 'bg-[#F1F5F9] text-[#0B1B3D]'
                  }`}>
                    {getIcon(prog.iconName)}
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold font-['Outfit'] leading-snug ${
                      isSelected ? 'text-white' : 'text-[#0B1B3D]'
                    }`}>
                      {prog.title}
                    </h4>
                    <p className={`text-xs mt-1 line-clamp-2 ${
                      isSelected ? 'text-neutral-300' : 'text-[#475569]'
                    }`}>
                      {prog.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: In-depth Detail Card */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#E2E8F0] space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#E2E8F0]">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#0B1B3D] text-[#E5A93C] rounded-2xl">
                  {getIcon(activeProg.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                    Pillar In Focus
                  </span>
                  <h3 className="text-2xl font-black text-[#0B1B3D] font-['Outfit']">
                    {activeProg.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Full description */}
            <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
              {activeProg.fullDesc}
            </p>

            {/* Strategic Target Box */}
            <div className="p-4 rounded-2xl bg-[#0B1B3D] text-white space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5A93C] block">
                2030 Strategic Goal:
              </span>
              <p className="text-sm font-bold text-white">
                {activeProg.strategicGoal}
              </p>
            </div>

            {/* Key Deliverables & Highlights */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D] mb-3">
                Active Deliverables & Milestones:
              </h4>
              <ul className="space-y-2.5">
                {activeProg.highlights.map((item, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-[#F8F9FA] border border-neutral-200 text-xs sm:text-sm text-[#0F172A] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal / Verified Framework */}
            {activeProg.verifiedContext && (
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium">
                <strong>Framework Alignment:</strong> {activeProg.verifiedContext}
              </div>
            )}

            {/* Action Row */}
            <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onOpenInterpreterModal}
                className="px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#162C5B] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2"
              >
                <CalendarCheck className="w-4 h-4 text-[#E5A93C]" />
                <span>Request Programme Interpreter Support</span>
              </button>

              <button
                onClick={() => onNavigate('get-involved')}
                className="px-5 py-2.5 bg-[#E5A93C] hover:bg-[#F3C465] text-[#0B1B3D] rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5"
              >
                <span>Sponsor This Pillar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
