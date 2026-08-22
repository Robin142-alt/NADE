import React, { useState } from 'react';
import { 
  Eye, 
  Type, 
  X, 
  RotateCcw, 
  Keyboard, 
  SlidersHorizontal 
} from 'lucide-react';
import type { AccessibilitySettings } from '../types';

interface AccessibilityToolbarProps {
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
  onResetSettings: () => void;
}

export const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({
  settings,
  onUpdateSettings,
  onResetSettings,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showKeyboardModal, setShowKeyboardModal] = useState(false);

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Open Accessibility & Display Settings Menu"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#0B1B3D] hover:bg-[#162C5B] text-white rounded-full shadow-2xl border-2 border-[#E5A93C] transition-all transform hover:scale-105 focus:scale-105 active:scale-95"
          id="accessibility-menu-button"
        >
          <div className="w-8 h-8 rounded-full bg-[#E5A93C] text-[#0B1B3D] flex items-center justify-center font-bold">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
          <span className="font-semibold text-sm tracking-wide pr-1">Accessibility</span>
        </button>
      </div>

      {/* Accessibility Flyout Panel */}
      {isOpen && (
        <div 
          className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl border-l-2 border-[#E2E8F0] p-6 overflow-y-auto flex flex-col justify-between transition-transform duration-300"
          role="dialog"
          aria-label="Accessibility Options Panel"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0B1B3D] text-[#E5A93C] rounded-lg">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#0B1B3D]">Accessibility Center</h2>
                  <p className="text-xs text-[#475569]">Customize your reading & visual experience</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Accessibility Menu"
                className="p-2 text-[#475569] hover:text-[#0B1B3D] hover:bg-[#F1F5F9] rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions List */}
            <div className="space-y-6">
              {/* Contrast Modes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2 flex items-center gap-2">
                  <Eye className="w-4 h-4 text-[#0B1B3D]" />
                  Display Contrast
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => onUpdateSettings({ contrast: 'default' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border-2 text-center transition-all ${
                      settings.contrast === 'default'
                        ? 'border-[#0B1B3D] bg-[#0B1B3D] text-white shadow-sm'
                        : 'border-[#E2E8F0] bg-white text-[#0B1B3D] hover:bg-[#F8F9FA]'
                    }`}
                  >
                    Default
                  </button>
                  <button
                    onClick={() => onUpdateSettings({ contrast: 'high-contrast-dark' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border-2 text-center transition-all ${
                      settings.contrast === 'high-contrast-dark'
                        ? 'border-[#E5A93C] bg-black text-white shadow-sm ring-2 ring-[#E5A93C]'
                        : 'border-black bg-black text-white hover:bg-neutral-900'
                    }`}
                  >
                    Dark (OLED)
                  </button>
                  <button
                    onClick={() => onUpdateSettings({ contrast: 'high-contrast-yellow' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border-2 text-center transition-all ${
                      settings.contrast === 'high-contrast-yellow'
                        ? 'border-yellow-400 bg-black text-yellow-400 shadow-sm ring-2 ring-yellow-400'
                        : 'border-yellow-500 bg-black text-yellow-300 hover:bg-neutral-900'
                    }`}
                  >
                    Yellow on Black
                  </button>
                </div>
              </div>

              {/* Text Sizing */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#475569] mb-2 flex items-center gap-2">
                  <Type className="w-4 h-4 text-[#0B1B3D]" />
                  Text Size
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['normal', 'large', 'xlarge'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => onUpdateSettings({ textSize: size })}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border-2 text-center transition-all ${
                        settings.textSize === size
                          ? 'border-[#0B1B3D] bg-[#0B1B3D] text-white'
                          : 'border-[#E2E8F0] bg-white text-[#0B1B3D] hover:bg-[#F8F9FA]'
                      }`}
                    >
                      {size === 'normal' && 'Normal (100%)'}
                      {size === 'large' && 'Large (115%)'}
                      {size === 'xlarge' && 'X-Large (130%)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-3 pt-2">
                {/* Dyslexia Font */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
                  <div>
                    <span className="text-sm font-bold text-[#0B1B3D] block">Dyslexia-Friendly Font</span>
                    <span className="text-xs text-[#475569]">Switches font to high-legibility Lexend with expanded kerning</span>
                  </div>
                  <button
                    onClick={() => onUpdateSettings({ dyslexiaFont: !settings.dyslexiaFont })}
                    className={`w-12 h-7 rounded-full transition-colors relative flex items-center px-1 ${
                      settings.dyslexiaFont ? 'bg-[#0B1B3D]' : 'bg-[#CBD5E1]'
                    }`}
                    aria-pressed={settings.dyslexiaFont}
                    aria-label="Toggle Dyslexia-Friendly Font"
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        settings.dyslexiaFont ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
                  <div>
                    <span className="text-sm font-bold text-[#0B1B3D] block">Reduced Motion</span>
                    <span className="text-xs text-[#475569]">Disables smooth transitions and ticker animations</span>
                  </div>
                  <button
                    onClick={() => onUpdateSettings({ reducedMotion: !settings.reducedMotion })}
                    className={`w-12 h-7 rounded-full transition-colors relative flex items-center px-1 ${
                      settings.reducedMotion ? 'bg-[#0B1B3D]' : 'bg-[#CBD5E1]'
                    }`}
                    aria-pressed={settings.reducedMotion}
                    aria-label="Toggle Reduced Motion"
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        settings.reducedMotion ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Highlight Links */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0]">
                  <div>
                    <span className="text-sm font-bold text-[#0B1B3D] block">Highlight Clickable Links</span>
                    <span className="text-xs text-[#475569]">Underlines and adds distinct border rings to all links</span>
                  </div>
                  <button
                    onClick={() => onUpdateSettings({ highlightLinks: !settings.highlightLinks })}
                    className={`w-12 h-7 rounded-full transition-colors relative flex items-center px-1 ${
                      settings.highlightLinks ? 'bg-[#0B1B3D]' : 'bg-[#CBD5E1]'
                    }`}
                    aria-pressed={settings.highlightLinks}
                    aria-label="Toggle Highlight Links"
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        settings.highlightLinks ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Keyboard Shortcuts Button */}
              <button
                onClick={() => setShowKeyboardModal(true)}
                className="w-full flex items-center justify-between p-3 rounded-xl border border-[#0B1B3D]/20 text-[#0B1B3D] hover:bg-[#0B1B3D]/5 transition-colors font-medium text-sm"
              >
                <div className="flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-[#0B1B3D]" />
                  <span>Keyboard Navigation Shortcuts</span>
                </div>
                <span className="text-xs bg-[#0B1B3D]/10 px-2 py-0.5 rounded font-mono font-bold">Guide</span>
              </button>
            </div>
          </div>

          {/* Footer Reset & Apply */}
          <div className="pt-6 border-t border-[#E2E8F0] space-y-2">
            <button
              onClick={onResetSettings}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#CBD5E1] text-[#475569] hover:text-[#0B1B3D] hover:bg-[#F8F9FA] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset to Standard Defaults
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-[#0B1B3D] hover:bg-[#162C5B] text-white text-sm font-bold shadow-md transition-colors"
            >
              Done / Close Panel
            </button>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Modal */}
      {showKeyboardModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-label="Keyboard Shortcuts Navigation Guide"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#E2E8F0]">
            <div className="flex items-center justify-between pb-4 border-b border-[#E2E8F0] mb-4">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-[#0B1B3D]" />
                <h3 className="text-lg font-bold text-[#0B1B3D]">Keyboard Navigation Guide</h3>
              </div>
              <button
                onClick={() => setShowKeyboardModal(false)}
                className="p-1 rounded-lg hover:bg-neutral-100 text-neutral-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#475569] mb-4">
              NADE is committed to full WCAG 2.2 AA compliance. You can navigate throughout the entire website using your keyboard alone.
            </p>

            <div className="space-y-2.5 mb-6 text-sm">
              <div className="flex items-center justify-between p-2.5 bg-[#F8F9FA] rounded-lg">
                <span className="text-[#0F172A] font-medium">Skip to Main Content</span>
                <kbd className="px-2 py-1 bg-white border border-neutral-300 rounded shadow-xs font-mono text-xs font-bold">Tab</kbd>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-[#F8F9FA] rounded-lg">
                <span className="text-[#0F172A] font-medium">Focus Next / Previous Item</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-white border border-neutral-300 rounded shadow-xs font-mono text-xs font-bold">Tab</kbd>
                  <kbd className="px-2 py-1 bg-white border border-neutral-300 rounded shadow-xs font-mono text-xs font-bold">Shift + Tab</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-[#F8F9FA] rounded-lg">
                <span className="text-[#0F172A] font-medium">Activate Button or Link</span>
                <div className="flex gap-1">
                  <kbd className="px-2 py-1 bg-white border border-neutral-300 rounded shadow-xs font-mono text-xs font-bold">Enter</kbd>
                  <kbd className="px-2 py-1 bg-white border border-neutral-300 rounded shadow-xs font-mono text-xs font-bold">Space</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-[#F8F9FA] rounded-lg">
                <span className="text-[#0F172A] font-medium">Close Active Modals or Menus</span>
                <kbd className="px-2 py-1 bg-white border border-neutral-300 rounded shadow-xs font-mono text-xs font-bold">Escape</kbd>
              </div>
            </div>

            <button
              onClick={() => setShowKeyboardModal(false)}
              className="w-full py-2.5 bg-[#0B1B3D] text-white rounded-xl font-bold text-sm"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </>
  );
};
