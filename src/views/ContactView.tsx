import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  Video, 
  CalendarCheck
} from 'lucide-react';
import { BrandLogo } from '../components/BrandLogo';

interface ContactViewProps {
  onOpenInterpreterModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenInterpreterModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    preferredReply: 'SMS / WhatsApp (Best for Deaf)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
              <Phone className="w-3.5 h-3.5" />
              Accessible Communication
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
              Contact NADE Eswatini
            </h1>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
              We prioritize visual, text-based, and sign-accessible communication for Deaf citizens, families, legal officers, and partners across the Kingdom.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <BrandLogo variant="hero-crest" withGlow={true} />
          </div>
        </div>
      </section>

      {/* 2. Communication Channels Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* SMS / WhatsApp */}
          <div className="bg-[#0B1B3D] text-white p-6 rounded-3xl border-2 border-[#E5A93C] space-y-2 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-[#E5A93C] text-[#0B1B3D] flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-[#E5A93C] tracking-wider block">
              Primary Deaf Helpline (24/7)
            </span>
            <h4 className="text-xl font-mono font-black text-white">
              +268 7600 0000
            </h4>
            <p className="text-xs text-neutral-300">
              Direct SMS, WhatsApp texts & video call triage.
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] space-y-2 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#047857] text-white flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-[#047857] tracking-wider block">
              Official Email
            </span>
            <h4 className="text-sm font-bold text-[#0B1B3D] truncate">
              info@nade-eswatini.org
            </h4>
            <p className="text-xs text-neutral-500">
              For general inquiries, legal notices & partnerships.
            </p>
          </div>

          {/* Video Sign Consultation */}
          <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] space-y-2 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#C2410C] text-white flex items-center justify-center font-bold">
              <Video className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-[#C2410C] tracking-wider block">
              Remote Video Interpreting
            </span>
            <h4 className="text-sm font-bold text-[#0B1B3D]">
              Zoom / WhatsApp Video
            </h4>
            <p className="text-xs text-neutral-500">
              Book a live remote ESL interpreter consultation.
            </p>
          </div>

          {/* Operating Hours */}
          <div className="bg-white p-6 rounded-3xl border border-[#E2E8F0] space-y-2 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-[#E5A93C] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold text-[#0B1B3D] tracking-wider block">
              Office Hours
            </span>
            <h4 className="text-sm font-bold text-[#0B1B3D]">
              Mon – Fri: 08:00 – 16:30
            </h4>
            <p className="text-xs text-neutral-500">
              24/7 on-call dispatch for medical/court emergencies.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Main Grid: Regional Offices & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Regional Desks */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-[#0B1B3D] font-['Outfit'] pb-2 border-b border-[#E2E8F0]">
              Regional Field Desks
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-4 bg-white rounded-2xl border border-[#E2E8F0] space-y-1 shadow-xs">
                <div className="flex items-center justify-between font-bold text-[#0B1B3D]">
                  <span className="text-sm font-['Outfit']">1. Hhohho (National HQ)</span>
                  <span className="bg-[#0B1B3D] text-[#E5A93C] px-2 py-0.5 rounded text-[10px]">Mbabane</span>
                </div>
                <p className="text-neutral-600">NADE Advocacy House, Mbabane Central, Kingdom of Eswatini</p>
                <span className="text-[#047857] font-semibold block">Services: Executive, Legal Clinic, Parliament Liaison</span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#E2E8F0] space-y-1 shadow-xs">
                <div className="flex items-center justify-between font-bold text-[#0B1B3D]">
                  <span className="text-sm font-['Outfit']">2. Manzini Regional Hub</span>
                  <span className="bg-[#0B1B3D] text-[#E5A93C] px-2 py-0.5 rounded text-[10px]">Manzini</span>
                </div>
                <p className="text-neutral-600">Manzini Civic Centre & Deaf Vocational Skills Unit</p>
                <span className="text-[#047857] font-semibold block">Services: Vocational Training, Job Placement, RFM Hospital Desk</span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#E2E8F0] space-y-1 shadow-xs">
                <div className="flex items-center justify-between font-bold text-[#0B1B3D]">
                  <span className="text-sm font-['Outfit']">3. Lubombo Regional Office</span>
                  <span className="bg-[#0B1B3D] text-[#E5A93C] px-2 py-0.5 rounded text-[10px]">Siteki</span>
                </div>
                <p className="text-neutral-600">Siteki School for the Deaf Complex, Siteki, Lubombo</p>
                <span className="text-[#047857] font-semibold block">Services: School Support, Family Sign Camps, Lowveld Outreach</span>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#E2E8F0] space-y-1 shadow-xs">
                <div className="flex items-center justify-between font-bold text-[#0B1B3D]">
                  <span className="text-sm font-['Outfit']">4. Shiselweni Outreach Desk</span>
                  <span className="bg-[#0B1B3D] text-[#E5A93C] px-2 py-0.5 rounded text-[10px]">Nhlangano</span>
                </div>
                <p className="text-neutral-600">Nhlangano Community Development Complex, Shiselweni</p>
                <span className="text-[#047857] font-semibold block">Services: Rural Health Screening, GBV Support, Women Artisans</span>
              </div>
            </div>

            <button
              onClick={onOpenInterpreterModal}
              className="w-full py-3.5 bg-[#0B1B3D] hover:bg-[#162C5B] text-[#E5A93C] rounded-2xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book An Interpreter In Any Region</span>
            </button>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#E2E8F0] space-y-6">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1B3D] font-['Outfit']">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                  Siyabonga! We will get back to you via your preferred method ({form.preferredReply}) within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#0B1B3D] text-white rounded-xl text-xs font-bold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="pb-2 border-b border-[#E2E8F0]">
                  <h3 className="text-lg font-bold text-[#0B1B3D] font-['Outfit']">
                    Send Us an Accessible Message
                  </h3>
                  <p className="text-neutral-500">
                    We welcome questions, complaints, interpreter inquiries, and partnership ideas.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#0B1B3D] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Zanele Shongwe"
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#0B1B3D] mb-1">Phone / WhatsApp (SMS Friendly) *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+268 7600 0000"
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl font-mono focus:outline-none focus:border-[#0B1B3D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#0B1B3D] mb-1">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#0B1B3D] mb-1">Preferred Reply Channel *</label>
                    <select
                      value={form.preferredReply}
                      onChange={(e) => setForm({ ...form, preferredReply: e.target.value })}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                    >
                      <option>SMS / WhatsApp (Best for Deaf)</option>
                      <option>Email</option>
                      <option>Video Call in Eswatini Sign Language</option>
                      <option>Phone Voice Call</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#0B1B3D] mb-1">Subject / Category</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                  >
                    <option>General Inquiry</option>
                    <option>Legal Aid & Court Hearing</option>
                    <option>Hospital & Medical Interpretation</option>
                    <option>School & Education Support (Siteki / Matsetsa)</option>
                    <option>ESL Sign Language Classes</option>
                    <option>Corporate Partnership & Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#0B1B3D] mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#0B1B3D] hover:bg-[#162C5B] text-[#E5A93C] font-black rounded-xl text-sm shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to NADE Dispatch</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
