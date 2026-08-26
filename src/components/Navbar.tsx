import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Home,
  BookOpen, 
  Video, 
  HeartHandshake, 
  PhoneCall, 
  ShieldCheck, 
  Scale, 
  Newspaper, 
  Users, 
  CalendarCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import type { PageRoute } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenInterpreterModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenInterpreterModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { route: PageRoute; label: string; icon: React.ReactNode; isNewOrSpecial?: boolean }[] = [
    { route: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { route: 'about', label: 'About NADE', icon: <ShieldCheck className="w-4 h-4" /> },
    { route: 'work', label: 'Our Work', icon: <HeartHandshake className="w-4 h-4" /> },
    { 
      route: 'sign-language', 
      label: 'ESL Dictionary', 
      icon: <BookOpen className="w-4 h-4" />,
      isNewOrSpecial: true 
    },
    { route: 'hub', label: 'Video Hub', icon: <Video className="w-4 h-4" /> },
    { route: 'advocacy', label: 'Advocacy & Rights', icon: <Scale className="w-4 h-4" /> },
    { route: 'stories', label: 'Voices & Stories', icon: <Users className="w-4 h-4" /> },
    { route: 'news', label: 'News & Events', icon: <Newspaper className="w-4 h-4" /> },
    { route: 'contact', label: 'Contact', icon: <PhoneCall className="w-4 h-4" /> },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0B1B3D]/95 backdrop-blur-md border-b-2 border-[#E5A93C]/40 text-white shadow-xl">
      {/* Top Urgent Alert / Announcement Bar */}
      <div className="bg-gradient-to-r from-[#060F24] via-[#0B1B3D] to-[#060F24] text-xs py-1.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-neutral-200">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#C2410C] text-white animate-pulse">
              ANNOUNCEMENT
            </span>
            <span className="truncate">
              Advancing Constitutional & Legal Recognition of Eswatini Sign Language (ESL)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button 
              onClick={() => handleNavClick('advocacy')}
              className="hover:text-[#E5A93C] transition-colors underline"
            >
              Sign the Petition
            </button>
            <span className="text-neutral-500">•</span>
            <button 
              onClick={() => handleNavClick('sign-language')}
              className="flex items-center gap-1 text-[#E5A93C] hover:underline font-bold"
            >
              <Sparkles className="w-3 h-3" />
              Practice ESL Signs
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 cursor-pointer group py-1"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
            aria-label="NADE Home Page"
          >
            {/* Official NADE Logo Emblem with BrandLogo */}
            <BrandLogo variant="nav" />

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-2xl tracking-wider text-white font-['Outfit'] group-hover:text-[#E5A93C] transition-colors">
                  NADE
                </span>
                <span className="text-[10px] uppercase font-black tracking-widest bg-gradient-to-r from-[#C2851D] via-[#E5A93C] to-[#C2851D] text-[#0B1B3D] px-2 py-0.5 rounded font-['Outfit'] shadow-sm">
                  Eswatini
                </span>
              </div>
              <p className="text-[11px] text-neutral-300 font-medium tracking-tight hidden sm:block">
                National Association of the Deaf Eswatini
              </p>
              <p className="text-[10px] text-[#E5A93C] font-semibold tracking-wide flex items-center gap-1">
                <span>Every Hand Has a Voice</span>
                <span className="text-[8px] opacity-70">• Est. 1993</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 7).map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all flex items-center gap-1.5 relative ${
                    isActive
                      ? 'text-[#E5A93C] bg-white/10 shadow-inner'
                      : 'text-neutral-200 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {item.isNewOrSpecial && (
                    <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E5A93C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenInterpreterModal}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/20 transition-all active:scale-95"
              aria-label="Request a Certified Sign Language Interpreter"
            >
              <CalendarCheck className="w-4 h-4 text-[#E5A93C]" />
              <span>Book Interpreter</span>
            </button>

            <button
              onClick={() => handleNavClick('get-involved')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E5A93C] hover:bg-[#F3C465] text-[#0B1B3D] text-xs font-extrabold shadow-lg shadow-[#E5A93C]/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Join / Support</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060F24] border-t border-[#E5A93C]/30 px-4 pt-4 pb-8 space-y-4 shadow-2xl animate-fadeIn">
          {/* Mobile Crest Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] border border-[#E5A93C]/40 flex items-center gap-3">
            <BrandLogo variant="card-badge" />
            <div>
              <h4 className="text-sm font-extrabold text-white font-['Outfit']">NADE Eswatini</h4>
              <p className="text-[11px] text-[#E5A93C] font-medium">National Apex Body for the Deaf</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#E5A93C] text-[#0B1B3D] font-bold'
                      : 'text-neutral-200 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.isNewOrSpecial && (
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 bg-[#0B1B3D] text-[#E5A93C] rounded-full">
                      Interactive
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-neutral-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterpreterModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-bold flex items-center justify-center gap-2 border border-white/20"
            >
              <CalendarCheck className="w-4 h-4 text-[#E5A93C]" />
              Book Sign Language Interpreter
            </button>

            <button
              onClick={() => handleNavClick('get-involved')}
              className="w-full py-3 px-4 rounded-xl bg-[#E5A93C] text-[#0B1B3D] text-sm font-extrabold flex items-center justify-center gap-2"
            >
              Join NADE / Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
