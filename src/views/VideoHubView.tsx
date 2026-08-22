import React, { useState } from 'react';
import { 
  Video, 
  Play, 
  Pause, 
  FileText, 
  Download, 
  CheckCircle2, 
  Hand
} from 'lucide-react';
import { VIDEO_HUB_ITEMS } from '../data/hub';
import type { VideoHubItem } from '../types';

export const VideoHubView: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoHubItem>(VIDEO_HUB_ITEMS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  const [showPipSigner, setShowPipSigner] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [transcriptDownloaded, setTranscriptDownloaded] = useState(false);

  const categories = ['All', 'Government', 'Health', 'Education', 'Rights', 'Emergency'];

  const filteredVideos = VIDEO_HUB_ITEMS.filter(
    (v) => selectedCategory === 'All' || v.category === selectedCategory
  );

  // Parse transcript lines for clickable timestamps
  const transcriptLines = selectedVideo.transcript.split('\n').filter(l => l.trim().length > 0);

  const handleDownloadTranscript = () => {
    setTranscriptDownloaded(true);
    setTimeout(() => setTranscriptDownloaded(false), 4000);
  };

  return (
    <div className="space-y-12 py-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B3D] via-[#162C5B] to-[#0B1B3D] text-white rounded-3xl p-8 sm:p-14 shadow-2xl border-b-4 border-[#E5A93C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 hand-pattern-bg pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E5A93C] text-[#0B1B3D] rounded-full text-xs font-black">
            <Video className="w-3.5 h-3.5" />
            Accessible Media Archive
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-['Outfit'] tracking-tight">
            NADE Accessible Video Hub
          </h1>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
            All videos feature dual Eswatini Sign Language (ESL) presenters, verified closed captions, and clickable synchronized transcripts for universal access.
          </p>
        </div>
      </section>

      {/* 2. Main Player & Transcript Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Main: Video Player Interface */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-[#060F24] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#162C5B] relative">
              {/* Main Simulated Screen */}
              <div className="aspect-video bg-neutral-950 relative flex items-center justify-center p-6 select-none overflow-hidden">
                {/* Background visual motif */}
                <div className="absolute inset-0 opacity-20 bg-radial-gradient from-blue-900 via-neutral-900 to-black" />
                
                {/* Visual Speaker Silhouette Simulation */}
                <div className="relative z-10 text-center space-y-4 max-w-lg">
                  <div className="w-20 h-20 rounded-full bg-[#0B1B3D] border-2 border-[#E5A93C] flex items-center justify-center mx-auto text-[#E5A93C] shadow-2xl">
                    <Hand className="w-10 h-10 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5A93C] block font-bold">
                      Broadcasting in Eswatini Sign Language
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] mt-1">
                      {selectedVideo.title}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Presenter: {selectedVideo.presenter}
                  </p>
                </div>

                {/* Picture-in-Picture (PIP) Sign Language Presenter Box */}
                {showPipSigner && (
                  <div className="absolute bottom-16 right-4 w-36 sm:w-48 aspect-4/3 bg-[#0B1B3D] border-2 border-[#E5A93C] rounded-2xl shadow-2xl p-2.5 flex flex-col justify-between z-20 animate-fadeIn">
                    <div className="flex items-center justify-between text-[9px] text-[#E5A93C] font-bold">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        ESL SIGN PIP
                      </span>
                      <span className="text-[8px] bg-black/40 px-1 rounded">ON-AIR</span>
                    </div>
                    <div className="text-center py-2">
                      <Hand className="w-8 h-8 text-[#E5A93C] mx-auto animate-bounce" />
                      <span className="text-[9px] text-white font-medium block mt-1">
                        Live Visual Feed
                      </span>
                    </div>
                    <div className="text-[8px] text-neutral-400 text-center border-t border-white/10 pt-1">
                      Accredited Interpreter
                    </div>
                  </div>
                )}

                {/* Subtitle / Closed Caption Strip */}
                {showCaptions && (
                  <div className="absolute bottom-3 left-4 right-4 bg-black/85 backdrop-blur-xs text-white px-4 py-2 rounded-xl text-center text-xs sm:text-sm font-semibold border border-white/10 z-20">
                    <span className="text-[#E5A93C] mr-2 font-mono font-bold">[ESL Captions]:</span>
                    <span>{transcriptLines[0] ? transcriptLines[0].replace(/\[.*?\]\s*/, '') : selectedVideo.summary}</span>
                  </div>
                )}
              </div>

              {/* Player Controls Bar */}
              <div className="bg-[#0B1B3D] p-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pause broadcast' : 'Play broadcast'}
                    className="p-2.5 bg-[#E5A93C] text-[#0B1B3D] rounded-xl hover:bg-[#F3C465] transition-colors font-bold flex items-center gap-1.5"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>

                  <span className="font-mono text-neutral-300">
                    00:00 / {selectedVideo.duration}
                  </span>
                </div>

                {/* Accessibility Video Toggles */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowCaptions(!showCaptions)}
                    aria-pressed={showCaptions}
                    className={`px-3 py-1.5 rounded-lg font-mono font-bold border transition-colors ${
                      showCaptions
                        ? 'bg-[#E5A93C] text-[#0B1B3D] border-[#E5A93C]'
                        : 'bg-white/10 text-neutral-300 border-white/10'
                    }`}
                  >
                    CC {showCaptions ? 'ON' : 'OFF'}
                  </button>

                  <button
                    onClick={() => setShowPipSigner(!showPipSigner)}
                    aria-pressed={showPipSigner}
                    className={`px-3 py-1.5 rounded-lg font-mono font-bold border transition-colors ${
                      showPipSigner
                        ? 'bg-[#E5A93C] text-[#0B1B3D] border-[#E5A93C]'
                        : 'bg-white/10 text-neutral-300 border-white/10'
                    }`}
                  >
                    PIP Signer
                  </button>

                  {/* Speed Selector */}
                  <div className="flex items-center bg-white/10 rounded-lg p-0.5 text-[11px] font-mono">
                    {[0.75, 1, 1.25].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => setPlaybackSpeed(speed)}
                        className={`px-2 py-1 rounded ${
                          playbackSpeed === speed
                            ? 'bg-[#E5A93C] text-[#0B1B3D] font-bold'
                            : 'text-neutral-300 hover:text-white'
                        }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Meta & Summary */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#E2E8F0] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#E2E8F0]">
                <span className="px-3 py-1 bg-[#0B1B3D]/10 text-[#0B1B3D] rounded-full text-xs font-mono font-bold">
                  {selectedVideo.category} • Recorded in {selectedVideo.date}
                </span>
                <span className="text-xs text-[#475569]">
                  Duration: {selectedVideo.duration}
                </span>
              </div>

              <h2 className="text-2xl font-black text-[#0B1B3D] font-['Outfit']">
                {selectedVideo.title}
              </h2>

              <p className="text-sm text-[#334155] leading-relaxed">
                {selectedVideo.summary}
              </p>

              {/* Topics Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="text-xs text-neutral-500 font-bold mr-1">Topics:</span>
                {selectedVideo.topics.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 bg-[#F1F5F9] text-[#0B1B3D] rounded-md text-xs font-medium">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Clickable Synchronized Transcript & Video Playlist */}
          <div className="lg:col-span-4 space-y-6">
            {/* Interactive Transcript Box */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#E2E8F0] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#0B1B3D]" />
                  <h3 className="text-base font-bold text-[#0B1B3D] font-['Outfit']">
                    Interactive Transcript
                  </h3>
                </div>
                <button
                  onClick={handleDownloadTranscript}
                  aria-label="Download plain text transcript"
                  className="p-1.5 text-neutral-500 hover:text-[#0B1B3D] hover:bg-neutral-100 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>

              {transcriptDownloaded && (
                <div className="p-2 bg-emerald-50 text-emerald-800 text-xs rounded-lg flex items-center gap-1.5 animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Transcript saved to your device!</span>
                </div>
              )}

              <p className="text-[11px] text-[#475569]">
                Click any line below to jump directly to that point in the broadcast:
              </p>

              <div className="max-h-72 overflow-y-auto space-y-2 pr-1 text-xs text-[#334155]">
                {transcriptLines.map((line, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setIsPlaying(true);
                    }}
                    className="p-2 rounded-xl hover:bg-[#F8F9FA] cursor-pointer transition-colors border border-transparent hover:border-[#E2E8F0]"
                  >
                    <span className="font-mono font-bold text-[#0B1B3D] mr-1">
                      {line.match(/\[(.*?)\]/)?.[0] || `[0${idx}:00]`}
                    </span>
                    <span>{line.replace(/\[.*?\]/, '')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Archive List */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#E2E8F0] space-y-4">
              <h3 className="text-base font-bold text-[#0B1B3D] font-['Outfit'] pb-2 border-b border-[#E2E8F0]">
                All Video Hub Episodes
              </h3>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#0B1B3D] text-[#E5A93C]'
                        : 'bg-[#F8F9FA] text-[#475569] hover:bg-[#E2E8F0]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Video items */}
              <div className="space-y-2.5 pt-2">
                {filteredVideos.map((video) => {
                  const isCurrent = video.id === selectedVideo.id;
                  return (
                    <div
                      key={video.id}
                      onClick={() => {
                        setSelectedVideo(video);
                        setIsPlaying(false);
                      }}
                      className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                        isCurrent
                          ? 'bg-[#0B1B3D] text-white border-[#E5A93C] shadow-md'
                          : 'bg-[#F8F9FA] text-[#0B1B3D] border-[#E2E8F0] hover:bg-white hover:shadow-xs'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[10px] mb-1">
                        <span className={`font-mono font-bold ${isCurrent ? 'text-[#E5A93C]' : 'text-[#C2410C]'}`}>
                          {video.category}
                        </span>
                        <span className={isCurrent ? 'text-neutral-300' : 'text-neutral-500'}>
                          {video.duration}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold leading-snug">
                        {video.title}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
