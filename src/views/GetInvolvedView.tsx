import React, { useState } from 'react';
import { 
  Users, 
  Heart, 
  CheckCircle2, 
  Send, 
  Gift
} from 'lucide-react';
import type { PageRoute } from '../types';

interface GetInvolvedViewProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenInterpreterModal?: () => void;
}

export const GetInvolvedView: React.FC<GetInvolvedViewProps> = () => {
  const [activeTab, setActiveTab] = useState<'membership' | 'sponsor' | 'volunteer'>('membership');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    region: 'Hhohho (Mbabane)',
    membershipCategory: 'Deaf Member',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
            <Users className="w-3.5 h-3.5" />
            Join the Movement
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
            Get Involved & Stand With Us
          </h1>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
            Whether you are Deaf, a hearing family member, an aspiring sign language interpreter, or a corporate partner, your involvement strengthens our collective voice.
          </p>

          {/* Action Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => {
                setActiveTab('membership');
                setFormSubmitted(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'membership'
                  ? 'bg-[#E5A93C] text-[#0B1B3D] shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>NADE Membership</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('sponsor');
                setFormSubmitted(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'sponsor'
                  ? 'bg-[#E5A93C] text-[#0B1B3D] shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>Sponsor a Deaf Child Kit</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('volunteer');
                setFormSubmitted(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'volunteer'
                  ? 'bg-[#E5A93C] text-[#0B1B3D] shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Volunteer & Interpreting</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Form Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#E2E8F0] space-y-6">
          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B1B3D] font-['Outfit']">
                Siyabonga Kakhulu, {formData.name}!
              </h2>
              <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                Your application for <strong className="text-[#0B1B3D]">{activeTab.toUpperCase()}</strong> has been submitted. Our regional membership coordinator in <strong className="text-[#0B1B3D]">{formData.region}</strong> will contact you via SMS/WhatsApp within 48 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-8 py-3 bg-[#0B1B3D] hover:bg-[#162C5B] text-white font-bold rounded-xl text-sm"
              >
                Submit Another Registration
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#E2E8F0] pb-4">
                <h3 className="text-xl font-bold text-[#0B1B3D] font-['Outfit']">
                  {activeTab === 'membership' && 'Official NADE Membership Registration'}
                  {activeTab === 'sponsor' && 'Sponsor an ESL School Kit (Siteki & Matsetsa)'}
                  {activeTab === 'volunteer' && 'Volunteer as an ESL Interpreter or Skills Mentor'}
                </h3>
                <p className="text-xs text-[#475569] mt-1">
                  {activeTab === 'membership' && 'Receive official voting rights, legal aid access, and community bulletins.'}
                  {activeTab === 'sponsor' && 'Provide visual stationery, ESL dictionary, and school uniform support for rural Deaf children.'}
                  {activeTab === 'volunteer' && 'Share your skills in graphic design, sign language tutoring, or community events.'}
                </p>
              </div>

              {/* Grid 1: Personal info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sipho Dlamini"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0B1B3D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                    Phone / WhatsApp Number (SMS Friendly) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+268 7600 0000"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm font-mono focus:outline-none focus:border-[#0B1B3D]"
                  />
                </div>
              </div>

              {/* Grid 2: Email & Region */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0B1B3D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                    Your Primary Region in Eswatini *
                  </label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0B1B3D]"
                  >
                    <option>Hhohho (Mbabane / Piggs Peak)</option>
                    <option>Manzini (Manzini / Matsapha / Malkerns)</option>
                    <option>Lubombo (Siteki / Simunye / Big Bend)</option>
                    <option>Shiselweni (Nhlangano / Hlatikhulu)</option>
                    <option>International Supporter</option>
                  </select>
                </div>
              </div>

              {/* Specific Options based on Tab */}
              {activeTab === 'membership' && (
                <div>
                  <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                    Membership Category *
                  </label>
                  <select
                    value={formData.membershipCategory}
                    onChange={(e) => setFormData({ ...formData, membershipCategory: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0B1B3D]"
                  >
                    <option>Deaf / Hard-of-Hearing Citizen (Free / Subsidized)</option>
                    <option>Hearing Family Member / Ally (E50/year)</option>
                    <option>Student / Youth Member (E20/year)</option>
                    <option>Professional Sign Language Interpreter (E100/year)</option>
                    <option>Corporate / Institutional Partner</option>
                  </select>
                </div>
              )}

              {activeTab === 'sponsor' && (
                <div>
                  <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                    Kit Sponsorship Package
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#E2E8F0] text-xs">
                      <strong className="block text-[#0B1B3D] font-bold">1 Child Kit</strong>
                      <span className="text-neutral-600">E350 (Stationery + ESL Guide)</span>
                    </div>
                    <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#E2E8F0] text-xs">
                      <strong className="block text-[#0B1B3D] font-bold">3 Children Kits</strong>
                      <span className="text-neutral-600">E1,000 (Full Term Support)</span>
                    </div>
                    <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#E2E8F0] text-xs">
                      <strong className="block text-[#0B1B3D] font-bold">Classroom Bundle</strong>
                      <span className="text-neutral-600">E3,500 (10 Students + Visuals)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Additional Notes / Motivation (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any special skills, questions, or ideas you would like to bring to NADE..."
                  className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-[#0B1B3D] hover:bg-[#162C5B] text-[#E5A93C] rounded-2xl font-black text-sm shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit Involvement Registration</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
