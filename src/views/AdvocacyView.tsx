import React, { useState } from 'react';
import { 
  Scale, 
  CheckCircle2, 
  Send, 
  Gavel
} from 'lucide-react';
import type { PageRoute } from '../types';
import { BrandLogo } from '../components/BrandLogo';

interface AdvocacyViewProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenInterpreterModal: () => void;
  onOpenResourceModal?: (resourceId: string) => void;
}

export const AdvocacyView: React.FC<AdvocacyViewProps> = ({
  onOpenInterpreterModal,
}) => {
  const [petitionSigned, setPetitionSigned] = useState(false);
  const [signerCount, setSignerCount] = useState(4820);
  const [signerName, setSignerName] = useState('');
  const [signerRegion, setSignerRegion] = useState('Hhohho');

  const uncrpdArticles = [
    {
      article: 'Article 9: Accessibility',
      title: 'Universal Public & Information Access',
      desc: 'Mandates that state institutions, courts, hospitals, and media implement sign language interpreters, tactile signage, and accessible electronic communications across Eswatini.'
    },
    {
      article: 'Article 21: Freedom of Expression & Opinion',
      title: 'Recognition of National Sign Languages',
      desc: 'Obligates the government of Eswatini to recognize and promote the use of sign languages in official interactions, state broadcasts, and public inquiries.'
    },
    {
      article: 'Article 24: Inclusive Education',
      title: 'Bilingual-Bimodal Learning in Sign Language',
      desc: 'Ensures Deaf children receive early education in sign language and learn from qualified Deaf educators with adequate visual teaching materials.'
    },
    {
      article: 'Article 27: Work & Employment',
      title: 'Equal Opportunity & Non-Discrimination',
      desc: 'Protects Deaf employees against workplace discrimination and guarantees reasonable accommodations in public and private employment sectors.'
    }
  ];

  const handleSignPetition = (e: React.FormEvent) => {
    e.preventDefault();
    if (signerName.trim()) {
      setPetitionSigned(true);
      setSignerCount((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
              <Scale className="w-3.5 h-3.5" />
              Human Rights & Legal Charter
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
              Advocacy, UNCRPD & Legal Equality
            </h1>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
              Defending Deaf rights in courtrooms, police stations, Parliament, and healthcare clinics across the Kingdom of Eswatini under constitutional and international law.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <BrandLogo variant="hero-crest" withGlow={true} />
          </div>
        </div>
      </section>

      {/* 2. Parliamentary Petition Highlight Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0B1B3D] to-[#162C5B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-[#E5A93C] relative overflow-hidden">
          {/* Watermark */}
          <BrandLogo variant="watermark" className="absolute -right-6 -bottom-6 w-64 h-64" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <BrandLogo variant="card-badge" />
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
                  <Gavel className="w-3.5 h-3.5" />
                  Official NADE Campaign 2026
                </div>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black font-['Outfit']">
                Petition for Official Constitutional Recognition of Eswatini Sign Language
              </h2>
              <p className="text-sm text-neutral-200 leading-relaxed">
                We are mobilizing 10,000 Swazi citizens to urge the Parliament and Cabinet of Eswatini to formally recognize Eswatini Sign Language (ESL) as an official national language.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span>Signatures Gathered: <strong>{signerCount.toLocaleString()}</strong></span>
                  <span className="text-[#E5A93C]">Goal: 10,000</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                  <div 
                    className="bg-[#E5A93C] h-full rounded-full transition-all duration-500"
                    style={{ width: `${(signerCount / 10000) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Petition Sign Form */}
            <div className="lg:col-span-5 bg-white text-[#0B1B3D] rounded-2xl p-6 shadow-xl space-y-4">
              {petitionSigned ? (
                <div className="text-center py-6 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold font-['Outfit']">Thank You, {signerName}!</h3>
                  <p className="text-xs text-[#475569]">
                    Your signature from {signerRegion} has been registered in the National Solidarity Roster for Parliament.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSignPetition} className="space-y-3 text-xs">
                  <h3 className="text-base font-bold font-['Outfit'] text-[#0B1B3D] pb-1 border-b border-neutral-200">
                    Add Your Name in Solidarity
                  </h3>
                  <div>
                    <label className="block font-bold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={signerName}
                      onChange={(e) => setSignerName(e.target.value)}
                      placeholder="e.g. Nomcebo Dlamini"
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Your Region in Eswatini *</label>
                    <select
                      value={signerRegion}
                      onChange={(e) => setSignerRegion(e.target.value)}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                    >
                      <option>Hhohho (Mbabane)</option>
                      <option>Manzini (Commercial Hub)</option>
                      <option>Lubombo (Siteki)</option>
                      <option>Shiselweni (Nhlangano)</option>
                      <option>International Ally</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0B1B3D] hover:bg-[#162C5B] text-[#E5A93C] rounded-xl font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Sign Petition for Deaf Equality</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. UNCRPD Articles Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C2410C]">
            International Framework
          </span>
          <h2 className="text-3xl font-black text-[#0B1B3D] font-['Outfit']">
            UNCRPD Rights Enforced in Eswatini
          </h2>
          <p className="text-sm text-[#475569]">
            The Kingdom of Eswatini is legally bound to uphold the UN Convention on the Rights of Persons with Disabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uncrpdArticles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 shadow-lg border border-[#E2E8F0] space-y-3 hover:border-[#E5A93C] transition-all"
            >
              <span className="text-xs font-mono font-bold text-[#C2410C] uppercase block">
                {art.article}
              </span>
              <h3 className="text-lg font-bold text-[#0B1B3D] font-['Outfit']">
                {art.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {art.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Courtroom & Legal Aid Assistance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-bold text-[#0B1B3D] font-['Outfit']">
              Facing a Court Hearing or Police Statement?
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Never attend a legal proceeding without a qualified, impartial sign language interpreter. NADE provides urgent court interpreter booking across Mbabane, Manzini, Siteki, and Nhlangano.
            </p>
          </div>
          <button
            onClick={onOpenInterpreterModal}
            className="px-6 py-3.5 bg-[#0B1B3D] hover:bg-[#162C5B] text-[#E5A93C] font-extrabold rounded-2xl text-xs sm:text-sm shadow-md transition-all shrink-0 flex items-center gap-2"
          >
            <Gavel className="w-4 h-4" />
            <span>Request Court Interpreter</span>
          </button>
        </div>
      </section>
    </div>
  );
};
