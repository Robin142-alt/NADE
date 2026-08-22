import React, { useState } from 'react';
import { MapPin, Building, GraduationCap, CheckCircle } from 'lucide-react';
import { ESWATINI_REGIONS } from '../data/regions';

export const InteractiveEswatiniMap: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('lubombo');

  const selectedRegion = ESWATINI_REGIONS.find((r) => r.id === selectedRegionId) || ESWATINI_REGIONS[0];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#E2E8F0] overflow-hidden">
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#E2E8F0]">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B1B3D]/10 text-[#0B1B3D] rounded-full text-xs font-bold mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
            National Geographic Reach
          </div>
          <h3 className="text-2xl font-extrabold text-[#0B1B3D] font-['Outfit']">
            NADE in the 4 Regions of the Kingdom
          </h3>
          <p className="text-sm text-[#475569]">
            Explore our community branches, specialized deaf schools, and mobile healthcare corridors across Eswatini.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {ESWATINI_REGIONS.map((region) => {
            const isSelected = region.id === selectedRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setSelectedRegionId(region.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#0B1B3D] text-[#E5A93C] shadow-md ring-2 ring-[#0B1B3D]'
                    : 'bg-[#F8F9FA] text-[#475569] hover:bg-[#E2E8F0] border border-[#E2E8F0]'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#E5A93C]' : 'bg-neutral-400'}`} />
                {region.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Interactive Visual Map & Detailed Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: SVG Map Representation */}
        <div className="lg:col-span-6 bg-[#0B1B3D] rounded-2xl p-6 relative flex flex-col items-center justify-center min-h-[380px] shadow-inner overflow-hidden">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-10 hand-pattern-bg" />
          
          <div className="w-full max-w-sm relative z-10">
            {/* SVG Visual Map */}
            <svg
              viewBox="0 0 400 460"
              className="w-full h-auto drop-shadow-2xl"
              role="img"
              aria-label="Map of Eswatini showing Hhohho, Manzini, Lubombo, and Shiselweni regions"
            >
              {/* Regional Polygons with interactive hover */}
              {/* 1. Hhohho (North / North-West) */}
              <path
                d="M 120 40 L 220 30 L 250 110 L 210 170 L 140 180 L 80 120 Z"
                fill={selectedRegionId === 'hhohho' ? '#E5A93C' : '#162C5B'}
                stroke="#FFFFFF"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-300 hover:opacity-90"
                onClick={() => setSelectedRegionId('hhohho')}
              />
              <text x="145" y="110" fill={selectedRegionId === 'hhohho' ? '#0B1B3D' : '#FFFFFF'} fontSize="12" fontWeight="bold" fontFamily="Outfit">
                HHOHHO
              </text>
              <text x="145" y="124" fill={selectedRegionId === 'hhohho' ? '#0B1B3D' : '#94A3B8'} fontSize="9" fontWeight="bold">
                Mbabane HQ
              </text>

              {/* 2. Manzini (Central / West) */}
              <path
                d="M 80 120 L 140 180 L 210 170 L 230 270 L 140 310 L 80 230 Z"
                fill={selectedRegionId === 'manzini' ? '#E5A93C' : '#1F3A70'}
                stroke="#FFFFFF"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-300 hover:opacity-90"
                onClick={() => setSelectedRegionId('manzini')}
              />
              <text x="125" y="225" fill={selectedRegionId === 'manzini' ? '#0B1B3D' : '#FFFFFF'} fontSize="12" fontWeight="bold" fontFamily="Outfit">
                MANZINI
              </text>
              <text x="125" y="239" fill={selectedRegionId === 'manzini' ? '#0B1B3D' : '#94A3B8'} fontSize="9" fontWeight="bold">
                Vocational Hub
              </text>

              {/* 3. Lubombo (East - Siteki School for the Deaf) */}
              <path
                d="M 220 30 L 320 80 L 340 280 L 260 340 L 230 270 L 210 170 L 250 110 Z"
                fill={selectedRegionId === 'lubombo' ? '#E5A93C' : '#162C5B'}
                stroke="#FFFFFF"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-300 hover:opacity-90"
                onClick={() => setSelectedRegionId('lubombo')}
              />
              <text x="250" y="195" fill={selectedRegionId === 'lubombo' ? '#0B1B3D' : '#FFFFFF'} fontSize="12" fontWeight="bold" fontFamily="Outfit">
                LUBOMBO
              </text>
              <text x="250" y="209" fill={selectedRegionId === 'lubombo' ? '#0B1B3D' : '#94A3B8'} fontSize="9" fontWeight="bold">
                Siteki Deaf School
              </text>

              {/* 4. Shiselweni (South - Nhlangano) */}
              <path
                d="M 80 230 L 140 310 L 230 270 L 260 340 L 210 420 L 110 410 Z"
                fill={selectedRegionId === 'shiselweni' ? '#E5A93C' : '#1F3A70'}
                stroke="#FFFFFF"
                strokeWidth="2.5"
                className="cursor-pointer transition-all duration-300 hover:opacity-90"
                onClick={() => setSelectedRegionId('shiselweni')}
              />
              <text x="140" y="345" fill={selectedRegionId === 'shiselweni' ? '#0B1B3D' : '#FFFFFF'} fontSize="12" fontWeight="bold" fontFamily="Outfit">
                SHISELWENI
              </text>
              <text x="140" y="359" fill={selectedRegionId === 'shiselweni' ? '#0B1B3D' : '#94A3B8'} fontSize="9" fontWeight="bold">
                Nhlangano Desk
              </text>

              {/* Pin Icons on Key Centers */}
              {/* Mbabane Pin */}
              <circle cx="150" cy="140" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
              {/* Manzini Pin */}
              <circle cx="160" cy="205" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
              {/* Siteki Pin */}
              <circle cx="285" cy="170" r="6" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" className="animate-pulse" />
              {/* Nhlangano Pin */}
              <circle cx="170" cy="375" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </div>

          <div className="mt-4 flex items-center justify-between w-full text-[11px] text-neutral-300 px-2">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]" />
              Selected Region
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              Siteki School for the Deaf
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              Regional Offices
            </span>
          </div>
        </div>

        {/* Right: Selected Region Detail Panel */}
        <div className="lg:col-span-6 space-y-5">
          <div className="bg-[#F8F9FA] p-5 rounded-2xl border border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C2410C]">
                Regional Hub Spotlight
              </span>
              <span className="text-xs font-mono font-bold bg-[#0B1B3D] text-white px-2.5 py-1 rounded-full">
                Capital: {selectedRegion.capital}
              </span>
            </div>
            <h4 className="text-2xl font-black text-[#0B1B3D] font-['Outfit']">
              {selectedRegion.name}
            </h4>
            <p className="text-sm text-[#475569] mt-2 font-medium">
              {selectedRegion.focus}
            </p>
          </div>

          {/* Key Centres */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D] mb-3 flex items-center gap-1.5">
              <Building className="w-4 h-4 text-[#E5A93C]" />
              Key Focal Points & Institutions
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {selectedRegion.keyCentres.map((centre, idx) => (
                <div key={idx} className="p-3 bg-white border border-[#E2E8F0] rounded-xl text-xs text-[#0B1B3D] font-medium flex items-center gap-2 shadow-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#047857] shrink-0" />
                  <span>{centre}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Initiatives */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D] mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#C2410C]" />
              Priority Programmes Underway
            </h5>
            <ul className="space-y-2">
              {selectedRegion.initiatives.map((init, idx) => (
                <li key={idx} className="text-xs text-[#334155] flex items-start gap-2 bg-[#F8F9FA] p-2.5 rounded-xl border border-neutral-100">
                  <CheckCircle className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                  <span>{init}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
