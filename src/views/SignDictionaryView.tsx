import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  Hand, 
  Sparkles, 
  X, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight,
  Send
} from 'lucide-react';
import { ESL_DICTIONARY } from '../data/dictionary';
import type { ESLSignItem } from '../types';
import { BrandLogo } from '../components/BrandLogo';

export const SignDictionaryView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSign, setSelectedSign] = useState<ESLSignItem | null>(null);
  
  // Practice / Quiz mode state
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Suggest a Sign modal
  const [showSuggestModal, setShowSuggestModal] = useState(false);
  const [suggestSubmitted, setSuggestSubmitted] = useState(false);

  const categories = [
    'All',
    'Greetings',
    'Family',
    'Education',
    'Health',
    'Emergency',
    'Workplace',
    'Government Services',
    'Everyday'
  ];

  // Filter dictionary items
  const filteredSigns = ESL_DICTIONARY.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      item.word.toLowerCase().includes(q) ||
      (item.siswatiWord && item.siswatiWord.toLowerCase().includes(q)) ||
      item.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  // Quiz logic
  const currentQuizItem = ESL_DICTIONARY[quizIndex % ESL_DICTIONARY.length];
  
  const otherOptions = useMemo(() => {
    return ESL_DICTIONARY
      .filter((s) => s.id !== currentQuizItem.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((s) => s.word);
  }, [currentQuizItem.id]);

  const quizOptions = useMemo(() => {
    return [currentQuizItem.word, ...otherOptions].sort(() => 0.5 - Math.random());
  }, [currentQuizItem.word, otherOptions]);

  const handleQuizAnswer = (option: string) => {
    if (quizAnswered) return;
    setSelectedOption(option);
    setQuizAnswered(true);
    if (option === currentQuizItem.word) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    setQuizAnswered(false);
    setSelectedOption(null);
    setQuizIndex((prev) => prev + 1);
  };

  const handleResetQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizAnswered(false);
    setSelectedOption(null);
  };

  return (
    <div className="space-y-12 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
              <BookOpen className="w-3.5 h-3.5" />
              Linguistic Repository
            </div>
            <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
              Eswatini Sign Language (ESL) Visual Dictionary
            </h1>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
              Search authentic Swazi signs with siSwati translations, handshape geometry, movement trajectories, and cultural facial markers documented by NADE linguists.
            </p>

            {/* Toggle between Dictionary & Quiz Mode */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => setIsQuizMode(false)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  !isQuizMode
                    ? 'bg-[#E5A93C] text-[#0B1B3D] shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Browse Dictionary ({ESL_DICTIONARY.length} Signs)
              </button>
              <button
                onClick={() => {
                  setIsQuizMode(true);
                  handleResetQuiz();
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  isQuizMode
                    ? 'bg-[#E5A93C] text-[#0B1B3D] shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Practice / Flashcards Quiz
              </button>
              <button
                onClick={() => setShowSuggestModal(true)}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/15 text-neutral-200 border border-white/20 rounded-xl text-xs font-semibold transition-all"
              >
                + Suggest a Sign
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <BrandLogo variant="hero-crest" withGlow={true} />
          </div>
        </div>
      </section>

      {/* 2. QUIZ MODE */}
      {isQuizMode ? (
        <section className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#E5A93C] space-y-6">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#0B1B3D] text-[#E5A93C] rounded-full font-mono text-xs font-bold">
                  Question #{quizIndex + 1}
                </span>
                <span className="text-xs text-[#475569]">
                  Category: <strong>{currentQuizItem.category}</strong>
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold text-[#047857]">
                  Score: {quizScore} Correct
                </span>
              </div>
            </div>

            {/* Flashcard Prompt */}
            <div className="bg-[#0B1B3D] text-white rounded-2xl p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#E5A93C] text-[#0B1B3D] flex items-center justify-center mx-auto shadow-md">
                <Hand className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-bold block">
                Which sign matches this description?
              </span>
              <p className="text-base sm:text-lg font-medium text-neutral-100 italic max-w-xl mx-auto">
                "{currentQuizItem.description}"
              </p>
              {currentQuizItem.facialExpressionNote && (
                <p className="text-xs text-[#E5A93C]/90 font-mono">
                  Facial Cue: {currentQuizItem.facialExpressionNote}
                </p>
              )}
            </div>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quizOptions.map((option, idx) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === currentQuizItem.word;
                let btnStyle = 'bg-[#F8F9FA] border-[#E2E8F0] text-[#0B1B3D] hover:bg-[#E2E8F0]';
                
                if (quizAnswered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500 text-white border-emerald-600 font-bold shadow-md';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-red-500 text-white border-red-600';
                  } else {
                    btnStyle = 'bg-neutral-100 text-neutral-400 border-neutral-200';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={quizAnswered}
                    onClick={() => handleQuizAnswer(option)}
                    className={`p-4 rounded-xl border-2 text-left font-bold text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {quizAnswered && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                  </button>
                );
              })}
            </div>

            {/* Answer feedback & Next button */}
            {quizAnswered && (
              <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#E2E8F0] flex items-center justify-between gap-4 animate-fadeIn">
                <div>
                  <span className="text-xs font-bold text-[#0B1B3D] block">
                    {selectedOption === currentQuizItem.word ? '🎉 Correct!' : '❌ Incorrect!'}
                  </span>
                  <span className="text-xs text-[#475569]">
                    siSwati: <strong>"{currentQuizItem.siswatiWord}"</strong>
                  </span>
                </div>
                <button
                  onClick={handleNextQuiz}
                  className="px-6 py-2.5 bg-[#0B1B3D] hover:bg-[#162C5B] text-[#E5A93C] rounded-xl font-extrabold text-xs transition-all flex items-center gap-1.5"
                >
                  <span>Next Sign</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>
      ) : (
        /* 3. DICTIONARY BROWSER */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Search & Filter Bar */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-[#E2E8F0] space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by English word, siSwati translation, or hand movement..."
                aria-label="Search ESL Dictionary"
                className="w-full pl-12 pr-4 py-3 bg-[#F8F9FA] border border-neutral-300 rounded-2xl text-sm focus:outline-none focus:border-[#0B1B3D]"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0B1B3D] text-[#E5A93C] shadow-sm ring-1 ring-[#0B1B3D]'
                      : 'bg-[#F8F9FA] text-[#475569] hover:bg-[#E2E8F0] border border-[#E2E8F0]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredSigns.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedSign(item)}
                className="group bg-white rounded-3xl p-6 shadow-md border border-[#E2E8F0] hover:shadow-xl hover:border-[#E5A93C] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0B1B3D]/10 text-[#0B1B3D] px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#E5A93C]/20 text-[#0B1B3D] flex items-center justify-center">
                      <Hand className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0B1B3D] font-['Outfit'] group-hover:text-[#C2410C] transition-colors">
                    {item.word}
                  </h3>

                  {item.siswatiWord && (
                    <p className="text-xs font-bold text-[#E5A93C]">
                      siSwati: "{item.siswatiWord}"
                    </p>
                  )}

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#0B1B3D] group-hover:text-[#E5A93C]">
                  <span>View Sign Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filteredSigns.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-[#E2E8F0] space-y-3">
              <HelpCircle className="w-10 h-10 text-neutral-400 mx-auto" />
              <h4 className="text-lg font-bold text-[#0B1B3D]">No matching signs found</h4>
              <p className="text-xs text-[#475569] max-w-sm mx-auto">
                Try searching another term, clearing filters, or submit a request to add this sign to the official dictionary.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 bg-[#0B1B3D] text-[#E5A93C] rounded-xl text-xs font-bold"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </section>
      )}

      {/* 4. DETAILED SIGN MODAL */}
      {selectedSign && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-labelledby="sign-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border-2 border-[#E2E8F0] my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-6">
              <span className="px-3 py-1 bg-[#0B1B3D] text-[#E5A93C] rounded-full text-xs font-mono font-bold">
                {selectedSign.category}
              </span>
              <button
                onClick={() => setSelectedSign(null)}
                aria-label="Close sign details modal"
                className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-xl"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Big Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 id="sign-modal-title" className="text-3xl font-black text-[#0B1B3D] font-['Outfit']">
                    {selectedSign.word}
                  </h3>
                  {selectedSign.siswatiWord && (
                    <p className="text-base font-bold text-[#C2410C] mt-1">
                      siSwati Equivalent: "{selectedSign.siswatiWord}"
                    </p>
                  )}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-[#0B1B3D] text-[#E5A93C] flex items-center justify-center shrink-0">
                  <Hand className="w-7 h-7" />
                </div>
              </div>

              {/* Anatomy Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#E2E8F0] space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D] block">
                    Handshape Geometry:
                  </span>
                  <p className="text-xs text-[#334155]">
                    {selectedSign.handshapeDescription}
                  </p>
                </div>

                <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-[#E2E8F0] space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D] block">
                    Movement & Trajectory:
                  </span>
                  <p className="text-xs text-[#334155]">
                    {selectedSign.movementDescription}
                  </p>
                </div>
              </div>

              {/* Facial & Usage Notes */}
              {selectedSign.facialExpressionNote && (
                <div className="p-4 bg-[#0B1B3D]/5 rounded-2xl border border-[#0B1B3D]/10 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D] block">
                    Non-Manual Marker / Facial Cue:
                  </span>
                  <p className="text-xs text-[#334155]">
                    {selectedSign.facialExpressionNote}
                  </p>
                </div>
              )}

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">
                  Cultural & Everyday Usage Context:
                </span>
                <p className="text-xs text-emerald-800">
                  {selectedSign.usageContext}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2E8F0] flex justify-end">
                <button
                  onClick={() => setSelectedSign(null)}
                  className="px-6 py-2.5 bg-[#0B1B3D] hover:bg-[#162C5B] text-white rounded-xl font-bold text-xs"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. SUGGEST A SIGN MODAL */}
      {showSuggestModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-labelledby="suggest-modal-title"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E2E8F0]">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-4">
              <h3 id="suggest-modal-title" className="text-xl font-bold text-[#0B1B3D] font-['Outfit']">
                Suggest a Sign / Community Dialect
              </h3>
              <button
                onClick={() => {
                  setShowSuggestModal(false);
                  setSuggestSubmitted(false);
                }}
                className="p-1 rounded-lg hover:bg-neutral-100 text-neutral-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {suggestSubmitted ? (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-[#0B1B3D]">Sign Submission Received!</h4>
                <p className="text-xs text-[#475569]">
                  Siyabonga! Our ESL Research & Linguistics Panel will review the sign and schedule regional documentation.
                </p>
                <button
                  onClick={() => {
                    setShowSuggestModal(false);
                    setSuggestSubmitted(false);
                  }}
                  className="px-6 py-2 bg-[#0B1B3D] text-[#E5A93C] rounded-xl text-xs font-bold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSuggestSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div>
                  <label className="block font-bold text-[#0B1B3D] mb-1">English Word / Concept *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Traditional Swazi Wedding"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#0B1B3D] mb-1">siSwati Word (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Umtsimba"
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#0B1B3D] mb-1">Region / Location Observed *</label>
                  <select className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]">
                    <option>Hhohho (Mbabane / Piggs Peak)</option>
                    <option>Manzini (Manzini / Malkerns)</option>
                    <option>Lubombo (Siteki / Big Bend)</option>
                    <option>Shiselweni (Nhlangano)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-[#0B1B3D] mb-1">Handshape & Movement Description *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe how the hands move, position on chest/face..."
                    className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-xl focus:outline-none focus:border-[#0B1B3D]"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowSuggestModal(false)}
                    className="px-4 py-2 border border-neutral-300 rounded-xl text-neutral-600 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#0B1B3D] hover:bg-[#162C5B] text-[#E5A93C] rounded-xl font-bold flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Sign
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
