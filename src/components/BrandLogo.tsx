import React from 'react';

export type BrandLogoVariant = 
  | 'nav'           // 48px illuminated rounded badge with gold gradient border
  | 'hero-crest'    // Large majestic crest with radial gold backlight, concentric rings & badge
  | 'seal'          // Circular official gold-embossed seal / stamp
  | 'card-badge'    // Compact crisp emblem for ID cards, forms & verification tags
  | 'footer'        // Warm reflective 56px royal crest anchor
  | 'watermark'     // Translucent background watermark
  | 'minimal';      // Raw clean logo image

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  withGlow?: boolean;
  withText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'nav',
  className = '',
  withGlow = true,
  withText = false,
}) => {
  const logoSrc = "/nade-logo.png";
  const logoAlt = "National Association of the Deaf Eswatini (NADE) Official Logo";

  // 1. HERO CREST VARIANT (Majestic showcase for Hero & About sections)
  if (variant === 'hero-crest') {
    return (
      <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
        {/* Ambient radial gold glow behind crest */}
        {withGlow && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#E5A93C]/30 via-[#C2410C]/20 to-[#047857]/20 rounded-full blur-2xl -z-10 animate-pulse pointer-events-none scale-125" />
        )}

        {/* Outer concentric decorative ring */}
        <div className="relative p-3 sm:p-4 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#162C5B]/90 via-[#0B1B3D] to-[#060F24] border-2 border-[#E5A93C]/60 shadow-[0_20px_50px_rgba(11,27,61,0.5),0_0_30px_rgba(229,169,60,0.25)] backdrop-blur-xl group hover:border-[#E5A93C] transition-all duration-300">
          {/* Inner gold frame with subtle pattern */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-2xl sm:rounded-[2rem] bg-white/10 p-2 sm:p-3 border border-[#E5A93C]/40 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white/15 to-transparent">
            {/* Soft inner light beam */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none" />
            
            <img 
              src={logoSrc} 
              alt={logoAlt} 
              className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-300" 
            />
          </div>

          {/* Official Apex Ribbon Badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-[#C2851D] via-[#E5A93C] to-[#C2851D] text-[#0B1B3D] text-[10px] sm:text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full shadow-lg border border-white/40 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B1B3D]" />
            <span>Official National Emblem</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B1B3D]" />
          </div>
        </div>

        {withText && (
          <div className="mt-6 text-center">
            <h3 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] tracking-tight">
              NADE Eswatini
            </h3>
            <p className="text-xs sm:text-sm text-[#E5A93C] font-semibold tracking-wide">
              Every Hand Has a Voice • Est. 1993
            </p>
          </div>
        )}
      </div>
    );
  }

  // 2. SEAL VARIANT (Circular stamped royal seal for certificates, petitions & charter)
  if (variant === 'seal') {
    return (
      <div className={`relative inline-flex items-center justify-center select-none group ${className}`}>
        {/* Outer gold radiating ring */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#C2851D] via-[#E5A93C] to-[#F3C465] p-1 shadow-[0_10px_25px_rgba(229,169,60,0.35)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <div className="w-full h-full rounded-full bg-[#0B1B3D] border-2 border-dashed border-[#E5A93C] p-2 flex items-center justify-center overflow-hidden relative">
            <img 
              src={logoSrc} 
              alt={logoAlt} 
              className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition-transform" 
            />
          </div>
        </div>
      </div>
    );
  }

  // 3. CARD BADGE VARIANT (Compact crisp emblem for membership cards, modals & forms)
  if (variant === 'card-badge') {
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-b from-[#162C5B] to-[#0B1B3D] p-1.5 border border-[#E5A93C]/60 shadow-md flex items-center justify-center flex-shrink-0">
          <img 
            src={logoSrc} 
            alt={logoAlt} 
            className="w-full h-full object-contain filter drop-shadow" 
          />
        </div>
      </div>
    );
  }

  // 4. FOOTER VARIANT
  if (variant === 'footer') {
    return (
      <div className={`relative inline-flex items-center justify-center select-none group ${className}`}>
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-b from-white/15 to-white/5 p-1.5 backdrop-blur-md border border-[#E5A93C]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#E5A93C] group-hover:scale-105 transition-all flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img 
            src={logoSrc} 
            alt={logoAlt} 
            className="w-full h-full object-contain filter drop-shadow" 
          />
        </div>
      </div>
    );
  }

  // 5. WATERMARK VARIANT
  if (variant === 'watermark') {
    return (
      <div className={`pointer-events-none select-none opacity-5 sm:opacity-10 overflow-hidden ${className}`}>
        <img 
          src={logoSrc} 
          alt="" 
          aria-hidden="true" 
          className="w-full h-full object-contain grayscale contrast-200" 
        />
      </div>
    );
  }

  // 6. MINIMAL VARIANT
  if (variant === 'minimal') {
    return (
      <img 
        src={logoSrc} 
        alt={logoAlt} 
        className={`object-contain filter drop-shadow ${className}`} 
      />
    );
  }

  // DEFAULT: NAVBAR VARIANT (Interactive, illuminated, prestigious)
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* Outer illuminated container */}
      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-b from-white/15 via-[#162C5B]/80 to-[#0B1B3D] p-1 backdrop-blur-md border border-[#E5A93C]/50 shadow-[0_4px_20px_rgba(229,169,60,0.25)] group-hover:border-[#E5A93C] group-hover:shadow-[0_4px_25px_rgba(229,169,60,0.45)] group-hover:scale-105 transition-all duration-300 overflow-hidden flex items-center justify-center flex-shrink-0">
        <img 
          src={logoSrc} 
          alt={logoAlt} 
          className="w-full h-full object-contain filter drop-shadow" 
        />
      </div>
    </div>
  );
};
