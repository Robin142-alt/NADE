import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2,
  Send,
  ShieldCheck
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface InterpreterBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InterpreterBookingModal: React.FC<InterpreterBookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    serviceType: 'Healthcare / Medical Appointment',
    region: 'Hhohho (Mbabane)',
    locationDetails: '',
    date: '',
    time: '',
    durationHours: '2',
    specialNotes: '',
    isDeafClient: false
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-labelledby="booking-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-2 border-[#E2E8F0] my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-6">
          <div className="flex items-center gap-3">
            <BrandLogo variant="card-badge" />
            <div>
              <div className="flex items-center gap-2">
                <h2 id="booking-modal-title" className="text-lg sm:text-xl font-bold text-[#0B1B3D] font-['Outfit']">
                  Book Certified ESL Interpreter
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-[#047857] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" />
                  NADE Accredited
                </span>
              </div>
              <p className="text-xs text-[#475569]">
                Official National Association of the Deaf Eswatini service dispatch
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-xl transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1B3D] font-['Outfit']">
              Interpreter Request Received!
            </h3>
            <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
              Siyabonga! Our National Interpreter Dispatcher will review your schedule for <strong className="text-[#0B1B3D]">{formData.date} at {formData.time}</strong> in <strong className="text-[#0B1B3D]">{formData.region}</strong>.
            </p>
            <div className="p-4 bg-[#F8F9FA] rounded-2xl max-w-md mx-auto text-left text-xs space-y-2 border border-[#E2E8F0]">
              <div className="flex justify-between">
                <span className="text-neutral-500">Service Category:</span>
                <span className="font-bold text-[#0B1B3D]">{formData.serviceType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Contact Number:</span>
                <span className="font-mono font-bold text-[#0B1B3D]">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Emergency Dispatch Helpline:</span>
                <span className="font-mono font-bold text-[#C2410C]">+268 7600 0000</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500">
              You will receive an SMS and Email confirmation within 2 business hours (immediate dispatch for medical/police emergencies).
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-8 py-3 bg-[#0B1B3D] hover:bg-[#162C5B] text-white font-bold rounded-xl text-sm transition-all"
            >
              Done & Return
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="p-3 bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 rounded-2xl text-xs text-[#0B1B3D] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#047857]" />
              <span>
                <strong>Accredited Roster:</strong> All NADE interpreters adhere to the National ESL Code of Ethics & strict legal confidentiality.
              </span>
            </div>

            {/* Grid 1: Basic Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Full Name / Requester *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Dr. Sipho Mthethwa"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Organization / Ministry / Hospital (Optional)
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Mbabane Government Hospital"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>
            </div>

            {/* Grid 2: Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Phone / WhatsApp Number (Required) *
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

              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>
            </div>

            {/* Service Type & Region */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Assignment Category *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0B1B3D]"
                >
                  <option>Healthcare / Medical Appointment</option>
                  <option>Courtroom / Legal Aid / Police Station</option>
                  <option>School / University Lecture & Exams</option>
                  <option>Public Conference / Workshop</option>
                  <option>Television / Broadcast Media</option>
                  <option>Employment Interview / Performance Review</option>
                  <option>Family / Wedding / Funeral Ceremony</option>
                  <option>Virtual / Online Video Call (Zoom / Teams)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Eswatini Region *
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
                  <option>Online / Remote Video Interpretation</option>
                </select>
              </div>
            </div>

            {/* Date, Time, Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Date of Service *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Start Time *
                </label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0B1B3D]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                  Duration (Hours)
                </label>
                <select
                  value={formData.durationHours}
                  onChange={(e) => setFormData({ ...formData, durationHours: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0B1B3D]"
                >
                  <option value="1">1 Hour</option>
                  <option value="2">2 Hours (Standard)</option>
                  <option value="4">Half Day (4 Hours)</option>
                  <option value="8">Full Day (8 Hours)</option>
                  <option value="multi">Multiple Days</option>
                </select>
              </div>
            </div>

            {/* Venue & Notes */}
            <div>
              <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                Specific Venue Location or Virtual Link
              </label>
              <input
                type="text"
                value={formData.locationDetails}
                onChange={(e) => setFormData({ ...formData, locationDetails: e.target.value })}
                placeholder="e.g. Mbabane Magistrate Court 2, or Zoom Link"
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 rounded-xl text-sm focus:outline-none focus:border-[#0B1B3D]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0B1B3D] mb-1">
                Special Briefing Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                placeholder="Any special vocabulary, dialect preference, or confidentiality notices..."
                className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#0B1B3D]"
              />
            </div>

            {/* Is Deaf Client Checkbox */}
            <div className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
              <input
                type="checkbox"
                id="isDeafClient"
                checked={formData.isDeafClient}
                onChange={(e) => setFormData({ ...formData, isDeafClient: e.target.checked })}
                className="w-4 h-4 text-[#0B1B3D] rounded border-neutral-300 focus:ring-[#0B1B3D]"
              />
              <label htmlFor="isDeafClient" className="text-xs text-[#0B1B3D] font-medium cursor-pointer">
                I am a Deaf or hard-of-hearing person requesting an interpreter for myself (Eligible for free community support fund).
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E2E8F0]">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-600 hover:bg-neutral-50 text-xs font-bold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#0B1B3D] hover:bg-[#162C5B] text-[#E5A93C] font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Interpreter Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
