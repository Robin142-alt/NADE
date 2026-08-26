import React from 'react';
import { 
  MapPin, 
  Mail, 
  Heart, 
  ShieldCheck, 
  Send, 
  Globe,
  Award
} from 'lucide-react';
import type { PageRoute } from '../types';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [newsletterSuccess, setNewsletterSuccess] = React.useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  return (
    <footer className="bg-[#060F24] text-neutral-300 pt-16 pb-12 border-t-4 border-[#E5A93C] relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <BrandLogo variant="watermark" className="absolute -left-10 -bottom-10 w-72 h-72" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Col 1 & 2: Organization Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <BrandLogo variant="footer" />
              <div>
                <h3 className="text-xl font-extrabold text-white font-['Outfit'] tracking-wide">
                  NADE Eswatini
                </h3>
                <p className="text-xs text-[#E5A93C] font-semibold">
                  National Association of the Deaf Eswatini
                </p>
                <p className="text-[10px] text-neutral-400">
                  Every Hand Has a Voice • Est. 1993
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-md">
              The national representative umbrella body for Deaf, Deafblind, and hard-of-hearing citizens across the Kingdom of Eswatini. Championing human rights, Eswatini Sign Language (ESL), bilingual-bimodal education, and economic self-reliance.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5A93C]" />
                FODSWA Affiliate
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-200">
                <Globe className="w-3.5 h-3.5 text-[#047857]" />
                WFD Ordinary Member
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-neutral-200">
                <Award className="w-3.5 h-3.5 text-[#E5A93C]" />
                UNCRPD Working Partner
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2 flex items-center gap-2">
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#E5A93C] transition-colors">
                  Home Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#E5A93C] transition-colors">
                  About & Governance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('work')} className="hover:text-[#E5A93C] transition-colors">
                  Strategic Programmes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sign-language')} className="hover:text-[#E5A93C] transition-colors flex items-center gap-1.5 text-[#E5A93C] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                  ESL Visual Dictionary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hub')} className="hover:text-[#E5A93C] transition-colors">
                  Accessible Video Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('advocacy')} className="hover:text-[#E5A93C] transition-colors">
                  Advocacy & Legal Rights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-[#E5A93C] transition-colors">
                  Policy & Educational Toolkits
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Field Offices */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Regional Desks
            </h4>
            <ul className="space-y-3 text-xs text-neutral-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Hhohho (National HQ)</strong>
                  <span>Mbabane Central, Kingdom of Eswatini</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Manzini Hub</strong>
                  <span>Manzini Civic Centre & Vocational Unit</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Lubombo (Siteki)</strong>
                  <span>Siteki School for the Deaf Complex</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Shiselweni (Nhlangano)</strong>
                  <span>Nhlangano Community Outreach Desk</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 5: Accessible Contact & Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Accessible Contacts
            </h4>
            <div className="space-y-3 text-xs mb-5">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-[#E5A93C] font-bold block uppercase">Primary Deaf Dispatch (SMS/WhatsApp)</span>
                <span className="text-white font-mono font-bold text-sm">+268 7600 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a href="mailto:info@nade-eswatini.org" className="hover:text-white truncate">
                  info@nade-eswatini.org
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <span className="text-xs font-semibold text-white block">Receive Deaf Community Bulletins</span>
              <div className="flex gap-1.5">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email or Mobile No."
                  aria-label="Email or Mobile Number for bulletins"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#E5A93C]"
                  required
                />
                <button
                  type="submit"
                  aria-label="Subscribe to bulletin"
                  className="p-2 bg-[#E5A93C] hover:bg-[#F3C465] text-[#0B1B3D] rounded-lg transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {newsletterSuccess && (
                <p className="text-[11px] text-[#E5A93C] font-semibold animate-fadeIn">
                  ✓ Siyabonga! You are registered for updates.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Accessibility Statement */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} National Association of the Deaf Eswatini (NADE). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#E5A93C] font-medium flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 fill-[#E5A93C]" />
              <span>for the Deaf community of Eswatini</span>
            </span>
            <button 
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors"
            >
              Feedback & Grievance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
