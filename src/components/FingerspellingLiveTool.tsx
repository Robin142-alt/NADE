import React, { useState, useEffect } from 'react';
import { Sparkles, Play, Pause, RotateCcw, Info, Hand } from 'lucide-react';
import { FINGERSPELLING_ALPHABET } from '../data/fingerspelling';
import type { FingerspellLetter } from '../data/fingerspelling';

export const FingerspellingLiveTool: React.FC = () => {
  const [inputText, setInputText] = useState('SAWUBONA');
  const [selectedLetterIndex, setSelectedLetterIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const cleanChars = inputText.toUpperCase().replace(/[^A-Z]/g, '').split('');
  const activeChar = cleanChars[selectedLetterIndex] || cleanChars[0] || 'A';
  const activeLetterData: FingerspellLetter = FINGERSPELLING_ALPHABET[activeChar] || FINGERSPELLING_ALPHABET['A'];

  // Auto playback of spelling sequence
  useEffect(() => {
    let timer: any;
    if (isPlaying && cleanChars.length > 0) {
      timer = setInterval(() => {
        setSelectedLetterIndex((prev) => {
          if (prev >= cleanChars.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, cleanChars.length]);

  const presets = ['SAWUBONA', 'NADE', 'ESWATINI', 'LITSEMBA', 'SIYABONGA', 'FRIEND'];

  return (
    <div className="bg-[#0B1B3D] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#E5A93C]/40 relative overflow-hidden">
      {/* Background linework */}
      <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Learning Tool
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white">
            Live ESL Fingerspelling Studio
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300">
            Type any name or phrase to see real-time Eswatini manual alphabet handshapes.
          </p>
        </div>

        {/* Preset Quick Chips */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-[#E5A93C] font-bold mr-1">Presets:</span>
          {presets.map((preset) => (
            <button
              key={preset}
              onClick={() => {
                setInputText(preset);
                setSelectedLetterIndex(0);
                setIsPlaying(false);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                inputText === preset
                  ? 'bg-[#E5A93C] text-[#0B1B3D]'
                  : 'bg-white/10 hover:bg-white/20 text-neutral-200'
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* Input & Control Bar */}
      <div className="relative z-10 my-6 flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative w-full">
          <input
            type="text"
            value={inputText}
            maxLength={18}
            onChange={(e) => {
              setInputText(e.target.value);
              setSelectedLetterIndex(0);
              setIsPlaying(false);
            }}
            placeholder="Type your name or a word..."
            aria-label="Enter word to fingerspell"
            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-2xl text-white font-mono uppercase tracking-widest text-base sm:text-lg focus:outline-none focus:border-[#E5A93C] placeholder-neutral-400"
          />
          <span className="absolute right-3.5 top-3.5 text-xs text-neutral-400 font-mono">
            {cleanChars.length}/18
          </span>
        </div>

        {/* Play / Reset Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex-1 sm:flex-none px-4 py-3 bg-[#E5A93C] hover:bg-[#F3C465] text-[#0B1B3D] rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Spell Word</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setSelectedLetterIndex(0);
              setIsPlaying(false);
            }}
            aria-label="Reset sequence to first letter"
            className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Letter Badges Strip */}
      <div className="relative z-10 flex flex-wrap gap-2 mb-6">
        {cleanChars.map((letter, idx) => {
          const isSelected = idx === selectedLetterIndex;
          return (
            <button
              key={`${letter}-${idx}`}
              onClick={() => {
                setSelectedLetterIndex(idx);
                setIsPlaying(false);
              }}
              className={`w-11 h-13 rounded-xl font-mono font-extrabold text-base sm:text-lg flex flex-col items-center justify-center transition-all ${
                isSelected
                  ? 'bg-[#E5A93C] text-[#0B1B3D] scale-110 shadow-xl ring-2 ring-white ring-offset-2 ring-offset-[#0B1B3D]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span>{letter}</span>
              <span className="text-[9px] opacity-70 font-normal">#{idx + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Spotlight Card: Active Letter Handshape Breakdown */}
      <div className="relative z-10 bg-white/5 border border-white/15 rounded-3xl p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Big Visual Hand Glyph */}
        <div className="md:col-span-4 flex flex-col items-center justify-center bg-[#060F24] p-6 rounded-2xl border border-white/10 shadow-inner">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#E5A93C] to-[#C2410C] p-1 flex items-center justify-center shadow-lg mb-3">
            <div className="w-full h-full rounded-full bg-[#0B1B3D] flex items-center justify-center">
              <span className="text-4xl font-black text-[#E5A93C] font-mono">
                {activeChar}
              </span>
            </div>
          </div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#E5A93C]">
            Letter {activeChar} in ESL
          </span>
        </div>

        {/* Linguistic & Instruction Details */}
        <div className="md:col-span-8 space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#E5A93C] font-bold uppercase tracking-wider">
            <Hand className="w-4 h-4" />
            <span>Handshape Anatomy</span>
          </div>

          <h4 className="text-xl font-bold text-white font-['Outfit']">
            {activeLetterData.handshape}
          </h4>

          <p className="text-sm text-neutral-300 leading-relaxed">
            {activeLetterData.description}
          </p>

          <div className="p-3 bg-black/30 rounded-xl border border-white/10 flex items-start gap-2 text-xs text-neutral-300">
            <Info className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block font-semibold">Signer Tip:</strong>
              <span>{activeLetterData.tips}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
