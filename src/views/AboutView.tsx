import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Building2, 
  Globe, 
  CheckCircle2,
  Scale
} from 'lucide-react';
import { NADE_LEADERSHIP } from '../data/leadership';
import type { PageRoute } from '../types';

interface AboutViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenInterpreterModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = () => {
  const milestones = [
    {
      year: '1980s - 1990s',
      title: 'Roots in Siteki & Community Awakening',
      desc: 'Deaf elders, teachers, and alumni from the historic Siteki School for the Deaf began regular grassroots assemblies, recognizing the need for a unified national voice.'
    },
    {
      year: '2000s',
      title: 'Formal National Association Incorporation',
      desc: 'NADE was formally registered in Mbabane as the umbrella representative body of the Deaf in Eswatini, affiliated with FODSWA and international Deaf federations.'
    },
    {
      year: '2012',
      title: 'Eswatini Ratifies the UNCRPD',
      desc: 'NADE played a vital advocacy role leading to Eswatini’s ratification of the UN Convention on the Rights of Persons with Disabilities, legally binding language rights.'
    },
    {
      year: '2020 - 2024',
      title: 'National ESL Research & Hospital Interpreters',
      desc: 'Rollout of the first comprehensive Eswatini Sign Language documentation and formal medical interpreter deployment at 4 regional referral centers.'
    },
    {
      year: '2025 - 2026',
      title: 'Constitutional Recognition Movement',
      desc: 'Presentation of the official Parliamentary memorandum to establish Eswatini Sign Language as an official national language of the Kingdom.'
    }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
            <ShieldCheck className="w-3.5 h-3.5" />
            About NADE Eswatini
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
            Our Mission, History & Governance
          </h1>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
            Founded by the Deaf, led by the Deaf, for the Deaf. We are dedicated to ensuring that every Deaf and hard-of-hearing Swazi lives in dignity, equality, and complete linguistic freedom.
          </p>
        </div>
      </section>

      {/* 2. Mission, Vision, Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E2E8F0] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D] text-[#E5A93C] flex items-center justify-center shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1B3D] font-['Outfit']">
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              To advocate for, protect, and promote the constitutional, linguistic, social, educational, and economic rights of Deaf, Deafblind, and hard-of-hearing persons throughout the Kingdom of Eswatini.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E2E8F0] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#047857] text-white flex items-center justify-center shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1B3D] font-['Outfit']">
              Our Vision
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              An inclusive, accessible, and barrier-free Eswatini where Eswatini Sign Language is legally celebrated, and Deaf citizens achieve their fullest potential without discrimination.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#E2E8F0] space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C2410C] text-white flex items-center justify-center shadow-md">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B1B3D] font-['Outfit']">
              Our Core Values
            </h3>
            <ul className="text-xs sm:text-sm text-[#475569] space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                <span><strong>Linguistic Pride:</strong> ESL as our indigenous heritage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                <span><strong>Deaf Leadership:</strong> "Nothing about us without us"</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                <span><strong>Human Dignity:</strong> Full equality in all public spheres</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Historical Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C2410C]">
            Journey of Resilience
          </span>
          <h2 className="text-3xl font-black text-[#0B1B3D] font-['Outfit']">
            Our Historic Milestones
          </h2>
          <p className="text-sm text-[#475569]">
            From early school gatherings in Siteki to the halls of Parliament in Lobamba.
          </p>
        </div>

        <div className="relative border-l-2 border-[#0B1B3D]/20 ml-4 md:ml-32 space-y-8 py-4">
          {milestones.map((m, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#E5A93C] border-2 border-[#0B1B3D]" />
              <span className="text-xs font-mono font-bold text-[#C2410C] block mb-1">
                {m.year}
              </span>
              <h4 className="text-lg font-bold text-[#0B1B3D] font-['Outfit']">
                {m.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed max-w-2xl mt-1">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leadership & Regional Governance Council */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C2410C]">
            Governance & Leadership
          </span>
          <h2 className="text-3xl font-black text-[#0B1B3D] font-['Outfit']">
            National Executive Council & Regional Officers
          </h2>
          <p className="text-sm text-[#475569]">
            Dedicated Deaf leaders, linguists, and regional coordinators advancing our mandate across the Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NADE_LEADERSHIP.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 shadow-md border border-[#E2E8F0] space-y-3 flex flex-col justify-between hover:shadow-xl hover:border-[#E5A93C] transition-all"
            >
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1B3D] text-[#E5A93C] flex items-center justify-center font-bold text-lg">
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-base font-bold text-[#0B1B3D] font-['Outfit']">
                  {leader.name}
                </h4>
                <span className="text-xs font-semibold text-[#C2410C] block">
                  {leader.title}
                </span>
                <p className="text-xs text-[#475569] leading-relaxed pt-1">
                  {leader.roleDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-[#047857] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Executive Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. National Partnerships & Affiliations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-[#E2E8F0] text-center space-y-6">
          <h3 className="text-lg font-bold text-[#0B1B3D] font-['Outfit'] uppercase tracking-wider">
            Institutional Affiliations & Alliances
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] flex flex-col items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#0B1B3D] mb-2" />
              <span className="font-bold text-xs text-[#0B1B3D]">FODSWA</span>
              <span className="text-[10px] text-[#475569]">Federation of Organizations on Disability Eswatini</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] flex flex-col items-center justify-center">
              <Globe className="w-6 h-6 text-[#047857] mb-2" />
              <span className="font-bold text-xs text-[#0B1B3D]">WFD</span>
              <span className="text-[10px] text-[#475569]">World Federation of the Deaf</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] flex flex-col items-center justify-center">
              <Building2 className="w-6 h-6 text-[#C2410C] mb-2" />
              <span className="font-bold text-xs text-[#0B1B3D]">MoET & MoH</span>
              <span className="text-[10px] text-[#475569]">Ministries of Education & Health</span>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#E2E8F0] flex flex-col items-center justify-center">
              <Scale className="w-6 h-6 text-[#E5A93C] mb-2" />
              <span className="font-bold text-xs text-[#0B1B3D]">UNCRPD Panel</span>
              <span className="text-[10px] text-[#475569]">Human Rights Commission Partner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
